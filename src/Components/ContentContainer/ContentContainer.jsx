import React from 'react';

import './ContentContainer.scss';

export default function ContentContainer (props) {
    return (
        <section className="content-container">
            {props.children}
        </section>
    )
}