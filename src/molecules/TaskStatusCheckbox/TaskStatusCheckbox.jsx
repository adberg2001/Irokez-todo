import React, {useEffect, useRef, useState} from "react";
import style from './task-status-checkobx.module.sass'
import {useDispatch} from "react-redux";
import fetchRequest from "../../fetch/configuratedFetch";
import {fetchTasks, fetchTasksDetail, isLoadingActions} from "../../store/actions";
import check from "../../assets/tasks_panel_icons/check.svg";
import Loader from "../Loader/Loader";
import configuratedFetch from "../../fetch/configuratedFetch";

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

  const [tittleValue, setTitleValue] = useState("");
  const [openTitleInput, setOpenTitleInput] = useState(false);

  function handleEditTitle(){
    dispatch(isLoadingActions(true))
    configuratedFetch("PATCH", `todo/${task.id}/`, {title: tittleValue})
      .then(()=>{
        dispatch(fetchTasks())
        dispatch(fetchTasksDetail(task.id))
        dispatch(isLoadingActions(false))
        setOpenTitleInput(false)
      })
  }

  const node = useRef()
  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return document.addEventListener("mousedown", handleClick, false)
  }, [node])

  const handleClick = e => {
    if (node && node.current && node.current.contains(e.target)) {
      return
    }
    setTitleValue("")
    setOpenTitleInput(false)
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
          </label>
          {
            openTitleInput ?
              <span ref={node} className={style.titleEdit}><input value={tittleValue} onChange={e=>setTitleValue(e.target.value)} type="text"/> <button onClick={()=>handleEditTitle()}>изменить</button></span> :
              <h2 onClick={()=>setOpenTitleInput(true)} className={style.modalWin_title}>{task.title}</h2>
          }
        </div>
      </React.Fragment>
      }
    </div>
  )
}

export default TaskStatusCheckbox