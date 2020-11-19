import React, {useState} from "react";
import List from "@material-ui/core/List";
import SchoolIcon from "@material-ui/icons/School";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import BusinessIcon from "@material-ui/icons/Business";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import AmpStoriesIcon from "@material-ui/icons/AmpStories";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {NavLink} from "react-router-dom";

import moduleClasses from "./dashboard.module.sass";


export default function Dashboard() {

  const [usersListDropdown, setUsersListDropdown] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [examsDropdown, setExamsDropdown] = useState(false);
  const [financeDropdown, setFinanceDropdown] = useState(false);
  const [analyticsDropdown, setAnalyticsDropdown] = useState(false);

  const handleUsersListDropdownClick = () => {
    setUsersListDropdown(!usersListDropdown);
  };

  const handleCoursesDropdownClick = () => {
    setCoursesDropdown(!coursesDropdown);
  };

  const handleExamsDropdownClick = () => {
    setExamsDropdown(!examsDropdown);
  };

  const handleFinanceDropdownClick = () => {
    setFinanceDropdown(!financeDropdown);
  };

  const handleAnalyticsDropdown = () => {
    setAnalyticsDropdown(!analyticsDropdown);
  };

  return (
    <div>
        <List>
          <NavLink to="/">
            <ListItem button key="Home">
              <ListItemIcon>
                <SchoolIcon color="action" style={{fill: "#fff"}}/>
              </ListItemIcon>
              <ListItemText
                className={moduleClasses.DrawerLink}
                primary="Главная"
              />
            </ListItem>
          </NavLink>

          <ListItem
            button
            key="UsersList"
            onClick={handleUsersListDropdownClick}
          >
            <ListItemIcon>
              <PeopleIcon color="action" style={{fill: "#fff"}}/>
            </ListItemIcon>
            <ListItemText
              primary="Пользователи"
              className={moduleClasses.DrawerLink}
            />
            {usersListDropdown ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>

          <Collapse in={usersListDropdown} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to="/adminsList">
                <ListItem
                  button
                  key="UsersList/adminsList"
                >
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Администраторы"
                  />
                </ListItem>
              </NavLink>
              <NavLink to="/trainersList">
                <ListItem
                  button
                  key="UsersList/trainersList"
                >
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Менторы"
                  />
                </ListItem>
              </NavLink>
              <NavLink to="/studentsList">
                <ListItem
                  button
                  key="UsersList/studentsList"
                >
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Студенты"
                  />
                </ListItem>
              </NavLink>
              <NavLink to="/staffMembersList">
                <ListItem
                  button
                  key="UsersList/staffMembers"
                >
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Сотрудники"
                  />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <ListItem button key="Courses" onClick={handleCoursesDropdownClick}>
            <ListItemIcon>
              <MenuBookIcon color="action" style={{fill: "#fff"}}/>
            </ListItemIcon>
            <ListItemText
              className={moduleClasses.DrawerLink}
              primary="Курсы"
            />
            {coursesDropdown ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>

          <Collapse in={coursesDropdown} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to="/courses">
                <ListItem
                  button
                  key="courses/getCourses"
                >
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Курсы"
                  />
                </ListItem>
              </NavLink>

              <NavLink to="/tags">
                <ListItem
                  button
                  key="courses/getTags"
                >
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Тэги"
                  />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <ListItem button key="Klasses">
            <NavLink style={{display: "flex"}} to="/klasses">
              <ListItemIcon>
                <SchoolIcon color="action" style={{fill: "#fff"}}/>
              </ListItemIcon>
              <ListItemText
                className={moduleClasses.DrawerLink}
                primary="Классы"
              />
            </NavLink>
          </ListItem>

          <ListItem button key="Branches">
            <NavLink style={{display: "flex"}} to="/branches">
              <ListItemIcon>
                <BusinessIcon color="action" style={{fill: "#fff"}}/>
              </ListItemIcon>
              <ListItemText
                className={moduleClasses.DrawerLink}
                primary="Филиалы"
              />
            </NavLink>
          </ListItem>

          <ListItem button key="Exams" onClick={handleExamsDropdownClick}>
            <ListItemIcon>
              <CheckIcon color="action" style={{fill: "#fff"}}/>
            </ListItemIcon>
            <ListItemText
              className={moduleClasses.DrawerLink}
              primary="Экзамены"
            />
            {examsDropdown ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>

          <Collapse in={examsDropdown} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to="/exams">
                <ListItem
                  button
                  key="exams/getExams"
                >
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Посмотреть экзамены"
                  />
                </ListItem>
              </NavLink>
              <NavLink to="/exams/addExam">
                <ListItem button key="exams/addExam">
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Добавить экзамен"
                  />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <ListItem button key="finance" onClick={handleFinanceDropdownClick}>
            <ListItemIcon>
              <MonetizationOnIcon color="action" style={{fill: "#fff"}}/>
            </ListItemIcon>
            <ListItemText
              className={moduleClasses.DrawerLink}
              primary="Финансы"
            />
            {financeDropdown ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>

          <Collapse in={financeDropdown} timeout="auto" unmountOnExit>
            <List className="ml-3" component="div" disablePadding>
              <NavLink className="p-0" to="/transactions">
                <ListItem button key="finance/transactions">
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Транзакции"
                  />
                </ListItem>
              </NavLink>

              <NavLink className="p-0" to="/expenseTags">
                <ListItem button key="/wallets">
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Кошельки"
                  />
                </ListItem>
              </NavLink>

              <NavLink className="p-0" to="/expenseTags">
                <ListItem button key="finance/transactions">
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Категории расходов"
                  />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>

          <ListItem button key="Inventories">
            <NavLink style={{display: "flex"}} to="/inventories">
              <ListItemIcon>
                <AmpStoriesIcon color="action" style={{fill: "#fff"}}/>
              </ListItemIcon>
              <ListItemText
                className={moduleClasses.DrawerLink}
                primary="Инвентарь"
              />
            </NavLink>
          </ListItem>

          <ListItem button key="analytics" onClick={handleAnalyticsDropdown}>
            <ListItemIcon>
              <ShowChartIcon color="action" style={{fill: "#fff"}}/>
            </ListItemIcon>
            <ListItemText
              className={moduleClasses.DrawerLink}
              primary="Аналитика"
            />
            {analyticsDropdown ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>

          <Collapse in={analyticsDropdown} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to="/students-analytics">
                <ListItem
                  button
                  key="students-analytics"
                >
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Аналитика по студентам"
                  />
                </ListItem>
              </NavLink>
              <NavLink to="/finance-analytics">
                <ListItem button key="/finance-analytics">
                  <ListItemText
                    className={moduleClasses.DrawerLink}
                    primary="Аналитика по финансам"
                  />
                </ListItem>
              </NavLink>
            </List>
          </Collapse>
        </List>
    </div>
  );
}
