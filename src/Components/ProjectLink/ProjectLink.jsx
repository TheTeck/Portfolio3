import React from 'react';

import './ProjectLink.scss';

export default function ProjectLink (props) {
    return (
        <div className="projectlink-container">
            <div className="projectimage-container">
                <img src={props.project.image} alt="Image of the project" />
                <div className="project-label">{props.project.name}</div>
            </div>
        </div>
    )
}