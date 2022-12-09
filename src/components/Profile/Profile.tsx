import React from 'react';
import s from '../Profile/Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileFromServerType} from "../../redux/profile-reducer";


export type ProfilepropsType = {
    profile: ProfileFromServerType | null
}

export const Profile = (props: ProfilepropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

