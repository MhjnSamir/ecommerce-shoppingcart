import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import { string as YupString, object as YupObject, mixed as YupMixed } from 'yup';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '../../../../store/root-reducer';
import { getDocTypeForImporterReg } from '../../../../store/modules/externalService/masterdata/getDocTypeForImporterRegistration';
import { organizationProfileSetupAction } from '../../../../store/modules/externalService/organizationProfileSetup';
import { getLocalBodyByDistrictId } from '../../../../store/modules/externalService/masterdata/getLocalBodyByDistrictId';

import FormikValidationError from '../../../../components/React/FormikValidationError/FormikValidationError';
import { getTextByLanguage } from '../../../../i18n/i18n';
import { getAllDistrict } from '../../../../store/modules/externalService/masterdata/getDistrictList';
import { initUser } from '../../../../store/modules/oauthservice/initapi';

import OrganizationForm from './OrganizationForm';
import AddressForm from './AddressForm';
import OrganizationContactForm from './OrganizationContactForm';

interface Props extends PropsFromRedux {
  className: string,
  buttonLabel: string
}

export interface ProfileSetupDetails { }

function Registration(props: Props) {
  const {
    buttonLabel,
    className,
    getDocTypeForImporterReg,
    organizationProfileSetupAction,
    getLocalBodyByDistrictId,
    getAllDistrict,
    initUser
  } = props;

  const { t } = useTranslation('register')
  const history = useHistory()
  const [initialValue, setInitialValue] = useState({
    organizationName: '',
    aliascode: '',
    companyRegNo: '',
    registrationDate: '',
    registrationDateNp: '',
    panno: '',
    vatno: '',
    localBodyId: '',
    email: '',
    contactPersonName: '',
    contactPersonPanNo: '',
    contactPersonPosition: '',
    districtId: '',
    docPojo: '',
    contactPersonPhoneNo: '',
    contactPersonMobileNo: ''
  })

  const [modal, setModal] = useState(false);
  const [documentType, setDocumentType] = useState<any[]>([]); //stores the document types to be uploaded
  const [documentPojoList, setDocumentPojoList] = useState<any[]>([]) //stores the document that is to be uploaded
  const [district, setDistrict] = useState<any[]>([]) //holds the list of values for district
  const [localBody, setLocalBody] = useState<any[]>([]) //holds the list of values for localbody
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>(""); // holds selected district id
  const [supportedFormat, setSupportedFormat] = useState([]);
  const [validationSchema, setValidationSchema] = useState({
    organizationName: YupString().required('register:importer.register.input.organizationName.error-required'),
    aliascode: YupString().required('register:importer.register.input.aliascode.error-required'),
    companyRegNo: YupString().required('register:importer.register.input.companyRegNo.error-required'),
    registrationDate: YupString().required('register:importer.register.input.registrationDate.error-required'),
    registrationDateNp: YupString().required('register:importer.register.input.registrationDateNp.error-required'),
    panno: YupString().required('register:importer.register.input.panno.error-required'),
    vatno: YupString().required('register:importer.register.input.vatno.error-required'),
    districtId: YupString().required('register:importer.register.input.district.error-required'),
    localBodyId: YupString().required('register:importer.register.input.localbody.error-required'),
    email: YupString().required('register:importer.register.input.email.error-required'),
    contactPersonName: YupString().required('register:importer.register.input.contactPersonName.error-required'),
    contactPersonPanNo: YupString().required('register:importer.register.input.contactPersonPanNo.error-required'),
    contactPersonPosition: YupString().required('register:importer.register.input.contactPersonPosition.error-required'),
    contactPersonMobileNo: YupString().required('register:importer.register.input.contactPersonMobileNo.error-required'),
    contactPersonPhoneNo: YupString().required('register:importer.register.input.contactPersonPhoneNo.error-required')
  })

  const registrationValidationSchema = YupObject().shape({
    ...validationSchema
  })

  useEffect(() => {
    initUser().then(res => console.log(res))
  }, [])

  //fetch document Types 
  useEffect(() => {
    getDocumentTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getDocumentTypes = async () => {
    const documentTypeRes = await getDocTypeForImporterReg();
    let newInitialValues: any = {}
    // let newValidationSchema: any = {}
    if (documentTypeRes.data) {
      setDocumentType(documentTypeRes.data || [])
      documentTypeRes.data.forEach(docType => {
        let dynamicInitialValue = `${docType.docTypeName.replace(/\s+/g, '').toLowerCase()}Doc`
        newInitialValues[dynamicInitialValue] = ''
        // newValidationSchema[dynamicInitialValue] = YupMixed().required(`${docType.docTypeName} is required`)
      })
      setInitialValue({ ...initialValue, ...newInitialValues })
      // setValidationSchema({ ...validationSchema, ...newValidationSchema }) 
    }
  }

  // fetch district list
  useEffect(() => {
    fetchDistrictDataByProvince()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchDistrictDataByProvince = async () => {
    const districtBodyRes = await getAllDistrict();
    if (districtBodyRes.data) {
      if (districtBodyRes.data.length) {
        const districtData = districtBodyRes.data.map(district => ({
          label: getTextByLanguage(district.nameEn, district.nameNp),
          value: district.id
        }))
        setDistrict(districtData || [])
      }

    }
  }

  //fetch localbody list
  useEffect(() => {
    if (!!selectedDistrictId) fetchLocalBodyByDistrictId(selectedDistrictId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDistrictId])

  const fetchLocalBodyByDistrictId = async (districtId: string) => {
    const localBodyRes = await getLocalBodyByDistrictId(districtId.toString());
    if (localBodyRes.data) {
      if (localBodyRes.data.length) {
        const localBodyData = localBodyRes.data.map(localBody => ({
          label: getTextByLanguage(localBody.nameEn, localBody.nameNp),
          value: localBody.id
        }))

        setLocalBody(localBodyData || [])
      }
    }
  }

  const toggle = () => setModal(!modal);

  // const toggle = () => setModal(!modal);

  const { values, handleChange, handleSubmit, setFieldValue, errors, touched } = useFormik({
    initialValues: initialValue,
    validationSchema: registrationValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      handleRegistration(values);
    }
  })

  // handle registration for profile setup
  const handleRegistration = async (values: typeof initialValue) => {
    console.log(values);

    const reqData = {
      // id: ,
      organizationName: values.organizationName,
      aliascode: values.aliascode,
      companyRegNo: values.companyRegNo,
      registrationDate: values.registrationDate,
      registrationDateNp: values.registrationDateNp,
      panno: values.panno,
      vatno: values.vatno,
      localBodyId: values.localBodyId,
      email: values.email,
      organizationContactPerson: {
        name: values.contactPersonName,
        panno: values.contactPersonPanNo,
        position: values.contactPersonPosition,
        phoneno: values.contactPersonPhoneNo,
        mobileno: values.contactPersonMobileNo
      },
      documentPojoList,
    }
    console.log(reqData);

    const profileSetupRes = await organizationProfileSetupAction(reqData);

    if (profileSetupRes.data && typeof profileSetupRes.data?.data === 'number') {
      initUser().then((res: any) => {
        if (res.data && res.data.data.profileSetup) {
          history.push('/home')
        }
      })
    }
  }

  const handleInputFileChange = (evt: any, documentPojo: any) => {
    if (evt.target.files.length) {
      const newDocumentPojo = {
        subprocessdoctypeid: +documentPojo.id,
        file: evt.target.files[0]
      }
      setDocumentPojoList([...documentPojoList.filter((pojo: { subprocessdoctypeid: number, file: File }) => pojo.subprocessdoctypeid !== +documentPojo.id), newDocumentPojo])
    }
  }

  const removeFileHandler = (event: any, documentPojo: any) => {
    setDocumentPojoList([...documentPojoList.filter((pojo: { subprocessdoctypeid: number, file: File }) => pojo.subprocessdoctypeid !== +documentPojo.id)])
  }

  return (
    <>

      <div className="container d-flex flex-column mb-3">
        <div className="heading">
          <h6 className="text-black">{t("register:importer.register.completeProfile")}</h6>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="card card-body">
            {/* organization form */}
            <OrganizationForm values={values} errors={errors} touched={touched} handleChange={handleChange} setFieldValue={setFieldValue} t={t} />

            {/* Address Form */}
            <AddressForm values={values} errors={errors} touched={touched} setFieldValue={setFieldValue} setSelectedDistrictId={setSelectedDistrictId} district={district} localBody={localBody} t={t} />


            {/* Organization Contact Form */}
            <OrganizationContactForm values={values} errors={errors} touched={touched} handleChange={handleChange} t={t} />

            <section className="mt-3">
              <h6 className="heading-01">{t("register:importer.register.section.uploadDocuments")}</h6>
              <div className="divider my-2"></div>

              <table className="table table-02 table-striped table-bordered">
                <thead>
                  <tr>
                    <th>{t("register:importer.register.table.title")}</th>
                    <th className="match-child">{t("register:importer.register.table.upload")}</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    documentType.map((documentPojo) => {
                      let dynamicInputValue = `${documentPojo.docTypeName.replace(/\s+/g, '').toLowerCase()}Doc`
                      return (
                        <tr key={dynamicInputValue}>
                          <td>{documentPojo.docTypeName}</td>
                          <td>
                            <input type="file" name={dynamicInputValue} id={dynamicInputValue} onChange={(event: any) => {
                              if (event.currentTarget.files[0]) {
                                setFieldValue(dynamicInputValue, event.currentTarget.files[0])
                                handleInputFileChange(event, documentPojo);
                              } else {
                                setFieldValue(dynamicInputValue, '');
                                removeFileHandler(event, documentPojo)
                              }
                            }} />
                            <FormikValidationError name={dynamicInputValue} errors={errors} touched={touched} />
                          </td>
                        </tr>
                      )
                    })
                  }
                  {/* <tr>
                        <td>Organization Registration Document</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="text-truncate uploaded-name mr-3">
                              <a href="" className="text-blue">sample_doc.docx</a>
                            </div>
                            <a href="#" className="btn btn-outline outline-hover-blue mr-2">Change</a>
                            <a href="#" className="btn btn-outline outline-hover-red">Remove</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Tax Clearance Document</td>
                        <td>
                          <a href="#" className="btn btn-primary">Upload</a>
                        </td>
                      </tr>
                      <tr>
                        <td>PAN Document</td>
                        <td>
                          <a href="#" className="btn btn-primary">Upload</a>
                        </td>
                      </tr> */}
                </tbody>
              </table>
            </section>
          </div>
          <div className="text-right mt-3">
            {/* <Button className="btn-outline outline-hover-red mr-2" color="" type="button">Cancel</Button> */}
            <Button color="primary" type="submit">{t("buttons.continue")}</Button>
          </div>
        </form>
      </div>


      <Modal isOpen={modal} toggle={toggle} className={"modal-bms " + className}>
        <ModalHeader toggle={toggle} className="modal-header-blue">User Detail</ModalHeader>
        <ModalBody>
          <ul className="list list-divider des">
            <li>
              <div className="grid grid-horizontal">
                <div className="grid-label">Username</div>
                <div className="grid-value">ram02</div>
              </div>
            </li>
            <li>
              <div className="grid grid-horizontal">
                <div className="grid-label">Email</div>
                <div className="grid-value">ram@gmail.com</div>
              </div>
            </li>
            <li>
              <div className="grid grid-horizontal">
                <div className="grid-label">Mobile No.</div>
                <div className="grid-value">9851210123</div>
              </div>
            </li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-outline outline-hover-red" onClick={toggle}>Reject</Button>{' '}
          <Button color="success" onClick={toggle}>Approve</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

const mapStateToProps = (state: RootState) => ({
  docTypeForImporterRegData: state.externalServiceData.externalMasterData.docTypeForImporterRegData
})

const mapDispatchToProps = {
  getDocTypeForImporterReg: getDocTypeForImporterReg,
  organizationProfileSetupAction: organizationProfileSetupAction,
  getLocalBodyByDistrictId: getLocalBodyByDistrictId,
  getAllDistrict: getAllDistrict,
  initUser: initUser
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Registration)
