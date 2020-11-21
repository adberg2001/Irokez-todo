import React, {useEffect} from "react";
import Header from "../../components/Header/Header";
import style from "./main-wrapper.module.sass"
import Dashboard from "../../components/Dashboard/Dashboard";
import {useDispatch} from "react-redux";
import {fetchCurrentUser} from "../../store/actions"

function MainWrapper({children}) {
  const currentUser = {email: "test13@irokez.me", password: "GerQKfCv"}
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentUser(currentUser));
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