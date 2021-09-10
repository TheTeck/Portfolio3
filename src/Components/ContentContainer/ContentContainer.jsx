import React from 'react';

import './ContentContainer.scss';

export default function ContentContainer (props) {
    return (
        <div className="content-container">
            {props.children}
        </div>
    )
}