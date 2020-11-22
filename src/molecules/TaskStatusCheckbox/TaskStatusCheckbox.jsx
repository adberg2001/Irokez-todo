import React, {useState} from "react";
import style from './task-status-checkobx.module.sass'
import {useDispatch} from "react-redux";
import fetchRequest from "../../fetch/configuratedFetch";
import {fetchTasks, fetchTasksDetail, isLoadingActions} from "../../store/actions";
import check from "../../assets/tasks_panel_icons/check.svg";
import Loader from "../Loader/Loader";

function TaskStatusCheckbox({task, setIsWindowOpen, setModalTask}) {
  const [isLoading, setIsLoading] = useState({})
  const dispatch = useDispatch();

  function handleToggleStatus(id, status) {
    dispatch(isLoadingActions(true))
    setIsLoading({
      ...isLoading, [id]:
        isLoading[id] !== undefined
          ? !isLoading[id]
          : true
    })
    fetchRequest('PATCH', `todo/${id}/`, {status: !status})
      .then(() => {
        dispatch(fetchTasksDetail(id))
        dispatch(fetchTasks())
        setIsLoading({...isLoading, [id]: false})
        dispatch(isLoadingActions(false))
      })
  }

  function handleTitle(id) {
    dispatch(fetchTasksDetail(id))
    setModalTask(task);
    setIsWindowOpen(true)
  }

  return (
    <div className={style.mainCont}>
      {task && isLoading[task.id] !== undefined && isLoading[task.id] && <Loader/>}
      {task && setIsWindowOpen &&
      <React.Fragment>
        <input className={style.taskStatusCheckbox} type="checkbox"
               onChange={() => handleToggleStatus(task.id, task.status)} id={task.id}/>
        <div className={style.content}>
          <label htmlFor={task.id}>
            <span className={!task.status && style.notChecked}>
              {task.status && <img className={style.checkIcon} src={check} alt=""/>}
            </span>
          </label>
          <h2 onClick={() => handleTitle(task.id)} className={style.taskRow_title}>{task.title}</h2>
        </div>
      </React.Fragment>
      }
      {task && !setIsWindowOpen &&
      <React.Fragment>
        <input className={style.taskStatusCheckbox} type="checkbox"
               onChange={() => handleToggleStatus(task.id, task.status)} id={task.id}/>
        <div className={style.content}>
          <label htmlFor={task.id}>
            <span className={!task.status && style.notChecked}>
              {task.status && <img className={style.checkIcon} src={check} alt=""/>}
            </span>
            <h2 className={style.modalWin_title}>{task.title}</h2>
          </label>
        </div>
      </React.Fragment>
      }
    </div>
  )
}

export default TaskStatusCheckbox