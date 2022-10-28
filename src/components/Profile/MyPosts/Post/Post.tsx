import React from 'react';
import s from '../Post/Post.module.css'


export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://theonering.ru/_pu/0/28640742.jpg" alt=""/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

