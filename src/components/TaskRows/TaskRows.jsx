import React, {useState} from "react"
import style from "./task-rows.module.sass"
import TasksAutocomplete from '../../molecules/TasksAutocomplete/TasksAutocomplete'
import pointer from "../../assets/tasks_panel_icons/chevron-up.svg"
import {motion} from 'framer-motion'
import SubTaskStepper from '../SubTaskStepper/SubTaskStepper'
import TaskStatusCheckbox from "../../molecules/TaskStatusCheckbox/TaskStatusCheckbox";

function TaskRows({tasks, setIsWindowOpen, setModalTask}) {

  const [openStepper, setOpenStepper] = useState({});

  function handleToggleStepper(task) {
    setOpenStepper({
      ...openStepper,
      [task.id]:
        openStepper[task.id] !== undefined
          ? !openStepper[task.id]
          : true
    })
  }

  return (
    <div>
      {
        tasks.map(task => {

          return (
            <React.Fragment key={task.id}>
              <div className={style.taskRow}>
                <TasksAutocomplete task={task}/>
                <TaskStatusCheckbox
                  task={task}
                  setIsWindowOpen={setIsWindowOpen}
                  setModalTask={setModalTask}
                  setIsModalWinLoading={null}
                />
                <motion.img className={style.pointer} animate={{rotate: openStepper[task.id] ? 0 : -180}}
                            onClick={() => handleToggleStepper(task)} src={pointer} alt=""/>
              </div>
              {openStepper[task.id] &&
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
                className={style.subTaskStepper}
              >
                <div className={style.shadow}/>
                <SubTaskStepper task={task} openStepper={openStepper[task.id]}/>
              </motion.div>
              }
            </React.Fragment>
          )
        })
      }
    </div>
  )
}

export default TaskRows;
