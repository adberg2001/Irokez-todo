import React from "react";
import style from "./header.module.sass"
import {NavLink} from "react-router-dom";
import irokezHeadLogo from "../../assets/Logo.svg"
import notificationIcon from "../../assets/bell.svg"
import avatar from "../../assets/avatar.svg"
import dropDownIcon from "../../assets/chevron-up.svg"
import {Divider, Button} from '@material-ui/core';
import {useSelector} from "react-redux";

function Header() {

  const currentUser = useSelector(state => state.currentUser.currentUser.data && state.currentUser.currentUser.data.user)

  return (
    <header className={style.header}>
      <div className={style.logo} >
        <NavLink to={"/"} >
          <img src={irokezHeadLogo} alt="logo"/>
        </NavLink>
      </div>
      <div className={style.notificationCont}>
        <Divider orientation="vertical"/>
        <button className={style.notification}>
          <img src={notificationIcon} style={{height: "22px"}} alt="bell"/>
          Сообщений нет
        </button>
        <Divider orientation="vertical"/>
      </div>
      <Button  className={style.personalArea}>
        <span>
          <p className={style.name}>{currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : ""}</p>
          <p className={style.role}>HR-Менеджер</p>
        </span>
        <img src={avatar} className={style.avatar} alt=""/>
        <img src={dropDownIcon} alt=""/>
      </Button>
    </header>
  )
}

export default Header;