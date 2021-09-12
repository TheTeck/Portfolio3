import React from 'react';

import SectionHeader from '../SectionHeader/SectionHeader';
import './ProjectSection.scss';

export default function ProjectSection (props) {

    function handleSectionClick () {
        props.handleActivateSection(props.code);
    }

    return (
        <div className="section-container" onClick={handleSectionClick}>
            <SectionHeader title={props.title} active={props.active} />
            <div 
                className="section-content-container"
                style={props.active ? {height: "100%"} : {height: "0px"}}
            >
                <div className="section-content">{props.children}</div>
            </div>
        </div>
    )
}