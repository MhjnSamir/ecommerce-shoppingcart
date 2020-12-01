import React, { Fragment, ReactElement, useState, useRef, useEffect } from 'react';
import { Card, Col, Form, FormGroup, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/SidebarAdmin';


interface Props {

};



export default function Dashboard({ }: Props): ReactElement {
    const [sidebarToggle, setsidebarToggle] = useState(false);
    let scrollableElement: any = useRef(null);
    let [arrows, setArrows] = useState({
        left: false,
        right: true,
    })

    let { left, right } = arrows



    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    let list: any = null


    const adjustArrow = () => {
        if (list.scrollLeft <= 0) {
            setArrows({ ...arrows, left: false })
        }
        else if (list.scrollLeft >= (list.scrollWidth - list.offsetWidth)) {
            setArrows({ ...arrows, right: false })
        }
        else {
            setArrows({ ...arrows, right: true, left: true })
        }
    }

    const rightScroll = e => {
        list = scrollableElement.children[0]
        list.scrollLeft += 100
        adjustArrow();
    }
    const leftScroll = e => {
        list = scrollableElement.children[0]
        list.scrollLeft -= 100
        adjustArrow();
    }


    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container pb-3">
                        <div className="heading">
                            <h6 className="mb-2">Basic Configuration</h6>
                        </div>
                        <div className="tab-scrollable" ref={(scrollable: any) => { scrollableElement = scrollable }}>
                            <Nav tabs className="tab-01 scrollable scrollable-blue " >
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        Service
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        Class
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => { toggle('3'); }}
                                    >
                                        Post
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '4' })}
                                        onClick={() => { toggle('4'); }}
                                    >
                                        Group
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '5' })}
                                        onClick={() => { toggle('5'); }}
                                    >
                                        Sub Group
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '6' })}
                                        onClick={() => { toggle('6'); }}
                                    >
                                        Subject
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '7' })}
                                        onClick={() => { toggle('7'); }}
                                    >
                                        Qualification Type
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '8' })}
                                        onClick={() => { toggle('8'); }}
                                    >
                                        Qualification
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '9' })}
                                        onClick={() => { toggle('9'); }}
                                    >
                                        Master Configuration
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '10' })}
                                        onClick={() => { toggle('10'); }}
                                    >
                                        Post Combination
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '11' })}
                                        onClick={() => { toggle('11'); }}
                                    >
                                        Section
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '12' })}
                                        onClick={() => { toggle('12'); }}
                                    >
                                        PSC Post
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '13' })}
                                        onClick={() => { toggle('13'); }}
                                    >
                                        Test Type
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '14' })}
                                        onClick={() => { toggle('14'); }}
                                    >
                                        Nepal Year
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '15' })}
                                        onClick={() => { toggle('15'); }}
                                    >
                                        District
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '16' })}
                                        onClick={() => { toggle('16'); }}
                                    >
                                        Cast
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '17' })}
                                        onClick={() => { toggle('17'); }}
                                    >
                                        Mother Language
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '18' })}
                                        onClick={() => { toggle('18'); }}
                                    >
                                        Minister Name
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === '19' })}
                                        onClick={() => { toggle('19'); }}
                                    >
                                        Department Name
                                </NavLink>
                                </NavItem>

                            </Nav>
                            {left &&
                                <div className="btn-tab btn-tab-left">
                                    <button className={`btn btn-icon-only `} onClick={leftScroll}>
                                        <span className="ic-line-arrow-left"></span>
                                    </button>
                                </div>

                            }

                            {right &&
                                <div className="btn-tab btn-tab-right">
                                    <button className={`btn btn-icon-only `} onClick={rightScroll} >
                                        <span className="ic-line-arrow-right"></span>
                                    </button>
                                </div>
                            }
                        </div>
                        <TabContent activeTab={activeTab}>
                            {/* #service */}
                            <TabPane tabId="1">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Service Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Class  */}
                            <TabPane tabId="2">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Class Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Class Type
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option>Options 1</option>
                                                    <option>Options 2</option>
                                                    <option>Options 3</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Class Code
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option>Options 1</option>
                                                    <option>Options 2</option>
                                                    <option>Options 3</option>
                                                </select>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Post  */}
                            <TabPane tabId="3">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Post Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Group  */}
                            <TabPane tabId="4">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Service
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option>Options 1</option>
                                                    <option>Options 2</option>
                                                    <option>Options 3</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Group Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Sub Group  */}
                            <TabPane tabId="5">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Sub Group
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option>Options 1</option>
                                                    <option>Options 2</option>
                                                    <option>Options 3</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Sub Group Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Subject  */}
                            <TabPane tabId="6">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Subject Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Qualification  */}
                            <TabPane tabId="7">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Qualification Type Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Qualification Type */}
                            <TabPane tabId="8">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Qualification Type
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Qualification Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Master Configuration  */}
                            <TabPane tabId="9">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Service
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Class
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Group
                                                </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Sub Group
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Post
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Post Type
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Post Combination  */}
                            <TabPane tabId="10">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Service
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Group
                                                </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Sub Group
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Post
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Subject  */}
                            <TabPane tabId="11">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Subject Name
                                                    </label>
                                                <select name="" id="" className="custom-select">
                                                    <option disabled selected>Select...</option>
                                                    <option value="">Options 1</option>
                                                    <option value="">Options 1</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Section Name
                                                </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Post Name  */}
                            <TabPane tabId="12">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Post Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Test Type Name */}
                            <TabPane tabId="13">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Test Type Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Nepal Year*/}
                            <TabPane tabId="14">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Year Value
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* District */}
                            <TabPane tabId="15">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    District Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    District Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Cast*/}
                            <TabPane tabId="16">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Cast Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Cast Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/* Language*/}
                            <TabPane tabId="17">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Language Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Language Code
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>


                            {/* Ministry Name*/}
                            <TabPane tabId="18">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Ministry Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                            {/*Department Name*/}
                            <TabPane tabId="19">
                                <Card body className="card_bordered radius-top-0">
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Department Name
                                                    </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="3" md="4">
                                            <div className="form-group">
                                                <label htmlFor="">
                                                    Remarks
                                                    </label>
                                                <textarea rows={4} className="form-control"></textarea>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="footer-btn">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </Card>
                            </TabPane>

                        </TabContent>

                    </div>
                </div>
            </main >
        </div >
    )
}