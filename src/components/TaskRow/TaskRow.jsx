import React, {useState} from "react"
import style from "./task-row.module.sass"
import Autocomplete from '../../molecules/Autocomplete/Autocomplete'
import fetchRequest from '../../fetch/configuratedFetch'
import {useDispatch} from "react-redux"
import check from "../../assets/tasks_panel_icons/check.svg"
import pointer from "../../assets/tasks_panel_icons/chevron-up.svg"
import Loader from "../../molecules/Loader/Loader";
import {fetchTasks} from "../../store/actions"
import {motion} from 'framer-motion'
import SubTaskStepper from '../SubTaskStepper/SubTaskStepper'

function TaskRow(props) {
  const {tasks} = props;
  const [isLoading, setIsLoading] = useState({})
  const dispatch = useDispatch();

  const [openStepper, setOpenStepper] = useState({});

  function handleToggleStatus(id, status) {
    setIsLoading({
      ...isLoading, [id]:
        isLoading[id] !== undefined
          ? !isLoading[id]
          : true
    })
    fetchRequest('PATCH', `todo/${id}/`, {status: !status})
      .then(() => {
        dispatch(fetchTasks())
        setIsLoading({...isLoading, [id]: false})
      })
  }

  function handleToggleStepper(task) {
    setOpenStepper({
      ...openStepper,
      [task.id]:
        openStepper[task.id] !== undefined
          ? !openStepper[task.id]
          : true
    })
  }

  return (
    <div>
      {
        tasks.map(task => {

          return (
            <>
              <div className={style.taskRow} key={task.id}>
                {isLoading[task.id] !== undefined && isLoading[task.id] && <Loader/>}
                <Autocomplete task={task}/>
                <input type="checkbox" onChange={() => handleToggleStatus(task.id, task.status)} id={task.id}/>
                <div className={style.content}>
                  <label htmlFor={task.id}>
                  <span className={!task.status && style.notChecked}>
                    {task.status && <img className={style.checkIcon} src={check} alt=""/>}
                  </span>
                  </label>
                  <h2 className={style.taskRow_title}>
                    {task.title}
                  </h2>
                </div>
                <motion.img className={style.pointer} animate={{rotate: openStepper[task.id] ? 0 : -180}}
                            onClick={() => handleToggleStepper(task)} src={pointer} alt=""/>
              </div>
              {openStepper[task.id] && <SubTaskStepper task={task} openStepper={openStepper[task.id]}/>}
            </>
          )
        })
      }
    </div>
  )
}

export default TaskRow;
