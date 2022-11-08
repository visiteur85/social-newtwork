import React from 'react';
import './index.css';

import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType, updateNewPostText} from "./redux/state";



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement) ;

export const renderTree = (state: RootStateType) => {
    // createRoot(container!) if you use TypeScript


    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        ,

    );
}