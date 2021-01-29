import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav className={classes.Navigation_Wrapper}>
                <NavigationItems className={classes.Navigation} />
            </nav>
        </header>
    );
};

export default toolbar;