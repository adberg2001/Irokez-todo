import React, {useRef, useState} from "react";
import style from "./sub-task-row.module.sass"
import {fetchTasks, fetchTasksDetail, isLoadingActions} from "../../store/actions";
import {useDispatch} from "react-redux";
import fetchRequest from "../../fetch/configuratedFetch";
import check from "../../assets/tasks_panel_icons/check.svg";

function SubTaskRow({task, subTasks}) {
  const dispatch = useDispatch();

  function isLast(r) {
    return r === subTasks.length - 1;
  }

  function isFirst(r) {
    return r === 0;
  }

  function handleToggleStatus(id, status) {
    dispatch(isLoadingActions(true))
    const data = {
      sub_tusk: [
        {id: id, status: !status},
      ],
      is_primary: false,
    }

    fetchRequest('PATCH', `todo/${id}/`, data)
      .then(() => {
        // dispatch(fetchTasksDetail(task.id))
        // dispatch(fetchTasks())

        dispatch(isLoadingActions(false))
      })
  }

  return (
    <ul className={style.mainCont}>
      {
        subTasks.length ? subTasks.map((row, i) => (
          <li className={style.subTask_row} key={row.id}>
            <input className={style.taskStatusCheckbox} type="checkbox"
                   onChange={() => handleToggleStatus(row.id, row.status)} id={row.id}/>
            {
              <label htmlFor={row.id} className={style.stepper_figure}>
                <div
                  className={`${isFirst(i) ? style.subTask_transparentStick : style.subTask_Stick} ${row.status && !isFirst(i) && style.checkedColor}`}/>
                {
                  row.status ? <img className={style.checkIcon} src={check} alt=""/>
                    : <div className={style.subTask_Circle}/>
                }
                <div
                  className={`${isLast(i) ? style.subTask_transparentStick : style.subTask_Stick} ${row.status && !isLast(i) && style.checkedColor}`}/>
              </label>
            }
            <p className={style.subTask_title}>{row.title}</p>
          </li>
        )): ""
      }
    </ul>
  )
}

export default SubTaskRow;