import React, {useState} from "react";
import style from "./set-task-deadline.module.sass"
import {useDispatch, useSelector} from "react-redux";
import configuratedFetch from "../../fetch/configuratedFetch";
import {fetchTasks, fetchTasksDetail, isLoadingActions} from "../../store/actions";

function SetTaskDeadline() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);

  const task = useSelector(state => state.tasks.taskDetail && state.tasks.taskDetail.data)

  function onChange(date) {
    dispatch(isLoadingActions(true))
    configuratedFetch("PATCH", `todo/${task.id}/`, {"end_date": new Date(date.target.value)})
      .then(r => {
        console.log(r)
        dispatch(fetchTasks())
        dispatch(fetchTasksDetail(task.id))
        dispatch(isLoadingActions(false))
      })
    setOpen(false)
  }

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]

  const getDate = (d) => {
    const date = new Date(d)
    const day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear()
    return `${day} ${months[month]} ${year}`
  }

  const [check, setCheck] = useState(false)


  return (
    <div className={style.mainCont}>
      <p className={style.title}>Дата завершения задачи</p>
      {
        open ? <input onChange={onChange} type="date"/>
          : <span className={style.date} onClick={() => setOpen(true)}>{task && task.end_date ? getDate(task.end_date) : "Укажите дату"}</span>
      }
      <button onClick={()=> setCheck(!check)}>
        <div className={`${style.checkBg} ${check && style.checked}`}>
          <div className={`${style.checkCircle} ${check && style.checked}`}/>
        </div>
        Отметить в водопаде событий
      </button>
    </div>
  )
}

export default SetTaskDeadline;