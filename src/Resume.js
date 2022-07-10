import { React } from 'react';
import { StyledLine } from './Line.style';


import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import avatar from './images/2.jpg';

import './Resume.css'

export default function Resume() {

    const firstName = "Rehan"
    const lastName = "Maroof"
    const jobTitle = "Computer Scientist" // Headline 
    const email = "i180836@nu.edu.pk"
    const phoneNo = "+92-317-5781316"
    const address = "House No. 1005, Street 56, G-11/3 Islamabad, 44000, Pakistan"
    const links = [
        ["GitHub", "https://github.com/RehanMaroof"],
        ["LinkedIn", "https://www.linkedin.com/in/rehan-maroof-482786201/"]    
    ]
    const skills = ["Golang", "C++", "Solidity", "Python", "ReactJS", "Git & GitHub"]
    const interests = ["Football", "Cricket", "Web3"]
    const summary = "I am a fast learner and driven individual with the ability to adapt to any situation. I have extensive experience in Web development. I am currently working in MERN."// About me 
    const workExperience = [{
        jobTitle: "SOFTWARE ENGINEER",
        duration: "APR 2020 - FEB 2021",
        company: "Freelancer",
        description: [
            "Made various Web Applications & Custom Scripts using ReactJS, HTML5, CSS3, Python & C++.",
            "Successfully completed 50+ projects.",
        ],
        proof: {
            flag: 0, // set 0 if you have no link to redirect to
            text: "mubashirmalick",
            link: "https://www.freelancer.pk/u/mubashirmalick"
        }
    }]
    const certifications = [{
        title: "WEB DEVELOPMENT W/ GOOGLE’S GO (GOLANG) PROGRAMMING LANGUAGE",
        duration: "JUL 2022",
        orgranization: "Udemy",
        credentialID: "UC-15104a74-9b45-4422-b3dd-40e0fa9c6433",
        verificationLink: "https://www.udemy.com/certificate/UC-15104a74-9b45-4422-b3dd-40e0fa9c6433/",
    },
    {
        title: "LEARN HOW TO CODE: GOOGLE'S GO (GOLANG) PROGRAMMING LANGUAGE",
        duration: "JUN 2022",
        orgranization: "Udemy",
        credentialID: "UC-15104a74-9b45-4422-b3dd-40e0fa9c6433",
        verificationLink: "https://www.udemy.com/certificate/UC-15104a74-9b45-4422-b3dd-40e0fa9c6433/",
    },
    {
        title: "INTRODUCTION TO DEVOPS",
        duration: "APR 2022",
        orgranization: "Coursera, IBM",
        credentialID: "LYZ7CECXR48F",
        verificationLink: "https://www.coursera.org/account/accomplishments/verify/LYZ7CECXR48F",
    }]
    // If you want to include more than one degree, you can remove courses section to create space
    const education = [{
        degree: "BACHELOR OF SCIENCE",
        university: "NATIONAL UNIVERSITY OF COMPUTER & EMERGING SCIENCES, ISLAMABAD",
        year: "2022",
        courses: [ "Web Programming", "Cryptography & Data Security", "Digital Image Processing","Data Mining", "Ethical Hacking Concepts & Practices", "Fundamentals of Malware Analysis"
        ]
    }]
    
    const displayEducation = education.map((val) => {
        const displayCourses = val.courses.map((course) => <li>{course}</li>);
        return(
            <div className="Item">   
                <div className="Item-left">
                    <div className="Circle-bullet">
                        <div className="Inner-circle"></div>
                    </div>
                    <StyledLine height="360.094px" marginLeft="6.1px" />
                </div>
                <div className="Item-right">
                    <div className="Item-heading">{ val.degree }
                        <div className="Item-sub-heading">{ val.university }
                        </div>
                        <div className="Item-date">{ val.year }</div>
                    </div>
                    <div className="Item-desc">
                        Courses:<ul>{ displayCourses }</ul>
                    </div>
                </div>
            </div>
        );
    });
    const displayCertifications = certifications.map((val) => {
        return(
            <div className="Item">   
                <div className="Item-left">
                    <div className="Circle-bullet">
                        <div className="Inner-circle"></div>
                    </div>
                    <StyledLine height="77.094px" marginLeft="6.1px" width="1px" />
                </div>
                <div className="Item-right">
                    <div className="Item-heading">
                        <div className="Item-heading-div">{val.title}&nbsp;
                        <div className="Item-date" style={{marginLeft: "5px"}}>{val.duration}</div>
                        </div>
                        <div className="Item-sub-heading Work-company">{ val.orgranization }</div>
                    </div>
                    <div className="Item-desc">
                        <ul>
                            <li>Verify using Credential ID: <a target="_blank" rel="noreferrer" href={val.verificationLink }>{val.credentialID}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    });
    const displayWorkExperience = workExperience.map((val) => {

        const displayWorkDescription = val.description.map((desc) => {
            return(
                <li>{ desc }</li>
            );
        });

        return(
            <div className="Item">   
                <div className="Item-left">
                    <div className="Circle-bullet">
                        <div className="Inner-circle"></div>
                    </div>
                    <StyledLine height="143.094px" marginLeft="6.1px" width="1px" />
                </div>
                <div className="Item-right">
                    <div className="Item-heading">
                        <div className="Item-heading-div">{val.jobTitle}
                            <div className="Item-date">{val.duration}</div>
                        </div>
                        <div className="Item-sub-heading Work-company">{val.company}</div>
                    </div>
                    <div className="Item-desc">
                        <ul>    
                            {displayWorkDescription}
                            { val.proof.flag !== 0 ? 
                                <li>Verify at: <a href={ val.proof.link }>{ val.proof.text }</a></li> : null
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        );
    });
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
                        { displayEducation }
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
                                <div className="Pro-summary">{ summary }</div>
                            </div>
                        </div>
                    </div>
                    <div className="Experience">
                        <div className="Heading">WORK experience</div>
                        { displayWorkExperience }
                    </div>
                    <div className="Certifications">
                        <div className="Heading">Certifications</div>
                        { displayCertifications }
                    </div>
                    <div className="Projects">
                        <div className="Heading">PERSONAL PROJECTS</div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="129.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div className="Item-heading-div">
                                    DeLance &nbsp;
                                    <div className="Item-date" style={{marginLeft: "5px"}}>
                                            Jan 2022 - Present
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        Ethereum, ReactJS, Node, Solidity, IPFS
                                    </div>
                                </div>
                                <div className="Item-desc">
                                    <ul>
                                        <li>A Blockchain based decentralized freelance system.
                                            Delance provide feasible amount of fees for both clients and freelancers.
                                            A decentralized conflict resolution mechanisms.</li>
                                        <li>GitHub Repo: <a href="https://github.com/ArmishMunir/Delance-app">https://github.com/ArmishMunir/Delance-app</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="Item">   
                            <div className="Item-left">
                                <div className="Circle-bullet">
                                    <div className="Inner-circle"></div>
                                </div>
                                <StyledLine height="117.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div className="Item-heading-div">
                                    COVID-19 Classification Using CT Scan Images&nbsp;
                                        <div className="Item-date" style={{marginLeft: "5px"}}>
                                            DEC 2021
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        Python, Colab
                                    </div>
                                </div>
                                <div className="Item-desc">
                                    <ul>
                                        <li>
                                        Deep Learning techniques are based on a convolutional neural Network(CNN).
                                        </li>
                                        <li>Efficient GAN-based Chest Radiographs augmentation to diagnose coronavirus disease pneumonia.
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
                                <StyledLine height="177.094px" marginLeft="6.1px" width="1px" />
                            </div>
                            <div className="Item-right">
                                <div className="Item-heading">
                                    <div className="Item-heading-div">
                                    School Management System&nbsp;
                                        <div className="Item-date" style={{marginLeft: "5px"}}>
                                            AUG 2021 - DEC 2021
                                        </div>
                                    </div>
                                    <div className="Item-sub-heading Work-company">
                                        HTML5, CSS3, JavaScript, PHP, MYSQL
                                    </div>
                                </div>
                                <div className="Item-desc">
                                    <ul>
                                        <li>Hamarey Bachchey is a NGO with the goal to reform education for children.</li>
                                        <li>They offer weekly
classes for children below the age of 15.</li>
<li>A complete system for student after signing up stuent can register courses.</li><li>Each students’ personal information will be saved, including photos which may need to be updated
every year.</li>
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
