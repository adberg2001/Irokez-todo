import React from "react";
import style from "./header.module.sass"
import {NavLink} from "react-router-dom";
import irokezHeadLogo from "../../assets/Logo.svg"
import notificationIcon from "../../assets/bell.svg"
import {Divider, Button} from '@material-ui/core';

function Header() {
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
      <Button>
        <svg style={{marginRight: "5px"}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             className="eva eva-person-outline hide-elem" fill="#959595">
          <g data-name="Layer 2">
            <g data-name="person">
              <rect width="24" height="24" opacity="0"/>
              <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/>
              <path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/>
            </g>
          </g>
        </svg>
        Войти
      </Button>
    </header>
  )
}

export default Header;