import React, { useState } from 'react';

import { Link } from "react-router-dom";

import User from "../../../../assets/images/user.jpg"
interface Props {
    sidebarToggle: boolean;
    setsidebarToggle: (state: boolean) => void;
}
const Header = (props: Props) => {
    const {sidebarToggle, setsidebarToggle} = props;
    const togglesidebar = () => setsidebarToggle(!sidebarToggle);
    return (
        <header className="header">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <a className="ic-menu text-white toggler" onClick={togglesidebar}></a>

                    <p className="title">Public Service Recruitment Management System</p>

                </div>

                <div className="list list__inline list-separator">
                    <div className="dropdown ml-3">
                        <Link to="#" className="auth" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar-md">
                                <img src={User} />
                            </div>
                            <div className="textbox mr-2">
                                <h6 className="username"></h6>
                            </div>
                            <i className="ic-dropdown"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item">
                                <i className="ic-edit"></i>
                                Change Password
                            </a>
                           
                            <div className="divider"></div>
                            <Link to="login" className="dropdown-item text-danger">
                                <i className="ic-logout"> </i>
                                Logout
                            </Link>
                        </div>
                    </div >

                    <div className="d-flex align-items-center">
                        <a className="btn p-0 text-white des" >नेपा</a>
                    </div >
                </div >
            </div >
        </header >
    );
};

export default Header;