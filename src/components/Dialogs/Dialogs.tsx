import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {sendMessageBody, updateNewMessageBodyAC} from "../../redux/dialog-reducer";
import {RootReducerType} from "../../redux/redux-store";
import {Dispatch} from "redux";


export type DialogsDataPropsType = {
    dispatch: Dispatch
    store: RootReducerType
}


export const Dialogs = (props: DialogsDataPropsType) => {
    //достаем диалогпЭйдж из стора
    let state = props.store.dialogsPage
    const onSendMessageClick = () => {
        props.dispatch(sendMessageBody())

    };
    const onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyAC(body))

    };
    let newMessageBody = state.newMessageBody;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>)}

            </div>
            <div className={s.messages}>
                {state.messages.map((m) => <Message key={m.id} message={m.message}/>)}
            </div>
            <div>
            <textarea value={newMessageBody} placeholder="Введите Ваше сообщение"  onChange={onNewMessageChange}>

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

