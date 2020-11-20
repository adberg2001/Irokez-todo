import React from "react";
import style from "./style.module.sass"
import MainWrapper from "../../components/MainWrapper/MainWrapper"
import List from "../../components/Tasks/List/List";
import TasksPart from "../../components/Tasks/Tasks/Tasks";

function Tasks(){
  return(
    <MainWrapper>
      <div className={style.mainCont}>
        <List/>
        <TasksPart/>
      </div>
    </MainWrapper>
  )
}

export default Tasks;