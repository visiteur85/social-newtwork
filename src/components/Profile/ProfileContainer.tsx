import {RootReducerType} from "../../redux/redux-store";
import axios from "axios";

import {Profile} from "./Profile";
import React from "react";
import {ProfileFromServerType, setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    //разобраться строка или число
    userId: any
}
type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType
type PropsType = {
    setUserProfile: (profile: ProfileFromServerType | null) => void
    profile: ProfileFromServerType | null
};

export class ProfileAPIContainer extends React.Component<CommonPropsType> {
    componentDidMount() {


        let userId = this.props.match.params.userId;
        console.log(userId)
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
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
    }
};

type MapStateToPropsType = {
    profile: ProfileFromServerType | null

};

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {profile: state.profilePage.profile}
}


let WithUrlDataContainer = withRouter(ProfileAPIContainer);

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainer)