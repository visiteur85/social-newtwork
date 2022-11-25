import {RootReducerType} from "../../redux/redux-store";
import axios from "axios";

import {Profile} from "./Profile";
import React from "react";
import {ProfileFromServerType, setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";

type PropsType = {
    setUserProfile:(profile: ProfileFromServerType | null)=>void
    profile:ProfileFromServerType | null
};

export  class ProfileAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`,
            {
                headers: {
                    'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                }
            })
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }};

type MapStateToPropsType = {
    profile: ProfileFromServerType | null

};

let mapStateToProps = (state: RootReducerType):MapStateToPropsType => {
    return {profile:state.profilePage.profile}
}

export const ProfileContainer =   connect (mapStateToProps, {setUserProfile}) (ProfileAPIContainer)