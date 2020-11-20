import React, {useState, useEffect, useRef} from "react"
import style from "./list.module.sass"
import sun from "../../../assets/tasks-cotegory-icons/sun.svg"
import star from "../../../assets/tasks-cotegory-icons/star.svg"
import man from "../../../assets/tasks-cotegory-icons/person.svg"
import people from "../../../assets/dashboard-icons/people.svg"
import list from "../../../assets/tasks-cotegory-icons/Editor - List.svg"

function List() {

  const categories = [
    {id: "sun", title: "Сегодня", img: sun, amount: "3"},
    {id: "star", title: "Избранное", img: star, amount: "3"},
    {id: "man", title: "Назначено мне", img: man, amount: "3"},
    {id: "people", title: "Назначено мной", img: people, amount: "3"},
    {id: "allTasks", title: "Все задачи", img: list, amount: "3"},
    {id: "completedTasks", title: "Завершённые задачи", img: list, amount: "3"},
  ];

  const subCategories = [
    {id: "job", title: "Работа", iconColor: "#F2C94C", amount: "3"},
    {id: "presentation", title: "Презентация продукта", iconColor: "#27AE60", amount: "3"},
    {id: "projectWork", title: "Проектная работа", iconColor: "#2F80ED", amount: "3"},
    {id: "weekends", title: "Выходные", iconColor: "#F2994A", amount: "3"},
  ];
  const [open, setOpen] = useState(false);
  const [snackBarId, setSnackBarId] = useState('')
  const [isDelete, setIsDelete] = useState(false)
  const [isDeleteId, setIsDeleteId] = useState([])

  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false)
    return () => document.addEventListener("mousedown", handleClick, false)
  }, [])
  const node = useRef();
  const handleClick = e => {
    if (node && node.current && node.current.contains(e.target)) {
      return;
    }
    setOpen(false)
    setIsDelete(false)
  };

  return (
    <div className={style.mainCont}>
      <h3 className={style.title}>Ваши списки задач:</h3>
      <ul className={style.category}>
        {
          categories.map(c => (
            <li key={c.id} className={style.row}>
              <input name="category" className={style.checkbox} type="radio" id={c.id}/>
              <label htmlFor={c.id} className={style.row_label}>
                <img className={style.row_icon} src={c.img} alt={`${c.id}.svg`}/>
                <p className={style.row_title}>{c.title}</p>
                <span className={style.row_amount}>{c.amount}</span>
              </label>
            </li>
          ))
        }
      </ul>
      <ul ref={node} className={style.subCategory}>
        {
          subCategories.map(c => (
            <li key={c.id} className={style.row}>
              <input name="category" className={style.checkbox} type="radio" id={c.id}/>
              <label onDoubleClick={() => {
                setOpen(!open)
                setSnackBarId(c.id)
              }} htmlFor={c.id} className={style.row_label}>
                <div className={style.row_icon} style={{backgroundColor: c.iconColor}}/>
                <p style={isDeleteId.includes(c.id) ? {color: "#BDBDBD"} : {color: "#1D1C1D"}} className={style.row_title}
                >{
                  isDeleteId.includes(c.id)
                    ? "Введите название списка"
                    : c.title
                }</p>
                <span className={style.row_amount}>{!isDeleteId.includes(c.id)&&c.amount}</span>

                {open && snackBarId === c.id &&
                <span className={style.snackBar}>
                     <p onClick={() => {
                       setOpen(false);
                       setSnackBarId('')
                     }} className={style.snackBar_rename}>Изменить название списка</p>
                      <hr style={{border: "1px solid #DDDDDD"}}/>
                     <p onClick={() => setIsDelete(true)} className={style.snackBar_delete}>Удалить список</p>
                  </span>
                }
                {
                  isDelete && snackBarId === c.id &&
                  <span className={style.snackBar}>
                    <h4 className={style.snackBar_title}>Удалить этот список?</h4>
                    <p className={style.snackBar_desc}>
                      Этот список будет удалён без возможности восстановления
                    </p>
                    <button onClick={() => {
                      setIsDeleteId([...isDeleteId, c.id])
                      setOpen(false)
                      setIsDelete(false)
                    }} className={style.snackBar_btn}>Удалить список</button>
                  </span>
                }
              </label>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default List;