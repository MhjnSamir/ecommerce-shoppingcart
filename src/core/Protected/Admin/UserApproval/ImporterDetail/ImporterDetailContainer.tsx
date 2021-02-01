import React,{useEffect, useCallback} from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteMatch } from 'react-router-dom';
import { Button } from 'reactstrap';
import { getTextByLanguage } from '../../../../../i18n/i18n';
import {connect, ConnectedProps} from 'react-redux';

import { getImporterDetails, ImporterDetailsResponse } from '../../../../../store/modules/internalService/user-approval/fetch-importer-details';
import { RootState } from '../../../../../store/root-reducer';
import ImporterDetail from './ImporterDetail';

interface Props extends PropsFromRedux {
}

function ImporterDetailContainer(props: Props) {
    const {importerDetailsData} = props;
    const { t } = useTranslation('userapproval');
    let match = useRouteMatch<{id: string}>('/importer-detail/:id')

    const fetchImporterDetail = useCallback(async () => {
        if(match?.params){
            const res = await props.getImporterDetails({publicuserid: +match.params.id});
            if(res){
                console.log(importerDetailsData)
            }
        }
    },[])

    useEffect(()=>{
        fetchImporterDetail()
    },[ fetchImporterDetail])

    return (
        importerDetailsData.data ?
        <ImporterDetail
            importerDetails={importerDetailsData.data}
        />
        :
        null
    )
}

const mapStateToProps = (state: RootState) => ({
    importerDetailsData: state.internalServiceData.userApprovalData.importerDetailsData
})

const mapDispatchToProps = {
    getImporterDetails: getImporterDetails
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(ImporterDetailContainer)
