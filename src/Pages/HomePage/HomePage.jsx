import React from 'react';

import Banner from '../../Components/Banner/Banner';
import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProfileImage from '../../Components/ProfileImage/ProfileImage';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectLink from '../../Components/ProjectLink/ProjectLink';
import Contact from '../../Components/Contact/Contact';
import TechList from '../../Components/TechList/TechList';
import './HomePage.scss';

export default function HomePage (props) {

    
    const tech = {
        nodes: [
            { name: 'Sass', category: 'library', level: 5 },
            { name: 'HTML', category: 'style', level: 5 },
            { name: 'CSS', category: 'style', level: 5 },
            { name: 'Javascript', category: 'language', level: 5 },
            { name: 'React', category: 'framework', level: 5 },
            { name: 'Algorithms', category: 'other', level: 4 },
            { name: 'RESTful APIs', category: 'other', level: 5 },
            { name: 'Express', category: 'framework', level: 4 },
            { name: 'MongoDB', category: 'database', level: 4 },
            { name: 'Node', category: 'other', level: 4 },
            { name: 'Git/GitHub', category: 'other', level: 4 },
            { name: 'D3', category: 'library', level: 4 },
            { name: 'Data Visualization', category: 'other', level: 4 },
            { name: 'Typescript', category: 'language', level: 3 },
            { name: 'Ruby', category: 'language', level: 2 },
            { name: 'Python', category: 'language', level: 2 },
            { name: 'Django', category: 'framework', level: 1 },
            { name: 'PostgreSQL', category: 'database', level: 1 }
        ]
    }

    const projects = {
        zipWeather: {
            name: "Zip Weather",
            image: "zipweather.png",
            link: "/weather",
            alt: "Weather data for today"
        },
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
        },
        ouralley: {
            name: "Our Alley",
            image: "ouralley_playdates.png",
            link: "/ouralley",
            alt: "A list of playdates, each with all the dogs going listed"
        },
        minesweeper: {
            name: "Minesweeper",
            image: "minesweeper.png",
            link: "/minesweeper",
            alt: "An example of the game, Minesweeper, with some cells exposed"
        }
    }

    return (
        <div className="homepage-container">
            <Banner main="John Teckemeyer" sub="Full Stack Web Developer" />
            <ContentContainer>
                <div className="section-wrapper">
                    <ProfileImage />
                    <div id="about-me-paragraph">
                        <div id="paragraph-backing"></div>
                        <Paragraph>
                            I am a full-stack web developer out of the San Francisco Bay Area. Some of my greatest passions in life revolve around creating beautifully designed products that people enjoy using. Recently, I have transitioned from making physical, hand-crafted instruments to software engineering, because, in the digital space, I am only limited by my creativity and skills. I truly believe with enough effort anything can be achieved. Now, I am looking for a position within a team where I can help create applications that people will love to use and hopefully help them achieve betterment in life.
                        </Paragraph>
                    </div>
                </div>
            </ContentContainer>

            <div className="skills-label">Technical Skills</div>
            <div className="skill-wrapper">
                <TechList tech={tech} />
            </div>

            <Contact />

            <h1>Projects</h1>
            <ContentContainer>
                <div className="section-wrapper projects-wrapper">
                    <ProjectLink project={projects["zipWeather"]} />
                    <ProjectLink project={projects["sheetmusic"]} />
                    <ProjectLink project={projects["ouralley"]} />
                    <ProjectLink project={projects["justpuzzles"]} />
                    <ProjectLink project={projects["minesweeper"]} />
                </div>
            </ContentContainer>
        </div>
    )
}