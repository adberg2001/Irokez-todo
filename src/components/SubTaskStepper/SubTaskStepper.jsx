import React from 'react'
import style from './sub-task-stapper.module.sass'
import {motion} from 'framer-motion'
import TitleTextField from '../../molecules/TitleTextField/TitleTextField'
import SubTaskRow from "../../molecules/SubTaskRow/SubTaskRow";

function SubTaskStepper({task}) {
  return (
    <motion.div
      key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: {opacity: 1, height: "auto"},
        collapsed: {opacity: 0, height: 0}
      }}
      transition={{duration: 1, ease: [0.04, 0.62, 0.23, 0.98]}}
      className={style.mainCont}
    >
      <div className={style.shadow}/>
      <SubTaskRow task={task} subTasks={task.sub_tasks}/>
      <TitleTextField
        method="POST"
        url={`todo/`}
        name="title"
        placeholder="Добавить подзадачу"
        isSubTask={true}
        subId={task.id}
      />
    </motion.div>
  )
}

export default SubTaskStepper;