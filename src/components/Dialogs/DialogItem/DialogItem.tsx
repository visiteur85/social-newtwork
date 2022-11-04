import React from 'react';
import s from '../../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsTime = {
    name: string
    id: string
}


export const DialogItem = (props: DialogItemPropsTime) => {
    return (
        <div className={s.dialog}>
            <NavLink className={({isActive}) => isActive ? s.active : s.dialog}
                     to={`/dialogs/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    )
}





