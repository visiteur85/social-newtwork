import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPropsType, MessagePropsType} from "../../redux/state";



export type DialogsDataPropsType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}


export const Dialogs = (props: DialogsDataPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)}


            </div>
            <div className={s.messages}>
                {props.messages.map((m) => <Message key={m.id} message={m.message}/>)}

            </div>

        </div>
    );
};

