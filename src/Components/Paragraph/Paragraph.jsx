import React from 'react';

import './Paragraph.scss';

export default function Paragraph (props) {
    return (
        <div className="paragraph-container">
            {props.children}
        </div>
    )
}