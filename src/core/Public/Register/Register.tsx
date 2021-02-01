import React, { ReactElement, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useFormik } from 'formik'
import { string as YupString, object as YupObject } from 'yup';
import { useTranslation } from 'react-i18next';
import { connect, ConnectedProps, shallowEqual, useSelector } from 'react-redux';

import LoadingButton from '../../../components/React/LoadingButton/LoadingButton';
import { RootState } from '../../../store/root-reducer';
import FormikValidationError from '../../../components/React/FormikValidationError/FormikValidationError';

import { switchI18nLanguage } from '../../../store/modules/i18n/i18n';
import { registerUser } from '../../../store/modules/register/register';

import Logo from "../../../assets/images/logo.png";
import loginImg from "../../../assets/images/Sunset_&_Tea_Garden.jpg";

interface Props extends PropsFromRedux { }
export interface RegisterCredentials {
    username: string,
    password: string,
    email: string,
    userType: string
}


function Register(props: Props): ReactElement {
    const { registerUser, registerData, switchI18nLanguage } = props;

    const history = useHistory();
    const i18nextData = useSelector((state: RootState) => state.i18nextData, shallowEqual);
    const handleRegister = async (registerDetails: RegisterCredentials) => {
        const registerRes = await registerUser(registerDetails);
        if (registerRes.status === 1) {
            history.push('/login')
        }
    }

    return (
        <div className='app bg-white'>
            <div className="media-caption d-none d-md-block">
                <p>Sunset View from Tea Garden, Hile, Dhankuta</p>
                <p>Image by: Ameet Ranjit Photography</p>
            </div>
            <div className="container">
                <div className="auth-wrapper">
                    <div className="auth-box-left d-none d-md-block">
                        <div className="media-wrapper">
                            <img src={loginImg} className="img-fluid" alt="Sunset View from Tea Garden, Hile, Dhankuta" />
                        </div>
                    </div>
                    <div className="auth-box-right">
                        <ul className="list list-inline lang-select">
                            {["NE", "EN"].map((lang) => (
                                <li className={i18nextData.languageType === lang.toLowerCase() ? "active" : ""} key={lang}>
                                    <a
                                        href="#/"
                                        onClick={e => {
                                            e.preventDefault();
                                            switchI18nLanguage(lang.toLowerCase())
                                        }}
                                    >
                                        {lang}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <RegisterForm handleRegister={handleRegister} registering={registerData.isFetching} />
                    </div>
                </div>
            </div>
        </div>
        // <div className="app theme-dark-blue">
        //         <div className="container-fluid login-wrapper">
        //             <div className="login-box register-box">
        //                 <div className="login-box-right">
        //                     <form>
        //                         <div className="logo-box">
        //                             <img src={Logo} alt="logo-np-government" />
        //                         </div>
        //                         <h5 className="mb-3 font-bold">Register</h5>

        //                         <section className="mb-4">
        //                             <h6 className="heading-line mb-3">User Detail</h6>
        //                             <div className="row">
        //                                 <div className="col-lg-6 form-group">
        //                                     <label htmlFor="username">Username</label>
        //                                     <input type="text" className="form-control" name="username" />
        //                                 </div>
        //                                 <div className="col-lg-6 form-group">
        //                                     <label htmlFor="email">Email</label>
        //                                     <input type="email" className="form-control" name="email" />
        //                                 </div>
        //                             </div>
        //                             <div className="row">
        //                                 <div className="col-lg-6 form-group">
        //                                     <label htmlFor="password">Password</label>
        //                                     <div className="custom-input">
        //                                         <input type="password" className="form-control" name="password" />
        //                                         <span className="ic-hidden text-coolGray600"></span>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </section>
        //                         <section className="mb-4">
        //                             <h6 className="heading-line mb-3">Personal Details</h6>
        //                             <div className="row">
        //                                 <div className="col-lg-4 form-group">
        //                                     <label htmlFor="username">First Name</label>
        //                                     <input type="text" className="form-control" name="username" />
        //                                 </div>
        //                                 <div className="col-lg-4 form-group">
        //                                     <label htmlFor="middlename">Middle Name</label>
        //                                     <input type="text" className="form-control" name="middlename" />
        //                                 </div>
        //                                 <div className="col-lg-4 form-group">
        //                                     <label htmlFor="lastname">Last Name</label>
        //                                     <input type="text" className="form-control" name="lastname" />
        //                                 </div>
        //                             </div>
        //                             <div className="row">
        //                                 <div className="col-lg-4 form-group">
        //                                     <label htmlFor="mobno">Mobile No.</label>
        //                                     <input type="text" className="form-control" name="mobno" />
        //                                 </div>
        //                                 <div className="col-lg-4 form-group">
        //                                     <label htmlFor="phno">Phone No.</label>
        //                                     <input type="number" className="form-control" name="phno" />
        //                                 </div>
        //                                 <div className="col-lg-4 form-group">
        //                                     <label htmlFor="panno">PAN No.</label>
        //                                     <input type="text" className="form-control" name="panno" />
        //                                 </div>
        //                             </div>
        //                         </section>
        //                         <section className="mb-4">
        //                             <h6 className="heading-line mb-3">Address</h6>
        //                             <div className="row">
        //                                 <div className="col-lg-6 form-group">
        //                                     <label htmlFor="district">District</label>
        //                                     <select name="district" id="" className="form-control">
        //                                         <option value="" selected disabled>Select...</option>
        //                                         <option value="">Kathmandu</option>
        //                                     </select>
        //                                 </div>
        //                                 <div className="col-lg-6 form-group">
        //                                     <label htmlFor="municipality">Municipality</label>
        //                                     <select name="municipality" id="" className="form-control">
        //                                         <option value="" selected disabled>Select...</option>
        //                                         <option value="">Kathmandu Municipality</option>
        //                                     </select>
        //                                 </div>
        //                             </div>
        //                             <div className="row">
        //                                 <div className="col-lg-2 form-group">
        //                                     <label htmlFor="mobno">Ward No.</label>
        //                                     <input type="text" className="form-control" name="mobno" />
        //                                 </div>
        //                                 <div className="col-lg-6 form-group">
        //                                     <label htmlFor="phno">Street</label>
        //                                     <input type="number" className="form-control" name="phno" />
        //                                 </div>
        //                             </div>
        //                         </section>

        //                         <section className="mb-4">
        //                             <h6 className="heading-line mb-3">Organization Details</h6>

        //                             <div className="row">
        //                                 <div className="col-md-12 form-group">
        //                                     <label htmlFor="orgName">Organization/Company Name</label>
        //                                     <input type="text" className="form-control" name="orgName" />
        //                                 </div>
        //                                 <div className="col-md-4 form-group">
        //                                     <label htmlFor="regNo.">Registration No.</label>
        //                                     <input type="text" className="form-control" name="regNo." />
        //                                 </div>
        //                                 <div className="col-md-4 form-group">
        //                                     <label htmlFor="regDate">Registration Date</label>
        //                                     <input type="date" className="form-control" name="regDate" />
        //                                 </div>
        //                                 <div className="col-md-4 form-group">
        //                                     <label htmlFor="compPANno">PAN No.</label>
        //                                     <input type="text" className="form-control" name="compPANno" />
        //                                 </div>
        //                             </div>
        //                         </section>

        //                         <div className="mt-3 text-center d-flex justify-content-between">
        //                             <Link to="/login" className="btn btn-outline-primary">
        //                                 Back to login
        //                         </Link>
        //                             <button type="submit" className="btn btn-primary ">
        //                                 Register
        //                         </button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    registerData: state.registerData
})

const mapDispatchToProps = {
    registerUser: registerUser,
    switchI18nLanguage: switchI18nLanguage
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(Register);
interface RegisterFormProps {
    handleRegister: (registerCredentials: RegisterCredentials) => void
    /**is being registered */
    registering: boolean
}
const RegisterForm = ({ handleRegister, registering }: RegisterFormProps) => {
    const { t } = useTranslation(['register', 'login'])

    const [userTypeStep, setUserTypeStep] = useState(true);
    const [registerStep, setRegisterStep] = useState(false);
    const [registerInitialValue] = useState({ username: '', email: '', password: '', userType: 'IMPORTER_USER' });

    const registerValidationSchema = YupObject().shape({
        username: YupString().required('register:input.username.error-required'),
        email: YupString().email('register:input.email.error-invalid').required('register:input.email.error-required'),
        password: YupString().required('register:input.password.error-required')
    })

    const previousNextHandler = () => {
        setUserTypeStep(!userTypeStep)
        userTypeStep ? setRegisterStep(true) : setRegisterStep(false)
    }

    const { values, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: registerInitialValue,
        validationSchema: registerValidationSchema,
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false);
            handleRegister(values);
        }
    })

    return (
        <form className="w-100 auth-body" onSubmit={handleSubmit}>
            <div className="logo-box">
                <img src={Logo} />
                <ul className="list logo-text">
                    <li className="small">प्रदेश सरकार</li>
                    <li className="small">भौतिक पूर्वाधार विकास मन्त्रालय</li>
                    <li className="des font-bold">यातायात व्यवस्था निर्देशनालय</li>
                    <li className="small">प्रदेश नं १, इटहरी, सुनसरी</li>
                </ul>
            </div>
            <div className="register-head">
                <div className={`register-title ${!userTypeStep ? undefined : 'd-none'}`}>
                    <h5 className="font-bold mb-2">{t("register:registerHead.register.title")}</h5>
                    <h6 className="des text-coolGray600 font-regular">{t("register:registerHead.register.description")}</h6>
                </div>
                <div className={`register-title ${userTypeStep ? undefined : 'd-none'}`}>
                    <h5 className="font-bold mb-2">{t("register:registerHead.userType.title")}</h5>
                    <h6 className="des text-coolGray600 font-regular">{t("register:registerHead.userType.description")}</h6>
                </div>
            </div>
            <div className={`step-1 ${userTypeStep ? undefined : 'd-none'}`}>
                <ul className="list list-radio">
                    <li>
                        <label className="form-check" htmlFor="importer">
                            <input className="form-check-input" type="radio" name="userType" id="importer" value="IMPORTER_USER" checked={values.userType === 'IMPORTER_USER'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="userType1">
                                <span className="form-check-title">{t("register:input.userType.importer.title")}</span>
                                <span className="form-check-desc">{t("register:input.userType.importer.description")}</span>
                            </label>
                        </label>
                    </li>
                    <li>
                        <label className="form-check" htmlFor="user">
                            <input className="form-check-input" type="radio" name="userType" id="user" value="USER" checked={values.userType === 'USER'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="userType2">
                                <span className="form-check-title">{t("register:input.userType.user.title")}</span>
                                <span className="form-check-desc">{t("register:input.userType.user.description")}</span>
                            </label>
                        </label>
                    </li>
                </ul>
            </div>

            <div className={`step-2 ${!userTypeStep ? undefined : 'd-none'}`}>
                <div className="form-group">
                    <label htmlFor="username">{t("register:input.username.title")}</label>
                    <input type="text" className="form-control" name="username" id="username" value={values.username} onChange={handleChange} />
                    <FormikValidationError name="username" errors={errors} touched={touched} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t("register:input.email.title")}</label>
                    <input type="text" className="form-control" name="email" id="email" value={values.email} onChange={handleChange} />
                    <FormikValidationError name="email" errors={errors} touched={touched} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">{t("register:input.password.title")}</label>
                    <div className="custom-input">
                        <input type="password" name="password" className="form-control" id="password" value={values.password} onChange={handleChange} />
                        <span className="ic-hidden text-coolGray600"></span>
                        <FormikValidationError name="password" errors={errors} touched={touched} />
                    </div>
                </div>
            </div>

            <div className="auth-footer">
                <div className="flex-grow-1 small">
                    <span className="text-coolGray600">{t("register:haveAnAccount.title")}&nbsp;</span>
                    <Link to="/login" className="text-blue">{t("login:title")}</Link>
                </div>
                <div className="d-flex align-items-center">
                    {!userTypeStep && <button onClick={previousNextHandler} type="button" className="btn btn-outline outline-hover-blue mr-2">
                        {t("buttons.previous")}
                    </button>}

                    {(userTypeStep && !registerStep) && <button onClick={previousNextHandler} type="button" className="btn btn-primary">
                        {t("buttons.next")}
                    </button>}

                    {/* {registerStep && <button type="submit" className="btn btn-primary">
                        Next
                    </button>} */}

                    {registerStep && <LoadingButton className="btn btn-primary" type="submit" text={t("register:title")} disabled={registering} loading={registering} />}
                </div>
            </div>
        </form>
    )
}
