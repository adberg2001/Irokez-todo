import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import style from "./loader.module.sass"


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF4C00'
    }
  },
});

function Loader() {
  return (
    <ThemeProvider theme={theme}>
      <div className={style.mainCont}>
        <CircularProgress style={{marginTop: "100px"}} color="primary"/>
      </div>
    </ThemeProvider>
  )
}

export default Loader