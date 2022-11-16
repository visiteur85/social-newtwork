import React from 'react';
import s from '../Profile/Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export type ProfilepropsType = {}
export const Profile = (props: ProfilepropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

