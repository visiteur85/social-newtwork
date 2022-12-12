import {RootReducerType} from "../../redux/redux-store";

import {Profile} from "./Profile";
import React from "react";
import {getProfileThunkCreator, ProfileFromServerType} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    //разобраться строка или число
    userId: any
}
type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType
type PropsType = {

    profile: ProfileFromServerType | null
    getProfileThunkCreator: (userId: number) => void
    isAuth: boolean
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

//эту переменную нужно будет вставить в самый конец вместо ProfileAPIContainer
// let AuthRedirectComponent:any = WithAuthRedirect(ProfileAPIContainer);
type MapStateToPropsType = {
    profile: ProfileFromServerType | null


};

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,

    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator}),
    withRouter,)
(ProfileAPIContainer)