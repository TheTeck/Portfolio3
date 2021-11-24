import React from 'react';

import './ProfileImage.scss';

export default function ProfileImage (props) {
    return (
            <div id="profileimage-wrapper">
                <div id="profileimage-container">
                    <img src="headshot.png" alt="John Teckemeyer smiling into camera" />
                </div>
            </div>
    )
}