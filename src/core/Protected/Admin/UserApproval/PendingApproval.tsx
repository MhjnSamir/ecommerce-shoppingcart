import React, { ReactElement, useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { connect, ConnectedProps } from 'react-redux';
import { Row } from 'react-table';
import {useHistory} from 'react-router-dom';

import Datatable from '../../../../components/React/Datatable/Datatable';
import { convertEngToNepNumber, getTextByLanguage } from '../../../../i18n/i18n';
import { getApprovalPendingList } from '../../../../store/modules/internalService/user-approval/approval-pending-list';
import { RootState } from '../../../../store/root-reducer';

interface Props extends PropsFromRedux {
    
}

function PendingApproval(props: Props): ReactElement {
    const {approvalPendingList, getApprovalPendingList} = props;
    const {t} = useTranslation('userapproval');
    const history = useHistory();
    const handleViewClick = (data:any) =>{
        history.push(`/importer-detail/${data}`)
    }
    
    const columns = useMemo(() => [
        {Header: t("userapproval:table.sn"), Cell: ({row: { index }}: { row: Row}) => getTextByLanguage(index + 1, convertEngToNepNumber(index + 1))},
        {Header: t("userapproval:table.organizatonName"), accessor: "organizationName"},
        {Header: t("userapproval:table.aliascode"), accessor: "aliascode"},
        {Header: t("userapproval:table.email"), accessor: "email"},
        {Header: t("userapproval:table.companyRegNo"), accessor: "companyRegNo"},
        {Header: t("userapproval:table.district"), accessor: "district"},
        {Header: t("userapproval:table.localbody"), accessor: "localbody"},
        {Header: t("userapproval:table.registrationDate"), accessor: "registrationDate"},
        {Header: t("userapproval:table.registrationDateNp"), accessor: "registrationDateNp"},
        {Header: t("userapproval:table.panno"), accessor: "panno"},
        {Header: t("userapproval:table.vatno"), accessor: "vatno"},
        {Header: t("actions.title"), Cell: ({row} : {row: Row<{id: number}>}) => (
            <button className="btn btn-primary btn-sm" onClick ={()=> handleViewClick(row.original.id)}>View</button>
        )}
    ], [t])

    const fetchApprovalPendingList = useCallback(async () => {
        await getApprovalPendingList();
    }, [getApprovalPendingList])

    useEffect(() => {
        fetchApprovalPendingList()
    }, [fetchApprovalPendingList])

    return (
        <div className="container container-full d-flex flex-column mb-3">
            <div className="heading">
                <h6 className="text-black">{t("userapproval:title")}</h6>
            </div>
            <div className="card flex-grow-1">
                <div className="card-body">
                    <Datatable
                        data={approvalPendingList.data || []}
                        columns={columns}
                        loading={approvalPendingList.isFetching}
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    approvalPendingList: state.internalServiceData.userApprovalData.approvalPendingListData
})

const mapDispatchToProps = {
    getApprovalPendingList: getApprovalPendingList
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(PendingApproval);