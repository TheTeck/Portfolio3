import React from 'react';

import Banner from '../../Components/Banner/Banner';
import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProfileImage from '../../Components/ProfileImage/ProfileImage';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectLink from '../../Components/ProjectLink/ProjectLink';
import Contact from '../../Components/Contact/Contact';
import './HomePage.scss';

export default function HomePage (props) {

    const projects = {
        justpuzzles: {
            name: "Just Puzzles",
            image: "polygonpuzzle.png",
            link: "/puzzle",
            alt: "Polygonal puzzle scattered in pieces"
        },
        sheetmusic: {
            name: "Sheet Music Maker",
            image: "sheetmusic.png",
            link: "/music",
            alt: "First page of some sheet music in the editor"
        }
    }

    return (
        <div className="homepage-container">
            <Banner main="John Teckemeyer" sub="Full Stack Web Development" />
            <ContentContainer>
                <div className="section-wrapper">
                    <ProfileImage />
                    <Paragraph>
                        I am a full-stack web developer out of the San Francisco Bay Area. Some of my greatest passions in life revolve around creating beautifully designed products that people enjoy using. Recently, I have transitioned from making physical, hand-crafted instruments to software engineering, because, in the digital space, I am only limited by my creativity and skills and with enough effort anything can be achieved. Now, I am looking for a position within a team where I can help create applications that people will love to use and, hopefully, help them achieve betterment in life.
                    </Paragraph>
                </div>
            </ContentContainer>

            <Contact />

            <h1>Projects</h1>
            <ContentContainer>
                <div className="section-wrapper projects-wrapper">
                    <ProjectLink project={projects["justpuzzles"]} />
                    <ProjectLink project={projects["sheetmusic"]} />
                </div>
            </ContentContainer>
        </div>
    )
}