import React from 'react';
import s from '../Post/Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number

}
export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://theonering.ru/_pu/0/28640742.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

