import React, {useState} from 'react';
import Header from './../Dashboard/Header/Header';
import Sidebar from './../Dashboard/Sidebar/SidebarAdmin';
import { TabContent, TabPane, Button} from 'reactstrap';
import classnames from 'classnames';
import {Link} from "react-router-dom"



export default function VehicleType() {
    const [sidebarToggle, setsidebarToggle] = useState(false);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

        return (
            <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
                <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
                <main className="stickyHeader">
                    <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
        
                    <div className="inner">
                        <div className="container container-full d-flex flex-column mb-3">
                            <div className="heading">
                                <h6 className="text-black">Master Data Setup</h6>
                            </div>
                                <div className="d-flex flex-column h-100">
                                    <div className="nav nav-tab tab-01">
                                        <li>
                                        <a
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            Vehicle Setup
                                        </a>
                                        </li>
                                        <li>
                                            <a
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                                Office Setup
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                               Fiscal Year
                                            </a>
                                        </li>
                                    </div>
                                   
                            <div className="card card_bordered radius-top-0 h-100">
                                   
                                    <TabContent activeTab={activeTab} className="flex-grow-1">
                                        <TabPane tabId="1" className="h-100">
                                        <div className="row no-gutters h-100">
                                            <div className="col-lg-2 border-right">
                                                <div className="d-flex flex-column h-100">
                                            
                                                    <div className="flex-grow-1 position-relative">
                                                        <ul className="list list-setup container-full scrollable mt-2">
                                                            <li>
                                                                <a href="#" className="active">Vehicle Type</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Manufacture Type</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Color Type</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Vehicle Classification</a>
                                                            </li>
                                                       
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="d-flex flex-column h-100">
                                                    <div className="card-body">
                                                        <form action="">
                                                            <div className="form-row align-items-center">
                                                                <div className="col-md-2">
                                                                    <div className="form-group">
                                                                        <label htmlFor="">In English</label>
                                                                        <input type="text" className="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <div className="form-group">
                                                                        <label htmlFor="">In Nepali</label>
                                                                        <input type="text" className="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-2 mt-2">
                                                                    <Button color="primary">Add</Button>
                                                                </div>
                                                            </div>
                                                        </form>
                
                                                        <table className="table table-02 table-striped mt-2">
                                                            <thead>
                                                                <tr>
                                                                    <th>Vehicle Type</th>
                                                                    <th>Vehicle Type(In Nepali)</th>
                                                                    <th className="text-right">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Private</td>
                                                                    <td>निजी</td>
                                                                    <td>
                                                                            <ul className="list list__inline justify-content-end">
                                                                                <li>
                                                                                    <Link to="#/" className="btn btn-icon-only" >
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
                                                                    <td>Public</td>
                                                                    <td>सार्वजनिक</td>
                                                                    <td>
                                                                            <ul className="list list__inline justify-content-end">
                                                                                <li>
                                                                                    <Link to="#/" className="btn btn-icon-only" >
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
                                                </div>

                                            </div>
                                        </div>
                                    
                                        </TabPane>
                                        <TabPane tabId="2" className="h-100">
                                        <div className="row no-gutters h-100">
                                            <div className="col-lg-2 border-right">
                                                <div className="d-flex flex-column h-100">
                                            
                                                    <div className="flex-grow-1 position-relative">
                                                        <ul className="list list-setup container-full scrollable mt-2">
                                                            <li>
                                                                <a href="#" className="active">Office</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Section</a>
                                                            </li>
                                                       
                                                       
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-10">
                                                <div className="d-flex flex-column h-100">
                                                    <div className="card-body">
                                                    <form action="">
                                                        <h6 className="heading-01">Basic</h6>
                                                        <div className="divider my-2"></div>
                                                        <div className="form-row">
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="">Office Code</label>
                                                                    <input type="text" className="form-control"/>
                                                            </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="">Office Code</label>
                                                                    <input type="text" className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="">Office Name
                                                                        <span className="ml-2">(In Nepali)</span>
                                                                    </label>
                                                                    <input type="text" className="form-control"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <h6 className="heading-01 mt-3">Address</h6>
                                                        <div className="divider my-2"></div>
                                                        <div className="form-row">
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="">District</label>
                                                                <select  className="custom-select">
                                                                    <option value="">Select</option>
                                                                </select>
                                                        </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="">Local Body</label>
                                                                <select  className="custom-select">
                                                                    <option value="">Select</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="">Street Name
                                                                </label>
                                                                <input type="text" className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                     
                                                    <h6 className="heading-01 mb-2 mt-3">Directorate</h6>
                                                    <p className="text-01">
                                                        Username and password will be sent to their associated email address.
                                                    </p>
                                                        <div className="divider my-2"></div>
                                                        <div className="form-row">
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="">Is Directorate</label>
                                                                <div className="align-vertical">

                                                                <div className="custom-control custom-radio">
                                                                    <input type="radio" className="custom-control-input" id="customControlValidation2"/>
                                                                    <label className="custom-control-label" for="customControlValidation2">Yes</label>
                                                                </div>
                                                                <div className="custom-control custom-radio ml-3">
                                                                    <input type="radio" className="custom-control-input" id="customControlValidation2"/>
                                                                    <label className="custom-control-label" for="customControlValidation2">No</label>
                                                                </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label htmlFor="">Directorate Name</label>
                                                                <select  className="custom-select">
                                                                    <option value="">Directorate Of Vehicle Management, Province 1 </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                
                                                    </div>
                                                     
                                                    </form>
                    
                
                                                      
                                                </div>
                                            </div>

                                            </div>
                                        </div>
                                    
                                        </TabPane>
                                    </TabContent>
                                </div>
                                                    
                            </div>


                            <div className="text-right mt-3">
                                <Button className="btn-outline outline-hover-gray mr-2" color="btn">Cancel</Button>
                                <Button color="primary">Cancel</Button>

                            </div>
                          
                        </div>
                    </div>
                </main>
            </div>
        
    )
}
