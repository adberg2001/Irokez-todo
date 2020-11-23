import React, {useState, useRef, useEffect} from 'react'
import style from './title-text-field.module.sass'
import fetchReq from "../../fetch/configuratedFetch"
import {useDispatch} from "react-redux"
import plus from "../../assets/tasks_panel_icons/plus-circle.svg"
import {fetchTasks} from "../../store/actions"
import {isLoadingActions} from "../../store/actions";

function TitleTextField({method, url, name, placeholder, isSubTask, subId}) {
  const [value, setValue] = useState("");

  const [isOutsideClick, setIsOutsideClick] = useState(false);

  const dispatch = useDispatch();
  const node = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return () => document.addEventListener("mousedown", handleClick, false)
  }, [])

  useEffect(() => {
    const data = isSubTask ? {
      [name]: value,
      task: subId,
      is_primary: false
    } : null
    if (isOutsideClick && value !== "") {
      dispatch(isLoadingActions(true))
      isSubTask ? fetchReq(method, url, data)
        : fetchReq(method, url, {[name]: value, is_primary: true})
      dispatch(fetchTasks())
      setValue("")
      setTimeout(() => dispatch(isLoadingActions(false)), 1100)
    }
    setIsOutsideClick(false)
  }, [isOutsideClick]);

  const handleClick = e => {
    if (node && node.current && node.current.contains(e.target)) {
      return;
    }
    setIsOutsideClick(true)
  };


  return (
    <div className={style.textField}>
      <img src={plus} alt="plus.svg"/>
      <input ref={node} placeholder={placeholder} value={value} type="text"
             onChange={e => setValue(e.target.value)}/>
    </div>
  )
}

export default TitleTextField