import React from 'react';
import { Link } from "react-router-dom";
import Logo from "./../../images/logo.png";

const sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-logo mb-3">
                <img src={Logo} alt="Rastriya Banijya Bank" className="logo" />
            </div>
            <div className="search--input">
                <div className="form-group-icon">
                    <input type="search" className="form-control" placeholder="Enter Menu Code"/>
                    <i className="ic-search"></i>
                </div>
            </div>
            <ul className="list list-sidebar">
                <li >
                    <Link to="#" data-toggle="collapse" role="button" className="hasSub">
                        <span className="ic-meter mr-2"></span>
                        Menu1
                    </Link>
                    <ul className="list list-sidebar menu__collapsable-sub collapse" >
                        <li >
                            <a data-toggle="collapse" href="#" role="button" aria-expanded="false" className="hasSub">
                                Sidebar 1
                            <span className="ic-meter mr-2"></span>
                            </a>
                            <ul className="menu__collapsable-sub collapse">
                                <li>
                                    <a href="#">
                                        menu 1
                                    </a>
                                </li>
                            </ul>

                            <a href="#">Sidebar 2</a>
                        </li >
                    </ul>
                    <a href="#">
                        <span className="ic-meter mr-2"></span>
                        Menu 2
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default sidebar;