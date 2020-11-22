import React, {useState, useRef, useEffect} from 'react'
import style from './text-field.module.sass'
import fetchReq from "../../fetch/configuratedFetch"
import {useDispatch} from "react-redux"
import plus from "../../assets/tasks_panel_icons/plus-circle.svg"
import {fetchTasks} from "../../store/actions"
import {isLoadingActions} from "../../store/actions";

function TextField({method, url, name, placeholder}) {
  const [value, setValue] = useState("");

  const [isOutsideClick, setIsOutsideClick] = useState(false);

  const dispatch = useDispatch();
  const node = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return () => document.addEventListener("mousedown", handleClick, false)
  }, [])

  useEffect(() => {
    if (isOutsideClick && value !== "") {
      dispatch(isLoadingActions(true))
      fetchReq(method, url, {[name]: value})
      dispatch(fetchTasks())
      setValue("")
      setTimeout(()=>dispatch(isLoadingActions(false)), 1000)
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

export default TextField