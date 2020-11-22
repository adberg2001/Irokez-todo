import React, {useEffect, useRef, useState} from "react";
import style from "./set-task-amployee.module.sass"
import amployeeAva from "../../assets/tasks-modal-window-icons/appointer.svg"
import configuratedFetch from "../../fetch/configuratedFetch";
import {useDispatch, useSelector} from "react-redux";
import {fetchTasksDetail, isLoadingActions} from "../../store/actions";

function SetTaskAmployee({amployeers}){

  const [open, setOpen] = useState(false)

  const dispatch = useDispatch();

  useEffect(()=>{
    document.addEventListener("mousedown", handleClick, false)
    return document.addEventListener("mousedown", handleClick, false)
  }, [])

  const node = useRef();

  function handleClick (e){
    if (node && node.current && node.current.contains(e.target)){
      return
    }
    setOpen(false)
  }
  const task =  useSelector(state => state.tasks.taskDetail && state.tasks.taskDetail.data)

  function setAmployee(id){
    dispatch(isLoadingActions(true))
    configuratedFetch("PATCH", `todo/${task.id}/`, {"employee_appointed": id})
      .then((r) => {
        dispatch(fetchTasksDetail(task.id))
        dispatch(isLoadingActions(false))
      })
  }
  console.log(task)
  return (
    <div ref={node} className={style.mainCont}>
      { task && task.employee_appointed ?
        <button  onClick={() => setOpen(!open)} className={style.selectedUser}>
          <img src={amployeeAva} alt=""/>{task.employee_appointed.first_name} {task.employee_appointed.last_name}
        </button> :
        <button className={style.winOpener} onClick={() => setOpen(!open)}>Назначить сотрудника?</button>
      }
      {open&&
      <div className={style.modalWin}>
        {
          amployeers.map(a => (
            <btn onClick={()=>setAmployee(a.id)} key={a.id} className={style.amplyeeRow}>
              <img src={amployeeAva} alt="amployeeAva"/>
              {a.first_name} {a.last_name}
            </btn>
          ))
        }
      </div>
      }
    </div>
  )
}

export default SetTaskAmployee