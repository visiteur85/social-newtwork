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

    const dialogsData = [
        {id: "1", name: "Pavel"},
        {id: "3", name: "Andrew"},
        {id: "3", name: "Dima"},
        {id: "4", name: "Vlad"},
    ]

    const messagesData = [
        {id:"1", message: "Hi"},
        {id:"2", message: "How are you"},
        {id:"3", message: "Yo"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>

            </div>

        </div>
    );
};

