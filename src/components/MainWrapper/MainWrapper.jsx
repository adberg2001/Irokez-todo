import React, {useEffect} from "react";
import Header from "../../layouts/Header/Header";
import style from "./main-wrapper.module.sass"
import authRequest from "../../fetch/authRequest";
import Dashboard from "../../layouts/Dashboard/Dashboard";

function MainWrapper({children}) {

  useEffect(() => {
    authRequest({
      email: "test13@irokez.me",
      password: "GerQKfCv"
    })
  }, [])

  return (
    <div className={style.parent}>
      <Header/>
      <div className={style.main}>
        <Dashboard/>
        {children}
      </div>
    </div>
  )
}

export default MainWrapper;