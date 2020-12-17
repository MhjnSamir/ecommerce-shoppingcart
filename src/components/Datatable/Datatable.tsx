import React, { ReactElement } from 'react'
import { useTable, usePagination } from 'react-table';
import BTable from 'react-bootstrap/Table';

import { getTextByLanguage } from '../../utils/i18n/i18n';
import "../LoadingButton/loading-theme.scss"

interface Props {
    columns: any[];
    data: any;
    pagination?: boolean;
    className?: string;
    size?: string;
    loading?: boolean;
}

export default function Datatable(props: Props): ReactElement {
    const { columns, data, pagination = false, className, size, loading } = props;
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({ columns, data, initialState: { pageIndex: 1 } }, usePagination);

    return (
        <>
            <div className="table-responsive">
                <BTable className={className || "table-02 table-striped table-rounded d-xl-table"} size={size || "sm"} {...getTableProps()}>
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
                        {loading ?
                            <tr>
                                <td colSpan={columns.length} className="text-center text-muted">
                                    <div className="loading">
                                        <div>"Dummy Text Indented"</div>
                                        <div className="spinner"></div>
                                    </div>
                                </td>
                            </tr>
                            :
                            <>
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
                                {!rows.length &&
                                    <tr>
                                        <td colSpan={columns.length} className="text-center text-muted">
                                            {getTextByLanguage("No data available", "कुनै डाटा उपलब्ध छैन")}
                                        </td>
                                    </tr>
                                }
                            </>
                        }
                    </tbody>
                </BTable>
            </div>
            {/* Pagination */}
            {pagination && 
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
            </div>}
        </>
    )
}

Datatable.MasterConfig = function MasterConfigTable() {
    return (
        <div>

        </div>
    )
}