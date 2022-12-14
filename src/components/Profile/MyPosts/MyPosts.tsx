import React from 'react';
import {Post} from "./Post/Post";
import s from '../MyPosts/MyPosts.module.css'
import {MyPostsPropsType} from "./MyPostsContainer";


// export type MyPostPropsType = {
//
// }
export const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement: any = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }
    }

    const onPostChange = () => {
        console.log(newPostElement.current.value)
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text)
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

