import React, {useEffect, useState} from "react";
import style from "./tasks.module.sass"
import {useSelector, useDispatch} from "react-redux"
import TaskRows from "../../../components/TaskRows/TaskRows"
import {fetchTasks} from "../../../store/actions"
import Loader from "../../../molecules/Loader/Loader"
import TitleTextField from '../../../molecules/TitleTextField/TitleTextField'
import TaskDetail from "../../TaskDetail/TaskDetail";


function Tasks() {
  const dispatch = useDispatch();
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [modalTask, setModalTask] = useState(null)

  useEffect(()=> {
    dispatch(fetchTasks())
  }, [])

  const tasks = useSelector(state => state.tasks.tasks.data && state.tasks.tasks.data.results)

  return (
    <div className={style.mainCont}>
      <div className={style.textField}>
        <TitleTextField
          method="POST"
          url="todo/"
          name="title"
          placeholder="Создать новую задачу"
          isSubTask={false}
          subId={null}
        />
      </div>
      {tasks ? <TaskRows tasks={tasks} setIsWindowOpen={setIsWindowOpen} setModalTask={setModalTask}/> : <Loader/>}
      <TaskDetail
        isWindowOpen={isWindowOpen}
        setIsWindowOpen={setIsWindowOpen}
        task={modalTask}
      />
    </div>
  )
}

export default Tasks;