import React from "react";
import style from './task-detail-main.module.sass'
import TasksAutocomplete from "../../molecules/TasksAutocomplete/TasksAutocomplete";
import {useSelector} from "react-redux";
import TaskStatusCheckbox from "../../molecules/TaskStatusCheckbox/TaskStatusCheckbox";
import Loader from "../../molecules/Loader/Loader";
import TextField from "../../molecules/TextField/TextField";
import TaskDetailMainComment from "../../molecules/TaskDetailMainComment/TaskDetailMainComment";
import {Divider} from "@material-ui/core";

function TaskDetailMain() {
  const task = useSelector(state => state.tasks.taskDetail && state.tasks.taskDetail.data)
  const loading = useSelector(state => state.loading.loading && state.loading.loading)

  return (
    <div className={style.mainCont}>
      {loading && <Loader/>}
      <div>
        {task && <TasksAutocomplete task={task}/>}
        <TaskStatusCheckbox
          task={task}
          setIsWindowOpen={null}
          setModalTask={null}
        />
        <div style={{margin: "10px 0 0 0"}} className={style.subTask_row}>
          <div className={style.stepper_figure}>
            <div className={style.subTask_transparentStick}/>
            <div className={style.subTask_Circle}/>
            <div className={style.subTask_Stick}/>
          </div>
          <p className={style.subTask_title}>Провести презентацию</p>
        </div>

        <div className={style.subTask_row}>
          <div className={style.stepper_figure}>
            <div className={style.subTask_Stick}/>
            <div className={style.subTask_Circle}/>
            <div className={style.subTask_Stick}/>
          </div>
          <p className={style.subTask_title}>Разработать план презентации</p>
        </div>
        <div className={style.subTask_row}>
          <div className={style.stepper_figure}>
            <div className={style.subTask_Stick}/>
            <div className={style.subTask_Circle}/>
            <div className={style.subTask_Stick}/>
          </div>
          <p className={style.subTask_title}>Подзадача подготовить обновлённую презентацию <br/>
            разработанного продукта</p>
        </div>

        <div className={style.subTask_row}>
          <div className={style.stepper_figure}>
            <div className={style.subTask_Stick}/>
            <div className={style.subTask_Circle}/>
            <div className={style.subTask_Stick}/>
          </div>
          <p className={style.subTask_title}>План презентации</p>
        </div>
        <div className={style.subTask_row}>
          <div className={style.stepper_figure}>
            <div className={style.subTask_Stick}/>
            <div className={style.subTask_Circle}/>
            <div className={style.subTask_transparentStick}/>
          </div>
          <p className={style.subTask_title}>Lorem Ipsum</p>
        </div>
        <div className={style.textField}>
          {task && <TextField
            method="PATCH"
            url={`todo/${task.id}/`}
            name="sub_tasks"
            placeholder="Добавить подзадачу"
          />}
        </div>
        <Divider style={{margin:"15px 0 10px"}} orientation="horizontal"/>
      </div>
      <TaskDetailMainComment/>
    </div>
  )
}

export default TaskDetailMain;