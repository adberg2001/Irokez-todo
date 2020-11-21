import React from "react"
import style from "./task-row.module.sass"
import Autocomplete from '../../components/Autocomplete/Autocomplete'

function TaskRow(props){
  const {tasks} = props;
  return (
    <div>
      {
        tasks.map(task => {

          return (
            <div className={style.taskRow} key={task.id}>
              <Autocomplete task={task}/>
              <h2 className={style.taskRow_title}>
                {task.title}
              </h2>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskRow;
