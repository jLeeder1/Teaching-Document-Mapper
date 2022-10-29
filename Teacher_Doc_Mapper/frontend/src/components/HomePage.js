import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import About from "./About";
import FileUpload from "./FileUpload";

export default class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<FileUpload />}></Route>
                    <Route path='about' element={<About />}></Route>
                </Routes>
            </Router>
        )
    }
}