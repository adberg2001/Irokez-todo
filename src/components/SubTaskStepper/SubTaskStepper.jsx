import React from 'react'
import style from './sub-task-stapper.module.sass'
import {motion} from 'framer-motion'
import {fetchTasks} from "../../store/actions"
import TextField from '../../molecules/TextField/TextField'

function SubTaskStepper(props) {
  const {task} = props;
  console.log(task)
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
      <div className={style.subTask_row}>
        <div className={style.stepper_Figure}>
          <div className={style.subTask_transparentStick}/>
          <div className={style.subTask_Circle}/>
          <div className={style.subTask_Stick}/>
        </div>
        <p className={style.subTask_title}>Провести презентацию</p>
      </div>

      <div className={style.subTask_row}>
        <div className={style.stepper_Figure}>
          <div className={style.subTask_Stick}/>
          <div className={style.subTask_Circle}/>
          <div className={style.subTask_transparentStick}/>
        </div>
        <p className={style.subTask_title}>Провести презентацию</p>
      </div>
      {/*{*/}
      {/*  task.sub_tasks.length ? task.sub_tasks.map( (s, i) => (*/}
      {/*    <span key={i}>*/}
      {/*      {s.title}*/}
      {/*    </span>*/}
      {/*  )) : ''*/}
      {/*}*/}
      <TextField
        method="PATCH"
        url={`todo/${task.id}/`}
        name="sub_tasks"
        fetchData={fetchTasks}
        placeholder="Добавить подзадачу"
      />
    </motion.div>
  )
}

export default SubTaskStepper;