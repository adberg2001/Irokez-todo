import React, {useState} from "react";
import style from "./task-detail-main-comment.module.sass"
import bold from "../../assets/tasks-modal-window-icons/Editor - Bold.svg"
import italic from "../../assets/tasks-modal-window-icons/Editor - Italic.svg"
import list from "../../assets/tasks-modal-window-icons/Editor - List.svg"
import listDigit from "../../assets/tasks-modal-window-icons/Editor - ListDigit.svg"
import stripe from "../../assets/tasks-modal-window-icons/Editor - Stripe.svg"
import smile from "../../assets/tasks-modal-window-icons/Smile-add.svg"
import at from "../../assets/tasks-modal-window-icons/at.svg"
import link from "../../assets/tasks-modal-window-icons/link-2.svg"
import commentAva from "../../assets/tasks-modal-window-icons/24.svg"
import {Divider} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import configuratedFetch from "../../fetch/configuratedFetch";
import {fetchTasksDetail, isLoadingActions} from "../../store/actions";

function TaskDetailMainComment() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser.currentUser.data && state.currentUser.currentUser.data.user)
  const task = useSelector(state => state.tasks.taskDetail && state.tasks.taskDetail.data)

  function fetchComment() {
    comment !== "" &&dispatch(isLoadingActions(true))
    comment !== "" && configuratedFetch("PATCH", `todo/${task.id}/`, {["description"]: comment})
      .then(() => {
        setComment("")
        dispatch(fetchTasksDetail(task.id))
        dispatch(isLoadingActions(false))
      })
  }

  const comments = currentUser && task ? [
    {
      comment: task && task.description,
      date: "19 Апреля 2019, 09:55",
      user: `${currentUser["first_name"]} ${currentUser["last_name"]}`
    },
    {
      comment: "Значимость этих проблем настолько очевидна, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом сложившаяся структура организации требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.",
      date: "19 Апреля 2019, 09:55",
      user: "Александров Александр"
    },
    {
      comment: "Значимость этих проблем настолько очевидна, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом сложившаяся структура организации требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.",
      date: "19 Апреля 2019, 09:55",
      user: "Александров Александр"
    },
    {
      comment: "Значимость этих проблем настолько очевидна, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом сложившаяся структура организации требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.",
      date: "19 Апреля 2019, 09:55",
      user: "Александров Александр"
    },
    {
      comment: "Значимость этих проблем настолько очевидна, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом сложившаяся структура организации требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.",
      date: "19 Апреля 2019, 09:55",
      user: "Александров Александр"
    },
    {
      comment: "Значимость этих проблем настолько очевидна, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом сложившаяся структура организации требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.",
      date: "19 Апреля 2019, 09:55",
      user: "Александров Александр"
    },
    {
      comment: "Значимость этих проблем настолько очевидна, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом сложившаяся структура организации требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.",
      date: "19 Апреля 2019, 09:55",
      user: "Александров Александр"
    },
    {
      comment: "Значимость этих проблем настолько очевидна, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Таким образом сложившаяся структура организации требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.",
      date: "19 Апреля 2019, 09:55",
      user: "Александров Александр"
    },
  ] : null

  return (
    <div className={style.mainCont}>
      <ul className={style.comments}>
        {
          comments && comments.map((c, i) => (
            <li key={i} className={style.comment}>
              <img src={commentAva} className={style.commentAva} alt="comment-author-avatar.svg"/>
              <span className={style.commentCont}>
                  <span className={style.head}>
                    <p className={style.authorName}>{c.user}</p>
                    <span className={style.createdDate}>{c.date}</span>
                  </span>
                  <p className={style.text}>{c.comment}</p>
                </span>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default TaskDetailMainComment;
