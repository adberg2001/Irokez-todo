import React, {useState} from "react"
import style from "./task-row.module.sass"
import Autocomplete from '../../components/Autocomplete/Autocomplete'
import fetchRequest from '../../fetch/configuratedFetch'
import {useDispatch} from "react-redux"
import check from "../../assets/tasks_panel_icons/check.svg"
import Loader from "../Loader/Loader";
import {fetchTasks} from "../../store/actions"

function TaskRow(props){
  const {tasks} = props;
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();

  function handleToggleStatus (id, status) {
    setIsLoading(true)
    fetchRequest('PATCH', `todo/${id}/`, {status: !status})
      .then(()=>{
        dispatch(fetchTasks())
        setIsLoading(false)
      })
  }

  return (
    <div>
      {
        tasks.map(task => {

          return (
            <div className={style.taskRow} key={task.id}>
              {isLoading && <Loader/>}
              <Autocomplete task={task}/>
              <input type="checkbox" onChange={()=> handleToggleStatus(task.id, task.status)} id={task.id}/>
              <label htmlFor={task.id}>
                <span className={!task.status && style.notChecked}>
                  {task.status && <img className={style.checkIcon} src={check} alt=""/>}
                </span>
                <h2 className={style.taskRow_title}>
                  {task.title}
                </h2>
              </label>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskRow;
