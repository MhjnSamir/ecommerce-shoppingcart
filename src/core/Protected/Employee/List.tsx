import React,{useState} from 'react';
import { Link } from "react-router-dom";

import Header from './../Dashboard/Header/Header';
import Sidebar from './../Dashboard/Sidebar/SidebarAdmin';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default function List() {
    const [sidebarToggle, setsidebarToggle] = useState(false);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: string) => {
        if (activeTab !== tab) setActiveTab(tab);
    }


  const [modal, setModal] = useState(false);

  const modalToggle = () => setModal(!modal);

    return (
    <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
        <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
        <main className="stickyHeader">
            <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

            <div className="inner">
                <div className="container container-full d-flex flex-column mb-3">
                    <div className="heading">
                        <h6 className="text-black">Employee Management</h6>
                    </div>

                    <div className="card card-body">
                    <table className="table table-02 table-striped">
                                <thead>
                                    <tr>
                                        <th>Employee Code</th>
                                        <th>Employee Name</th>
                                        <th>Department</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>001245</td>
                                        <td>Ram Malakar</td>
                                        <td>Office of Transport Management, Sunsari</td>
                                        <td>
                                                <ul className="list list__inline justify-content-end">
                                                    <li>
                                                        <Link to="#/" className="btn btn-icon-only" onClick={modalToggle}>
                                                            <i className="ic-show"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" className="btn btn-icon-only">
                                                            <i className="ic-edit"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" className="btn btn-icon-only">
                                                            <i className="ic-delete "></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </td>
                                    </tr>
                                
                                    <tr>
                                        <td>001245</td>
                                        <td>Ram Malakar</td>
                                        <td>Office of Transport Management, Sunsari</td>
                                        <td>
                                                <ul className="list list__inline justify-content-end">
                                                    <li>
                                                        <Link to="#/" className="btn btn-icon-only" onClick={modalToggle}>
                                                            <i className="ic-show"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" className="btn btn-icon-only">
                                                            <i className="ic-edit"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" className="btn btn-icon-only">
                                                            <i className="ic-delete "></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </td>
                                    </tr>
                                
                                    <tr>
                                        <td>001245</td>
                                        <td>Ram Malakar</td>
                                        <td>Office of Transport Management, Sunsari</td>
                                        <td>
                                                <ul className="list list__inline justify-content-end">
                                                    <li>
                                                        <Link to="#/" className="btn btn-icon-only" onClick={modalToggle}>
                                                            <i className="ic-show"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" className="btn btn-icon-only">
                                                            <i className="ic-edit"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" className="btn btn-icon-only">
                                                            <i className="ic-delete "></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </td>
                                    </tr>
                                
                                    <tr>
                                        <td>001245</td>
                                        <td>Ram Malakar</td>
                                        <td>Office of Transport Management, Sunsari</td>
                                        <td>
                                                <ul className="list list__inline justify-content-end">
                                                    <li>
                                                        <Link to="#/" className="btn btn-icon-only" onClick={modalToggle}>
                                                            <i className="ic-show"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" className="btn btn-icon-only">
                                                            <i className="ic-edit"></i>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/" className="btn btn-icon-only">
                                                            <i className="ic-delete "></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </td>
                                    </tr>
                                
                             
                                </tbody>
                            </table>
                        
                    </div>

                    <Modal isOpen={modal} toggle={modalToggle} className={"modal-bms"}>
                    <ModalHeader toggle={modalToggle} className="modal-header-blue">User Detail</ModalHeader>
                    <ModalBody>
                        <ul className="list list-divider des">
                            <li>
                                <div className="grid grid-horizontal">
                                    <div className="grid-label">Username</div>
                                    <div className="grid-value">ram02</div>
                                </div>
                            </li>
                            <li>
                                <div className="grid grid-horizontal">
                                    <div className="grid-label">Email</div>
                                    <div className="grid-value">ram@gmail.com</div>
                                </div>
                            </li>
                            <li>
                                <div className="grid grid-horizontal">
                                    <div className="grid-label">Mobile No.</div>
                                    <div className="grid-value">9851210123</div>
                                </div>
                            </li>
                            <li>
                                <div className="grid grid-horizontal">
                                    <div className="grid-label">Office</div>
                                    <div className="grid-value">District Office Of Transport Management, Sunsari </div>
                                </div>
                            </li>
                            <li>
                                <div className="grid grid-horizontal">
                                    <div className="grid-label">Section</div>
                                    <div className="grid-value">Section 01</div>
                                </div>
                            </li>
                            <li>
                                <div className="grid grid-horizontal">
                                    <div className="grid-label">Role</div>
                                    <div className="grid-value">
                                        <span className="badge badge-light">Admin</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="grid grid-horizontal">
                                    <div className="grid-label">Activation</div>
                                    <div className="grid-value">
                                        <div className="custom-switch custom-control">
                                            <input type="checkbox" id="roleSwitch1" name="roleSwitch" className="custom-control-input"/>
                                            <label className="custom-control-label pl-2" htmlFor="roleSwitch1">
                                                Active
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="1"/>
                            <label className="custom-control-label" htmlFor="1">Transfer employee to other office</label>
                        </div>

                        <form action="">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Transfer Office</label>
                                        <select className="custom-select">
                                            <option value="">Select...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Transfer Section</label>
                                        <select className="custom-select">
                                            <option value="">Select...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Transfer Date</label>
                                        <input type="date" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="btn-outline outline-hover-red" class="btn" onClick={modalToggle}>Delete</Button>{' '}
                        <Button className="btn-outline outline-hover-blue" class="btn" onClick={modalToggle}>Edit</Button>
                    </ModalFooter>
                    </Modal>
                
                </div>
            </div>
        </main>
    </div>

    )
}
