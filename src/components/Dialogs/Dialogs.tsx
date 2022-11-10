import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {sendMessageBody, StoreType, updateNewMessageBodyAC} from "../../redux/state";


export type DialogsDataPropsType = {
    store: StoreType
}


export const Dialogs = (props: DialogsDataPropsType) => {
    //достаем диалогпЭйдж из стора
    let state = props.store.getState().dialogsPage;
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageBody())

    };
    const onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyAC(body))

    };
    let newMessageBody = props.store._state.dialogsPage.newMessageBody;


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

