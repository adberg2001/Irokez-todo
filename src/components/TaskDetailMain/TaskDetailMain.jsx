import React from "react";
import style from './task-detail-main.module.sass'
import TasksAutocomplete from "../../molecules/TasksAutocomplete/TasksAutocomplete";
import {useDispatch, useSelector} from "react-redux";
import TaskStatusCheckbox from "../../molecules/TaskStatusCheckbox/TaskStatusCheckbox";
import Loader from "../../molecules/Loader/Loader";
import TextField from "../../molecules/TextField/TextField";
import TaskDetailMainComment from "../../molecules/TaskDetailMainComment/TaskDetailMainComment";
import {Divider} from "@material-ui/core";
import deleteIcon from "../../assets/tasks-modal-window-icons/delete.png";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import configuratedFetch from "../../fetch/configuratedFetch";
import {fetchTasks, isLoadingActions} from "../../store/actions";

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
      <button onClick={handleClickOpen} className={style.deleteIcon} ><img src={deleteIcon} alt=""/></button>
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