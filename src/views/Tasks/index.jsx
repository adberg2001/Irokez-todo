import React, {useState} from "react";
import style from "./style.module.sass"
import MainWrapper from "../../components/MainWrapper/MainWrapper"
import List from "../../components/Tasks/List/List";
import TasksPart from "../../components/Tasks/Tasks/Tasks";

function Tasks(){


  const [category, setCategory] = useState('')

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