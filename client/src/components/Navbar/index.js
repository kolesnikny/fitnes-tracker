import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-dark bg-dark bg-dark navbar-expand-lg">
                    <Link to="/" className="navbar-brand">
                        Excercises Tracker
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="navbar-link">
                                    Excercises
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="navbar-link">
                                    Create Excercise Log
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/user" className="navbar-link">
                                    Create User
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
