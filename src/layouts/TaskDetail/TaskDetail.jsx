import React, {useRef, useEffect} from 'react'
import style from './task-detail.module.sass'
import Backdrop from '@material-ui/core/Backdrop';
import {makeStyles} from '@material-ui/core/styles';
import back from '../../assets/tasks-modal-window-icons/chevron-left.svg'
import close from '../../assets/tasks-modal-window-icons/close.svg'
import Divider from '@material-ui/core/Divider';
import TaskDetailMain from "../../components/TaskDetailMain/TaskDetailMain";
import TaskDetailDashboard from "../../components/TaskDetailDashboard/TaskDetailDashboard";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function TaskDetail({isWindowOpen, setIsWindowOpen, task}) {
  const classes = useStyles();
  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return document.addEventListener("mousedown", handleClick, false)
  }, [])
  useEffect(() => {

  }, [task])

  function handleClick(e) {
    if (node && node.current && node.current.contains(e.target)) {
      setIsWindowOpen(true)
      return
    }
    setIsWindowOpen(false)
  }

  const node = useRef()
  return (
    <Backdrop className={classes.backdrop} open={isWindowOpen}>
      <div ref={node} className={style.mainCont}>
        <div className={style.header}>
          <button onClick={()=> setIsWindowOpen(false)} className={style.header_back}>
            <img src={back} alt="back.svg"/>
            Назад
          </button>
          <Divider orientation="vertical"/>
          <span className={style.header_title}>Задача</span>
          <img onClick={()=> setIsWindowOpen(false)} src={close} className={style.header_close} alt="close.svg"/>
        </div>
        <div className={style.main}>
          <TaskDetailMain/>
          <TaskDetailDashboard/>
        </div>
      </div>
    </Backdrop>
  )
}

export default TaskDetail;