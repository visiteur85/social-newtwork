import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import {LinearProgress} from "@mui/material";
import {ProfileFromServerType} from "../../../redux/profile-reducer";


type PropsType = {
    profile:ProfileFromServerType | null
}
export const ProfileInfo = (props:PropsType) => {
    if (!props.profile) {
        return <LinearProgress/>
    }
    return (
        <div>
            <div>
                <img className={s.imgContent}
                     src="https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/8/5/8515_1.jpg"
                     alt=""/>
            </div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                ava+description</div>
        </div>
    );
};
