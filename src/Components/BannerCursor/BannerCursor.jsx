import React from 'react';

import './BannerCursor.scss';

export default function BannerCursor (props) {

    const cursorSize = 200;

    return (
        <div
            className="cursor-aura"
            style={{
                left: props.x - cursorSize / 2,
                top: props.y - cursorSize / 2,
                opacity: props.opacity
            }}
        ></div>
    )
}