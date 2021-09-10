import React from 'react';

import './ProfileImage.scss';

export default function ProfileImage (props) {
    return (
        <div className="profile-container">
            <div className="profileimage-container">
                <img src="headshot.png" alt="Image of John Teckemeyer smiling into camera" />
            </div>
            <div className="image-label">About Me</div>
        </div>
    )
}