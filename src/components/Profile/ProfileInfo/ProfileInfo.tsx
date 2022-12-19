import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import {LinearProgress} from "@mui/material";
import {ProfileFromServerType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


type PropsType = {
    profile: ProfileFromServerType | null
    status:string
    updateStatus:(status:string) => void
}
export const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
        return <LinearProgress/>
    }
    return (
        <div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                ava+description</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />

        </div>
    );
};
