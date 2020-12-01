import React from 'react';
import { Link } from "react-router-dom";

import User from "./../../images/user.jpg"

const header = () => {
    return (
        <header className="header">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="border-right mr-3 pr-3">
                            <p className="text-white font-bold">Rastriya Banijya Bank</p>
                            <p className="text-white small">
                                Current FY:
                                <span className="font-bold ml-1">
                                    2077/78
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="text-white">
                                <span >
                                    Central Office (100)
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="list list__inline list-separator">
                    <div className="dropdown ml-3">
                        <Link to="#" className="auth" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar-md">
                                <img src={User} alt="Brandon" />
                            </div>
                            <div className="textbox mr-2">
                                <h6 className="username"></h6>
                            </div>
                            <i className="ic-triangle-down"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item">
                                <i className="ic-edit"></i>
                                Change Password
                            </a>
                            {/* <div className="divider"></div>
                            <a className="dropdown-item">
                                <i className="ic-briefcase"></i>
                            </a> */}
                            <div className="divider"></div>
                            <a className="dropdown-item text-danger">
                                <i className="ic-logout"> </i>
                                Logout
                            </a>
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

export default header;