import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink className={({isActive}) => isActive ? s.active : s.dialog}
                             to={"/dialogs/1"}>
                        Pavel
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={({isActive}) => isActive ? s.active : s.dialog}
                             to={"/dialogs/2"}>
                        Andrew
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={({isActive}) => isActive ? s.active : s.dialog}
                             to={"/dialogs/3"}>
                        Dima
                    </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink className={({isActive}) => isActive ? s.active : s.dialog}
                             to={"/dialogs/4"}>
                        Vlad
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}> How are you</div>
                <div className={s.message}>Yo</div>
            </div>

        </div>
    );
};

