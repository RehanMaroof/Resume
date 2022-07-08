import { React } from 'react';
import { StyledLine } from './Line.style';


import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import avatar from './images/2.jpg';

import './Resume.css'

export default function Resume() {
    return(
        <div className="Resume">
            <StyledLine height="62px" />
            <div className="Resume-header">
                <div className="Bio">
                    <div className="First-name">Mubashir</div>
                    <div className="Last-name">Ahmed</div>
                    <div className="Job-title">
                        <div className="Circle-filled"></div>
                        <div>Computer Scientist</div>
                    </div>
                </div>
                <div className="Avatar">
                    <img src={avatar} alt="Mubashir Ahmed" />
                </div>
            </div>
            <StyledLine height="29.2191px" />
            <div className='Resume-body'>
                <div className="Left-side">
                    <div className="Contact-details">
                        <div>
                            <FmdGoodIcon fontSize="small" sx={{ color: "#3e3e3e" }} />
                            <span>House No. 1005, Street 56, G-11/3 Islamabad, 44000, Pakistan</span>
                        </div>
                        <div>
                            <PhoneIcon fontSize="small"  sx={{ color: "#3e3e3e" }}/>
                            <span>+92-317-5384929</span>
                        </div>
                        <div>
                            <MailIcon fontSize="small" sx={{ color: "#3e3e3e" }}/>
                            <span>i180481@nu.edu.pk</span>
                        </div>
                    </div>
                    <div className="Education">
                        <div className="Heading">Education</div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="441.094px" marginLeft="6.1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">BACHELOR OF SCIENCE
                                    <div className="Item-sub-heading">National University of Computer & Emgering Sciences, Islamabad
                                    </div>
                                    <div className="Item-date">2022</div>
                                </div>
                                <div className="Item-desc">
                                Courses:
                                <ul>
                                    <li>Blockchain & Cryptocurrencies</li>
                                    <li>Web Programming</li>
                                    <li>Cryptography & Data Security</li>
                                    <li>Parallel & Distributed Computing</li>
                                    <li>Data Mining</li>
                                    <li>Ethical Hacking Concepts & Practices</li>
                                    <li>Fundamentals of Malware Analysis</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Links">
                        <div className="Heading">Links</div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="30.2188px" marginLeft="6.1px" />
                            </div>
                            <div className="Item-right">
                                <span>GitHub</span>
                                <a href="https://github.com/mubashirmalik">https://github.com/mubashirmalik</a>
                            </div>
                        </div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="30.2188px" marginLeft="6.1px" />
                            </div>
                            <div className="Item-right">
                                <span>LinkedIn</span>
                                <a href="https://linkedin.com/in/mubashir0/">https://linkedin.com/in/mubashir0/</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Right-side">
                    <div className="About">
                        <div className="Heading"  style={{marginTop: "2px"}}>About Me</div>
                        <div className="Item">
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="29.2188px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Pro-summary">I am a fast learner and driven individual with the ability to adapt to any situation. I have extensive experience in Web development. I am currently working in Blockchain technology.</div>
                            </div>
                        </div>
                    </div>
                    <div className="Experience">
                        <div className="Heading">WORK experience</div>
                         <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="143.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div style={{display: "flex"}}>
                                        Software Engineer&nbsp;
                                        <div className="Item-date">
                                            | APR 2020 - FEB 2021
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        Freelancer
                                    </div>
                                </div>
                                <div className="Item-desc">
                                <ul>
                                    <li>Made various Web Applications & Custom Scripts using ReactJS, HTML5, CSS3, Python & C++.</li>
                                    <li>Successfully completed 50+ projects.</li>
                                    <li>Verify: <a href="https://www.freelancer.pk/u/mubashirmalick">mubashirmalick</a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Certifications">
                        <div className="Heading">Certifications</div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="77.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div style={{display: "flex"}}>
                                    Web Development w/ Google’s Go (golang) Programming Language&nbsp;
                                    <div className="Item-date" style={{marginLeft: "5px"}}>
                                            JUL 2022
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        Udemy
                                    </div>
                                </div>
                                <div className="Item-desc">
                                    <ul>
                                        <li>Verify using Credential ID: UC-15104a74-9b45-4422-b3dd-40e0fa9c6433</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="77.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div style={{display: "flex"}}>
                                    Learn How To Code: Google's Go (golang) Programming Language&nbsp;
                                        <div className="Item-date" style={{marginLeft: "5px"}}>
                                            JUN 2022
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        Udemy
                                    </div>
                                </div>
                                <div className="Item-desc">
                                    <ul>
                                        <li>Verify using Credential ID: UC-15104a74-9b45-4422-b3dd-40e0fa9c6433</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="77.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div style={{display: "flex"}}>
                                    Introduction to DevOps&nbsp;
                                        <div className="Item-date" style={{marginLeft: "5px"}}>
                                            APR 2022
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        Coursera, IBM
                                    </div>
                                </div>
                                <div className="Item-desc">
                                    <ul>
                                        <li>Verify using Credential ID: LYZ7CECXR48F</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        
    );
}