import React, { ReactElement, useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar'
import ProgressCircle from "./../../../assets/images/svg/progress-circle.svg";
import { Link } from 'react-router-dom';

interface Props {

}

export default function Dashboard({ }: Props): ReactElement {
    const [sidebarToggle, setsidebarToggle] = useState(false);
    return (
        <div className={`app theme-dark-blue ${sidebarToggle ? "toggled" : ""}`} style={{ position: "relative" }}>
            <Sidebar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
            <main className="stickyHeader">
                <Header sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle} />
                <div className="inner">
                    <div className="container py-3">
                        <h6 className="mb-3 text-black">Dashboard</h6>
                        <div className="card card-callout mb-3">
                            <div className="card-body">
                                <div className="flex-center mb-md-0 mb-3">
                                    <img src={ProgressCircle} />
                                    <div className="ml-3">
                                        <h6>आफ्नो प्रोफाइल पूरा गर्नुहोस्।</h6>
                                        <p className="desc">तपाइको, ४ मध्ये ८ विवरण पूर्ण रुपले भरिएको छ। कुनै पनि जागिरको लागि आवेदन दिन तपाईंले आफ्नो प्रोफाइल पूरा गर्नुपर्नेछ।</p>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/vacancy-application" className="btn btn-primary">Go to profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 mb-md-0 mb-3">
                                <div className="card card-stats cardbg-blue">
                                    <div>
                                        <div className="icon">
                                            <div className="ic-setup"></div>
                                        </div>
                                        <p className="title">Total live advertisement</p>
                                    </div>
                                    <h3 className="value">
                                        128
                                    </h3>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="card card-stats cardbg-purple-20">
                                    <div>
                                        <div className="icon">
                                            <div className="ic-transactions"></div>
                                        </div>

                                        <p className="title">Total vacancy</p>
                                    </div>
                                    <h3 className="value">
                                        43
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="card card-stats cardbg-yellow">
                                    <div>
                                        <div className="icon">
                                            <div className="ic-transactions"></div>
                                        </div>

                                        <p className="title">Total profiles</p>
                                    </div>
                                    <h3 className="value">
                                        43
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="card card-stats cardbg-green">
                                    <div>
                                        <div className="icon">
                                            <div className="ic-transactions"></div>
                                        </div>

                                        <p className="title">Total admit cards</p>
                                    </div>
                                    <h3 className="value">
                                        43
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="card card-body table-responsive mt-3">
                            <h6 className="mb-2">रिक्त पदहरू</h6>
                            <table className="table table-02 table-striped table-rounded d-xl-table">
                                <thead >
                                    <tr >
                                        <th> विज्ञापन कोड </th>
                                        <th> श्रेणी/तह </th>
                                        <th > पद </th>
                                        <th> सेवा/समूह/उपसमूह </th>
                                        <th > दरखास्त दिने अन्तिम मिति </th>
                                        <th> दोब्बर दस्तुर तिरी दरखास्त दिने अन्तिम मिति  </th>
                                        <th > विज्ञापन गर्ने कार्यालय </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> २९३८९ </td>
                                        <td> रा. प. अ. न. दितिय </td>
                                        <td> ईन्जिनियर</td>
                                        <td> नेपाल इन्जीनियरिंग </td>
                                        <td> १२/२३/२०७७ </td>
                                        <td>१२/३१/२०७७ </td>
                                        <td> परदेश लोकसेवा आयोग, बागमती</td>
                                    </tr>
                                    <tr>
                                        <td> २९३८९ </td>
                                        <td> रा. प. अ. न. दितिय </td>
                                        <td> ईन्जिनियर</td>
                                        <td> नेपाल इन्जीनियरिंग </td>
                                        <td> १२/२३/२०७७ </td>
                                        <td>१२/३१/२०७७ </td>
                                        <td> परदेश लोकसेवा आयोग, बागमती</td>
                                    </tr>
                                    <tr>
                                        <td> २९३८९ </td>
                                        <td> रा. प. अ. न. दितिय </td>
                                        <td> ईन्जिनियर</td>
                                        <td> नेपाल इन्जीनियरिंग </td>
                                        <td> १२/२३/२०७७ </td>
                                        <td>१२/३१/२०७७ </td>
                                        <td> परदेश लोकसेवा आयोग, बागमती</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
