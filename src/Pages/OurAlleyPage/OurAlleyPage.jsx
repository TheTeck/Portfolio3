import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import TechList from '../../Components/TechList/TechList';
import './OurAlleyPage.scss';

export default function PuzzlePage (props) {

    const [activeSection, setActiveSection] = useState(null);

    const links = {
        site: "https://ouralley.herokuapp.com/",
        github: "https://github.com/farazborjian/OurAlley"
    }

    const tech = ['HTML', 'CSS', 'Python', 'Django', 'PostgreSQL', 'Materialize'];

    const description = <Paragraph><strong>Our Alley</strong> is a social networking application that helps bring lonely dogs together by letting users search for other local dogs and propose playdates. This was a team project in which I was the scrum and api master. A major focus of mine on this project was implementing the google maps api to geolocate other nearby users.</Paragraph>
    const objective = <Paragraph>The main focus of this application in particular was to gain experience working as part of a team. We were a team of 3 people and we each took on specific roles in addition to programming our assigned tasks.</Paragraph>

    function handleActivateSection (section) {
        if (activeSection === section) {
            setActiveSection(null);
        } else {
            setActiveSection(section);
        }
    }

    return (
        <div className="ouralley-container">
            <Banner main="Our Alley" />
            <ContentContainer>
                <ProjectNav links={links} />
                <ProjectSection active={activeSection} code="des" title="Description" handleActivateSection={handleActivateSection}>
                    {description}
                    <TechList tech={tech} />
                </ProjectSection>
                <ProjectSection active={activeSection} code="obj" title="Objective" handleActivateSection={handleActivateSection}>
                    {objective}
                </ProjectSection>
                <ProjectSection active={activeSection} code="img" title="Images" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="ouralley.png" />
                    <img className="site-shot" src="ouralley_mypets.png" />
                    <img className="site-shot" src="ouralley_playdate.png" />
                    <img className="site-shot" src="ouralley_playdates.png" />
                </ProjectSection>
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection} />                
            </ContentContainer>
        </div>
    )
}