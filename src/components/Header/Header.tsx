import React from 'react';
import s from '../Header/Header.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login: string | null
    email: string | null
}
export const Header = (props: PropsType) => {
    return (

        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png"
                alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={"/login"}>Login</NavLink>}
            </div>

        </header>


    );
};

