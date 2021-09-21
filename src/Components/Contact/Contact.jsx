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

            </div>
        </div>
    )
}