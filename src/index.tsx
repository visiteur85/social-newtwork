import React from 'react';

import './index.css';

import {addPost, RootStateType, state, subscribe, updateNewPostText} from "./redux/state";

import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);

export const renderTree = () => {
    // createRoot(container!) if you use TypeScript


    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        ,
    );
}
renderTree()
subscribe(renderTree)