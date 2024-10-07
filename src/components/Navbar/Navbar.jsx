import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material"
import useStyles from './style.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../App.css'
const Navbar = () => {
    const classes = useStyles()
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };
    return (
        <AppBar>
                <Toolbar className={classes.appBar}>
                <div className={darkMode ? 'app dark-mode' : 'app light-mode'} style={{display:'flex',width:'100%',margin:'0px'}}>
                
                <Link to={'/'}><Typography variant='h5' className={classes.task}>Task1</Typography></Link>
                    <Link to={'/task2'}><Typography variant='h5' className={classes.task}>Task2</Typography></Link>
                    <Link to={'/task3'}><Typography variant='h5' className={classes.task}>Task3</Typography></Link>
                    <Link to={'/task4'}><Typography variant='h5' className={classes.task}>Task4</Typography></Link>
                    <Link to={'/task5'}><Typography variant='h5' className={classes.task}>Task5</Typography></Link>
                    <button className={classes.toggleButton}onClick={toggleTheme}>
                            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                
                </div>
                </Toolbar>
                </AppBar>
        
    )
}

export default Navbar
