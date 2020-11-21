import React, {useState} from "react";
import style from "./style.module.sass"
import MainWrapper from "../../layouts/MainWrapper/MainWrapper"
import List from "../../layouts/Tasks/List/List";
import TasksPart from "../../layouts/Tasks/Tasks/Tasks";

function Tasks(){

  return(
    <MainWrapper>
      <div className={style.mainCont}>
        <List setCategory/>
        <TasksPart/>
      </div>
    </MainWrapper>
  )
}

export default Tasks;