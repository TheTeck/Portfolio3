import React from 'react';

import Banner from '../../Components/Banner/Banner';
import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProfileImage from '../../Components/ProfileImage/ProfileImage';
import './HomePage.scss';

export default function HomePage (props) {
    return (
        <div classname="homepage-container">
            <Banner />
            <ContentContainer>
                <ProfileImage />
            </ContentContainer>
        </div>
    )
}