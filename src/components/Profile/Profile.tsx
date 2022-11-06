import React from 'react';
import s from '../Profile/Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


export type ProfilepropsType = {
    posts: ProfilePageType
    addPost:(newPost:string)=>void
}
export const Profile = (props:ProfilepropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts.posts} addPost={props.addPost}/>
        </div>
    );
};

