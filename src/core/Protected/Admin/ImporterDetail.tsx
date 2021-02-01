import React, { useState } from 'react';

import Header from './../Dashboard/Header/Header';
import Sidebar from './../Dashboard/Sidebar/SidebarAdmin';

import { Button } from 'reactstrap';

export default function ImporterDetail() {
  const [sidebarToggle, setsidebarToggle] = useState(false);

  return (
    <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
      <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
      <main className="stickyHeader">
        <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

        <div className="inner">
          <div className="container d-flex flex-column mb-3">
            <div className="heading">
              <h6 className="text-black">Importer Detail</h6>
            </div>
            <div className="card card-body">
              <div className="row">
                <div className="col-lg-8">
                  <section>
                    <h6 className="heading-01">Organization</h6>
                    <div className="divider my-2"></div>
                    <div className="row">
                      <div className="col-lg-3 mb-3">
                        <label htmlFor="" className="text-coolGray600">Organization Name</label>
                        <p>Yamaha Motors</p>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <label htmlFor="" className="text-coolGray600">Registration No.</label>
                        <p>283940129</p>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <label htmlFor="" className="text-coolGray600">Registration Date</label>
                        <p>2077/03/05</p>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <label htmlFor="" className="text-coolGray600">PAN/VAT No.</label>
                        <p>1230-B</p>
                      </div>
                    </div>
                  </section>
                  <section className="mt-3">
                    <h6 className="heading-01">Address</h6>
                    <div className="divider my-2"></div>
                    <div className="row">
                      <div className="col-lg-3 mb-3">
                        <label htmlFor="" className="text-coolGray600">District</label>
                        <p>Kathmandu</p>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <label htmlFor="" className="text-coolGray600">Local Body</label>
                        <p>Itahari Municipality</p>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <label htmlFor="" className="text-coolGray600">Ward No.</label>
                        <p>06</p>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <label htmlFor="" className="text-coolGray600">Street Address</label>
                        <p>Sanepa, Lalitpur</p>
                      </div>
                    </div>
                  </section>
                  <section className="mt-3">
                    <h6 className="heading-01">Personal Detail</h6>
                    <div className="divider my-2"></div>
                    <div className="row">
                      <div className="col-lg-3 mb-3">
                        <label htmlFor="" className="text-coolGray600">Full Name</label>
                        <p>Ram Prasad Shrestha</p>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="col-lg-4 pl-4">
                  <section>
                    <h6 className="heading-01">Uploaded Documents</h6>
                    <div className="divider my-2"></div>

                    <ul className="list list-divider">
                      <li>
                        <div className="d-flex">
                          <i className="ic-file h6 mr-2 mt-1 text-primary"></i>
                          <div className="d-flex flex-column flex-grow-1">
                            <p className="small text-coolGray600">Organization Registration Document</p>
                            <a href="#" className="des text-primary text-truncate">sample_doc.docx</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <i className="ic-file h6 mr-2 mt-1 text-primary"></i>
                          <div className="d-flex flex-column flex-grow-1">
                            <p className="small text-coolGray600">Tax Clearance Document</p>
                            <a href="#" className="des text-primary text-truncate">sample_doc.docx</a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <i className="ic-file h6 mr-2 mt-1 text-primary"></i>
                          <div className="d-flex flex-column flex-grow-1">
                            <p className="small text-coolGray600">PAN Document</p>
                            <a href="#" className="des text-primary text-truncate">sample_doc.docx</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>

            <div className="text-right mt-3">
              <Button className="btn-outline outline-hover-red mr-2" color="">Reject</Button>
              <Button color="success">Approve</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
