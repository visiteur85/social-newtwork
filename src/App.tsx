import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/1200px-ZDF_logo%21_Logo_2021.svg.png"
                    alt="logo"/>
            </header>
            <nav className='nav'>
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className='content'>
                <div>
                    <img
                        src="https://www.komar.de/ru/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/8/5/8515_1.jpg"
                        alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>My posts
                <div>New post</div>
                    <div>
                        <div>post1</div>
                        <div>post2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
