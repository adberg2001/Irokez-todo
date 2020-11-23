import React from 'react'
import style from './sub-task-stapper.module.sass'
import TitleTextField from '../../molecules/TitleTextField/TitleTextField'
import SubTaskRow from "../../molecules/SubTaskRow/SubTaskRow";

function SubTaskStepper({task}) {
  return (
    <React.Fragment>
      <SubTaskRow task={task} subTasks={task.sub_tasks}/>
      <TitleTextField
        method="POST"
        url={`todo/`}
        name="title"
        placeholder="Добавить подзадачу"
        isSubTask={true}
        subId={task.id}
        task = {task}
      />
    </React.Fragment>
  )
}

export default SubTaskStepper;