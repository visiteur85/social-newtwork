import React from 'react';
import s from "./MyPosts.module.css"

import {} from "../../../App";



import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, ProfilePageType, updateNewPostAC} from "../../../redux/profile-reducer";



type PropsType = {
    profilePage: ProfilePageType
    dispatch: Dispatch

};
export const MyPostsContainer = (props: PropsType) => {


    const addPost = () => {
        props.dispatch(addPostActionCreator())

    };


    const onPostChange = (text:string) => {

        props.dispatch(updateNewPostAC(text));
    };


    return (
        <MyPosts  updateNewPostText={onPostChange}
                  addPost={addPost}
                  newPostText={props.profilePage.newPostText}
                  posts={props.profilePage.posts}
        />

    );
};