import React, {useRef, useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux"
import fetchRequest from "../../fetch/configuratedFetch"
import style from "./autocomplete.module.sass"
import plus from "../../assets/tasks_panel_icons/plus.svg"
import Loader from '../Loader/Loader'
import {fetchTasksDetail, fetchTasks} from "../../store/actions";


function TasksAutocomplete({task}) {
  const dispatch = useDispatch()
  const {id, is_favorite, employee, employee_appointed} = task;
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const userId = useSelector(state => state.currentUser.currentUser.data && state.currentUser.currentUser.data.user.id)

  const node = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return document.addEventListener("mousedown", handleClick, false)
  }, [node])

  function handleToggleSection (title){
    setOpen(false)
    setIsLoading(true)
    fetchRequest("PATCH", `todo/${id}/`, {[title]: !task[title]}).then(()=> {
      dispatch(fetchTasks())
      dispatch(fetchTasksDetail(id))
      setIsLoading(false)
    })
  }

  const handleClick = e => {
    if (node && node.current && node.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  return (
    <div className={style.autocomplete}>
      {isLoading && <Loader/>}
      <span className={style.isProjectWork}>Проектная работа</span>
      {is_favorite && <span onClick={() => handleToggleSection("is_favorite")} className={style.isFavorite}>Избранное</span>}
      {employee.id === userId && employee_appointed && <span className={style.isOwnTask}>Назначено мной</span>}
      <span ref={node} className={style.plus}>
        <img onClick={() => setOpen(!open)} src={plus} alt=""/>
        {open && <span className={style.modalWin}>
          {!is_favorite ?
          <span onClick={() => handleToggleSection("is_favorite")} className={style.isFavorite}>Избранное</span>
          : "вы отметили все разделы"}
        </span>}
      </span>
    </div>
  )
}

export default TasksAutocomplete;