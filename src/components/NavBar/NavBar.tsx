import React from 'react';
import s from '../NavBar/NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div ><a className={`${s.item} ${s.active}`} href="src/components/NavBar/NavBar">Profile</a></div>
            <div ><a className={s.item} href="src/components/NavBar/NavBar">Messages</a></div>
            <div ><a className={s.item} href="src/components/NavBar/NavBar">News</a></div>
            <div ><a className={s.item} href="src/components/NavBar/NavBar">Music</a></div>
            <div ><a className={s.item} href="src/components/NavBar/NavBar">Settings</a></div>
        </nav>
    );
};

