import React from 'react'

import NepaliDatePicker from '../../../../components/React/Datepicker/Datepicker'
import EnglishDatePicker from '../../../../components/React/EnglishDatepicker/EnglishDatepicker'
import FormikValidationError from '../../../../components/React/FormikValidationError/FormikValidationError'

import formatDate from '../../../../utils/utilsFunction/date-converter'

interface Props {
  handleChange: any;
  errors: any;
  touched: any;
  values: any;
  setFieldValue: any;
  t: any
}

const OrganizationForm = ({ handleChange, errors, touched, values, setFieldValue, t }: Props) => {
  return (
    <section>
      <h6 className="heading-01">{t('register:importer.register.section.organization')}</h6>
      <div className="divider my-2"></div>
      <div className="form-row">
        <div className="col-lg-6 form-group">
          <label htmlFor="organizationName">{t('register:importer.register.input.organizationName.title')}</label>
          <input type="text" name="organizationName" className="form-control" id="organizationName" value={values.organizationName} onChange={handleChange} />
          <FormikValidationError name="organizationName" errors={errors} touched={touched} />
        </div>
        <div className="col-lg-3 form-group">
          <label htmlFor="aliascode">{t('register:importer.register.input.aliascode.title')}</label>
          <input type="text" name="aliascode" className="form-control" id="aliascode" value={values.aliascode} onChange={handleChange} />
          <FormikValidationError name="aliascode" errors={errors} touched={touched} />

        </div>
        <div className="col-lg-3 form-group">
          <label htmlFor="companyRegNo">{t('register:importer.register.input.companyRegNo.title')}</label>
          <input type="number" className="form-control" name="companyRegNo" id="companyRegNo" value={values.companyRegNo} onChange={handleChange} />
          <FormikValidationError name="companyRegNo" errors={errors} touched={touched} />

        </div>
        <div className="col-lg-2 form-group">
          <label htmlFor="registrationDateNp">{t('register:importer.register.input.registrationDateNp.title')}</label>
          <NepaliDatePicker
            value={values.registrationDateNp}
            name="registrationDateNp"
            maxDateToday
            id="registrationDateNp"
            onChange={(date, engDate) => {
              setFieldValue("registrationDate", formatDate(engDate))
              setFieldValue("registrationDateNp", date)
            }}
            className="form-control"
          />
          <FormikValidationError name="registrationDateNp" errors={errors} touched={touched} />

        </div>
        <div className="col-lg-2 form-group">
          <label htmlFor="registrationDate">{t('register:importer.register.input.registrationDate.title')}</label>
          <EnglishDatePicker
            maxDate={new Date()}
            value={values.registrationDate}
            name="registrationDate"
            id="registrationDate"
            handleChange={(date) => setFieldValue("registrationDate", formatDate(date))}
            className="form-control"
          />
          <FormikValidationError name="registrationDate" errors={errors} touched={touched} />

        </div>

        <div className="col-lg-2 form-group">
          <label htmlFor="panno">{t('register:importer.register.input.panno.title')}</label>
          <input type="text" className="form-control" name="panno" id="panno" value={values.panno} onChange={handleChange} />
          <FormikValidationError name="panno" errors={errors} touched={touched} />

        </div>

        <div className="col-lg-2 form-group">
          <label htmlFor="vatno">{t('register:importer.register.input.vatno.title')}</label>
          <input type="text" className="form-control" name="vatno" id="vatno" value={values.vatno} onChange={handleChange} />
          <FormikValidationError name="vatno" errors={errors} touched={touched} />

        </div>

        <div className="col-lg-4 form-group">
          <label htmlFor="email">{t('register:importer.register.input.email.title')}</label>
          <input type="text" className="form-control" name="email" id="email" value={values.email} onChange={handleChange} />
          <FormikValidationError name="email" errors={errors} touched={touched} />

        </div>
      </div>
    </section>
  )
}

export default OrganizationForm
