import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect, ConnectedProps } from 'react-redux';
import { Button } from 'reactstrap';

import { getTextByLanguage } from '../../../../i18n/i18n';
import { getImporterDetailsExternal, ImporterDetailsResponse } from '../../../../store/modules/externalService/get-importer-details-external';
import { RootState } from '../../../../store/root-reducer';

interface Props extends PropsFromRedux {
  importerDetails: ImporterDetailsResponse
}

function ImporterDetail(props: Props) {
  const { getImporterDetailsExternal } = props;
  const { t } = useTranslation('userapproval');

  useEffect(() => {
    getImporterDetailsExternal();
  }, [])
  return (
    <h1>test</h1>
    // Object().keys(props.importerDetails).length ?
    //   <div className="container d-flex flex-column mb-3">
    //     <div className="heading">
    //       <h6 className="text-black">{t("userapproval:importer-detail.title")}</h6>
    //     </div>
    //     <div className="card card-body">
    //       <div className="row">
    //         <div className="col-lg-8">
    //           <section>
    //             <h6 className="heading-01">{t("userapproval:importer-detail.organization.title")}</h6>
    //             <div className="divider my-2"></div>
    //             <div className="row">
    //               <div className="col-lg-3 mb-3">
    //                 <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.organization.name")}</label>
    //                 <p>{orgBasicDetail.organizationName}</p>
    //               </div>
    //               <div className="col-lg-3 mb-3">
    //                 <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.organization.regno")}</label>
    //                 <p>{orgBasicDetail.companyRegNo}</p>
    //               </div>
    //               <div className="col-lg-3 mb-3">
    //                 <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.organization.regdate")}</label>
    //                 <p>{orgBasicDetail.registrationDate}</p>
    //               </div>
    //               <div className="col-lg-3 mb-3">
    //                 <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.organization.regdatenp")}</label>
    //                 <p>{orgBasicDetail.registrationDateNp}</p>
    //               </div>
    //               <div className="col-lg-3 mb-3">
    //                 <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.organization.panno")}</label>
    //                 <p>{orgBasicDetail.panno}</p>
    //               </div>
    //               <div className="col-lg-3 mb-3">
    //                 <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.organization.vatno")}</label>
    //                 <p>{orgBasicDetail.vatno}</p>
    //               </div>
    //             </div>
    //           </section>
    //           <section className="mt-3">
    //             <h6 className="heading-01">{t("userapproval:importer-detail.address.title")}</h6>
    //             <div className="divider my-2"></div>
    //             <div className="row">
    //               <div className="col-lg-3 mb-3">
    //                 <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.address.district")}</label>
    //                 <p>{orgBasicDetail.district}</p>
    //               </div>
    //               <div className="col-lg-3 mb-3">
    //                 <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.address.localbody")}</label>
    //                 <p>{orgBasicDetail.localbody}</p>
    //               </div>
    //               {/* <div className="col-lg-3 mb-3">
    //                                     <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.address.wardno")}</label>
    //                                     <p>{}</p>
    //                                 </div>
    //                                 <div className="col-lg-3 mb-3">
    //                                     <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.address.streetaddress")}</label>
    //                                     <p>{}</p>
    //                                 </div> */}
    //             </div>
    //           </section>
    //           <section className="mt-3">
    //             <h6 className="heading-01">{t("userapproval:importer-detail.personal.title")}</h6>
    //             <div className="divider my-2"></div>
    //             <div className="row">
    //               <div className="col-lg-3 mb-3">
    //                 <label htmlFor="" className="text-coolGray600">{t("userapproval:importer-detail.personal.fullname")}</label>
    //                 <p>{orgContactPersonDetail.name}</p>
    //               </div>
    //             </div>
    //           </section>
    //         </div>
    //         <div className="col-lg-4 pl-4">
    //           <section>
    //             <h6 className="heading-01">{t("userapproval:importer-detail.uploadeddoc.title")}</h6>
    //             <div className="divider my-2"></div>

    //             <ul className="list list-divider">
    //               <li>
    //                 <div className="d-flex">
    //                   <i className="ic-file h6 mr-2 mt-1 text-primary"></i>
    //                   <div className="d-flex flex-column flex-grow-1">
    //                     <p className="small text-coolGray600">{t("userapproval:importer-detail.uploadeddoc.orgregdoc")}</p>
    //                     <a href="#" className="des text-primary text-truncate">{documentList.find(doc => doc.docTypeName === "Company Registraion Doc")?.filename}</a>
    //                   </div>
    //                 </div>
    //               </li>
    //               <li>
    //                 <div className="d-flex">
    //                   <i className="ic-file h6 mr-2 mt-1 text-primary"></i>
    //                   <div className="d-flex flex-column flex-grow-1">
    //                     <p className="small text-coolGray600">{t("userapproval:importer-detail.uploadeddoc.taxcleardoc")}</p>
    //                     <a href="#" className="des text-primary text-truncate">{documentList.find(doc => doc.docTypeName === "Company Registraion Doc")?.filename}</a>
    //                   </div>
    //                 </div>
    //               </li>
    //               <li>
    //                 <div className="d-flex">
    //                   <i className="ic-file h6 mr-2 mt-1 text-primary"></i>
    //                   <div className="d-flex flex-column flex-grow-1">
    //                     <p className="small text-coolGray600">{t("userapproval:importer-detail.uploadeddoc.pandoc")}</p>
    //                     <a href="#" className="des text-primary text-truncate">{documentList.find(doc => doc.docTypeName === "Company Registraion Doc")?.filename}</a>
    //                   </div>
    //                 </div>
    //               </li>
    //             </ul>
    //           </section>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   :
    //   <div className="container d-flex flex-column mb-3">
    //     <p>{getTextByLanguage("Details not found", "विवरण फेला परेन")}</p>
    //   </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  importerDetailsExternalData: state.externalServiceData.importerDetailsExternalData
})

const mapDispatchToProps = {
  getImporterDetailsExternal: getImporterDetailsExternal
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ImporterDetail)