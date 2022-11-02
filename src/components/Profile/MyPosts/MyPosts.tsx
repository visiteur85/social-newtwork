import React from 'react';
import {Post} from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'

export const MyPosts = () => {
    const postsData = [
        {id:"1", message: "How are you", likesCount: 12},
        {id:"2", message: "It s my first post", likesCount: 2},

    ]
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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>

            </div>
        </div>
    );
};

