import React, { Component } from 'react';
import "./App.css";
import Comment from './Comment';


let auth={
    avatarURL:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    name:"makh"
}
export default class App extends Component {
    render() {
        return (
            <div>
                 <Comment author={auth} date={new Date()} />
            </div>
        )
    }
}
