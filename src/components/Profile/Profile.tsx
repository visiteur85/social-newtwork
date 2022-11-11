import React from 'react';
import s from '../Profile/Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../redux/state";
import {ProfilePageType} from "../../redux/profile-reducer";


export type ProfilepropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}
export const Profile = (props: ProfilepropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

