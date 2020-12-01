// @ts-nocheck
import React, { ReactElement, useState } from 'react';
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
    const [confirmModal, setConfirmModal] = useState(false);


    const modalToggle = () => setModal(!modal);
    const modalTrainingToggle = () => setTrainingModal(!trainingModal);
    const modalCouncilToggle = () => setCouncilModal(!councilModal);
    const modalExperienceToggle = () => setExperienceModal(!experienceModal);
    const confirmModalToggle = () => setConfirmModal(!confirmModal);

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
                            <h6 className="text-black font-bold">My Profile</h6>
                        </div>
                        <Nav tabs className="tab-01">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    व्यक्तिगत
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    अतिरिक्त
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    सम्पर्क
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '4' })}
                                    onClick={() => { toggle('4'); }}
                                >
                                    शिक्षा
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '5' })}
                                    onClick={() => { toggle('5'); }}
                                >
                                    प्रशिक्षण
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '6' })}
                                    onClick={() => { toggle('6'); }}
                                >
                                    व्यावसायिक परिषद
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '7' })}
                                    onClick={() => { toggle('7'); }}
                                >
                                    अनुभव
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '8' })}
                                    onClick={() => { toggle('8'); }}
                                >
                                    कागजात
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '9' })}
                                    onClick={() => { toggle('9'); }}
                                >
                                    पूर्वावलोकन
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            {/* #Personal */}
                            <TabPane tabId="1">
                                <Card body className="card_bordered radius-top-0">
                                    {/* #Basic */}
                                    <section className="mb-lg-4 mb-md-3 mb-2">
                                        <div className="mb-3">
                                            <h6>आधारभूत</h6>
                                        </div>
                                        <Row>
                                            <Col xl="6">
                                                <div className="heading-line mb-3">
                                                    <h6>Name (in English)</h6>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">First Name</Label>
                                                                <Input type="text" name="fname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">Middle Name</Label>
                                                                <Input type="text" name="mname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">Last Name</Label>
                                                                <Input type="text" name="lname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                            <Col xl="6">
                                                <div className="heading-line mb-3">
                                                    <h6>नाम (नेपालीमा)</h6>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">पहिलो</Label>
                                                                <Input type="text" name="fname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">बीचको</Label>
                                                                <Input type="text" name="mname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">थर</Label>
                                                                <Input type="text" name="lname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xl="2" md="4">
                                                <FormGroup>
                                                    <Label>जन्म मिति (वि.सं.)</Label>
                                                    <Input type="date" name="dobNP" />
                                                </FormGroup>
                                            </Col>
                                            <Col xl="2" md="4">
                                                <FormGroup>
                                                    <Label>Date of Birth (ईस्वी सम्वत्)</Label>
                                                    <Input type="date" name="dobEN" />
                                                </FormGroup>
                                            </Col>
                                            <Col xl="3" md="4">
                                                <FormGroup>
                                                    <Label>लिङ्ग</Label>
                                                    <div>
                                                        <FormGroup check inline>
                                                            <Label check>
                                                                <Input type="radio" name="gender" /> पुरुष
                                                            </Label>
                                                        </FormGroup>
                                                        <FormGroup check inline>
                                                            <Label check>
                                                                <Input type="radio" name="gender" /> महिला
                                                            </Label>
                                                        </FormGroup>
                                                        <FormGroup check inline>
                                                            <Label check>
                                                                <Input type="radio" name="gender" onClick={confirmModalToggle} /> अन्य
                                                            </Label>
                                                        </FormGroup>
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </section>
                                    {/* #Family */}
                                    <section className="mb-lg-4 mb-md-3 mb-2">
                                        <div className="mb-3">
                                            <h6>परिवार</h6>
                                        </div>
                                        <Row>
                                            <Col xl="6" className="mb-2">
                                                <div className="heading-line mb-3">
                                                    <h6>बाबुको नाम</h6>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">पहिलो</Label>
                                                                <Input type="text" name="fname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">बीचको</Label>
                                                                <Input type="text" name="mname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">थर</Label>
                                                                <Input type="text" name="lname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                            <Col xl="6" className="mb-2">
                                                <div className="heading-line mb-3">
                                                    <h6>आमाको नाम</h6>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">पहिलो</Label>
                                                                <Input type="text" name="fname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">बीचको</Label>
                                                                <Input type="text" name="mname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">थर</Label>
                                                                <Input type="text" name="lname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                            <Col xl="6" >
                                                <div className="heading-line mb-3">
                                                    <h6>बाजेको नाम</h6>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">पहिलो</Label>
                                                                <Input type="text" name="fname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">बीचको</Label>
                                                                <Input type="text" name="mname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">थर</Label>
                                                                <Input type="text" name="lname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                            <Col xl="6" >
                                                <div className="heading-line mb-3">
                                                    <h6>पति/पत्नीको नाम</h6>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">पहिलो</Label>
                                                                <Input type="text" name="fname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">बीचको</Label>
                                                                <Input type="text" name="mname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="4">
                                                            <FormGroup>
                                                                <Label htmlFor="">थर</Label>
                                                                <Input type="text" name="lname" id="" />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                        </Row>
                                    </section>
                                    {/* #Citizenship */}
                                    <section>
                                        <div className="mb-3">
                                            <h6>नागरिकता</h6>
                                        </div>
                                        <Form>
                                            <Row>
                                                <Col xl="2" md="4">
                                                    <FormGroup>
                                                        <Label>नागरिकता नं.</Label>
                                                        <Input type="text" name="citizenshipNo" />
                                                    </FormGroup>
                                                </Col>
                                                <Col xl="2" md="4">
                                                    <FormGroup>
                                                        <Label>जारी गर्ने जिल्ला</Label>
                                                        <Input type="text" name="district" />
                                                    </FormGroup>
                                                </Col>
                                                <Col xl="2" md="4">
                                                    <FormGroup>
                                                        <Label>जारी मिति</Label>
                                                        <Input type="date" name="issueDate" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Extra */}
                            <TabPane tabId="2">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>जात</Label>
                                                <Input type="text" name=""></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>धर्म</Label>
                                                <Input type="select" name="select">
                                                    <option selected disabled>Select...</option>
                                                    <option>Hindu</option>
                                                    <option>Muslim</option>
                                                    <option>Buddhism</option>
                                                    <option>Christian</option>
                                                    <option>Islam</option>
                                                    <option>Kiratism</option>
                                                    <option>Sikhism</option>
                                                    <option>Jainism</option>
                                                    <option>Other</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>अन्य धर्म भएमा उल्लेख गर्ने</Label>
                                                <Input type="text" name=""></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>वैवाहिक स्थिति</Label>
                                                <div>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="maritalStatus" /> Married
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="maritalStatus" /> Single
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="maritalStatus" /> Widowed
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="maritalStatus" /> Divorce
                                                        </Label>
                                                    </FormGroup>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>रोजगारीको अवस्था</Label>
                                                <Input type="select" name="select">
                                                    <option selected disabled>Select...</option>
                                                    <option>Unemployment</option>
                                                    <option>Government Service</option>
                                                    <option>Non-government Service</option>
                                                    <option>Self-employed</option>
                                                    <option>Other</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>अन्य अवस्था भएमा उल्लेख गर्ने</Label>
                                                <Input type="text" name=""></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>मातृभाषा</Label>
                                                <Input type="text" name=""></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>शारीरिक रुपमा अशक्त हुनुहुन्छ ?</Label>
                                                <div>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="option" /> Yes
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="option" /> No
                                                        </Label>
                                                    </FormGroup>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>शारीरिक अशक्तता कस्तो प्रकारको हो खुलाउनुहोला</Label>
                                                <Input type="text" name=""></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>बाबुको शैक्षिक योग्यता</Label>
                                                <Input type="select" name="select">
                                                    <option selected disabled>Select...</option>
                                                    <option>Uneducated</option>
                                                    <option>Educated</option>
                                                    <option>SLC</option>
                                                    <option>Higher Education</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>आमाको शैक्षिक योग्यता</Label>
                                                <Input type="select" name="select">
                                                    <option selected disabled>Select...</option>
                                                    <option>Uneducated</option>
                                                    <option>Educated</option>
                                                    <option>SLC</option>
                                                    <option>Higher Education</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>आमा/वावुको मुख्य पेशा</Label>
                                                <Input type="select" name="select">
                                                    <option selected disabled>Select...</option>
                                                    <option>Agriculture</option>
                                                    <option>Business</option>
                                                    <option>Teaching(Private)</option>
                                                    <option>Teaching(Public)</option>
                                                    <option>Private</option>
                                                    <option>Government</option>
                                                    <option>Other</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>आमा/वावुको पेशा(अन्य भए उल्लेख गर्ने)</Label>
                                                <Input type="text" name=""></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col md="4">
                                            <FormGroup>
                                                <Label>भौगोलिक क्षेत्र</Label>
                                                <div>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="region" /> Hill
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="region" /> Mountain
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="region" /> Inner Madhes
                                                        </Label>
                                                    </FormGroup>
                                                    <FormGroup check inline>
                                                        <Label check>
                                                            <Input type="radio" name="region" /> Terai
                                                        </Label>
                                                    </FormGroup>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>आफुलाई के भन्न रुचाउनु हुन्छ (अन्य भए उल्लेख गर्ने)</Label>
                                                <Input type="text" name=""></Input>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="4">
                                            <FormGroup>
                                                <Label>समूह/वर्ग</Label>
                                                <div className="form-check">
                                                    <Input type="checkbox" className="form-check-input" id="check1" />
                                                    <Label className="form-check-label" for="check1">
                                                        आदिवासी /जनजाती
                                                    </Label>
                                                </div>
                                                <div className="form-check">
                                                    <Input type="checkbox" className="form-check-input" id="check2" />
                                                    <Label className="form-check-label" for="check2">
                                                        दलित
                                                    </Label>
                                                </div>
                                                <div className="form-check">
                                                    <Input type="checkbox" className="form-check-input" id="check3" />
                                                    <Label className="form-check-label" for="check3">
                                                        आ.ज
                                                    </Label>
                                                </div>
                                                <div className="form-check">
                                                    <Input type="checkbox" className="form-check-input" id="check4" />
                                                    <Label className="form-check-label" for="check4">
                                                        क्षत्री
                                                    </Label>
                                                </div>
                                                <div className="form-check">
                                                    <Input type="checkbox" className="form-check-input" id="check5" />
                                                    <Label className="form-check-label" for="check5">
                                                        ब्राह्मण
                                                    </Label>
                                                </div>
                                                <div className="form-check">
                                                    <Input type="checkbox" className="form-check-input" id="check6" />
                                                    <Label className="form-check-label" for="check6">
                                                        मधेशी
                                                    </Label>
                                                </div>
                                                <div className="form-check">
                                                    <Input type="checkbox" className="form-check-input" id="check7" />
                                                    <Label className="form-check-label" for="check7">
                                                        अपाङग
                                                    </Label>
                                                </div>
                                                <div className="form-check">
                                                    <Input type="checkbox" className="form-check-input" id="check8" />
                                                    <Label className="form-check-label" for="check8">
                                                        पिछडिएको
                                                    </Label>
                                                </div>
                                                <div className="form-check">
                                                    <Input type="checkbox" className="form-check-input" id="check9" />
                                                    <Label className="form-check-label" for="check9">
                                                        अन्य
                                                    </Label>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Card>
                            </TabPane>
                            {/* #Contact */}
                            <TabPane tabId="3">
                                <Card body className="card_bordered radius-top-0">
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>स्थायी ठेगाना</h6>
                                        </div>
                                        <Form>
                                            <Row>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>प्रदेश</Label>
                                                        <select name="" id="" className="form-control">
                                                            <option value="" disabled selected>Select...</option>
                                                            <option value="">प्रदेश १</option>
                                                            <option value="">प्रदेश २</option>
                                                            <option value="">प्रदेश ३</option>
                                                            <option value="">प्रदेश ४</option>
                                                            <option value="">प्रदेश ५</option>
                                                            <option value="">प्रदेश ६</option>
                                                            <option value="">प्रदेश ७</option>
                                                        </select>
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>जिल्ला</Label>
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
                                                {/* <Col sm="4">
                                                    <FormGroup>
                                                        <Label>स्थानिय तहको प्रकार</Label>
                                                        <Input type="select" name="select">
                                                            <option selected disabled>Select...</option>
                                                            <option>नगरपालिका</option>
                                                            <option>गाउँपलिका</option>
                                                            <option>महानगरपालिका</option>
                                                            <option>उपमहानगरपालिका</option>
                                                        </Input>
                                                    </FormGroup>
                                                </Col> */}
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>नगरपालिका /गाउँपलिका</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>वडा नं</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>मार्ग</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>टोल</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>घर नं.</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>फोन नं</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>मोबाइल नं</Label>
                                                        <Input type="text" name="" />
                                                    </FormGroup>
                                                </Col>
                                                <Col sm="4">
                                                    <FormGroup>
                                                        <Label>ईमेल</Label>
                                                        <Input type="text" name="" value="example@gmail.com" disabled />
                                                    </FormGroup>
                                                </Col>
                                                
                                            </Row>
                                        </Form>
                                    </section>
                                    <section>
                                        <div className="heading-line mb-3">
                                            <h6>पत्राचार गर्ने ठेगाना</h6>
                                        </div>
                                        <Form>
                                            <Row>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label>ठेगाना</Label>
                                                        <Input type="textarea" rows="4" col="10" />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Education */}
                            <TabPane tabId="4">
                                <Card body className="card_bordered radius-top-0">
                                    <section className="mb-4">
                                        <div className="heading pt-0 mb-3">
                                            <h6>शिक्षा विवरण</h6>
                                            <Button color="primary" className="btn-icon" onClick={modalToggle}><i className="ic-add"></i>नयाँ थप्नुहोस्</Button>
                                        </div>
                                        <div className="table-responsive scrollable">
                                            <Table className="table-02 table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>विश्वविद्यालय/बोर्ड</th>
                                                        <th>शैक्षिक उपाधि</th>
                                                        <th>संकाय</th>
                                                        <th>श्रेणी/प्रतिशत</th>
                                                        <th>मूल विषय</th>
                                                        <th>उत्तीर्ण गरेको साल</th>
                                                        <th>शैक्षिक योग्यताको उपाधिको विवरण</th>
                                                        <th>अपलोड गरिएका कागजातहरू</th>
                                                        <th>समान</th>
                                                        <th className="text-right">कार्य</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>80%</td>
                                                        <td>Computer Engineering</td>
                                                        <td>7/7/2005</td>
                                                        <td>test</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <ul className="list list__inline justify-content-end">
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-edit text-info"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-delete text-danger"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>80%</td>
                                                        <td>Computer Engineering</td>
                                                        <td>7/7/2005</td>
                                                        <td>test</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <ul className="list list__inline justify-content-end">
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-edit text-info"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-delete text-danger"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Training */}
                            <TabPane tabId="5">
                                <Card body className="card_bordered radius-top-0">
                                    <section className="mb-4">
                                        <div className="heading pt-0 mb-3">
                                            <h6>प्रशिक्षण विवरण</h6>
                                            <Button color="primary" className="btn-icon" onClick={modalTrainingToggle}><i className="ic-add"></i>नयाँ थप्नुहोस्</Button>
                                        </div>
                                        <div className="table-responsive scrollable">
                                            <Table className="table-02 table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>तालिम दिने संस्था</th>
                                                        <th>तालिम</th>
                                                        <th>श्रेणी/प्रतिशत</th>
                                                        <th>अवधि देखि</th>
                                                        <th>अवधि सम्म</th>
                                                        <th>अपलोड गरिएका कागजातहरू</th>
                                                        <th className="text-right">कार्य</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <ul className="list list__inline justify-content-end">
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-edit text-info"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-delete text-danger"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <ul className="list list__inline justify-content-end">
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-edit text-info"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-delete text-danger"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Professional Council */}
                            <TabPane tabId="6">
                                <Card body className="card_bordered radius-top-0">
                                    <section className="mb-4">
                                        <div className="heading pt-0 mb-3">
                                            <h6>व्यावसायिक परिषद विवरण</h6>
                                            <Button color="primary" className="btn-icon" onClick={modalCouncilToggle}><i className="ic-add"></i>नयाँ थप्नुहोस्</Button>
                                        </div>
                                        <div className="table-responsive scrollable">
                                            <Table className="table-02 table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>प्रमाणपत्र दिने काउन्सिलको नाम</th>
                                                        <th>किसिम</th>
                                                        <th>दर्ता नं.</th>
                                                        <th>जारि मिति</th>
                                                        <th>नविकरण मिति</th>
                                                        <th>अपलोड गरिएका कागजातहरू</th>
                                                        <th className="text-right">कार्य</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <ul className="list list__inline justify-content-end">
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-edit text-info"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-delete text-danger"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <ul className="list list__inline justify-content-end">
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-edit text-info"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-delete text-danger"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Experience */}
                            <TabPane tabId="7">
                                <Card body className="card_bordered radius-top-0">
                                    <section className="mb-4">
                                        <div className="mb-3">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <h6>अनुभव विवरण</h6>
                                                <Button color="primary" className="btn-icon" onClick={modalExperienceToggle}><i className="ic-add"></i>नयाँ थप्नुहोस्</Button>
                                            </div>
                                            <p className="text-muted">
                                                For applying in internal category and age relaxation, please metion working status (रोजगारीको अवस्था) as 'Working' in your current experience only and for previous experience please mention working status (रोजगारीको अवस्था) as 'Transfered'
                                            </p>
                                        </div>
                                        <div className="alert alert-info d-flex align-items-center">
                                            <i className="ic-info mr-2"></i>For nepal government employees declaring all the experience details is mandatory
                                        </div>
                                        <div className="alert alert-info d-md-flex align-items-center">
                                            <i className="ic-info mr-2"></i>
                                            <span>अनुभव आवश्यक पर्ने विज्ञापनमा दरखास्त दिने उम्मेदवारले लोक सेवा आयोगले तयार गरेको अनुभव सम्बन्धी फाराम डाउनलोड गरी सो फारममा उल्लेखित विवरण भरी वहाल रहेको निकाय वाट प्रमाणित गरार्इ तल अपलोड गर्नुहोस् ।</span>
                                            <a href="" className="text-underline ml-md-3 d-md-inline d-block text-nowrap font-weight-bold">अनुभव सम्बन्धी फाराम Download गर्नुहोस्</a>
                                        </div>
                                        <div className="table-responsive scrollable">
                                            <Table className="table-02 table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>प्रमाणपत्र दिने काउन्सिलको नाम</th>
                                                        <th>किसिम</th>
                                                        <th>दर्ता नं.</th>
                                                        <th>जारि मिति</th>
                                                        <th>नविकरण मिति</th>
                                                        <th>अपलोड गरिएका कागजातहरू</th>
                                                        <th className="text-right">कार्य</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <ul className="list list__inline justify-content-end">
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-edit text-info"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-delete text-danger"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <ul className="list list__inline justify-content-end">
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-edit text-info"></i>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button type="button" className="btn btn-icon-only">
                                                                        <i className="ic-delete text-danger"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Upload Documents */}
                            <TabPane tabId="8">
                                <Card body className="card_bordered radius-top-0">
                                    <div className="mb-3">
                                        <h6>कागजात विवरण</h6>
                                    </div>
                                    <section className="mb-4">
                                        <Row>
                                            <Col md="6">
                                                <h6 className="heading-line mb-2">Your Scanned Photograph</h6>
                                                <p className="mb-3">उम्मेदवारको हालसालै खिचेको फोटो अनिवार्य अपलोड गर्नुहोस् ।</p>

                                                <div className="img-wrapper img-profile mb-3">
                                                    <div className="img-overlay"></div>
                                                    <div className="img-overlay-text">
                                                        <input type="file" id="img-upload1" className="d-none" />
                                                        <label htmlFor="img-upload1">Replace File</label>
                                                    </div>
                                                    <div className="img-overlay-close">
                                                        <span className="ic-close"></span>
                                                    </div>
                                                    <img src={SampleImg} alt="sample profile" />
                                                </div>

                                                {/* For Photo Upload  */}
                                                <div className="files--upload img-wrapper shadow-none">
                                                    <input type="file" id="img-upload2" className="d-none imgUpload" placeholder="" />
                                                    <label htmlFor="img-upload2" className="upload-label">
                                                        <p className="font-semi-bold text-primary">
                                                            <span className="ic-arrow-up"></span>
                                                        Upload</p>
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <h6 className="heading-line mb-2 mt-md-0 mt-3">Your Scanned Signature</h6>
                                                <p className="mb-3">उम्मेदवारको दस्तखत अनिवार्य अपलोड गर्नुहोस् ।</p>
                                                <div className="img-wrapper img-sign">
                                                    <img src={SampleSign} alt="sample signature" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section className="mb-4">
                                        <Row>
                                            <Col md="6" className="mb-3">
                                                <h6 className="heading-line mb-2">
                                                    Your Citizenship Certificate
                                                    <button type="button" className="btn btn-icon-only ml-2 text-info" id="ctznPopover">
                                                        <i className="ic-info"></i>
                                                    </button>
                                                    <UncontrolledPopover trigger="focus" placement="top" target="ctznPopover">
                                                        <PopoverBody>
                                                            <ol className="list-reset">
                                                                <li><b>आदिवासी/जनजातिः</b> दरखास्त दिने अन्तिम मिति वा सो अगावैको मितिमा जिल्ला प्रशासन कार्यालयबाट आदिवासी/जनजाति प्रमाणित गरेको कागजात (सूचीकृत अन्ठाउन्न जातिका उम्मेदवारहरूले पेश गर्नु नपर्ने)</li>
                                                                <li><b>दलितः</b> दरखास्त दिने अन्तिम मिति वा सो अगावैको मितिमा जिल्ला प्रशासन कार्यालयबाट दलित जाति प्रमाणित गरेको कागजात</li>
                                                                <li><b>पिछडिएको क्षेत्रः</b> दरखास्त दिने अन्तिम मिति वा सो भन्दा ३ महिना अगाडी भित्रको मितिमा संवन्धित स्थानीय निकाय/तह बाट प्रमाणित गरेको कागजात ।</li>
                                                            </ol>
                                                        </PopoverBody>
                                                    </UncontrolledPopover>
                                                </h6>
                                                <p className="mb-3">देहायका समावेशी समूहका विज्ञापनमा दरखास्त दिने उम्मेदवारहरुले देहाय वमोजिमका कागजातको SCAN COPY अनिवार्य रूपमा तल अपलोड गर्नु होस्</p>
                                                <div className="doc-wrapper">
                                                    <a href="#" className="doc-info mb-3">
                                                        <i className="ic-file"></i>
                                                        <span>sample-citizenship-doc.pdf</span>
                                                    </a>
                                                    <a href="#" className="btn btn-outline outline-hover-blue">Upload or Replace</a>
                                                </div>
                                            </Col>
                                            <Col md="6" className="mb-3">
                                                <h6 className="heading-line mb-2 mt-md-0 mt-3">Your Experience Document</h6>
                                                <p className="mb-3">निजामति कर्मचारीले उल्लेखित अनुभव सम्बन्धी फाराम download गरि सम्बन्धित निकायबाट प्रमाणित गराई upload गर्नुहोला । <a href="#" className="text-info text-underline">अनुभव सम्बन्धी फाराम Download गर्नुहोस्</a></p>
                                                <div className="doc-wrapper">
                                                    <a href="#" className="doc-info mb-3">
                                                        <i className="ic-file"></i>
                                                        <span>sample-experience-doc.pdf</span>
                                                    </a>
                                                    <a href="#" className="btn btn-outline outline-hover-blue">Upload or Replace</a>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <h6 className="heading-line mb-2 mt-3">पिछडिएको कागजात</h6>
                                                <div className="doc-wrapper">
                                                    <a href="#" className="doc-info mb-3">
                                                        <i className="ic-file"></i>
                                                        <span>sample-pichadiyeko-doc.pdf</span>
                                                    </a>
                                                    <a href="#" className="btn btn-outline outline-hover-blue">Upload or Replace</a>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <h6 className="heading-line mb-2 mt-3">मधेशी कागजात</h6>
                                                <div className="doc-wrapper">
                                                    <a href="#" className="doc-info mb-3">
                                                        <i className="ic-file"></i>
                                                        <span>sample-madhesi-doc.pdf</span>
                                                    </a>
                                                    <a href="#" className="btn btn-outline outline-hover-blue">Upload or Replace</a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                </Card>
                            </TabPane>
                            {/* #Preview */}
                            <TabPane tabId="9">
                                <Card body className="card_bordered radius-top-0">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6>पूर्वावलोकन विवरण</h6>
                                        <button type="button" className="btn btn-outline outline-hover-blue btn-icon"><i className="ic-print"></i>प्रिन्ट गर्नुहोस्</button>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div>
                                            <img src={Logo} alt="PSC" />
                                        </div>
                                        <div className="text-center flex-grow-1">
                                            <h5>लोक सेवा आयोग</h5>
                                        </div>
                                        <div className="avatar-xxl">
                                            <img src={SampleImg} alt="sample profile" />
                                        </div>
                                    </div>
                                    <section className="mb-4">
                                        <p className="mb-4">
                                            <b>मास्टर आईडी:</b> 459674
                                        </p>
                                        <div className="heading-line mb-3">
                                            <h6>Name(English)</h6>
                                        </div>
                                        <Row>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>First</label>
                                                    <div className="value">Jitesh</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>Middle</label>
                                                    <div className="value">n/a</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>Last</label>
                                                    <div className="value">Nemkul</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>नाम (नेपालीमा)</h6>
                                        </div>
                                        <Row>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>पहिलो</label>
                                                    <div className="value">जितेश</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>बीचको</label>
                                                    <div className="value">n/a</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>थर</label>
                                                    <div className="value">नेम्कुल</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>जन्म मिति</h6>
                                        </div>
                                        <Row>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>वि.सं.</label>
                                                    <div className="value">23/9/2050</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>ईस्वी सम्वत्</label>
                                                    <div className="value">07/01/1994</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>लिङ्ग</label>
                                                    <div className="value">Male</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>बाबुको नाम</h6>
                                        </div>
                                        <Row>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>पहिलो</label>
                                                    <div className="value">Jitendra</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>बीचको</label>
                                                    <div className="value">n/a</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>थर</label>
                                                    <div className="value">Nemkul</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>आमाको नाम</h6>
                                        </div>
                                        <Row>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>पहिलो</label>
                                                    <div className="value">Bipana</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>बीचको</label>
                                                    <div className="value">n/a</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>थर</label>
                                                    <div className="value">Nemkul</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>बाजेको नाम</h6>
                                        </div>
                                        <Row>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>पहिलो</label>
                                                    <div className="value">Dil Bahadur</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>बीचको</label>
                                                    <div className="value">n/a</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>थर</label>
                                                    <div className="value">Nemkul</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>नागरिकता</h6>
                                        </div>
                                        <Row>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>नागरिकता नं.</label>
                                                    <div className="value">01-5564-554654</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>जारी गर्ने जिल्ला</label>
                                                    <div className="value">Lalitpur</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>जारी मिति</label>
                                                    <div className="value">12/11/2017</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>शैक्षिक योग्यता</h6>
                                        </div>
                                        <div className="table-responsive scrollable">
                                            <Table className="table-02 table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>विश्वविद्यालय/बोर्ड</th>
                                                        <th>शैक्षिक उपाधि</th>
                                                        <th>संकाय</th>
                                                        <th>श्रेणी/प्रतिशत</th>
                                                        <th>मूल विषय</th>
                                                        <th>उत्तीर्ण गरेको साल</th>
                                                        <th>शैक्षिक योग्यताको उपाधिको विवरण</th>
                                                        <th>अपलोड गरिएका कागजातहरू</th>
                                                        <th>समान</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>80%</td>
                                                        <td>Computer Engineering</td>
                                                        <td>7/7/2005</td>
                                                        <td>test</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>80%</td>
                                                        <td>Computer Engineering</td>
                                                        <td>7/7/2005</td>
                                                        <td>test</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>तालिम</h6>
                                        </div>
                                        <div className="table-responsive scrollable">
                                            <Table className="table-02 table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>तालिम दिने संस्था</th>
                                                        <th>तालिम</th>
                                                        <th>श्रेणी/प्रतिशत</th>
                                                        <th>अवधि देखि</th>
                                                        <th>अवधि सम्म</th>
                                                        <th>अपलोड गरिएका कागजातहरू</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>अनुभव सम्बन्धी विवरण</h6>
                                        </div>
                                        <div className="table-responsive scrollable">
                                            <Table className="table-02 table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>प्रमाणपत्र दिने काउन्सिलको नाम</th>
                                                        <th>किसिम</th>
                                                        <th>दर्ता नं.</th>
                                                        <th>जारि मिति</th>
                                                        <th>नविकरण मिति</th>
                                                        <th>अपलोड गरिएका कागजातहरू</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Purbanchal University</td>
                                                        <td>Masters</td>
                                                        <td>Education</td>
                                                        <td>12/4/2002</td>
                                                        <td>4/4/2003</td>
                                                        <td>
                                                            <button type="button" className="btn btn-icon-only">
                                                                <i className="ic-file text-info"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </section>
                                    <section className="mb-4">
                                        <div className="heading-line mb-3">
                                            <h6>ठेगाना विवरण</h6>
                                        </div>
                                        <Row className="mb-4">
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>जिल्ला</label>
                                                    <div className="value">Accham</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>स्थानिय तहको प्रकार</label>
                                                    <div className="value">n/a</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>न.पा/गा.वि.स.</label>
                                                    <div className="value">jitesh1</div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>वडा नं</label>
                                                    <div className="value">12</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>प्रदेश</label>
                                                    <div className="value">n/a</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>टोल</label>
                                                    <div className="value">jitesh1</div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="mb-4">
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>मार्ग</label>
                                                    <div className="value">12</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>घर नं.</label>
                                                    <div className="value">44</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>फोन नम्बर</label>
                                                    <div className="value">n/a</div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>मोबाइल नम्बर</label>
                                                    <div className="value">9843849220</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>ईमेल</label>
                                                    <div className="value">jiteeesh@gmail.com</div>
                                                </div>
                                            </Col>
                                            <Col sm="4" xs="6" >
                                                <div className="form-display">
                                                    <label>पत्राचार गर्ने ठेगाना</label>
                                                    <div className="value">n/a</div>
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

                        {/* Gender Confirmation dialog  */}
                        <Modal isOpen={confirmModal} toggle={confirmModalToggle} className="modal-bms">
                            <ModalBody className="py-5">
                                <div className="text-center">
                                    <i className="ic-info text-info h2"></i>
                                    <h4 className="alert-title mt-3">Confirmation</h4>
                                    <p className="alert-desc mt-1">के तपाईं पक्का लिङ्गलाई अन्यको रूपमा रोज्न चाहनुहुन्छ?</p>
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-content-center">
                                <button type="button" className="btn btn-outline outline-hover-red" onClick={confirmModalToggle}>Cancel</button>
                                <button type="button" className="btn btn-primary" onClick={confirmModalToggle}>Confirm</button>
                            </ModalFooter>
                        </Modal>

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
                                                <option>Other</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label></Label>
                                            <Input type="text" >

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
                                    <Col md="12">
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
                                            <Label htmlFor="docUpload">ट्रान्सक्रिप्ट प्रमाणपत्र
                                            </Label>
                                            <CustomInput type="file" id="docUpload" name="docUpload" />
                                            <FormText color="muted">
                                                The document should be in pdf format
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="docUpload">चरित्र प्रमाणपत्र
                                                <span className="optional">(Optional)</span>
                                            </Label>
                                            <CustomInput type="file" id="docUpload" name="docUpload" />
                                            <FormText color="muted">
                                                The document should be in pdf format
                                            </FormText>
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="docUpload">डिग्री
                                                <span className="optional">(Optional)</span>
                                            </Label>
                                            <CustomInput type="file" id="docUpload" name="docUpload" />
                                            <FormText color="muted">
                                                The document should be in pdf format
                                            </FormText>
                                        </FormGroup>
                                    </Col>

                                    <Col md="6">
                                        <FormGroup>
                                            <Label htmlFor="docUpload">समकक्षता अपलोड गर्नुहोस्</Label>
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
                            <ModalHeader toggle={modalExperienceToggle} className="modal-header-blue">अनुभव थप्नुहोस्</ModalHeader>
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