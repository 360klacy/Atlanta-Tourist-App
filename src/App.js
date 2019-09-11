import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import BootstrapNavBar from './BootstrapNavBar';
import Images from './Images';



class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Route path="/" component={BootstrapNavBar} />
          <div className="container main">
            <Route path ="/" exact component={Home} />
            <Route path ="/images" component={Images} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
