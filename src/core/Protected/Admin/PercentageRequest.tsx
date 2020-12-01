import React, { Fragment, ReactElement, useState } from 'react';
import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/SidebarAdmin';

import { useTable } from 'react-table';
import BTable from 'react-bootstrap/Table';

import { Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props {

};

export default function PercentageRequests({ }: Props): ReactElement {
    const [sidebarToggle, setsidebarToggle] = useState(false);


    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container">
                        <div className="heading">
                            <h6 className="text-black">Manual Percentage Distribution</h6>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="heading-bordered">Requests</h6>
                                <DataTable />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>



    )
}


const DataTable = () => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const data = React.useMemo(() => ([{
        no: 3831,
        id: 1021,
        Date: '11/08/2020',
        Category: 'खरिदार वा सो सरह',
        Service: 'एकीकृत तथा संयुक्त',
        Group: 'n/a',
        Class: 'रा.प.अनं द्वितीय'

    },]), [])

    const columns = React.useMemo(() => ([{
        Header: 'Requisition No.',
        accessor: 'no'
    },
    {
        Header: 'Master ID',
        accessor: 'id'
    },
    {
        Header: 'Requested Date',
        accessor: 'Date'
    },
    {
        Header: 'Post',
        accessor: 'Post'
    },
    {
        Header: 'No. of vacancy',
        accessor: 'Service'
    },
    {
        Header: 'Group',
        accessor: 'Group'
    },
    {
        Header: 'Class',
        accessor: 'Class'
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
        )

    return (
        <Fragment>

            <div className="table-responsive">
                <BTable className="table-02 d-xl-table table-rounded" {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
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
                                    <td className="text-right">
                                        <span className="actions" >
                                            <i className="ic-add"></i></span>
                                        <span className="actions" onClick={toggleModal}>
                                            <i className="ic-show"></i></span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </BTable>

            </div>
            {/* modal  */}
            <Modal isOpen={modal} toggle={toggleModal} className="modal-bms modal-xl">
                <ModalHeader toggle={toggleModal} className="modal-header-blue">Requested Data</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Requisition Number</label>
                                <div className="value">3831</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Service</label>
                                <div className="value">एकीकृत तथा संयुक्त</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Class</label>
                                <div className="value">आठौं तह</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Group </label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Sub Group</label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Post</label>
                                <div className="value">खाद अनुसन्धान अधिकृत, खाध वस्तु गुण नियन्त्रण..</div>
                            </div>
                        </Col>
                        <Col xl="3 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Demand Office</label>
                                <div className="value">Ministry of General Administration</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Requesting Office</label>
                                <div className="value">Khotang Office Diktel</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Vacancy</label>
                                <div className="value">1</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Total Vacancy</label>
                                <div className="value">1</div>
                            </div>
                        </Col>
                        <Col xl="2 mb-xl-4 mb-md-2" sm="4" xs="6">
                            <div className="form-display">
                                <label>Remarks</label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>

                    </Row>

                    <Link to="/admin/percentage" className="btn btn-primary" >Distribute</Link>
                </ModalBody>

            </Modal>
        </Fragment >

    )
}

