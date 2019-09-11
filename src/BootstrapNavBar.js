import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BootstrapNavBar extends Component{
  render(){
    return(
		<nav className="navbar navbar-default navbar-fixed-top">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <a className="navbar-brand" href="#">WebSiteName</a>
		    </div>
		    <div className="nav navbar-nav">
		    	<Link to="/">Home</Link>
		      	<Link to="/About">About</Link>
		      	<Link to="/Atlanta">Atlanta</Link>
		      	<Link to="/Images">Images</Link>
		      	
		    </div>
		  </div>
		</nav>    
	)
  }
}

export default BootstrapNavBar;