import React, { ReactElement, useState } from 'react';
import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/SidebarAdmin';

import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props {

};

export default function RequisitionForm({ }: Props): ReactElement {
    const [sidebarToggle, setsidebarToggle] = useState(false);
    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container">
                        <div className="heading">
                            <h6 className="text-black">Requisition Form</h6>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <Row>
                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Service</label>
                                            <select className="form-control">
                                                <option>Value</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Service</label>
                                            <select className="form-control">
                                                <option>Value</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Class/Level</label>
                                            <select className="form-control">
                                                <option>Value</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Sub Group</label>
                                            <select className="form-control">
                                                <option>Value</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Post</label>
                                            <select className="form-control">
                                                <option>Value</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Vacancy</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </Col>
                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Demand Office</label>
                                            <input type="text" className="form-control" value="Ministry of General Administration" readOnly />
                                        </div>
                                    </Col>

                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Requesting Office</label>
                                            <input type="text" className="form-control" value="Central Office" readOnly />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Requesting Office</label>
                                            <textarea className="form-control" rows={3}></textarea>
                                        </div>
                                    </Col>
                                    <Col lg="3" md="4">
                                        <div className="form-group">
                                            <label htmlFor="">Requesting Office</label>
                                            <textarea className="form-control" rows={3}></textarea>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="6">
                                        <div className="form-group"><label>Upload Document</label>
                                            <div className="custom-file">
                                                <input className="custom-file-input" type="file" />
                                                <label className="custom-file-label" >No Files Selected...</label>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Link to="/admin/approvaltask" className="btn btn-primary">Submit</Link>
                                <button className="btn btn-outline outline-hover-blue ml-3">Reset</button>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}