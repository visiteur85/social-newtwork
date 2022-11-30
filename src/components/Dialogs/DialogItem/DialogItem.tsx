import React from 'react';
import s from '../../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsTime = {
    name: string
    id: number
}


export const DialogItem = (props: DialogItemPropsTime) => {
    return (
        <div className={s.dialog}>
            <NavLink
                     to={`/dialogs/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    )
}





