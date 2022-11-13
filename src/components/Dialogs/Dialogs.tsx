import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {DialogPropsType, MessagePropsType} from "../../redux/dialog-reducer";



export type DialogsDataPropsType = {
    sendMessageBody: () => void
    updateNewMessageBodyAC: (body: string) => void
    dialogs: DialogPropsType[]
    messages: MessagePropsType[]
    newMessageBody: string
}


export const Dialogs = (props: DialogsDataPropsType) => {
    //достаем диалогпЭйдж из стора

    const onSendMessageClick = () => {
        props.sendMessageBody()

    };
    const onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.updateNewMessageBodyAC(body)

    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)}

            </div>
            <div className={s.messages}>
                {props.messages.map((m) => <Message key={m.id} message={m.message}/>)}
            </div>
            <div>
            <textarea value={props.newMessageBody} placeholder="Введите Ваше сообщение" onChange={onNewMessageChange}>

            </textarea>
                <div>
                    <button
                        onClick={onSendMessageClick}
                    >
                        Send
                    </button>
                </div>
            </div>

        </div>
    );
};

