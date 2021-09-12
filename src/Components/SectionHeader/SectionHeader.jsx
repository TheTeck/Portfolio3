import React from 'react';

import './SectionHeader.scss';

export default function SectionHeader (props) {
    return (
        <div className="sectionheader-container">
            {
                props.active ? <div className="material-icons section-icons">remove</div>
                : <div className="material-icons section-icons">add</div>
            }
            <div className="sectionheader-title">{props.title}</div>
            
        </div>
    )
}