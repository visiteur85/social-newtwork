import React from 'react';
import { ActionsType } from './state';

export type ProfilePageType = {
    posts: Array<PostPropsType>,
    newPostText: string
};
export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export const profileReducer = (state: ProfilePageType, action:ActionsType )=> {
    switch(action.type){
        case "ADD-POST": {
            let newPost: PostPropsType = {id: 5, message: state.newPostText, likesCount: 15};

            state.posts.push(newPost);
            state.newPostText = "";
            return state
        }
        case "UPDATE-NEW-POST": {
            state.newPostText = action.newText;}
            return state

    }
    return state
}

export type AddPostActionType = {
    type: "ADD-POST"
};

export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST"
    newText: string

};

export const addPostActionCreator = ():AddPostActionType=> {
    return {
        type: "ADD-POST"
    }as const
};

export let updateNewPostAC = (text:string):UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST",
        newText:text
    }as const
};


