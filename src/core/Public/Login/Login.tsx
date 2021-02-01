import React, { ReactElement, useState } from 'react'
import { Link } from "react-router-dom";

import Logo from "../../../assets/images/logo.png";
import Image1 from "../../../assets/images/breifcase.png";

interface Props {

}

export default function Login(props: Props): ReactElement {
  const [passwordToggle, showPassword] = useState(false);
  const togglePassword = () => showPassword(!passwordToggle);
  return (
    <div className="app theme-dark-blue">
      <div className="container-fluid login-wrapper">
        <div className=" d-flex h-100 align-items-center justify-content-center">
          <div className="row login-box">
            <div className="col-md-6 login-box-left d-none d-md-block">
              <p className="mb-2">Welcome to </p>
              <h6 className="login-box-text">State Public Service Commission</h6>
              <div className="login-info">
                <ul className="list list-login">
                  <li>
                    <span className="marker">१</span>
                    <p>उम्मेदवारहरूले मान्य व्यक्तिगत जानकारीको साथ प्रणालीमा दर्ता गर्नुपर्नेछ।</p> 
                  </li>
                  <li>
                    <span className="marker">२</span>
                    <p>दर्ता प्रक्रिया पूरा गरेपछि, एक्टिभेसन टोकन उम्मेदवारको ईमेलमा पठाइनेछ। उम्मेदवारले एसएमएस पनि प्राप्त गर्नेछ र उसले खाता सक्रिय गर्न प्राप्त टोकन प्रयोग गर्न सक्दछ।</p> 
                  </li>
                  <li>
                    <span className="marker">३</span>
                    <p>खाता सक्रिय गरेपछि उम्मेद्वारले रिक्त स्थानमा आवेदन गर्न योग्य हुन प्रोफाइल पूरा गर्नुपर्दछ।</p> 
                  </li>
                </ul>
              </div>
              {/* <h6 className="font-weight-normal">Login to get started</h6>
              <a href="" className="login-icon">
                <i className="ic-arrow-right"></i>
              </a> */}
              <img src={Image1} className="login-image" />
            </div>
            <div className="col-md-6 login-box-right">
              <form >
                <div className="logo-box">

                  <img src={Logo} />
                </div>
                <div className="flex-center-between mb-3">
                  <h5 className="font-bold">Login</h5>
                  <Link to="/register" className="text-info">Register</Link>
                </div>

                <div className="form-group">
                  <label htmlFor="username">Screen Name</label>
                  <input type="text" className="form-control" name="username" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="custom-input">
                    <input type={`${passwordToggle ? "text" : "password"}`} className="form-control" />
                    <span className={`text-coolGray600 password ${passwordToggle ? "ic-show" : "ic-hide"}`} onClick={togglePassword}></span>
                  </div>
                </div>

               
                <div className="from-group mt-3">
                  <Link to="/home" type="submit" className="btn btn-primary btn-block">
                    Login
                  </Link>
                </div>
                <p className="text-center mt-3">
                  <a href="" className="text-blue" >Forgot Password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
