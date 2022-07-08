import { React } from 'react';
import { StyledLine } from './Line.style';


import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import avatar from './images/2.jpg';

import './Resume.css'

export default function Resume() {

    const firstName = "Mubashir"
    const lastName = "AhMed"
    const jobTitle = "Computer Scientist" // Headline 
    const email = "i180481@nu.edu.pk"
    const phoneNo = "+92-317-5384929"
    const address = "House No. 1005, Street 56, G-11/3 Islamabad, 44000, Pakistan"
    const links = [
        ["GitHub", "https://github.com/mubashirmalik"],
        ["LinkedIn", "https://linkedin.com/in/mubashir0/"]    
    ]
    const skills = ["Golang", "C++", "Solidity", "PHP", "ReactJS", "Git & GitHub"]
    const interests = ["Dota", "Cricket", "Web3"]
    
    const displayLinks = links.map((val, idx) => {
        return (
            <div className="Item">   
                <div className="Item-left">
                    <div className="Circle-bullet">
                        <div className="Inner-circle"></div>
                    </div>
                    <StyledLine height="30.2188px" marginLeft="6.1px" />
                </div>
                <div className="Item-right">
                    <span>{val[0]}</span>
                    <a target="_blank" rel="noreferrer" href={val[1]}>{val[1]}</a>
                </div>
            </div>
        );
    });

    const displayInterests = interests.map((val) => {
        return (<div className="Item">   
            <div className="Item-left">
                <div className="Circle-bullet">
                    <div className="Inner-circle"></div>
                </div>
            </div>
            <div className="Item-right">
                <span>{val}</span>
            </div>
        </div>);
    });
    const displaySkills = skills.map((val) => {
        return (<div className="Item">   
            <div className="Item-left">
                <div className="Circle-bullet">
                    <div className="Inner-circle"></div>
                </div>
            </div>
            <div className="Item-right">
                <span>{val}</span>
            </div>
        </div>);
    });


    return(
        <div className="Resume">
            <StyledLine height="62px" />
            <div className="Resume-header">
                <div className="Bio">
                    <div className="First-name">{firstName}</div>
                    <div className="Last-name">{lastName}</div>
                    <div className="Job-title">
                        <div className="Circle-filled"></div>
                        <div>{jobTitle}</div>
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
                            <span>{address}</span>
                        </div>
                        <div>
                            <PhoneIcon fontSize="small"  sx={{ color: "#3e3e3e" }}/>
                            <span>{phoneNo}</span>
                        </div>
                        <div>
                            <MailIcon fontSize="small" sx={{ color: "#3e3e3e" }}/>
                            <span>{email}</span>
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
                        {displayLinks}           
                    </div>
                    <div className="Skills">
                        <div className="Heading">Skills</div>
                        {displaySkills}
                    </div>
                    <div className="Interests">
                        <div className="Heading">Interests</div>
                        {displayInterests}
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
                                        <li>Verify using Credential ID: <a target="_blank" rel="noreferrer" href="https://www.udemy.com/certificate/UC-15104a74-9b45-4422-b3dd-40e0fa9c6433/">UC-15104a74-9b45-4422-b3dd-40e0fa9c6433</a></li>
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
                                        <li>Verify using Credential ID: <a target="_blank" rel="noreferrer" href="https://www.udemy.com/certificate/UC-15104a74-9b45-4422-b3dd-40e0fa9c6433/">UC-15104a74-9b45-4422-b3dd-40e0fa9c6433</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="67.094px" marginLeft="6.1px" width="1px" />
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
                                        <li>Verify using Credential ID: <a target="_blank" rel="noreferrer" href="https://www.coursera.org/account/accomplishments/verify/LYZ7CECXR48F">LYZ7CECXR48F</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Projects">
                        <div className="Heading">PERSONAL PROJECTS</div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="117.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div style={{display: "flex"}}>
                                    P2CHDWallet (R&D)&nbsp;
                                    <div className="Item-date" style={{marginLeft: "5px"}}>
                                            AUG 2021 - JUN 2022
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        Ethereum, ReactJS, Node, Infura
                                    </div>
                                </div>
                                <div className="Item-desc">
                                    <ul>
                                        <li>A Hierarchical Deterministic (HD) Ethereum wallet based on electrum protocol for Bitcoin.</li>
                                        <li>GitHub Repo: <a href="https://github.com/MubashirMalik/F21-40-R-HDWallet">https://github.com/MubashirMalik/F21-40-R-HDWallet</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="177.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div style={{display: "flex"}}>
                                    Smart Shares&nbsp;
                                        <div className="Item-date" style={{marginLeft: "5px"}}>
                                            DEC 2021
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        Solidity, ReactJS, NodeJS, Ganache, Truffle, MetaMask
                                    </div>
                                </div>
                                <div className="Item-desc">
                                    <ul>
                                        <li>
                                            DApp that allows buying and selling shares of Assets using Smart Contract. An asset can be any thing; from a company shares, a car to a NFT.
                                        </li>
                                        <li>Ensures shares being sold and bought are the actual shares on the chain and not fraud by dealers. Gas fee for buying shares is lower as compared to the real life cut of dealers along with ease of use and anonymity.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="122.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div style={{display: "flex"}}>
                                    NetArchives&nbsp;
                                        <div className="Item-date" style={{marginLeft: "5px"}}>
                                            JUN 2019 - FEB 2022
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        HTML5, CSS3, JavaScript, PHP, MYSQL, GSC
                                    </div>
                                </div>
                                <div className="Item-desc">
                                    <ul>
                                        <li>An educational website aiming to help students prepare for their entry tests and descriptive exams for various admissions in reputable institutes.</li>
                                        <li>Ranked No.1 on Google for various search terms.</li>
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