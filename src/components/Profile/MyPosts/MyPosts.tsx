import React from 'react';
import {Post} from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'


export type PostsType = {
    id: string
    message: string
    likesCount: number
}
export const MyPosts = () => {
    const posts: PostsType[] = [
        {id: "1", message: "How are you", likesCount: 12},
        {id: "2", message: "It s my first post", likesCount: 2},

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
                {posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}


            </div>
        </div>
    );
};

