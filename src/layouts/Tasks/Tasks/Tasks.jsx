import React, {useEffect}  from "react";
import style from "./tasks.module.sass"
import {useSelector, useDispatch} from "react-redux"
import TaskRow from "../../../components/TaskRow/TaskRow"
import {fetchTasks} from "../../../store/actions"
import Loader from "../../../molecules/Loader/Loader"
import TextField from '../../../molecules/TextField/TextField'


function Tasks() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchTasks())
  }, [])

  const tasks = useSelector(state => state.tasks.tasks.data && state.tasks.tasks.data.results)

  return (
    <div className={style.mainCont}>
      <div className={style.textField}>
        <TextField
          method="POST"
          url="todo/"
          name="title"
          fetchData={fetchTasks}
          placeholder="Создать новую задачу"
        />
      </div>
      {tasks ? <TaskRow tasks={tasks}/> : <Loader/>}
    </div>
  )
}

export default Tasks;