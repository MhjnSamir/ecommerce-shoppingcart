import React, { ReactElement, useState } from 'react';
import { Link } from "react-router-dom";

import {
    Table,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    CustomInput,
    FormText,
    UncontrolledPopover,
    PopoverBody
} from 'reactstrap';

import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

interface Props { };

export default function List({ }: Props): ReactElement {
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
                            <h6 className="text-black font-bold">Vacancy List</h6>
                            <div className="flex-center">
                                <div className="custom-search">
                                    <input className="form-control" type="text" placeholder="Search Vacancy" />
                                    <span className="ic-search"></span>
                                </div>
                                <button className={`btn btn-icon ml-2 ${dropdown ? "btn-primary" : "btn-outline outline-hover-blue"}`} onClick={dropdownToggle}>
                                    <span className="ic-filter"></span>
                                    Filter
                                </button>
                            </div>
                        </div>
                            <div className={`filter-wrapper ${dropdown ? "" : "hide"}`}>
                                <div className="filter-container" >
                                    <h6 className="mb-3">Filter Vacancy</h6>
                                    <Row className="mb-3">
                                        <Col md="3">
                                            <Input type="select">
                                                <option value="">All Service</option>
                                                <option value="">नेपाल स्वास्थ्य</option>
                                                <option value="">नेपाल कृषि</option>
                                                <option value="">नेपाल शिक्षा</option>
                                                <option value="">आर्थिक योजना तथा तथ्यांक</option>
                                                <option value="">नेपाल विविध सेवा</option>
                                                <option value="">नेपाल इञ्जिनियरिङग्</option>
                                            </Input>
                                        </Col>
                                        <Col md="3">
                                            <Input type="select">
                                                <option value="">All Class</option>
                                                <option value="">रा०प०अनं० प्रथम</option>
                                                <option value="">नवौं तह</option>
                                                <option value="">रा०प० प्रथम</option>
                                                <option value="">रा०प० द्बितीय</option>
                                                <option value="">रा०प० तृतीय</option>
                                                <option value="">आठौं तह</option>
                                                <option value="">एघारौं तह</option>
                                                <option value="">सातौं तह</option>
                                                <option value="">सहायक पाँचौं तह</option>
                                                <option value="">सहायक चौथो तह</option>
                                                <option value="">रा.प.अनं.प्रथम/द्वितीय</option>
                                                <option value="">रा.प.अनं द्वितीय</option>
                                                <option value="">छैठाैं तह</option>
                                                <option value="">कम्युनिटी नर्सिङ्ग</option>
                                                <option value="">बारौं तह</option>
                                            </Input>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        <Card body>


                            <div className="table-responsive scrollable">
                                <Table className="table-02 table-striped">
                                    <thead>
                                        <tr>
                                            <th>विज्ञापन कोड</th>
                                            <th>श्रेणी/तह</th>
                                            <th>पद</th>
                                            <th>सेवा</th>
                                            <th className="text-right">कार्य</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10601-10604/2075-76</td>
                                            <td>रा.प.अनं.प्रथम/द्वितीय</td>
                                            <td>टाइपिष्ट</td>
                                            <td>नेपाल प्रशासन</td>
                                            <td>
                                                <ul className="list list__inline justify-content-end">
                                                    <li>
                                                        <Link to="/vacancy-detail" className="btn btn-icon-only" onClick={modalToggle}>
                                                            <i className="ic-show text-info"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>13801-13801/2075-76</td>
                                            <td>रा०प० प्रथम</td>
                                            <td>सह- सचिव वा सो सरह</td>
                                            <td>नेपाल लेखा परीक्षण</td>
                                            <td>
                                                <ul className="list list__inline justify-content-end">
                                                    <li>
                                                        <button type="button" className="btn btn-icon-only">
                                                            <i className="ic-show text-info"></i>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
