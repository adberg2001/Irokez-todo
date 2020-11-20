import React from "react";
import style from "style.module.sass"
import List from "./List/List";
import TasksPart from "./Tasks/Tasks";

function Tasks(){
  return(
    <div className={style.mainCont}>
      <List/>
      <TasksPart/>
    </div>
  )
}

export default Tasks;