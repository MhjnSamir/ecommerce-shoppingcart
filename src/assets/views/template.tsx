import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classnames from 'classnames';
import { useTable, usePagination } from 'react-table';
import BTable from 'react-bootstrap/Table';

import Header from '../../core/Protected/Dashboard/Header/Header';
import Sidebar from '../../core/Protected/Dashboard/Sidebar/Sidebar';

const Template = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const [alertmodal, setAlertModal] = useState(false);
    const toggleAlertModal = () => setAlertModal(!alertmodal);
    const [sidebarToggle, setsidebarToggle] = useState(false);


    return (
        <Fragment>
            <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
                <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
                <main className="stickyHeader">
                    <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
                    <div className="inner">
                        <div className="container">
                            <h5 className="heading mb-2 font-bold">Components</h5>

                             <div className="card mb-2">
                                <DataTable />
                            </div>
                           
                            {/* Button  */}
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h6 className="mb-2">Buttons</h6>
                                    <Link to="#" className="btn btn-primary">Primary</Link>
                                    <Link to="#" className="btn btn-danger ml-3">Danger</Link>
                                    <Link to="#" className="btn btn-success ml-3">Success</Link>
                                    <Link to="#" className="btn btn-warning ml-3">Warning</Link>
                                    <Link to="#" className="btn btn-light ml-3">Default</Link>
                                    <Link to="#" className="btn btn-info ml-3">Info</Link>

                                    <h6 className="mb-2 mt-4">Buttons with Bordered</h6>
                                    <Link to="#" className="btn btn-outline-primary">Primary</Link>
                                    <Link to="#" className="btn btn-outline-danger ml-3">Danger</Link>
                                    <Link to="#" className="btn btn-outline-success ml-3">Success</Link>
                                    <Link to="#" className="btn btn-outline-warning ml-3">Warning</Link>
                                    <Link to="#" className="btn btn-outline-light ml-3">Default</Link>
                                    <Link to="#" className="btn btn-outline-info ml-3">Info</Link>

                                    <h6 className="mb-2 mt-4">Buttons with Icons</h6>
                                    <Link to="#" className="btn btn-primary btn-icon">
                                        <span className="ic-add"></span>
                                Primary
                            </Link>
                                    <Link to="#" className="btn btn-danger btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Danger
                            </Link>
                                    <Link to="#" className="btn btn-success btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Success
                            </Link>
                                    <Link to="#" className="btn btn-warning btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Warning
                            </Link>
                                    <Link to="#" className="btn btn-light btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Default
                            </Link>
                                    <Link to="#" className="btn btn-info btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Info
                            </Link>

                                    <h6 className="mb-2 mt-4">Buttons with Icons (Bordered)</h6>
                                    <Link to="#" className="btn btn-outline-primary btn-icon">
                                        <span className="ic-add"></span>
                                Primary
                            </Link>
                                    <Link to="#" className="btn btn-outline-danger btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Danger
                            </Link>
                                    <Link to="#" className="btn btn-outline-success btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Success
                            </Link>
                                    <Link to="#" className="btn btn-outline-warning btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Warning
                            </Link>
                                    <Link to="#" className="btn btn-outline-light btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Default
                            </Link>
                                    <Link to="#" className="btn btn-outline-info btn-icon ml-3">
                                        <span className="ic-add"></span>
                                Info
                            </Link>
                                </div>
                            </div>

                            {/* statuses  */}
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h6 className="mb-2">Form Elements</h6>

                                    <div className="row">
                                        <div className="col-lg-4">
                                            <h6 className="mb-2">Status</h6>
                                            <div className="status text-green mb-2">
                                                <i className="ic-checkmark "></i>
                                                <span className="ml-1 ">Approved</span>
                                            </div>
                                            <div className="status text-coolGray600 mb-2 ">
                                                <i className="ic-alert-filled"></i>
                                                <span className="ml-1">Pending</span>
                                            </div>

                                            <div className="status text-red mb-2">
                                                <i className="ic-close-circular-filled"></i>
                                                <span className="ml-1">Rejected</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6 className="mt-4">Toggle</h6>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6 className="mt-4">Progress Bar</h6>
                                            <p className="text-right text-gray-600">40</p>
                                            <div className="progress">
                                                {/* <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0"
                                            aria-valuemax="100"></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form elements */}
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h6 className="mb-2">Form Elements</h6>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group"><label>Text Field</label>
                                                <input className="form-control" type="text" placeholder="enter text" /></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group"><label>Select Field</label><select className="form-control">Select
                                    <option>Select...</option>
                                                <option>OptionsA</option>
                                                <option>OptionsB</option>
                                            </select></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group"><label>Datepicker Field</label>
                                                <input className="form-control" type="date" /></div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group"><label>Attributes</label>
                                                <div className="custom-search">
                                                    <input className="form-control" type="text" placeholder="Search or add attributes" /><span className="ic-search"></span></div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="form-group"><label>Textarea</label><textarea className="form-control"></textarea></div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="form-group"><label>Upload File</label>
                                                <div className="custom-file">
                                                    <input className="custom-file-input" type="file" /><label className="custom-file-label" >Choose File</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6">
                                            <div className="form-group"><label>Text Field</label>
                                                <input className="form-control custom-error" type="text" placeholder="enter text" />
                                                <div className="error"><span className="ic-warning"> </span>This field is required</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-2">
                                            <h6 className="mb-2">
                                                Checkbox
                                         </h6>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Unchecked</label>
                                            </div>
                                            <div className="form-check mt-2">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" checked />
                                                <label className="form-check-label" htmlFor="exampleCheck1" >Checked</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 className="mb-2">
                                                Custom Checkbox
                                         </h6>
                                            <div className="custom-control custom-checkbox">
                                                <input className="custom-control-input" type="checkbox" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Unchecked</label>
                                            </div>
                                            <div className="custom-control custom-checkbox mt-2">
                                                <input className="custom-control-input" type="checkbox" id="customCheck2" checked />
                                                <label className="custom-control-label" htmlFor="customCheck2">Checked</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 className="mb-2">
                                                Radio
                                         </h6>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                                                <label className="form-check-label" >
                                                    Default radio
                                        </label>
                                            </div>
                                            <div className="form-check mt-2">
                                                <input className="form-check-input" type="radio" name="exampleRadios" value="option2" />
                                                <label className="form-check-label" >
                                                    Second default radio
                                        </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 className="mb-2">
                                                Custom Radio
                                         </h6>
                                            <div className="custom-control custom-radio">
                                                <input className="custom-control-input" type="radio" id="Radio1" name="customRadio" />
                                                <label className="custom-control-label" htmlFor="Radio1">Unchecked</label>
                                            </div>
                                            <div className="custom-control custom-radio mt-2">
                                                <input className="custom-control-input" type="radio" id="Radio2" name="customRadio" checked />
                                                <label className="custom-control-label" htmlFor="Radio2">Checked</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 className="mb-2">
                                                switch
                                         </h6>
                                            <div className="custom-control custom custom-switch">
                                                <input className="custom-control-input" type="checkbox" id="customSwitch3" />
                                                <label className="custom-control-label" htmlFor="customSwitch3">Unchecked</label>
                                            </div>
                                            <div className="custom-control custom custom-switch mt-2">
                                                <input className="custom-control-input" type="checkbox" id="customSwitch4" checked />
                                                <label className="custom-control-label" htmlFor="customSwitch4">Checked</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* tabs  */}
                            <div className="card mb-2">
                                <div className="card-body">
                                    <h6 className="mb-2">Tabs</h6>
                                    <Nav className="tab-01 my-3">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggle('1'); }}
                                            >
                                                Home
                                </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggle('2'); }}
                                            >
                                                Profile
                                </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">

                                            <p>Home Contents</p>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <p>Profile Contents</p>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>

                            {/* table  */}
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="mb-2">Table</h6>
                                    <div className="table-responsive">
                                        <table className="table table-02 mb-3 d-xl-table">
                                            <thead >
                                                <tr >
                                                    <th> S.N. </th>
                                                    <th> Document Type </th>
                                                    <th> Document Title </th>
                                                    <th > Size </th>
                                                    <th> Date </th>
                                                    <th > Status </th>
                                                    <th> Entry User </th>
                                                    <th > Action </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> 1 </td>
                                                    <td> PAN Card </td>
                                                    <td> PAN Card file </td>
                                                    <td> 30KB </td><td> 2077/03/02 </td>
                                                    <td>
                                                        <div className="status text-coolGray600">
                                                            <i className="ic-alert-filled"></i>
                                                            <span className="ml-1">Pending</span>
                                                        </div>
                                                    </td>
                                                    <td> Bikram Singh Thakuri </td>
                                                    <td className="text-right">
                                                        <a href="#" title="View" className="mr-2 text-coolGray600">
                                                            <i className="ic-show"></i></a>
                                                        <a href="#" title="Edit" className="mr-2 text-coolGray600">
                                                            <i className="ic-edit"></i></a>
                                                        <a href="#" title="Delete" className="text-coolGray600">
                                                            <i className="ic-delete"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> 1 </td>
                                                    <td> Bank Statement </td>
                                                    <td> Document </td>
                                                    <td> 24KB </td>
                                                    <td> 2077/02/26 </td>
                                                    <td>
                                                        <div className="status text-green">
                                                            <i className="ic-checkmark"></i>
                                                            <span className="ml-1">Approved</span>
                                                        </div></td><td> Hemant Nepali </td>
                                                    <td className="text-right">
                                                        <a href="#" title="View" className="mr-2 text-coolGray600">
                                                            <i className="ic-show"></i>
                                                        </a>
                                                        <a href="#" title="Edit" className="mr-2 text-coolGray600">
                                                            <i className="ic-edit"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* modal  */}
                            <div className="card">
                                <div className="card-body">
                                    <Button color="danger" onClick={toggleModal}>Modal</Button>
                                    <Modal isOpen={modal} toggle={toggleModal} >
                                        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
                                        <ModalBody>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
                                            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                            </div>

                            {/* alert  */}
                            <div className="card">
                                <div className="card-body">
                                    <Button color="success" onClick={toggleAlertModal}>Alert Modal</Button>
                                    <Modal isOpen={alertmodal} toggle={toggleAlertModal} className="modal-dialog modal-toast modal-toast-success">
                                        <ModalBody>
                                            <div className="toast-icon">
                                                <i className="ic-checkmark">
                                                </i>
                                            </div>
                                            <div className="toast-text">
                                                <div className="d-flex justify-content-between">
                                                    <h6 id="MessageType" className="pb-1">Success
                                        </h6>
                                                    <i className="ic-close" onClick={toggleAlertModal}></i>
                                                </div>
                                                <p id="Message"> Success Message</p>
                                            </div>
                                        </ModalBody>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Fragment >
    );
};

