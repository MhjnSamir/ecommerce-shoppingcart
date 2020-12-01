import React, { ReactElement, useState } from 'react';
import Header from '../Dashboard/Header/Header';
import Sidebar from '../Dashboard/Sidebar/SidebarAdmin';

import {
  Table
} from 'reactstrap';

interface Props {

};

export default function ScheduleExam({ }: Props): ReactElement {
  const [sidebarToggle, setsidebarToggle] = useState(false);
  return (
    <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
          <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
          <main className="stickyHeader">
              <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />

              <div className="inner">
                  <div className="container">
                      <div className="heading">
                          <h6 className="text-black">Schedule for Internal and Open Competition</h6>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <Table striped className="table-02">
                            <thead>
                                <tr>
                                    <th>Paper</th>
                                    <th>Subject</th>
                                    <th>Paper Duration (Min)</th>
                                    <th>Exam Date</th>
                                    <th>Exam Start Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PaperOne</td>
                                    <td>रा.प.अनं.प्रथम/द्वितीय</td>
                                    <td>180</td>
                                    <td>
                                      <input type="date" className="form-control"/>
                                    </td>
                                    <td>
                                      <input type="time" className="form-control"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>PaperTwo</td>
                                    <td>रा०प० प्रथम</td>
                                    <td>180</td>
                                    <td>
                                      <input type="date" className="form-control"/>
                                    </td>
                                    <td>
                                      <input type="time" className="form-control"/>
                                    </td>
                                </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                      <div className="footer-btn">
                        <button type="button" className="btn btn-outline outline-hover-blue">Cancel</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                      </div>
                  </div>
              </div>
          </main >            
      </div >
  )
}
