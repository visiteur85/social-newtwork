import React from 'react';
import s from '../Profile/Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.imgContent}
                     src="https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/8/5/8515_1.jpg"
                     alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>My posts
                <div>New post</div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    );
};