export default Template;

const DataTable = () => {
    
    const data = React.useMemo(() => ([{
        id: 1,
        DocumentType: 'PAN Card',
        DocumentTitle: 'PAN Card File',
        Size: '30KB',
        Date: '2077/03/02',

    },]), [])

    const columns =React.useMemo(() => ( [{
        Header: 'S.N.',
        accessor: 'id'
    },
    {
        Header: 'Document Type',
        accessor: 'DocumentType'
    },
    {
        Header: 'Document Title',
        accessor: 'DocumentTitle'
    },
    {
        Header: 'Size',
        accessor: 'Size'
    },
    {
        Header: 'Date',
        accessor: 'Date'
    },
    ]), [])

    const { getTableProps,
        headerGroups,
        rows,
        prepareRow,

    }
        = useTable({
            columns,
            data,
            initialState: { pageIndex: 1 },
        },
            usePagination
        )

    return (
        <div className="card-body">
                                    <h6 className="mb-2">Table</h6>
                                    <div className="table-responsive">

                                        <BTable className="table-02 d-xl-table" size="sm" {...getTableProps()}>
                                            <thead>
                                                {headerGroups.map(headerGroup => (
                                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                                        {headerGroup.headers.map(column => (
                                                            <th {...column.getHeaderProps()}>
                                                                {column.render('Header')}
                                                            </th>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </thead>
                                            <tbody>
                                                {rows.map((row, i) => {
                                                    prepareRow(row)
                                                    return (
                                                        <tr {...row.getRowProps()}>
                                                            {row.cells.map(cell => {
                                                                return (
                                                                    <td {...cell.getCellProps()}>
                                                                        {cell.render('Cell')}
                                                                    </td>
                                                                )
                                                            })}
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </BTable>

                                    </div>
                                    {/* Pagination */}
                                     <div className="d-lg-flex justify-content-between border-top py-3">
                                        <div className="des d-flex align-items-center mr-auto">
                                            <span>
                                                Showing
                                            </span>
                                            <div className="flex-shrink-1 mx-2">
                                                <select className="custom-select">20
                                                    <option>
                                                        10
                                                    </option>
                                                    <option>
                                                        20
                                                    </option>
                                                </select>
                                            </div>
                                            <span>
                                                rows out of
                                            </span>
                                            <span className="text-blue ml-1"> 200 results</span>
                                        </div>
                                        <div className="pagination-wrapper d-flex align-items-center mt-xl-0 mt-2">
                                            <ul className="pagination pagination-02">
                                                <li className="page-item">
                                                    <a className="page-link pagination-arrow mr-2" href="#" aria-label="Previous">
                                                        <i className="ic-arrow-left text-black"></i>
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">1</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">2</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">3</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">4</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">.....</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">2000</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link pagination-arrow ml-2" href="#" aria-label="Next">
                                                        <i className="ic-arrow-right text-black"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="flex-shrink-1 ml-3 mr-2">
                                                <input type="text" className="form-control page-input" style={{ width: '3rem' }} />
                                            </div>
                                            <p className="des text-gray-500">Page</p>
                                        </div>
                                    </div>



                                </div>
    )
}