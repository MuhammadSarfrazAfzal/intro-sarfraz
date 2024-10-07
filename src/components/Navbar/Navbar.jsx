import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material"
import useStyles from './style.js'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar>
                <Toolbar className={classes.appBar}>
                    <Link to={'/'}><Typography variant='h5' className={classes.task}>Task1</Typography></Link>
                    <Link to={'/task2'}><Typography variant='h5' className={classes.task}>Task2</Typography></Link>
                    <Link to={'/task3'}><Typography variant='h5' className={classes.task}>Task3</Typography></Link>                    
                    <Link to={'/task4'}><Typography variant='h5' className={classes.task}>Task4</Typography></Link>
                    <Link to={'/task5'}><Typography variant='h5' className={classes.task}>Task5</Typography></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
