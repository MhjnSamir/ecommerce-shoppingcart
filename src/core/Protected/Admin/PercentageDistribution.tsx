import React, { Fragment, ReactElement, useState } from 'react';
import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/SidebarAdmin';

import { useTable, usePagination } from 'react-table';
import BTable from 'react-bootstrap/Table';

import Logo from "../../../assets/images/logo.png";
import { Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props {

};

export default function PercentageDistribution({ }: Props): ReactElement {
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
                                <h6 className="heading-bordered">Percentage Distribution</h6>
                                <div className="card card-bordered-gray">
                                    <div className="card-body">
                                        <div className="row text-black">
                                            <div className="col-md-5 text-md-left text-center mb-md-0 mb-3">
                                                <img src={Logo} alt="Rastriya Banijya Bank" className="logo" />
                                            </div>
                                            <div className="col-md-2 text-center">
                                                <h6>लोक सेवा आयोग</h6>
                                                <h6>प्रतिशत निर्धारण फाराम</h6>
                                            </div>

                                        </div>
                                        <div className="flex-between d-md-flex d-block my-4">
                                            <div>
                                                <p className="mb-md-2 mb-0">सेवा/समूह/उप समूह : एकीकृत तथा संयुक्त</p>
                                                <p>जम्मा माग पद : 1</p>
                                            </div>
                                            <p >श्रेणी/पद : रा.प.अनं द्वितीय/खरिदार वा सो सरह</p>
                                        </div>
                                        <DataTable2 />
                                        <Link to="" className="text-info mt-3 des">Add Distribution</Link>
                                    </div>
                                </div>
                                <div className="mt-3 text-right">
                                    <button className="btn btn-outline outline-hover-blue btn-icon mr-2">
                                        <span className="ic-print"></span>
                                                Print
                                                </button>
                                    <button className="btn btn-outline outline-hover-blue">Generate Advertisement No.</button>
                                </div>
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
            {/* <Button color="danger" onClick={toggleModal}>Modal</Button> */}
            <Modal isOpen={modal} toggle={toggleModal} className="modal-bms">
                <ModalHeader toggle={toggleModal} className="modal-header-blue">Requested Data</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Requisition Number</label>
                                <div className="value">3831</div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Service</label>
                                <div className="value">एकीकृत तथा संयुक्त</div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Group </label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Sub Group</label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Post</label>
                                <div className="value">खरिदार वा सो सरह</div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Vacancy</label>
                                <div className="value">1</div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Total Vacancy</label>
                                <div className="value">1</div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Demand Office</label>
                                <div className="value">KOT</div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Requesting Office</label>
                                <div className="value">Khotang Office Diktel</div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="form-view">
                                <label>Remarks</label>
                                <div className="value">n/a</div>
                            </div>
                        </Col>

                    </Row>
                </ModalBody>

            </Modal>
        </Fragment >

    )
}

const DataTable2 = () => {

    const data = React.useMemo(() => ([{
        id: 1021,
        no: 3831,
        Advertisement: 'n/a',
        Vacancy: '',

    },
    {
        id: 1021,
        no: 3831,
        Advertisement: 'n/a',
        Vacancy: '',

    }
    ]), [])

    const columns = React.useMemo(() => ([
        {
            Header: 'Master ID',
            accessor: 'id'
        },
        {
            Header: 'Requisition No.',
            accessor: 'no'
        },
        {
            Header: 'Advertisement No.',
            accessor: 'Advertisement'
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
                                <th>Category</th>
                                <th>Vacancy</th>
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
                                        <select className="form-control">
                                            <option>Option 1</option>
                                        </select>
                                    </td>
                                    <td >
                                        <input type="text" className="form-control" placeholder="0" style={{ width: '3rem' }} />
                                    </td>
                                    <td className="text-right">
                                        <span className="actions" >
                                            <i className="ic-delete text-danger"></i></span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </BTable>

            </div>
        </Fragment>

    )
}