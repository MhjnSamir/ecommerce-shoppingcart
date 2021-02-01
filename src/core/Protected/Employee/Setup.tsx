import React,{useState} from 'react';
import { Link } from "react-router-dom";

import Header from './../Dashboard/Header/Header';
import Sidebar from './../Dashboard/Sidebar/SidebarAdmin';
import { Button } from 'reactstrap';


export default function Setup() {
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
                <div className="container d-flex flex-column mb-3">
                    <div className="heading">
                        <h6 className="text-black">Add Employee</h6>
                    </div>
                    <div className="card card-body">
                        <form action="">
                            <h6 className="heading-01">Basic</h6>
                            <div className="divider my-2"></div>
                            <div className="form-row">
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="">Office</label>
                                        <select className="custom-select">
                                            <option value="">Select...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="">Section</label>
                                        <select className="custom-select">
                                            <option value="">Select...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <h6 className="heading-01 mb-2 mt-3">Login Information</h6>
                            <p className="text-01">
                                Username and password will be sent to their associated email address.
                            </p>
                            <div className="divider my-2"></div>
                            <div className="form-row">
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="">Username</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="">Confirm Password</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <h6 className="heading-01 mb-2 mt-3">Role Setup</h6>
                            <p className="text-01">
                                Add them their roles here, be sure to check the <Link to="/" className="text-primary">roles management</Link> to view permissions.
                            </p>
                            <div className="divider my-2"></div>
                            <div className="form-row">
                                <div className="col-lg-3">
                                    <div className="form-group">
                                        <label htmlFor="">Role</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <h6 className="heading-01 mb-2 mt-3">Activation</h6>
                            <div className="divider my-2"></div>

                            <div className="custom-switch custom-control">
                                <input type="checkbox" id="roleSwitch1" name="roleSwitch" className="custom-control-input"/>
                                <label className="custom-control-label pl-2" htmlFor="roleSwitch1">
                                    Inactive
                                    <p className="text-01">Activate the user to access their account.</p>
                                </label>
                            </div>
                       </form>
                    
                    </div>

                    <div className="text-right mt-3">
                        <Button className="btn-outline outline-hover-red mr-2" color="">Cancel</Button>
                        <Button color="primary">Save</Button>
                    </div>
                </div>
            </div>
        </main>
    </div>

    )
}
