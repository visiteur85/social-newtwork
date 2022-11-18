import React from 'react';


export type DialogPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
};
export type DialogPropsType = {
    id: number
    name: string

};
export type MessagePropsType = {
    id: number
    message: string

};

let initialState: DialogPageType = {
    dialogs: [
        {id: 1, name: "Pavel"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Olia"},
        {id: 5, name: "Sasha"},
    ]
    ,
    messages: [
        {id: 1, message: "HI"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Peace"},
        {id: 4, message: "Peace"},
        {id: 5, message: "Peace"},
    ],
    newMessageBody: ""

};

export const dialogsReducer = (state = initialState, action: DialogsActionsType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY": {
            // state.newMessageBody = action.body;
            // return state
            let newState = {...state, messages: [...state.messages]}
            newState.newMessageBody = action.body;
            return newState
        }
        case "SEND-MESSAGE": {

            let newState = {...state, messages: [...state.messages]}
            let body = state.newMessageBody;
            newState.newMessageBody = "";
            
            newState.messages.push({id: 6, message: body})
            return newState
        }
    }
    return state
}
export type DialogsActionsType = updateNewMessageBodyActionType | sendMessageBodyActionType;
export type updateNewMessageBodyActionType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
};
export type sendMessageBodyActionType = {
    type: "SEND-MESSAGE"

};
export let updateNewMessageBodyAC = (body: string): updateNewMessageBodyActionType => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body

    } as const
};
export let sendMessageBody = (): sendMessageBodyActionType => {
    return {
        type: "SEND-MESSAGE",


    } as const
};
