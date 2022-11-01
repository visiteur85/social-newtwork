import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsTime = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsTime) => {
    return (
        <div className={s.dialog}>
            <NavLink className={({isActive}) => isActive ? s.active : s.dialog}
                     to={`/dialogs/${props.id}`}>
                {props.name}
            </NavLink>
        </div>
    )
}

export type MessageType = {
    message: string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Pavel"} id={"1"}/>
                <DialogItem name={"Andrew"} id={"2"}/>
                <DialogItem name={"Dima"} id={"3"}/>
                <DialogItem name={"Vlad"} id={"4"}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you'}/>
                <Message message={'Yo'}/>
            </div>

        </div>
    );
};

