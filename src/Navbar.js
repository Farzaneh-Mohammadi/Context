import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/core/Search';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core/styles';
// import classes from "*.module.scss"
import { ThemeContext } from './ThemeContext';

import "./NavStyle.css"


export default class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const {isDarkMode, toggleTheme} = this.context;
    return (
      <div >  
      <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
        <Typography className='switch-title'>Change Theme</Typography>
        <Switch onChange={toggleTheme}/>
        <InputBase placeholder='Search' className="inp" />
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}
