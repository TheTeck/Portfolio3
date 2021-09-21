import React from 'react';

import './Contact.scss';

export default function Contact (props) {
    return (
        <a className="resume-container" href="resume.pdf" target="_blank">
            <div className="material-icons resume-icon">description</div>
            <div className="resume-text">Resume</div>
        </a>
    )
}