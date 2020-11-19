import React from "react";
import style from "./header.module.sass"
import {NavLink} from "react-router-dom";
import irokezHeadLogo from "../../assets/Logo.svg"
import notificationIcon from "../../assets/bell.svg"
import Divider from '@material-ui/core/Divider';

function Header () {
  return (
    <Header className={style.mainCont}>
      <NavLink>
        <img src={irokezHeadLogo} className={style.logo} alt="logo"/>
        <Divider orientation="vertical" flexItem />
        <button>
          <img src={notificationIcon} alt="bell"/>
          Сообщений нет
        </button>
      </NavLink>
    </Header>
  )
}

export default Header;