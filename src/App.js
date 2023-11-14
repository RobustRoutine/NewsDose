import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} category='general' heading='Top Headlines'/>} />
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} category='business' heading='Business News' />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} category='entertainment' heading='Entertainment News' />}/>
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} category='general' heading='General News' />}/>
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} category='health' heading='Health News' />}/>
            <Route exact path="/science" element={<News key="science" pageSize={9} category='science' heading='Science News' />}/>
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} category='sports' heading='Sports News' />}/>
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} category='technology' heading='Technology News' />}/>
          </Routes>
        </div>
      </Router>
    )
  }
}