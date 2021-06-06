import React, { lazy, Suspense} from 'react'
import '../css/Header.css'
import lazyCallBack from "../js/lazyCallBack";
import {IconButton, Toolbar, Typography} from "@material-ui/core";


const AppBar = lazy( () => import('@material-ui/core/AppBar'))
const MenuIcon = lazy( () => import('@material-ui/icons/Menu'))

const Header = (props) => {
    return (
        <Suspense fallback={lazyCallBack('header')}>
            <header>
                <AppBar position="static" className={'nav-bar'}>
                    <Toolbar>
                        <IconButton edge='start' className={''} color='inherit' aria-label='menu'>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='h5'>Pollen</Typography>
                    </Toolbar>
                </AppBar>
            </header>
        </Suspense>
    )
}

export default Header