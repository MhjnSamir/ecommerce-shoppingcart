import React, { ReactElement, useState } from 'react'
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

import Captcha from "../../../assets/images/captcha.png";
interface Props {

}

export default function Register(props: Props): ReactElement {

    const [passwordToggle, showPassword] = useState(false);
    const togglePassword = () => showPassword(!passwordToggle);
    return (
        <div className="app theme-dark-blue">
            <div className="container-fluid login-wrapper">
                <div className=" d-flex h-100 align-items-center justify-content-center">
                    <div className="login-box register-box">
                        <div className="login-box-right">
                            <form >
                                <div className="logo-box">
                                    <img src={Logo} />
                                </div>
                                <h5 className="mb-3 font-bold"> Register</h5>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="username">First Name</label>
                                            <input type="text" className="form-control" name="username" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="middlename">Middle Name</label>
                                            <input type="text" className="form-control" name="middlename" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label htmlFor="lastname">Last Name</label>
                                            <input type="text" className="form-control" name="lastname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lastname">Certificate No.</label>
                                            <input type="text" className="form-control" name="lastname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="lastname">National ID</label>
                                            <input type="text" className="form-control" name="lastname" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" name="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input type="text" className="form-control" name="phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <div className="custom-input">
                                        <input type={`${passwordToggle ? "text" : "password"}`} className="form-control" />
                                        <span className={`text-coolGray600 password ${passwordToggle ? "ic-show" : "ic-hide"}`} onClick={togglePassword}></span>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">Captcha</label>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src={Captcha} className="captcha" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="align-center">
                                                <input type="text" className="form-control" placeholder="Enter Captcha" />
                                                <a href="#" className="ic-refresh text-info ml-1"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-3 text-center d-flex justify-content-between">
                                    <Link to="/login">
                                        <button type="submit" className="btn btn-outline-primary">
                                            Back to Login
                                    </button>
                                    </Link>
                                    <button type="submit" className="btn btn-primary ">
                                        Register
                                    </button>
                                </div>
                                <div className="mt-3 text-center">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
