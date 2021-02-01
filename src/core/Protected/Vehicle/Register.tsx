// @ts-nocheck
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
import classnames from 'classnames';

import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

import SampleImg from './../../../assets/images/sample-profile-img.jpg';
import SampleSign from './../../../assets/images/sample-sign.jpg';
import Logo from "./../../../assets/images/logo.png";

interface Props { };

export default function VacancyApp({ }: Props): ReactElement {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const [sidebarToggle, setsidebarToggle] = useState(false);

    const [modal, setModal] = useState(false);
    const [trainingModal, setTrainingModal] = useState(false);
    const [councilModal, setCouncilModal] = useState(false);
    const [experienceModal, setExperienceModal] = useState(false);

    const modalToggle = () => setModal(!modal);
    const modalTrainingToggle = () => setTrainingModal(!trainingModal);
    const modalCouncilToggle = () => setCouncilModal(!councilModal);
    const modalExperienceToggle = () => setExperienceModal(!experienceModal);

    const [experienceType, setExperienceType] = useState(1);
    const experienceTypeToggle = (e) => setExperienceType(parseInt(e.target.value));

    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container">
                        <div className="heading">
                            <h6 className="text-black font-bold">Vehicle Registration</h6>
                            <Link to="/vehicle-list" class="btn btn-outline outline-hover-blue">Back to list</Link>
                        </div>
                        <Nav tabs className="tab-01">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Vehicle Detail
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    Address
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    Custom Detail
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}
                                >
                                    Import Certificate
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '5' })}
                                    onClick={() => { toggle('5'); }}
                                >
                                    Office Detail
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '6' })}
                                    onClick={() => { toggle('6'); }}
                                >
                                    Other Documents
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            {/* #Personal */}
                            <TabPane tabId="1">
                                <Card body className="card_bordered radius-top-0">
                                    {/* #Basic */}
                                    <section className="mb-lg-4 mb-md-3 mb-2">
                                        <div className="heading-line mb-3">
                                            <h6>Basic</h6>
                                        </div>
                                        <Form>
                                            <Row>
                                                <Col md="3">
                                                    <FormGroup>
                                                        <Label htmlFor="">Importer Type</Label>
                                                        <div>
                                                            <FormGroup check inline>
                                                                <Label check>
                                                                    <Input type="radio" name="impType" checked /> Company
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check inline>
                                                                <Label check>
                                                                    <Input type="radio" name="impType" /> Individual
                                                                </Label>
                                                            </FormGroup>
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label htmlFor="compName">Company Name</Label>
                                                        <Input type="text" name="compName" placeholder="Eg. Yamaha Motors" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="2">
                                                    <FormGroup>
                                                        <Label htmlFor="vehRegNo">Vehicle Registered No.</Label>
                                                        <Input type="text" name="vehRegNo" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="3">
                                                    <FormGroup>
                                                        <Label htmlFor="vehCategory">Category</Label>
                                                        <div>
                                                            <FormGroup check inline>
                                                                <Label check>
                                                                    <Input type="radio" name="vehCategory" checked /> Car
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check inline>
                                                                <Label check>
                                                                    <Input type="radio" name="vehCategory" /> Bus
                                                                </Label>
                                                            </FormGroup>
                                                            <FormGroup check inline>
                                                                <Label check>
                                                                    <Input type="radio" name="vehCategory" /> Bike
                                                                </Label>
                                                            </FormGroup>
                                                        </div>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="3">
                                                    <FormGroup>
                                                        <Label htmlFor="vehManufacture">Manufacturer Name</Label>
                                                        <Input type="select" name="vehManufacture">
                                                            <option selected disabled>Select...</option>
                                                            <option>Yamaha</option>
                                                            <option>Honda</option>
                                                            <option>Ford</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="2">
                                                    <FormGroup>
                                                        <Label htmlFor="vehYear">Make Year</Label>
                                                        <Input type="select" name="vehYear">
                                                            <option selected disabled>Select...</option>
                                                            <option>2019</option>
                                                            <option>2018</option>
                                                            <option>2017</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="2">
                                                    <FormGroup>
                                                        <Label htmlFor="vehCylinder">No. of Cylinder</Label>
                                                        <Input type="number" name="vehCylinder" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xl="2" md="4">
                                                    <FormGroup>
                                                        <Label htmlFor="vehEngineSize">Engine Size</Label>
                                                        <Input type="text" name="vehEngineSize" placeholder="eg. 150cc" />
                                                    </FormGroup>
                                                </Col>
                                                <Col xl="2" md="4">
                                                    <FormGroup>
                                                        <Label htmlFor="vehEngineNo">Engine No.</Label>
                                                        <Input type="text" name="vehEngineNo" />
                                                    </FormGroup>
                                                </Col>
                                                <Col xl="2" md="4">
                                                    <FormGroup>
                                                        <Label htmlFor="vehChasisNo">Chasis No.</Label>
                                                        <Input type="text" name="vehChasisNo" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </section>
                                    {/* #Advanced */}
                                    <section className="mb-lg-4 mb-md-3 mb-2">
                                        <div className="heading-line mb-3">
                                            <h6>Advanced</h6>
                                        </div>
                                        <Form>
                                            <Row>
                                                <Col md="2">
                                                    <FormGroup>
                                                        <Label htmlFor="vehBodyColor">Body Color</Label>
                                                        <Input type="select" name="vehBodyColor">
                                                            <option selected disabled>Select...</option>
                                                            <option>Red</option>
                                                            <option>Blue</option>
                                                            <option>Green</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="2">
                                                    <FormGroup>
                                                        <Label htmlFor="vehGlassColor">Glass Color</Label>
                                                        <Input type="select" name="vehGlassColor">
                                                            <option selected disabled>Select...</option>
                                                            <option>Red</option>
                                                            <option>Blue</option>
                                                            <option>Green</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="2">
                                                    <FormGroup>
                                                        <Label htmlFor="vehFuel">Fuel Type</Label>
                                                        <Input type="select" name="vehFuel">
                                                            <option selected disabled>Select...</option>
                                                            <option>Biodiesel</option>
                                                            <option>Ethanol</option>
                                                            <option>Diesel</option>
                                                            <option>Petrol</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup>
                                                        <Label htmlFor="vehElectronic">In-Vehicle Electronic Communication Equipment</Label>
                                                        <Input type="text" name="vehElectronic" placeholder="Eg. radio, cassette, telephone" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="2">
                                                    <FormGroup>
                                                        <Label htmlFor="vehWeight">Vehicle Weight</Label>
                                                        <Input type="text" name="vehWeight" placeholder="Eg. 2,003 kg" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="2">
                                                    <FormGroup>
                                                        <Label htmlFor="vehCarryCapacity">Carrying capacity</Label>
                                                        <Input type="text" name="vehCarryCapacity" placeholder="Eg. 1,003 kg" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="2">
                                                    <FormGroup>
                                                        <Label htmlFor="vehSeat">No. of Seats</Label>
                                                        <Input type="number" name="vehSeat" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="3">
                                                    <FormGroup>
                                                        <Label htmlFor="vehSeat">Use</Label>
                                                        <Input type="number" name="vehSeat" />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="3">
                                                    <FormGroup>
                                                        <Label htmlFor="vehSeat">Route</Label>
                                                        <Input type="number" name="vehSeat" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Address */}
                            <TabPane tabId="2">
                                <Card body className="card_bordered radius-top-0">
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>Permanent</h6>
                                        </div>
                                        <Form>
                                            <Row>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>District</Label>
                                                        <Input type="select" name="select">
                                                            <option selected disabled>Select...</option>
                                                            <option>Accham</option>
                                                            <option>Arghakhanchi</option>
                                                            <option>Baglung</option>
                                                            <option>Baitadi</option>
                                                            <option>Bajhang</option>
                                                            <option>Bajura</option>
                                                            <option>Banke</option>
                                                            <option>Bara</option>
                                                            <option>Baridya</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Province</Label>
                                                        <Input type="text" name="" value="Province No." disabled />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Local Level Type</Label>
                                                        <Input type="select" name="select">
                                                            <option selected disabled>Select...</option>
                                                            <option>नगरपालिका</option>
                                                            <option>गाउँपलिका</option>
                                                            <option>महानगरपालिका</option>
                                                            <option>उपमहानगरपालिका</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Municipality / Village</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Ward No.</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Route</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>House No.</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Street Name</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>Temporary</h6>
                                        </div>
                                        <Form>
                                            <Row>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>District</Label>
                                                        <Input type="select" name="select">
                                                            <option selected disabled>Select...</option>
                                                            <option>Accham</option>
                                                            <option>Arghakhanchi</option>
                                                            <option>Baglung</option>
                                                            <option>Baitadi</option>
                                                            <option>Bajhang</option>
                                                            <option>Bajura</option>
                                                            <option>Banke</option>
                                                            <option>Bara</option>
                                                            <option>Baridya</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Province</Label>
                                                        <Input type="text" name="" value="Province No." disabled />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Local Level Type</Label>
                                                        <Input type="select" name="select">
                                                            <option selected disabled>Select...</option>
                                                            <option>नगरपालिका</option>
                                                            <option>गाउँपलिका</option>
                                                            <option>महानगरपालिका</option>
                                                            <option>उपमहानगरपालिका</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Municipality / Village</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Ward No.</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Route</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>House No.</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>Street Name</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Custom Detail */}
                            <TabPane tabId="3">
                                <Card body className="card_bordered radius-top-0">
                                    <section>
                                        <Row>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Custom Name</Label>
                                                    <Input type="text" name="" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Custom No.</Label>
                                                    <Input type="text" name="" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Voucher No.</Label>
                                                    <Input type="text" name="" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Date</Label>
                                                    <Input type="date" name="" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Import Certificate */}
                            <TabPane tabId="4">
                                <Card body className="card_bordered radius-top-0">
                                    <section>
                                        <Row>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Police Office Name</Label>
                                                    <Input type="text" name="" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Entry Certificate Issue Date</Label>
                                                    <Input type="date" name="" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Import Certificate No.</Label>
                                                    <Input type="text" name="" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Office Detail */}
                            <TabPane tabId="5">
                                <Card body className="card_bordered radius-top-0">
                                    <section>
                                        <Row>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Office Name</Label>
                                                    <Input type="text" name="" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Office No.</Label>
                                                    <Input type="text" name="" />
                                                </FormGroup>
                                            </Col>
                                            <Col md="3">
                                                <FormGroup>
                                                    <Label>Date</Label>
                                                    <Input type="date" name="" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Other Documents */}
                            <TabPane tabId="6">
                                <Card body className="card_bordered radius-top-0">
                                    <section className="mb-4">
                                        <Row>
                                            <Col md="12">
                                                <h6 className="heading-line mb-3">
                                                    Upload File
                                                </h6>
                                                <div className="doc-wrapper">
                                                    <a href="#" className="doc-info mb-3">
                                                        <i className="ic-file"></i>
                                                        <span>sample-doc.pdf</span>
                                                    </a>
                                                    <a href="#" className="btn btn-outline outline-hover-blue">Upload or Replace</a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                </Card>
                            </TabPane>
                        </TabContent>
                        <div className="footer-btn">
                            <button type="button" className="btn btn-outline outline-hover-blue">Previous</button>
                            <Button color="primary">Next</Button>
                        </div>
                        <Modal isOpen={modal} toggle={modalToggle} className="modal-bms">
                            <ModalHeader toggle={modalToggle} className="modal-header-blue">शिक्षा थप्नुहोस्</ModalHeader>
                            <ModalBody>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>विश्वविद्यालय/बोर्डको नाम</Label>
                                            <Input type="select" name="select">
                                                <option selected disabled>Select...</option>
                                                <option>SLC Board</option>
                                                <option>HSEB Board</option>
                                                <option>Tribhuvan University</option>
                                                <option>Mahendra Sanskrit University</option>
                                                <option>Kathmandu University</option>
                                                <option>Purbanchal University</option>
                                                <option>Pokhara University</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>शैक्षिक उपाधि</Label>
                                            <Input type="select" name="select">
                                                <option selected disabled>Select...</option>
                                                <option>10th</option>
                                                <option>SLC</option>
                                                <option>O-Level</option>
                                                <option>A-Level</option>
                                                <option>+2/PCL</option>
                                                <option>Bachelors</option>
                                                <option>Masters</option>
                                                <option>MPhil</option>
                                                <option>PhD</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>शैक्षिक संकाय</Label>
                                            <Input type="select" name="select">
                                                <option selected disabled>Select...</option>
                                                <option>Humanities</option>
                                                <option>Law</option>
                                                <option>Management</option>
                                                <option>Education</option>
                                                <option>Science</option>
                                                <option>Engineering</option>
                                                <option>Medical</option>
                                                <option>Agriculture</option>
                                                <option>Forest</option>
                                                <option>Sanskrit</option>
                                                <option>Others</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="2">
                                        <FormGroup>
                                            <Label>श्रेणी/प्रतिशत</Label>
                                            <Input type="text" name="select" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>मूल विषय</Label>
                                            <Input type="text" name="subject" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>शैक्षिक योग्यताको उपाधिको विवरण</Label>
                                            <Input type="text" name="" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>शैक्षिक प्रकार</Label>
                                            <div>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="jobType" /> Government
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="jobType" /> Non-government
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>उत्तीर्ण गरेको साल</Label>
                                            <Input type="date" name="" />
                                            <div className="mt-1">
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="dateType" /> A.D.
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="dateType" /> B.S.
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="docUpload">कागजात अपलोड गर्नुहोस्</Label>
                                            <CustomInput type="file" id="docUpload" name="docUpload" />
                                            <FormText color="muted">
                                                The document should be in pdf format
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="docUpload">समानता अपलोड गर्नुहोस्</Label>
                                            <CustomInput type="file" id="docUpload" name="docUpload" />
                                            <FormText color="muted">
                                                The document should be in pdf format
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </ModalBody>
                            <ModalFooter>
                                <button type="button" className="btn btn-outline outline-hover-red" onClick={modalToggle}>Cancel</button>
                                <Button color="primary" onClick={modalToggle}>Save</Button>
                            </ModalFooter>
                        </Modal>
                        <Modal isOpen={trainingModal} toggle={modalTrainingToggle} className="modal-bms">
                            <ModalHeader toggle={modalTrainingToggle} className="modal-header-blue">प्रशिक्षण थप्नुहोस्</ModalHeader>
                            <ModalBody>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>तालिम दिने संस्थाको नाम</Label>
                                            <Input type="text" name="" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>तालिमको नाम</Label>
                                            <Input type="text" name="" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="2">
                                        <FormGroup>
                                            <Label>श्रेणी/प्रतिशत</Label>
                                            <Input type="text" name="" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="5">
                                        <FormGroup>
                                            <Label>अवधि देखि</Label>
                                            <Input type="date" name="" />
                                            <div className="mt-1">
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="dateType2" /> A.D.
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="dateType2" /> B.S.
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col md="5">
                                        <FormGroup>
                                            <Label>अवधि सम्म</Label>
                                            <Input type="date" name="" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="docUpload">कागजात अपलोड गर्नुहोस्</Label>
                                            <CustomInput type="file" id="docUpload" name="docUpload" />
                                            <FormText color="muted">
                                                The document should be in pdf format
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </ModalBody>
                            <ModalFooter>
                                <button type="button" className="btn btn-outline outline-hover-red" onClick={modalTrainingToggle}>Cancel</button>
                                <Button color="primary" onClick={modalTrainingToggle}>Save</Button>
                            </ModalFooter>
                        </Modal>
                        <Modal isOpen={councilModal} toggle={modalCouncilToggle} className="modal-bms">
                            <ModalHeader toggle={modalCouncilToggle} className="modal-header-blue">व्यावसायिक परिषद थप्नुहोस्</ModalHeader>
                            <ModalBody>
                                <Row>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>प्रमाणपत्र दिने काउन्सिलको नाम</Label>
                                            <Input type="text" name="" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>किसिम</Label>
                                            <div>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="serviceType" /> Permanent
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="serviceType" /> Temporary
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label>दर्ता नं.</Label>
                                            <Input type="text" name="" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>जारि मिति</Label>
                                            <Input type="date" name="" />
                                            <div className="mt-1">
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="dateType2" /> A.D.
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check inline>
                                                    <Label check>
                                                        <Input type="radio" name="dateType2" /> B.S.
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>नवीकरण मिति</Label>
                                            <Input type="date" name="" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>वैधता मिति</Label>
                                            <Input type="date" name="" />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="docUpload">कागजात अपलोड गर्नुहोस्</Label>
                                            <CustomInput type="file" id="docUpload" name="docUpload" />
                                            <FormText color="muted">
                                                The document should be in pdf format
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </ModalBody>
                            <ModalFooter>
                                <button type="button" className="btn btn-outline outline-hover-red" onClick={modalCouncilToggle}>Cancel</button>
                                <Button color="primary" onClick={modalCouncilToggle}>Save</Button>
                            </ModalFooter>
                        </Modal>
                        <Modal isOpen={experienceModal} toggle={modalExperienceToggle} className="modal-bms">
                            <ModalHeader toggle={modalExperienceToggle} className="modal-header-blue">संक्रमण थप्नुहोस्</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label>अनुभव प्रकार</Label>
                                                <div>
                                                    <FormGroup check inline>
                                                        <CustomInput value="1" type="radio" id="experienceType1" name="experienceType" checked={experienceType === 1} label="Government" onClick={experienceTypeToggle} />
                                                    </FormGroup>
                                                    <FormGroup check inline>
                                                        <CustomInput value="2" type="radio" id="experienceType2" name="experienceType" checked={experienceType === 2} label="Non-government" onClick={experienceTypeToggle} />
                                                    </FormGroup>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    {experienceType === 1 && <GovForm />}
                                    {experienceType === 2 && <NonGovForm />}
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <button type="button" className="btn btn-outline outline-hover-red" onClick={modalExperienceToggle}>Cancel</button>
                                <Button color="primary" onClick={modalExperienceToggle}>Save</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            </main>
        </div>
    )
}

