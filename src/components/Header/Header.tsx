import React from 'react';
import s from '../Header/Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png"
                alt="logo"/>
        </header>
    );
};

