import React from 'react';

import './Contact.scss';

export default function Contact (props) {
    return (
        <div className="contact-container">
            <div className="resume-container">
                <a href="resume.pdf" target="_blank">
                    <div className="material-icons resume-icon">description</div>
                    <div className="resume-text">Resume</div>
                </a>
            </div>
            <div className="contact-info-container">
                <p>Email: <a href="mailto:johnteckemeyer@gmail.com">johnteckemeyer@gmail.com</a></p>
                <p>GitHub: <a href="https://github.com/TheTeck" rel="noreferrer" target="_blank">github.com/TheTeck</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/john-teckemeyer/" rel="noreferrer" target="_blank">linkedin.com/in/john-teckemeyer</a></p>
            </div>
        </div>
    )
}