const GovForm = () => {
    return (
        <Row>
            <Col md="12">
                <FormGroup>
                    <Label>कार्यालयको नाम</Label>
                    <Input type="text" name="" />
                </FormGroup>
            </Col>
            <Col md="12">
                <FormGroup>
                    <Label>कार्यालयको ठेगाना</Label>
                    <Input type="textarea" rows="4" col="10" name="" />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>पद</Label>
                    <Input type="text" name="" />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>सेवा</Label>
                    <Input type="select" name="select">
                        <option selected disabled>Select...</option>
                        <option>न्याय एकीकृत (न्याय, कानुन, सरकारी वकिल)</option>
                        <option>एकीकृत (प्रशासन/लेखा)</option>
                        <option>एकीकृत (प्रशासन/लेखा/कानून)</option>
                        <option>नेपाल परराष्ट्र</option>
                        <option>नेपाल वन</option>
                        <option>नेपाल शिक्षा</option>
                        <option>नेपाल स्वास्थ्य</option>
                        <option>नेपाल व्यवस्थापिका संसद</option>
                        <option>एकीकृत तथा संयुक्त</option>
                    </Input>
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>समूह</Label>
                    <Input type="text" name="" />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>उपसमूह</Label>
                    <Input type="text" name="" />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label htmlFor="docUpload">श्रेणी/तह</Label>
                    <Input type="select" name="select">
                        <option selected disabled>Select...</option>
                        <option>Gazatted First</option>
                        <option>Gazatted Second</option>
                        <option>Gazatted Third</option>
                        <option>Non-gazatted First</option>
                        <option>Non-gazatted Second</option>
                        <option>Non-gazatted Third</option>
                        <option>Non-gazatted Fourth</option>
                    </Input>
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label htmlFor="docUpload">टिप्पणी</Label>
                    <Input type="select" name="select">
                        <option selected disabled>Select...</option>
                        <option>New Appointment</option>
                        <option>Promotion</option>
                        <option>Transfer</option>
                    </Input>
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>अवधि देखि</Label>
                    <Input type="date" name="" />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>अवधि सम्म</Label>
                    <Input type="date" name="" />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label htmlFor="docUpload">रोजगारीको अवस्था</Label>
                    <Input type="select" name="select">
                        <option selected disabled>Select...</option>
                        <option>Working</option>
                        <option>Transfered</option>
                        <option>Retired</option>
                    </Input>
                    <FormText color="muted">
                        If this is your current experience please mention working status (रोजगारीको अवस्था) as 'Working' otherwise mention 'Transfered'
                    </FormText>
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label for="docUpload">स्थायी/अस्थायी/करार</Label>
                    <Input type="select" name="select">
                        <option selected disabled>Select...</option>
                        <option>Permanent</option>
                        <option>Temporary</option>
                        <option>Contract</option>
                    </Input>
                </FormGroup>
            </Col>
        </Row>
    )
}

const NonGovForm = () => {
    return (
        <Row>
            <Col md="6">
                <FormGroup>
                    <Label>कार्यालय/संस्थाको नाम</Label>
                    <Input type="text" name="" />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>पद</Label>
                    <Input type="text" name="" />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>श्रेणी/तह</Label>
                    <div>
                        <FormGroup check inline>
                            <CustomInput type="radio" id="officerType1" name="officerType" checked label="Officer" />
                        </FormGroup>
                        <FormGroup check inline>
                            <CustomInput type="radio" id="officerType2" name="officerType" label="Non-officer" />
                        </FormGroup>
                    </div>
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label htmlFor="docUpload">रोजगारीको किसिम</Label>
                    <Input type="select" name="select">
                        <option selected disabled>Select...</option>
                        <option>Permanent</option>
                        <option>Temporary</option>
                        <option>Contract</option>
                    </Input>
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>रोजगारीको अवधि (देखि)</Label>
                    <Input type="date" name="" />
                </FormGroup>
            </Col>
            <Col md="6">
                <FormGroup>
                    <Label>रोजगारीको अवधि (सम्म)</Label>
                    <Input type="date" name="" />
                </FormGroup>
            </Col>
        </Row>
    )
}