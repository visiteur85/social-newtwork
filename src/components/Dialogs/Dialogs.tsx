import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsTime = {
    name: string
    id: string
}
export type DialogsDataType = {
    id:string
    name:string
}
export type MessagesDataType = {
    id:string
    message:string
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

    const dialogsData: DialogsDataType[] = [
        {id: "1", name: "Pavel"},
        {id: "3", name: "Andrew"},
        {id: "3", name: "Dima"},
        {id: "4", name: "Vlad"},
    ]

    const messagesData: MessagesDataType[] = [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you"},
        {id: "3", message: "Yo"},
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)}


            </div>
            <div className={s.messages}>
                {messagesData.map((m) => <Message key={m.id} message={m.message}/>)}

            </div>

        </div>
    );
};

