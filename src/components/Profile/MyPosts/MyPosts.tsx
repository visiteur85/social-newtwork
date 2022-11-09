import React from 'react';
import {Post} from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'
import {ActionsType, addPostActionCreator, PostPropsType, updateNewPostActionCreator} from "../../../redux/state";


export type MyPostPropsType = {
    posts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}
export const MyPosts = (props: MyPostPropsType) => {
    let newPostElement: any = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostActionCreator())
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch(updateNewPostActionCreator(text))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div>
                {props.posts.map((p) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}


            </div>
        </div>
    );
};

