import React, { Fragment, ReactElement, useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/SidebarAdmin';
import { useTable, usePagination } from 'react-table';
import BTable from 'react-bootstrap/Table';

import {
    Modal,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

interface Props {

};

export default function ExamSCheduling({ }: Props): ReactElement {
    const [sidebarToggle, setsidebarToggle] = useState(false);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container">
                        <div className="heading">
                            <h6 className="text-black">Examination Scheduling</h6>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <DataTable />
                            </div>
                        </div>
                    </div>
                </div>
            </main >            
        </div >
    )
}


const DataTable = () => {

    const [modal, setModal] = useState(false);

    const modalToggle = () => setModal(!modal);

    const data = React.useMemo(() => ([{
        no: <a href="javascript:void(0)" onClick={modalToggle} className="text-info">001478</a>,
        Service: 'नेपाल न्याय',
        Group: 'Ministry of General Administration',
        SubGroup: "N/A",
        Class: "	रा०प० द्बितीय",
        Post: "उप-सचिव वा सो सरह",
        RequestingOffice: "Central Office",
        RejectionRemarks: "123",
        Scheduling: "No Exam Scheduling"
    },
    {
        no: '001258',
        Service: 'नेपाल न्याय',
        Group: 'न्याय',
        SubGroup: "N/A",
        Class: "	रा०प० द्बितीय",
        Post: "उप-सचिव वा सो सरह",
        RequestingOffice: "Central Office",
        RejectionRemarks: "123",
        Scheduling: "No Exam Scheduling"
    },
    ]), [])

    const columns = React.useMemo(() => ([{
        Header: 'Requisition No.',
        accessor: 'no'
    },
    {
        Header: 'Service',
        accessor: 'Service'
    },
    {
        Header: 'Group',
        accessor: 'Group'
    },
    {
        Header: 'Sub Group',
        accessor: 'SubGroup'
    },
    {
        Header: 'Class',
        accessor: 'Class'
    },
    {
        Header: 'Post',
        accessor: 'Post'
    },
    {
        Header: 'Requesting Office',
        accessor: 'RequestingOffice'
    },
    {
        Header: 'Rejection Remarks',
        accessor: 'RejectionRemarks'
    },
    {
        Header: 'Scheduling',
        accessor: 'Scheduling'
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

                <BTable className="table-02 d-xl-table table-rounded" size="sm" {...getTableProps()}>
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
            <Modal isOpen={modal} toggle={modalToggle} className="modal-bms">
                <ModalBody className="py-5">
                    <div className="text-center">
                        <i className="ic-info text-info h2"></i>
                        <h4 className="alert-title mt-3">Schedule Exam</h4>
                        <p className="alert-desc mt-1">Do you want to schedule exam for internal and open category on same days?</p>
                    </div>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <button type="button" className="btn btn-outline outline-hover-blue" onClick={modalToggle}>No, open on different days</button>
                    <Link to="/admin/schedule-exam" className="btn btn-primary">Yes</Link>
                </ModalFooter>
            </Modal>
        </Fragment>


    )
}
