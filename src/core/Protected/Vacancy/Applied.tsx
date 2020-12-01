import React, { ReactElement, useState } from 'react';

import { Card, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ConnectipsLogo from '../../../assets/images/connectips-logo.png';
import { Link } from 'react-router-dom';

interface Props { };

export default function Applied({ }: Props): ReactElement {
    const [sidebarToggle, setsidebarToggle] = useState(false);

    const [modal, setModal] = useState(false);
    const modalToggle = () => setModal(!modal);

    const [dropdown, setDropdown] = useState(false);
    const dropdownToggle = () => setDropdown(!dropdown);
    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container">
                        <div className="heading">
                            <h6 className="text-black font-bold mb-md-0 mb-2">My Applications</h6>
                            <div className="flex-center">
                                <div className="custom-search">
                                    <input className="form-control" type="text" placeholder="Search Applications" />
                                    <span className="ic-search"></span>
                                </div>
                                <button className={`btn btn-icon ml-2 ${dropdown ? "btn-primary" : "btn-outline outline-hover-blue"}`} onClick={dropdownToggle}>
                                    <span className="ic-filter"></span>
                                    Filter
                                </button>
                            </div>
                        </div>
                        <div className={`filter-wrapper  ${dropdown ? "" : "hide"}`}>
                            <div className="filter-container" >
                                <h6 className="mb-3">Filter applications</h6>
                                <div className="row">
                                    <div className="col-lg-3 col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="">Application Status</label>
                                            <select name="" id="" className="form-control">
                                                <option value="" selected disabled>Select...</option>
                                                <option>Approved</option>
                                                <option>On Hold</option>
                                                <option>Pending</option>
                                                <option>Rejected</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="">Payment Status</label>
                                            <select name="" id="" className="form-control">
                                                <option value="" selected disabled>Select...</option>
                                                <option>Pending</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="">Applied Date</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="">Category</label>
                                            <select name="" id="" className="form-control">
                                                <option value="" selected disabled>Select...</option>
                                                <option>रा०प० तृतीय</option>
                                                <option>सातौं तह</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="">Group</label>
                                            <select name="" id="" className="form-control">
                                                <option value="" selected disabled>Select...</option>
                                                <option>एगृ इन्जिनियरिङ्ग</option>
                                                <option>भेटेरिनरी</option>
                                                <option>फूड न्यूट्रिशन एण्ड क्वालिटी कन्ट्रोल</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Card body className="card_bordered card-applicants mb-3 ">
                            <div className="flex-center-between">
                                <h6 className="title ">कृषि इन्जिनियर कृषि इन्जिनियर कृषि इन्जिनियर कृषि इन्जिनियर</h6>
                                <span className="badge-dot-warning">Pending</span>
                            </div>
                            <div className="flex-center-between d-md-flex d-block">
                                <ul className="list list__inline list-dot list--job-deets mb-2">
                                    <li>रा०प० तृतीय</li>
                                    <li>नेपाल कृषि/एगृ इन्जिनियरिङ्ग</li>

                                </ul>
                                <p>24/8/2077</p>
                            </div>
                            <div className="divider"></div>
                            <div className="flex-center-between d-md-flex d-block">
                                <div className="align-center">
                                    <p className="des">Payment Options :</p>
                                    <ul className="list list__inline list-dot list--job-deets ml-md-1 ml-0 ">
                                        <li>Bank Deposit</li>
                                        <li>12345</li>
                                    </ul>
                                </div>
                                <button className="btn btn-info" onClick={modalToggle}>Pay</button>
                            </div>
                        </Card>
                        <Card body className="card_bordered card-applicants mb-3 ">
                            <div className="flex-center-between">
                                <h6 className="title">पशु चिकित्सक</h6>
                                <span className="badge-dot-success">Approved</span>
                            </div>
                            <div className="flex-center-between d-md-flex d-block">
                                <ul className="list list__inline list-dot list--job-deets mb-2">
                                    <li>रा०प० तृतीय</li>
                                    <li>नेपाल कृषि/एगृ इन्जिनियरिङ्ग</li>

                                </ul>
                                <p>24/8/2077</p>
                            </div>
                            <div className="divider"></div>
                            <div className="flex-center-between d-md-flex d-block">
                                <div className="align-center">
                                    <p className="des">Payment Options :</p>
                                    <ul className="list list__inline list-dot list--job-deets ml-md-1 ml-0 ">
                                        <li>Bank Deposit</li>
                                        <li>12345</li>
                                    </ul>
                                </div>
                                <span className="align-center text-success des">
                                    <i className="ic-checkmark mr-2"></i>
                                     Paid
                                </span>
                            </div>
                        </Card>
                        <Modal isOpen={modal} toggle={modalToggle} className="modal-bms">
                            <ModalHeader toggle={modalToggle} className="modal-header-blue">भुक्तानी विकल्प</ModalHeader>
                            <ModalBody>
                                <p className="text-muted text-center mb-3">तपाईंको भुक्तानी को मनपर्ने तरीका चयन गर्नुहोस्</p>
                                <ul className="list list--payment">
                                    <li>
                                        <a href="" className="active">
                                            <img src={ConnectipsLogo} alt="connectIPS" width="70" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="ic-bank"></i>
                                        </a>
                                    </li>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <button type="button" className="btn btn-outline outline-hover-red" onClick={modalToggle}>Cancel</button>
                                <Link to="/vacancy-applied" className="btn btn-primary">Choose</Link>
                            </ModalFooter>
                        </Modal>

                    </div>
                </div>
            </main>
        </div>
    )
}
