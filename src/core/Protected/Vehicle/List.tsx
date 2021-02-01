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

    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle}/>
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container">
                        <div className="heading">
                            <h6 className="text-black font-bold">Vehicle List</h6>
                            <Link to="/vehicle-registration" className="btn btn-primary btn-icon"><i className="ic-add"></i> Register Vehicle</Link>
                        </div>
                        <Card body>
                            <div className="table-responsive scrollable">
                                <Table className="table-02 table-striped">
                                    <thead>
                                        <tr>
                                            <th>Importer Type</th>
                                            <th>Company/Individual Name</th>
                                            <th>Vehicle Registered No.</th>
                                            <th>Category</th>
                                            <th>Manufacturer Name</th>
                                            <th>Make Year</th>
                                            <th className="text-right">कार्य</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Company</td>
                                            <td>Yamaha Motors</td>
                                            <td>BA 2 Kha 2289</td>
                                            <td>Car</td>
                                            <td>Yamaha</td>
                                            <td>2018</td>
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
                                            <td>Company</td>
                                            <td>Honda Motors</td>
                                            <td>BA 4 Kha 8845</td>
                                            <td>Car</td>
                                            <td>Honda</td>
                                            <td>2018</td>
                                            <td>
                                                <ul className="list list__inline justify-content-end">
                                                    <li>
                                                        <Link to="/vacancy-detail" className="btn btn-icon-only">
                                                            <i className="ic-show text-info"></i>
                                                        </Link>
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
