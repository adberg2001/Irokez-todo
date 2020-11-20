import React from "react"
import style from "./list.module.sass"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import sun from "../../../assets/tasks-cotegory-icons/sun.svg"
import star from "../../../assets/tasks-cotegory-icons/star.svg"
import man from "../../../assets/tasks-cotegory-icons/person.svg"
import people from "../../../assets/dashboard-icons/people.svg"
import list from "../../../assets/tasks-cotegory-icons/Editor - List.svg"

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

function List() {

  const categories = [
    {id: "sun",title: "Сегодня", img: sun, amount: "3"},
    {id: "star",title: "Избранное", img: star, amount: "3"},
    {id: "man",title: "Назначено мне", img: man, amount: "3"},
    {id: "people",title: "Назначено мной", img: people, amount: "3"},
    {id: "allTasks",title: "Все задачи", img: list, amount: "3"},
    {id: "completedTasks",title: "Завершённые задачи", img: list, amount: "3"},
  ];

  const subCategories = [
    {id: "job",title: "Работа", iconColor: "#F2C94C", amount: "3"},
    {id: "presentation",title: "Презентация продукта", iconColor: "#27AE60", amount: "3"},
    {id: "projectWork",title: "Проектная работа", iconColor: "#2F80ED", amount: "3"},
    {id: "weekends",title: "Выходные", iconColor: "#F2994A", amount: "3"},
  ];

  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const classes = useStyles();

  return (
    <div className={style.mainCont}>
      <h3 className={style.title}>Ваши списки задач:</h3>
      <ul className={style.category}>
        {
          categories.map(c => (
            <li key={c.id} className={style.row}>
              <input name="category" className={style.checkbox} type="radio" id={c.id}/>
              <label onDoubleClick={handleClick('Message A')}  htmlFor={c.id} className={style.row_label}>
                <img className={style.row_icon} src={c.img} alt={`${c.id}.svg`}/>
                <p className={style.row_title}>{c.title}</p>
                <span className={style.row_amount}>{c.amount}</span>

                <Snackbar
                  key={messageInfo ? messageInfo.key : undefined}
                  style={{position:"absolute"}}
                  open={open}
                  autoHideDuration={10000}
                  onClose={handleClose}
                  onExited={handleExited}
                  message={messageInfo ? messageInfo.message : undefined}
                  action={
                    <React.Fragment>
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleClose}
                      >
                        <CloseIcon />
                      </IconButton>
                    </React.Fragment>
                  }
                />

              </label>
            </li>
          ))
        }
      </ul>
      <ul className={style.subCategory}>
        {
          subCategories.map(c => (
            <li key={c.id} className={style.row}>
              <input name="category" className={style.checkbox} type="radio" id={c.id}/>
              <label htmlFor={c.id} className={style.row_label}>
                <div className={style.row_icon} style={{backgroundColor: c.iconColor}}></div>
                <p className={style.row_title}>{c.title}</p>
                <span className={style.row_amount}>{c.amount}</span>

              </label>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default List;