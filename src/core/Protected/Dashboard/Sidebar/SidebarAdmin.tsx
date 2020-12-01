import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Collapse } from "reactstrap";

import Logo from "../../../../assets/images/logo.png";
interface Props {
    sidebarToggle: boolean;
    setsidebarToggle: (state: boolean) => void;
    // isStartedOpen: any;
    // setStartedIsOpen: (state: boolean) => void;
}
const Sidebar = (props: Props) => {
    const { sidebarToggle, setsidebarToggle } = props;
    const togglesidebar = () => setsidebarToggle(!sidebarToggle);


    const [isStartedOpen, setStartedIsOpen] = useState(false);
    // const [isComponentOpen, setComponentIsOpen] = useState(false);


    return (
        <aside className="sidebar">
            <div className="d-flex justify-content-between align-items-center">
                <div className="sidebar-logo mb-3">
                    <img src={Logo} alt="Rastriya Banijya Bank" className="logo" />
                </div>
                <h6 className="text-white ml-2">Province Public Service Commision</h6>
                <div className="toggler-close" onClick={togglesidebar}>
                    <span className="ic-close"></span>
                </div>
            </div>
            <div className="search--input">
                <div className="form-group-icon">
                    <input type="search" className="form-control" placeholder="Search" />
                    <i className="ic-search"></i>
                </div>
            </div>
            <ul className="list list-sidebar">
                <li >
                    {/* <NavLink to="/home" activeClassName="active">
                        <span className="ic-meter mr-2"></span>
                        Publish Advertisements
                    </NavLink> */}

                    {/* <li>
                        <a
                            href=""
                            className="hasSub"
                            aria-Expanded={`${isStartedOpen}`}
                            onClick={() => setStartedIsOpen(!isStartedOpen)}
                        >
                            Getting Started
                     </a>
                        <Collapse isOpen={isStartedOpen} className="ml-1">
                            <Link to="/package">Package Installation</Link>
                            <Link to="/layout">Layout</Link>
                        </Collapse>
                    </li> */}
                  
                    <NavLink to="/admin/dashboard" activeClassName="active">
                        <span className="ic-meter mr-2"></span>
                        Dashboard
                    </NavLink>
                    <NavLink to="/admin/requisition-form" activeClassName="active">
                        <span className="ic-meter mr-2"></span>
                        Requisition Form
                    </NavLink>
                    <NavLink to="/admin/approvaltask" activeClassName="active">
                        <span className="ic-meter mr-2"></span>
                        Approval Task
                    </NavLink>
                    <NavLink to="/admin/request" activeClassName="active">
                        <span className="ic-meter mr-2"></span>
                        Percentage Distribution Requests
                    </NavLink>
                    <NavLink to="/admin/exam-scheduling" activeClassName="active">
                        <span className="ic-meter mr-2"></span>
                        Examination Scheduling
                    </NavLink>
                    <NavLink to="/admin/curriculum-configuration" activeClassName="active">
                        <span className="ic-meter mr-2"></span>
                        Curriculum Configuration
                    </NavLink>
                </li>
            </ul>

        </aside>


    );
};

export default Sidebar;