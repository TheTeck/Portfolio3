import React from 'react';
import { useHistory } from 'react-router-dom';

import './ProjectLink.scss';

export default function ProjectLink (props) {

    const history = useHistory();

    function handleProjectClick () {
        history.push(props.project.link);
    }

    return (
        <div className="projectlink-container">
            <div className="projectimage-container" onClick={handleProjectClick}>
                <img src={props.project.image} alt={props.project.alt} />
                <div className="project-label">{props.project.name}</div>
            </div>
        </div>
    )
}