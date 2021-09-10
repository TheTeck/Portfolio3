import React from 'react';

import Banner from '../../Components/Banner/Banner';
import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProfileImage from '../../Components/ProfileImage/ProfileImage';
import Paragraph from '../../Components/Paragraph/Paragraph';
import './HomePage.scss';

export default function HomePage (props) {
    return (
        <div classname="homepage-container">
            <Banner />
            <ContentContainer>
                <div className="profile-wrapper">
                    <ProfileImage />
                    <Paragraph>
                        I am a full-stack web developer out of the San Francisco Bay Area. Some of my greatest passions in life revolve around creating beautifully designed products that people enjoy using. Recently, I have transitioned from making physical, hand-crafted instruments to software engineering, because, in the digital space, I am only limited by my creativity and skills and with enough effort anything can be achieved. Now, I am looking for a position within a team where I can help create applications that people will love to use and, hopefully, help them achieve betterment in life.
                    </Paragraph>
                </div>
            </ContentContainer>
        </div>
    )
}