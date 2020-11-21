import React, {useState, useRef, useEffect} from "react";
import fetchReq from "../../../fetch/configuratedFetch"
import style from "./tasks.module.sass"
import plus from "../../../assets/tasks_panel_icons/plus-circle.svg"
import {useSelector, useDispatch} from "react-redux"
import TaskRow from "../../../components/TaskRow/TaskRow"
import {fetchTasks} from "../../../store/actions"
import Loader from "../../../components/Loader/Loader"


function Tasks() {
  const [taskTitle, setTaskTitle] = useState("");
  const [isOutsideClick, setIsOutsideClick] = useState(false);
  const dispatch = useDispatch();
  const node = useRef();
  useEffect(() => {
    dispatch(fetchTasks())
    document.addEventListener("mousedown", handleClick, false)
    return () => document.addEventListener("mousedown", handleClick, false)
  }, [])
  useEffect(() => {
    if (isOutsideClick && taskTitle !== "") {
      fetchReq("POST", "todo/", {title: taskTitle})
      dispatch(fetchTasks())
      setTaskTitle("")
    }
    setIsOutsideClick(false)
  }, [isOutsideClick]);

  const tasks = useSelector(state => state.tasks.tasks.data && state.tasks.tasks.data.results)

  const handleClick = e => {
    if (node && node.current && node.current.contains(e.target)) {
      return;
    }
    setIsOutsideClick(true)
  };

  return (
    <div className={style.mainCont}>
      <div className={style.taskTitleForm}>
        <img src={plus} alt="plus.svg"/>
        <input ref={node} placeholder="Создать новую задачу" value={taskTitle} type="text"
               onChange={e => setTaskTitle(e.target.value)}/>
      </div>
      {tasks ? <TaskRow tasks={tasks}/> : <Loader/>}
    </div>
  )
}

export default Tasks;