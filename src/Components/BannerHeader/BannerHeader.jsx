import React from 'react';

import './BannerHeader.scss';

export default function BannerHeader (props) {
    return (
        <div className="bannerheader-container">
            <h1>{props.main}</h1>
            { 
                props.sub ? <h2>{props.sub}</h2> : <></>
            }
        </div>
    )
}