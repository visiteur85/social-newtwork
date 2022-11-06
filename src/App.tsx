import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Navigate, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {IAm404} from "./components/404/IAm404";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";


export type AppPropsType = {
state: RootStateType
    addPost:(newPost:string)=>void

}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">

            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу profile*/}
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile posts={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path={'/dialogs'} element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/*'} element={<IAm404/>}/>
                </Routes>

            </div>


        </div>
    );
}

export default App;
