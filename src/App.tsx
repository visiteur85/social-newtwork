import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {IAm404} from "./components/404/IAm404";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";



// export type AppPropsType = {}

const App = () => {
    return (
        <div className="app-wrapper">

            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>
                {/*<Routes>*/}

                {/*    /!*в начале мы попадаем на страницу '/' и переходим сразу на страницу profile*!/*/}
                {/*    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>*/}
                {/*    <Route path={"/profile/*"} element={<ProfileContainer/>}/>*/}
                {/*    <Route path={"/dialogs"} element={<DialogsContainer/>}*/}
                {/*    />*/}
                {/*    <Route path={"/users"} element={<UsersContainer/>}*/}
                {/*    />*/}
                {/*    <Route path={'/news'} element={<News/>}/>*/}
                {/*    <Route path={'/music'} element={<Music/>}/>*/}
                {/*    <Route path={'/settings'} element={<Settings/>}/>*/}
                {/*    <Route path={'/*'} element={<IAm404/>}/>*/}
                {/*</Routes>*/}
                <Route exact path={"/"} render={() => <ProfileContainer/>}/>
                <Route exact path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route exact path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                <Route exact path={"/users"} render={() => <UsersContainer/>}/>
                <Route exact path={"/login"} render={() => <Login/>}/>

            </div>


        </div>
    );
}

export default App;
