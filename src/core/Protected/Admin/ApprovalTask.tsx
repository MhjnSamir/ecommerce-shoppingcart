import React, { Fragment, ReactElement, useState } from 'react';
import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/SidebarAdmin';
import classnames from 'classnames';
import { Col, Modal, ModalBody, ModalHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import { useTable, usePagination } from 'react-table';
import BTable from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

interface Props {

};

export default function ApprovalTask({ }: Props): ReactElement {
    const [sidebarToggle, setsidebarToggle] = useState(false);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const [isStartedOpen, setStartedIsOpen] = useState(false);
    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle}  />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container">
                        <div className="heading">
                            <h6 className="text-black">Approval Task</h6>
                        </div>


                        <Nav className="tab-01">
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    Approve Vacancy Requisition
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    Approve Vacancy Percentage Distribution
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <div className="card card_bordered radius-top-0">
                                    <div className="card-body ">
                                        <DataTable />
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">
                                <div className="card card_bordered radius-top-0">
                                    <div className="card-body">
                                        <DataTable2 />
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>

                    </div>
                </div>
            </main >
        </div >
    )
}


const DataTable = () => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const data = React.useMemo(() => ([{
        no: '001478',
        Date: '11/11/2020',
        Office: 'Ministry of General Administration',

    },
    {
        no: '001258',
        Date: '11/11/2020',
        Office: 'Ministry of General Administration',

    },
    ]), [])

    const columns = React.useMemo(() => ([{
        Header: 'Requisition No.',
        accessor: 'no'
    },
    {
        Header: 'Applied On',
        accessor: 'Date'
    },
    {
        Header: 'Demand Office',
        accessor: 'Office'
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
        <Fragment>
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
                                <th>Statuses</th>
                                <th className="text-right">Action</th>
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
                                    <td>
                                        <div className="status text-green">
                                            <i className="ic-check-circle"></i>
                                            <span className="ml-1">Approved</span>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <span className="actions" onClick={toggleModal}>
                                            <i className="ic-show text-info"></i>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </BTable>

            </div>
            {/* modal  */}
            <Modal isOpen={modal} toggle={toggleModal} className="modal-bms modal-xl">
                <ModalHeader toggle={toggleModal} className="modal-header-blue">Requisition for Gazetted Vacancies</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Requisition Number</label>
                                <div className="value">4040</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Service</label>
                                <div className="value">एकीकृत (प्रशासन/लेखा)</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Class</label>
                                <div className="value">आठौं तह</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Group </label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Sub Group</label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Post</label>
                                <div className="value">खाद अनुसन्धान अधिकृत, खाध वस्तु गुण नियन्त्रण..</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Demand Office</label>
                                <div className="value">Ministry of General Administration</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Requesting Office</label>
                                <div className="value">Central Office</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Vacancy</label>
                                <div className="value">2</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Total Vacancy</label>
                                <div className="value">2</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Work Summary</label>
                                <textarea className="form-control" rows={4} readOnly >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst id pharetra, in adipiscing. Sed velit morbi turpis elit cras.</textarea>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Remarks</label>
                                <textarea className="form-control" rows={4} readOnly >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst id pharetra, in adipiscing. Sed velit morbi turpis elit cras.</textarea>
                            </div>
                        </Col>
                        <Col xl="6">
                            <div className="custom-readonly">
                                <p>Uploaded document</p>
                                <span className="ic-show"></span>
                            </div>
                            {/* <div className="form-group">
                                <div className="custom-input">
                                    <input type="text" className="form-control" value="Uploaded document" readOnly />
                                    <span className="ic-show text-info"></span>
                                </div>
                            </div> */}
                        </Col>
                    </Row>
                    <div className="divider mb-4"></div>

                    <div className="form-display mb-3">
                        <label>Remarks</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="footer-btn">
                        <Link to="/admin/request" className="btn btn-primary" >Approve</Link>
                        <button className="btn btn-danger" >Reject</button>
                    </div>
                </ModalBody>

            </Modal>

        </Fragment>


    )
}

const DataTable2 = () => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const data = React.useMemo(() => ([{
        no: '001478',
        Date: '11/11/2020',
        Office: 'Ministry of General Administration',

    },
    {
        no: '001258',
        Date: '11/11/2020',
        Office: 'Ministry of General Administration',

    },
    ]), [])

    const columns = React.useMemo(() => ([{
        Header: 'Requisition No.',
        accessor: 'no'
    },
    {
        Header: 'Applied On',
        accessor: 'Date'
    },
    {
        Header: 'Demand Office',
        accessor: 'Office'
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
        <Fragment>
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
                                <th>Statuses</th>
                                <th className="text-right">Action</th>
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
                                    <td>
                                        <div className="status text-coolGray600">
                                            <i className="ic-alert-filled"></i>
                                            <span className="ml-1">Pending</span>
                                        </div>
                                    </td>
                                    <td className="text-right">
                                        <span className="actions" onClick={toggleModal}>
                                            <i className="ic-show text-info"></i>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </BTable>

            </div>
            {/* modal  */}
            <Modal isOpen={modal} toggle={toggleModal} className="modal-bms modal-xl">
                <ModalHeader toggle={toggleModal} className="modal-header-blue">Requisition for Gazetted Vacancies</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Requisition Number</label>
                                <div className="value">4040</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Service</label>
                                <div className="value">एकीकृत (प्रशासन/लेखा)</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Class</label>
                                <div className="value">आठौं तह</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Group </label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Sub Group</label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Post</label>
                                <div className="value">खाद अनुसन्धान अधिकृत, खाध वस्तु गुण नियन्त्रण..</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Demand Office</label>
                                <div className="value">Ministry of General Administration</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Requesting Office</label>
                                <div className="value">Central Office</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Vacancy</label>
                                <div className="value">2</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2 mb-0" sm="4">
                            <div className="form-display">
                                <label>Total Vacancy</label>
                                <div className="value">2</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Work Summary</label>
                                <textarea className="form-control" rows={4} readOnly >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst id pharetra, in adipiscing. Sed velit morbi turpis elit cras.</textarea>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4">
                            <div className="form-display">
                                <label>Remarks</label>
                                <textarea className="form-control" rows={4} readOnly >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst id pharetra, in adipiscing. Sed velit morbi turpis elit cras.</textarea>
                            </div>
                        </Col>
                        <Col xl="6">
                            <div className="form-group">
                                <div className="custom-input">
                                    <input type="text" className="form-control" value="Uploaded document" readOnly />
                                    <span className="ic-show text-info"></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="divider mb-4"></div>

                    <div className="form-display mb-3">
                        <label>Remarks</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="footer-btn">
                        <button className="btn btn-primary" >Approve</button>
                        <button className="btn btn-danger" >Reject</button>
                    </div>
                </ModalBody>

            </Modal >

        </Fragment >


    )
}