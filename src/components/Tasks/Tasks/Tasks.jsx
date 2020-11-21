import React, {useState, useRef, useEffect} from "react";
import fetchReq from "../../../fetch/configuratedFetch"
import style from "./tasks.module.sass"
import plus from "../../../assets/tasks_panel_icons/plus-circle.svg"

function Tasks(){
  const [taskTitle, setTaskTitle] = useState("");
  const [isOutsideClick, setIsOutsideClick] = useState(false);

  const node = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return () => document.addEventListener("mousedown", handleClick, false)
  }, [])

  useEffect(() => {
    if (isOutsideClick && taskTitle !== ""){
      fetchReq("POST", "todo/", {title: taskTitle})
      setTaskTitle("")
    }
    setIsOutsideClick(false)
  }, [isOutsideClick])

  const handleClick = e => {
    if (node && node.current && node.current.contains(e.target)) {
      return;
    }
    setIsOutsideClick(true)
  };
  return (
    <div className={style.mainCont}>
      <div className={style.taskTitle}>
        <img src={plus} alt="plus.svg"/>
        <input ref={node} placeholder="Создать новую задачу" value={taskTitle} type="text" onChange={e=>setTaskTitle(e.target.value)} />
      </div>

      
    </div>
  )
}

export default Tasks;