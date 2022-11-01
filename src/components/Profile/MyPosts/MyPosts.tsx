import React from 'react';
import {Post} from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div>
                <Post message={'Hi, how are you'}/>
                <Post message={'it s my first post'}/>
            </div>
        </div>
    );
};

