import React, { Fragment, ReactElement, useState } from 'react';
import { Link } from "react-router-dom";
import { UncontrolledCollapse, Button, CardBody, Card, CustomInput } from 'reactstrap';

import Header from './../Dashboard/Header/Header';
import Sidebar from './../Dashboard/Sidebar/SidebarAdmin';

export default function RoleManagement() {
    const [sidebarToggle, setsidebarToggle] = useState(false);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: string) => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container container-full d-flex flex-column mb-3">
                        <div className="heading">
                            <h6 className="text-black">Role Management</h6>
                        </div>
                        <div className="card flex-grow-1">
                            <div className="card-body">
                                <div className="row h-100">
                                    <div className="col-lg-3 border-right">
                                        <div className="d-flex flex-column h-100">
                                            <h6 className="mb-3">Roles</h6>
                                            <div className="d-flex align-center form-group">
                                                <input type="text" className="form-control" placeholder="Add Roles" />
                                                <a href="#" className="btn btn-primary ml-2">Add</a>
                                            </div>
                                            <div className="flex-grow-1 position-relative">
                                                <ul className="list list--role container-full scrollable">
                                                    <li>
                                                        <a href="#" className="active">Admin</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">HR</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Officer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Manager</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Employee</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="d-flex flex-column h-100">
                                            <h6 className="mb-3">Role Configuration Detail</h6>
                                            <div className="flex-grow-1 position-relative">
                                                <div className="collapse-wrapper scrollable container-full">
                                                    <div className="collapse-item">
                                                        <div id="toggler1" className="collapse-head">
                                                            <span>Dashboard</span>
                                                            <CustomInput type="switch" id="roleSwitch1" name="roleSwitch" />
                                                        </div>
                                                        <UncontrolledCollapse toggler="#toggler1">
                                                            <Card>
                                                                <CardBody>
                                                                    <div className="row">
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox1" label="Create" />
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox2" label="Read" />
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox3" label="Update" />
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox4" label="Delete" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <a href="#" className="btn btn-primary">Assign</a>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </UncontrolledCollapse>
                                                    </div>
                                                    <div className="collapse-item">
                                                        <div id="toggler2" className="collapse-head">
                                                            <span>Vehicle Approval</span>
                                                            <CustomInput type="switch" id="roleSwitch2" name="roleSwitch" />
                                                        </div>
                                                        <UncontrolledCollapse toggler="#toggler2">
                                                            <Card>
                                                                <CardBody>
                                                                    <div className="row">
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox5" label="Create" />
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox6" label="Read" />
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox7" label="Update" />
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox8" label="Delete" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <a href="#" className="btn btn-primary">Assign</a>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </UncontrolledCollapse>
                                                    </div>
                                                    <div className="collapse-item">
                                                        <div id="toggler3" className="collapse-head">
                                                            <span>User Management</span>
                                                            <CustomInput type="switch" id="roleSwitch3" name="roleSwitch" />
                                                        </div>
                                                        <UncontrolledCollapse toggler="#toggler3">
                                                            <Card>
                                                                <CardBody>
                                                                    <div className="row">
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox9" label="Create" />
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox10" label="Read" />
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox11" label="Update" />
                                                                        </div>
                                                                        <div className="col-lg-2">
                                                                            <CustomInput type="checkbox" id="crudCheckbox12" label="Delete" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <a href="#" className="btn btn-primary">Assign</a>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </UncontrolledCollapse>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    
    )
}
