import React from 'react';
import {Link} from 'react-router-dom';


const SideBar = () => {

    return (
        <div className="sidebar" data-color="purple" data-background-color="white">
            <div className="logo">
                <a
                    href="/"
                    className="simple-text logo-normal"
                    style={{marginRight: 40}}
                >
                   Sentiment Analysis
                </a>

            </div>
            <div id="sidebar" className="sidebar-wrapper ps-container ps-theme-default ">

                <ul className="nav aside_div scroll">
                    <li className="nav-item">
                        <Link active-class="active" className="nav-link" to="/dashboard">
                            <i className="material-icons">dashboard</i>
                            <p>Analysis</p>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link" to="/products">
                            <i className="fa fa-folder-open"/>
                            <p>Products</p>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">
                            <i className="fa fa-sign-out"/>
                            <p>Sign Out</p>
                        </Link>
                    </li>
                </ul>

                <div className="ps-scrollbar-x-rail" style={{left: 0, bottom: 0}}>
                    <div
                        className="ps-scrollbar-x"
                        tabIndex="0"
                        style={{left: 0, width: 0}}
                    />
                </div>
                <div className="ps-scrollbar-y-rail" style={{top: 0, right: 0}}>
                    <div
                        className="ps-scrollbar-y"
                        tabIndex={0}
                        style={{top: 0, height: 0}}
                    />
                </div>
            </div>
            <div className="sidebar-background"/>
        </div>
    )
}

export default SideBar;