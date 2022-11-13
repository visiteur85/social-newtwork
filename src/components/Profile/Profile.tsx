import React from 'react';
import s from '../Profile/Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {ProfilePageType} from "../../redux/profile-reducer";
import {Dispatch} from "redux";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type ProfilepropsType = {
    profilePage: ProfilePageType
    dispatch: Dispatch
}
export const Profile = (props: ProfilepropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
               profilePage={props.profilePage}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

