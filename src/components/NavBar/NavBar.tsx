import React from 'react';
import s from '../NavBar/NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className={s.nav}>

            <div><NavLink to='/profile' className={({isActive}) => isActive ? s.active : s.item}>Profile</NavLink></div>
            <div><NavLink className={({isActive}) => isActive ? s.active : s.item} to='/dialogs'>Messages</NavLink></div>
            <div><NavLink className={({isActive}) => isActive ? s.active : s.item} to='/news'>News</NavLink></div>
            <div><NavLink className={({isActive}) => isActive ? s.active : s.item} to='/music'>Music</NavLink></div>
            <div><NavLink className={({isActive}) => isActive ? s.active : s.item} to='/settings'>Settings</NavLink></div>

        </nav>
    );
};

