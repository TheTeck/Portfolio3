import React from 'react';

import './TechListText.scss';

export default function TechListText ({ tech }) {
    
    return (
        <div id="techtext-container">
        {
            tech.map(skill => {
                return <div>{skill}</div>
            })
        }
        </div>
    )
}