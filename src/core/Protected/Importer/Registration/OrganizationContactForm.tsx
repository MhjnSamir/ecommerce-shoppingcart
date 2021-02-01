import React, { ReactElement } from 'react'

import FormikValidationError from '../../../../components/React/FormikValidationError/FormikValidationError'

interface Props {
  errors: any;
  touched: any;
  values: any;
  handleChange: any;
  t: any
}

const OrganizationContactForm = ({ errors, touched, values, handleChange, t }: Props): ReactElement => {
  return (
    <section className="mt-3">
      <h6 className="heading-01">{t('register:importer.register.section.orgContactPerson')}</h6>
      <div className="divider my-2"></div>
      <div className="form-row">
        <div className="col-lg-3 form-group">
          <label htmlFor="contactPersonName">{t('register:importer.register.input.contactPersonName.title')}</label>
          <input type="text" className="form-control" value={values.contactPersonName} name="contactPersonName" id="contactPersonName" onChange={handleChange} />
          <FormikValidationError name="contactPersonName" errors={errors} touched={touched} />

        </div>
        <div className="col-lg-2 form-group">
          <label htmlFor="contactPersonPosition">{t('register:importer.register.input.contactPersonPosition.title')}</label>
          <input type="text" className="form-control" value={values.contactPersonPosition} name="contactPersonPosition" id="contactPersonPosition" onChange={handleChange} />
          <FormikValidationError name="contactPersonPosition" errors={errors} touched={touched} />

        </div>
        <div className="col-lg-2 form-group">
          <label htmlFor="contactPersonPanNo">{t('register:importer.register.input.contactPersonPanNo.title')}</label>
          <input type="text" className="form-control" value={values.contactPersonPanNo} name="contactPersonPanNo" id="contactPersonPanNo" onChange={handleChange} />
          <FormikValidationError name="contactPersonPanNo" errors={errors} touched={touched} />

        </div>

        <div className="col-lg-2 form-group">
          <label htmlFor="contactPersonMobileNo">{t('register:importer.register.input.contactPersonMobileNo.title')}</label>
          <input type="text" className="form-control" value={values.contactPersonMobileNo} name="contactPersonMobileNo" id="contactPersonMobileNo" onChange={handleChange} />
          <FormikValidationError name="contactPersonMobileNo" errors={errors} touched={touched} />

        </div>

        <div className="col-lg-2 form-group">
          <label htmlFor="contactPersonPhoneNo">{t('register:importer.register.input.district.title')}</label>
          <input type="text" className="form-control" value={values.contactPersonPhoneNo} name="contactPersonPhoneNo" id="contactPersonPhoneNo" onChange={handleChange} />
          <FormikValidationError name="contactPersonPhoneNo" errors={errors} touched={touched} />

        </div>
      </div>
    </section>
  )
}

export default OrganizationContactForm
