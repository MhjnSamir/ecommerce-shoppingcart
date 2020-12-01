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

import ConnectipsLogo from '../../../assets/images/connectips-logo.png';

interface Props { };

export default function Detail({ }: Props): ReactElement {
    const [sidebarToggle, setsidebarToggle] = useState(false);
    const [isStartedOpen, setStartedIsOpen] = useState(false);
    const [isComponentOpen, setComponentIsOpen] = useState(false);

    // const [paymentType, setPaymentType] = useState(1);

    // const paymentToggle = () => setPaymentType(!paymentType);

    const [confirmModal, setConfirmModal] = useState(false);

    const confirmModalToggle = () => setConfirmModal(!confirmModal);

    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container">
                        <div className="heading">
                            <div>
                                <h4 className="text-black font-bold">टाइपिष्ट</h4>
                                <p className="mb-0">10601-10604/2075-76</p>
                            </div>
                            <Link to="/vacancy-list" className="btn btn-outline outline-hover-blue">Back to list</Link>
                        </div>
                        <Card body>
                            <div className="table-responsive scrollable">
                                <Table striped className="table-02">
                                    <thead>
                                        <tr>
                                            <th style={{width: '1px'}}></th>
                                            <th>विज्ञापन नं</th>
                                            <th>किसिम/समूह</th>
                                            <th>पदसंख्या</th>
                                            <th className="text-right">शुल्क</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" name="" id=""/></td>
                                            <td>10601/2075-76</td>
                                            <td>खुला</td>
                                            <td>२०</td>
                                            <td className="text-right">रु ४००</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" name="" id=""/></td>
                                            <td>10602/2075-76</td>
                                            <td>अपाङ्ग</td>
                                            <td>२</td>
                                            <td className="text-right">रु २००</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" name="" id=""/></td>
                                            <td>10603/2075-76</td>
                                            <td>पिछडिएको क्षेत्र</td>
                                            <td>२</td>
                                            <td className="text-right">रु २००</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" name="" id=""/></td>
                                            <td>10604/2075-76</td>
                                            <td>महिला</td>
                                            <td>२</td>
                                            <td className="text-right">रु २००</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <h5 className="text-right mt-2 text-info">
                                जम्मा शुल्क: ६००
                            </h5>
                            <div className="divider my-4"></div>
                            <h6 className="mb-2">External Subject</h6>
                            <div className="table-responsive scrollable">
                                <Table className="table-02 table-striped">
                                    <thead>
                                        <tr>
                                            <th>पत्र</th>
                                            <th>विषय</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Paper Three</td>
                                            <td>
                                                <select name="" id="" className="form-control">
                                                    <option value="" selected disabled>Select...</option>
                                                    <option value="">Economics</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="divider my-4"></div>
                            <Row>
                                <Col md="3">
                                    <div className="form-group">
                                        <label htmlFor="">Do you have minimum qualification?</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" name="qualificationRadio" type="radio" id="m1" value="option1" checked />
                                                <label className="form-check-label" htmlFor="m1">Yes</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" name="qualificationRadio" type="radio" id="m2" value="option2" />
                                                <label className="form-check-label" htmlFor="m2">No</label>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="form-group">
                                        <label htmlFor="">What is the faculty of your minimum qualification?</label>
                                        <select name="" id="" className="form-control">
                                            <option value="" selected disabled>Select...</option>
                                            <option value="">Management</option>
                                            <option value="">Business</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col md="3">
                                    <div className="form-group">
                                        <label htmlFor="">न्युनतम शैक्षिक योग्यता मूल विषय</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </Col>
                                <Col md="2">
                                    <div className="form-group">
                                        <label htmlFor="">परीक्षा केन्द्र</label>
                                        <select name="" id="" className="form-control">
                                            <option value="" selected disabled>Select...</option>
                                            <option value="">काठमाडौँ</option>
                                            <option value="">ललितपुर</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                            <div className="alert alert-warning">
                                <i className="ic-info mr-2"></i>
                                मान्यता प्राप्त शिक्षण संस्थाबाट कम्प्यूटर विषय लिई एस.एल.सी. वा सो सरह उत्तीर्ण वा मान्यता प्राप्त शिक्षण संस्थाबाट एस.एल.सी. वा सो सरह उत्तीर्ण गरी रजिष्टर्ड संस्था वा विज्ञान तथा प्रविधि मन्त्रालयबाट तीन महिनाको कम्प्यूटर तालिम प्राप्त ।
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="a1" value="option1" />
                                <label className="form-check-label" htmlFor="a1">I have read understand and agree to the <a href="#" className="text-info">Terms and Conditions of PSC</a></label>
                            </div>
                        </Card>
                        <div className="footer-btn">
                            <button type="button" className="btn btn-primary" onClick={confirmModalToggle}>Apply</button>
                        </div>
                        <Modal isOpen={confirmModal} toggle={confirmModalToggle} className="modal-bms">
                            <ModalHeader toggle={confirmModalToggle} className="modal-header-blue">आबेदन दिएको विवरण</ModalHeader>
                            <ModalBody>
                                <p>मास्टर आइडी: <b>608765</b></p>
                                <p>उम्मेदवारको नाम: <b>Ablok Man Shakya</b></p>
                                <p>विज्ञापन कोड: <b>10601-10604/2075-76</b></p>
                                <h5 className="my-3">विज्ञापनको विवरण</h5>

                                <Table striped className="table-02 mb-3">
                                    <thead>
                                        <tr>
                                            <th>विज्ञापन नं</th>
                                            <th>किसिम/समूह</th>
                                            <th className="text-right">शुल्क</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10601/2075-76</td>
                                            <td>खुला</td>
                                            <td className="text-right">रु ४००</td>
                                        </tr>
                                        <tr>
                                            <td>10602/2075-76</td>
                                            <td>अपाङ्ग</td>
                                            <td className="text-right">रु २००</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table striped className="table-02 mb-3">
                                    <thead>
                                        <tr>
                                            <th>परीक्षा केन्द्र</th>
                                            <th>Faculty</th>
                                            <th>न्युनतम शैक्षिक योग्यता मूल विषय</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>काठमाडौँ</td>
                                            <td>Management</td>
                                            <td>Economics</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className="alert alert-info">
                                    <p className="mb-2"><b>माथिको विवरण ठिक छ कि छैन एकिन भए मात्र 'Yes Confirm' गरेर अगाडि बढ्नुहोला</b></p>
                                    <ul className="mb-0">
                                        <li>एक चोटि 'Confirm' गरेको विज्ञापन सच्याउन मिल्ने छैन</li>
                                        <li>यदि माथिको विवरण ठिक नभएको खण्डमा 'Cancel' मा click गरि पुन: सच्याइ अगाडी बढ्न मिल्ने छ</li>
                                    </ul>
                                </div>
                            </ModalBody>
                            <ModalFooter >
                                <button type="button" className="btn btn-outline outline-hover-red" onClick={confirmModalToggle}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={modalToggle}>Yes, Confirm</button>
                            </ModalFooter>
                        </Modal>
                        <Modal isOpen={modal} toggle={modalToggle} className="modal-bms">
                            <ModalBody className="py-5">
                                <div className="text-center">
                                    <i className="ic-check-circle text-success h2"></i>
                                    <h4 className="alert-title mt-3">Success!</h4>
                                    <p className="alert-desc mt-1">You have successfully applied for the advertisement.</p>
                                    <p className="alert-desc mt-1">Advertisement no.: <b>123456</b></p>
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-content-center">
                                <button type="button" className="btn btn-outline outline-hover-red" onClick={modalToggle}>Cancel</button>
                                <Link to="/vacancy-applied" className="btn btn-outline outline-hover-blue">Pay applied advertisement</Link>
                                <button type="button" className="btn btn-primary" onClick={modalToggle}>OK</button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </main>
        </div>
    )
}
