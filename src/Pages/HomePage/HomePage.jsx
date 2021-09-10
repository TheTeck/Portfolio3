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
                        I AM A FULL-STACK WEB DEVELOPER OUT OF THE SAN FRANCISCO BAY AREA - DETERMINED TO BRING UNIQUE EXPERIENCES FOR USERS THROUGH OUT-OF-THE-BOX SOLUTIONS. WITH A BACKGROUND IN MUSIC COMPOSITION AND HANDCRAFTING CLASSICAL GUITARS, I STRIVE TO IMPLEMENT AS MUCH ARTISTRY IN MY PROJECTS AS I CAN.
                    </Paragraph>
                </div>
            </ContentContainer>
        </div>
    )
}