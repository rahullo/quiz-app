import React, { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import './navigation.styles.css';

const Navigation = () => {
    return (
        <Fragment>
            <nav className="navigation">
                <ul className="nav-links">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/quiz'}>Quiz</Link>
                    <Link to={'https://play.google.com/store/apps/developer?id=Testline'}>Download App</Link>
                </ul>
            </nav>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;