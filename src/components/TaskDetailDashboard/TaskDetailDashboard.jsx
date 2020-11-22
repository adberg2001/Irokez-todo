import React, {useEffect, useState} from "react";
import style from "./task-detail-dashboard.module.sass"
import {useSelector} from "react-redux";
import authorAva from "../../assets/tasks-modal-window-icons/autor-ava.svg"
import SetTaskAmployee from "../../molecules/SetTaskAmployee/SetTaskAmployee";
import configuratedFetch from "../../fetch/configuratedFetch";

function TaskDetailDashboard(){
  const [amployeers, setAmployeers] = useState(null)
  const currentUser = useSelector(state => state.currentUser.currentUser.data && state.currentUser.currentUser.data.user)

  function fetchUsers(){
    configuratedFetch("GET", "user/")
      .then(r => setAmployeers(r.results))
      .catch(e => console.log(e))
  }

  console.log(amployeers)
  useEffect(()=> {
    fetchUsers()
  }, [])

  return (
    <div className={style.mainCont}>
      <div className={style.head}>
        <div className={style.userRow}>
          <p className={style.headTitle}>Автор задачи:</p>
          {currentUser &&
          <p className={style.userName}>
            <img src={authorAva} alt=""/>{currentUser.first_name} {currentUser.last_name}
          </p>}
        </div>
        <div className={style.userRow}>
          <p className={style.headTitle}>Исполнитель задачи:</p>
          <SetTaskAmployee amployeers={amployeers}/>
        </div>
      </div>
    </div>
  )
}

export default TaskDetailDashboard