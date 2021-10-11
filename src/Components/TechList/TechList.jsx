import React from 'react';

import './TechList.scss';

export default function TechList (props) {

    return (
        <div className="tech-display">
            <div className="tech-container">
                {
                    props.tech.map((item, index) => {
                        return (
                            <div key={index}>{item}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}