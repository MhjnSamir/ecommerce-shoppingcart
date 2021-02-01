import React, { ReactElement } from 'react'

import FormikValidationError from '../../../../components/React/FormikValidationError/FormikValidationError'
import StyledSelect, { OptionType } from '../../../../components/React/StyledSelect/StyledSelect'

interface Props {
  errors: any;
  touched: any;
  values: any;
  setFieldValue: any;
  setSelectedDistrictId: any;
  district: any;
  localBody: any;
  t: any
}

const AddressForm = ({ errors, touched, values, setFieldValue, setSelectedDistrictId, district, localBody, t }: Props): ReactElement => {
  return (
    <section className="mt-3">
      <h6 className="heading-01">{t("register:importer.register.section.address")}</h6>
      <div className="divider my-2"></div>
      <div className="form-row">
        <div className="col-lg-3 form-group">
          <label htmlFor="districtId">{t('register:importer.register.input.district.title')}</label>
          <StyledSelect
            className="mr-1"
            options={district}
            value={district && district.find((data: OptionType) => {
              return (data.value === values.districtId)
            })}
            id="districtId"
            name="districtId"
            onChange={(name, event) => {
              setFieldValue(name, (event as OptionType).value)
              if ((event as OptionType).value) {
                setSelectedDistrictId((event as OptionType).value.toString())
              } else {
                setSelectedDistrictId("");
                setFieldValue("localBodyId", "")
              }
            }}
          />
          <FormikValidationError name="districtId" errors={errors} touched={touched} />

        </div>
        <div className="col-lg-3 form-group">
          <label htmlFor="localBodyId">{t('register:importer.register.input.localbody.title')}</label>

          <StyledSelect
            className="mr-1"
            options={localBody}
            value={localBody && localBody.find((data: OptionType) => {
              return (data.value === values.localBodyId)
            })}
            id="localBodyId"
            name="localBodyId"
            onChange={(name, event) => {
              setFieldValue(name, (event as OptionType).value)
            }}
          />
          <FormikValidationError name="localBodyId" errors={errors} touched={touched} />

        </div>
      </div>
    </section>
  )
}

export default AddressForm
