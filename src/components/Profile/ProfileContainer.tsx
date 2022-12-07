import {RootReducerType} from "../../redux/redux-store";

import {Profile} from "./Profile";
import React from "react";
import {getProfileThunkCreator, ProfileFromServerType} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    //разобраться строка или число
    userId: any
}
type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType
type PropsType = {

    profile: ProfileFromServerType | null
    getProfileThunkCreator: (userId: number) => void
};

export class ProfileAPIContainer extends React.Component<CommonPropsType> {
    componentDidMount() {


        let userId = this.props.match.params.userId;
        console.log(userId)
        if (!userId) {
            userId = 2
        }
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileFromServerType | null

};

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {profile: state.profilePage.profile}
}


let WithUrlDataContainer = withRouter(ProfileAPIContainer);

export const ProfileContainer = connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainer)