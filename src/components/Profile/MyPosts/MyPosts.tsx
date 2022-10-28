import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
               <Post/>

            </div>
        </div>
    );
};

