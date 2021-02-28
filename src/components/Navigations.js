import React, { Component } from 'react';
import logo from "../logo.svg";

class Navigation extends Component {
    render() {
        return (
            <div className="App">
                <nav className={"navbar navbar-dark bg-dark"}>
                    <a href="" className={""}>
                        Tasks
                    </a>
                </nav>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Navigation;
