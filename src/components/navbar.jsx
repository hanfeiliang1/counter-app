import React, { Component } from 'react';

//stateless functional componenet, cannot use lifecycel hooks here, only in Class
const NavBar = ({totalCounters}) =>{
    return(
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
            </span>
        </a>
    </nav>
    )

}
//class NavBar is removed 

export default NavBar;