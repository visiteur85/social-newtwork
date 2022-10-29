import React from 'react';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>My posts
            <div>
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div>
                <Post message={'Hi, how are you'}/>
                <Post message={'it s my first post'}/>


            </div>
        </div>
    );
};

