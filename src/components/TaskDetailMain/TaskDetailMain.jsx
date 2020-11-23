import React from "react";
import style from './task-detail-main.module.sass'
import TasksAutocomplete from "../../molecules/TasksAutocomplete/TasksAutocomplete";
import {useDispatch, useSelector} from "react-redux";
import TaskStatusCheckbox from "../../molecules/TaskStatusCheckbox/TaskStatusCheckbox";
import Loader from "../../molecules/Loader/Loader";
import TaskDetailMainComment from "../../molecules/TaskDetailMainComment/TaskDetailMainComment";
import {Divider} from "@material-ui/core";
import deleteIcon from "../../assets/tasks-modal-window-icons/delete.png";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import configuratedFetch from "../../fetch/configuratedFetch";
import {fetchTasks, isLoadingActions} from "../../store/actions";
import SubTaskStepper from "../SubTaskStepper/SubTaskStepper";
import bold from "../../assets/tasks-modal-window-icons/Editor - Bold.svg";
import italic from "../../assets/tasks-modal-window-icons/Editor - Italic.svg";
import stripe from "../../assets/tasks-modal-window-icons/Editor - Stripe.svg";
import link from "../../assets/tasks-modal-window-icons/link-2.svg";
import listDigit from "../../assets/tasks-modal-window-icons/Editor - ListDigit.svg";
import list from "../../assets/tasks-modal-window-icons/Editor - List.svg";
import at from "../../assets/tasks-modal-window-icons/at.svg";
import smile from "../../assets/tasks-modal-window-icons/Smile-add.svg";

function TaskDetailMain({setIsWindowOpen}) {
  const task = useSelector(state => state.tasks.taskDetail && state.tasks.taskDetail.data)
  const loading = useSelector(state => state.loading.loading && state.loading.loading)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function deleteTask(){
    dispatch(isLoadingActions(true))
    configuratedFetch("DELETE", `todo/${task.id}/`).then(()=>{
      setOpen(false);
      dispatch(fetchTasks())
      setIsWindowOpen(false)
      dispatch(isLoadingActions(false))
    })
  }

  return (
    <div className={style.mainCont}>
      {loading && <Loader/>}
      <div className={style.scrollablePart}>
        <button onClick={handleClickOpen} className={style.deleteIcon} ><img src={deleteIcon} alt=""/></button>
        {task && <TasksAutocomplete task={task}/>}
        <TaskStatusCheckbox
          task={task}
          setIsWindowOpen={null}
          setModalTask={null}
          setIsModalWinLoading={null}
        />
        <div className={style.stepper}>
          {task && <SubTaskStepper task={task}/>}
        </div>
        <Divider style={{margin:"15px 0 10px"}} orientation="horizontal"/>
        <TaskDetailMainComment/>
      </div>
      <div className={style.textEditor}>
        <label className={style.label} htmlFor="field">
          <input placeholder="Комментарий" id="field"
                 type="text"/>
        </label>
        <Divider orientation="horizontal"/>
        <div className={style.actions}>
          <span>
            <img src={bold} alt="editor-bold.svg"/>
            <img src={italic} alt="editor-italic.svg"/>
            <img src={stripe} alt="editor-stripe.svg"/>
          </span>
          <Divider style={{margin: "0 3px"}} flexItem={true} orientation="vertical"/>
          <span>
            <img src={link} alt="editor-link.svg"/>
            <img src={listDigit} alt="editor-list-digit.svg"/>
            <img src={list} alt="editor-list.svg"/>
          </span>
          <Divider style={{margin: "0 3px"}} flexItem={true} orientation="vertical"/>
          <Divider style={{marginLeft: "auto"}} flexItem={true} orientation="vertical"/>
          <span>
            <img src={at} alt="editor-at.svg"/>
            <img src={smile} alt="editor-smile.svg"/>
          </span>
          <Divider style={{margin: "0 3px"}} flexItem={true} orientation="vertical"/>
          <button className={style.commentBtn}>
            Комментировать
          </button>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Удалить задачу?"}</DialogTitle>
        <DialogActions>
          <Button style={{fontWeight:"bold", margin:"0 auto 0 5px"}} onClick={handleClose} color="primary">
            отмена
          </Button>
          <Button style={{fontWeight:"bold", margin:"0 5px 0 auto"}} onClick={deleteTask} color="secondary" autoFocus>
            удалить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default TaskDetailMain;