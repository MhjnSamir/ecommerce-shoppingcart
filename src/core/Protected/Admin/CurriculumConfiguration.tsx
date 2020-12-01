import React, { Fragment, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Input, Row } from 'reactstrap';
import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/SidebarAdmin';

import { useTable } from 'react-table';
import BTable from 'react-bootstrap/Table';
interface Props {

};

export default function Dashboard({ }: Props): ReactElement {
    const [sidebarToggle, setsidebarToggle] = useState(false);

    const [dropdown, setDropdown] = useState(false);
    const dropdownToggle = () => setDropdown(!dropdown);
    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

                <div className="inner">
                    <div className="container pb-3">
                        <div className="heading">
                            <h6 className="mb-2">Curriculum Configuration</h6>
                            <div className="flex-center">
                                <div className="custom-search">
                                    <input className="form-control" type="text" placeholder="Search" />
                                    <span className="ic-search"></span>
                                </div>
                                <button className={`btn btn-icon ml-2 ${dropdown ? "btn-primary" : "btn-outline outline-hover-blue"}`} onClick={dropdownToggle}>
                                    <span className="ic-filter"></span>
                                    Filter
                                </button>
                                <Link to="/admin/basic-configuration" className="btn btn-info btn-icon ml-2">
                                    <span className="ic-add"></span>
                                Add
                                </Link>
                            </div>
                        </div>
                        <div className={`filter-wrapper ${dropdown ? "" : "hide"}`}>
                            <div className="filter-container" >
                                <h6 className="mb-3">Filter Curriculum Configuration</h6>
                                <Row className="mb-3">
                                    <Col md="3">
                                        <div className="form-group">
                                            <label>Service</label>
                                            <Input type="select">
                                                <option value="">Service</option>
                                                <option value="">नेपाल स्वास्थ्य</option>
                                                <option value="">नेपाल कृषि</option>
                                                <option value="">नेपाल शिक्षा</option>
                                                <option value="">आर्थिक योजना तथा तथ्यांक</option>
                                                <option value="">नेपाल विविध सेवा</option>
                                                <option value="">नेपाल इञ्जिनियरिङग्</option>
                                            </Input>
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className="form-group">
                                            <label>Class</label>
                                            <Input type="select">
                                                <option value="">All Class</option>
                                                <option value="">रा०प०अनं० प्रथम</option>
                                                <option value="">नवौं तह</option>
                                                <option value="">रा०प० प्रथम</option>
                                                <option value="">रा०प० द्बितीय</option>
                                                <option value="">रा०प० तृतीय</option>
                                                <option value="">आठौं तह</option>
                                                <option value="">एघारौं तह</option>
                                                <option value="">सातौं तह</option>
                                                <option value="">सहायक पाँचौं तह</option>
                                                <option value="">सहायक चौथो तह</option>
                                                <option value="">रा.प.अनं.प्रथम/द्वितीय</option>
                                                <option value="">रा.प.अनं द्वितीय</option>
                                                <option value="">छैठाैं तह</option>
                                                <option value="">कम्युनिटी नर्सिङ्ग</option>
                                                <option value="">बारौं तह</option>
                                            </Input>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className="form-group">
                                            <label>Group</label>
                                            <Input type="select">
                                                <option value="">All Group</option>
                                                <option value="">रा०प०अनं० प्रथम</option>
                                                <option value="">नवौं तह</option>
                                                <option value="">रा०प० प्रथम</option>
                                                <option value="">रा०प० द्बितीय</option>
                                                <option value="">रा०प० तृतीय</option>
                                                <option value="">आठौं तह</option>
                                                <option value="">एघारौं तह</option>
                                                <option value="">सातौं तह</option>
                                                <option value="">सहायक पाँचौं तह</option>
                                                <option value="">सहायक चौथो तह</option>
                                                <option value="">रा.प.अनं.प्रथम/द्वितीय</option>
                                                <option value="">रा.प.अनं द्वितीय</option>
                                                <option value="">छैठाैं तह</option>
                                                <option value="">कम्युनिटी नर्सिङ्ग</option>
                                                <option value="">बारौं तह</option>
                                            </Input>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className="form-group">
                                            <label>Sub Group</label>
                                            <Input type="select">
                                                <option value="">All Sub Group</option>
                                                <option value="">रा०प०अनं० प्रथम</option>
                                                <option value="">नवौं तह</option>
                                                <option value="">रा०प० प्रथम</option>
                                                <option value="">रा०प० द्बितीय</option>
                                                <option value="">रा०प० तृतीय</option>
                                                <option value="">आठौं तह</option>
                                                <option value="">एघारौं तह</option>
                                                <option value="">सातौं तह</option>
                                                <option value="">सहायक पाँचौं तह</option>
                                                <option value="">सहायक चौथो तह</option>
                                                <option value="">रा.प.अनं.प्रथम/द्वितीय</option>
                                                <option value="">रा.प.अनं द्वितीय</option>
                                                <option value="">छैठाैं तह</option>
                                                <option value="">कम्युनिटी नर्सिङ्ग</option>
                                                <option value="">बारौं तह</option>
                                            </Input>
                                        </div>
                                    </Col>

                                    <Col md="3">
                                        <div className="form-group">
                                            <label>Post</label>
                                            <Input type="select">
                                                <option value="">All Post</option>
                                                <option value="">रा०प०अनं० प्रथम</option>
                                                <option value="">नवौं तह</option>
                                                <option value="">रा०प० प्रथम</option>
                                                <option value="">रा०प० द्बितीय</option>
                                                <option value="">रा०प० तृतीय</option>
                                                <option value="">आठौं तह</option>
                                                <option value="">एघारौं तह</option>
                                                <option value="">सातौं तह</option>
                                                <option value="">सहायक पाँचौं तह</option>
                                                <option value="">सहायक चौथो तह</option>
                                                <option value="">रा.प.अनं.प्रथम/द्वितीय</option>
                                                <option value="">रा.प.अनं द्वितीय</option>
                                                <option value="">छैठाैं तह</option>
                                                <option value="">कम्युनिटी नर्सिङ्ग</option>
                                                <option value="">बारौं तह</option>
                                            </Input>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
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
    const toggleModal = () => setModal(!modal);

    const data = React.useMemo(() => ([{
        id: 1021,
        Post: "सहायक",
        Service: 'एकीकृत तथा संयुक्त',
        Group: 'n/a',
        SubGroup: 'n/a',
        Class: 'रा.प.अनं द्वितीय',
        PostType: 'n/a',

    },
    {
        id: 1021,
        Post: "सहायक",
        Service: 'एकीकृत तथा संयुक्त',
        Group: 'n/a',
        SubGroup: 'n/a',
        Class: 'रा.प.अनं द्वितीय',
        PostType: 'n/a',

    },
    {
        id: 1021,
        Post: "सहायक",
        Service: 'एकीकृत तथा संयुक्त',
        Group: 'n/a',
        SubGroup: 'n/a',
        Class: 'रा.प.अनं द्वितीय',
        PostType: 'n/a',

    }
    ]), [])

    const columns = React.useMemo(() => ([{
        Header: 'Id',
        accessor: 'id'
    },
    {
        Header: 'Post',
        accessor: 'Post'
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
        Header: 'Post Type',
        accessor: 'PostType'
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
                                        <span className=" actions text-danger " >
                                            <i className="ic-delete"></i>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </BTable>

            </div>
        </Fragment >

    )
}
