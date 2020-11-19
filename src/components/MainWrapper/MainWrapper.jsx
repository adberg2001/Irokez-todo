import React, {useEffect} from "react";
import Header from "../../layouts/Header/Header";
import style from "./main-wrapper.module.sass"
import request from "../../fetch/configuratedFetch"

function MainWrapper({children}) {

  useEffect(() => {
    request("POST", "token/login/", {
      email: "test13@irokez.me",
      password: "GerQKfCv"
    }).then((json) => {
      console.log(json)
      localStorage.setItem('token', json.token)
    })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className={style.parent}>
      <Header/>
      <div className={style.main}>
        {children}
      </div>
    </div>
  )
}

export default MainWrapper;