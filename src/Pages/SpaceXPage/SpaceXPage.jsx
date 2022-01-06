import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import TechListText from '../../Components/TechListText/TechListText';
import './SpaceXPage.scss';

export default function SpaceXPage (props) {

    const [activeSection, setActiveSection] = useState('des');

    const links = {
        site: "https://theteck.github.io/SpaceX-Launches/",
        github: "https://github.com/TheTeck/SpaceX-Launches"
    }

    const tech = ['HTML', 'SCSS', 'Javascript', 'React', 'D3.js'];

    const description = <Paragraph><strong>Fireside</strong> is an application created with the intention to bridge the age gap and create intergenerational friendships through direct communication.</Paragraph>
    const objective = <Paragraph>This was the winning project for a hackathon which the prompt was to create an app that would help elderly people during the holidays. Fireside is an app that will give elderly people (who are often isolated and lonely) a safe space to connect to people of younger generations and share stores or ideas and build genuine, long-lasting relationships.</Paragraph>

    function handleActivateSection (section) {
        if (activeSection === section) {
            setActiveSection(null);
        } else {
            setActiveSection(section);
        }
    }

    return (
        <div className="spacexpage-container">
            <Banner main="SpaceX Launches" />
            <ContentContainer>
                <ProjectNav links={links} />
                <ProjectSection active={activeSection} code="des" title="Description" handleActivateSection={handleActivateSection}>
                    {description}
                    <div className="tech-name">Technologies Used</div>
                    <TechListText tech={tech} />
                </ProjectSection>
                <ProjectSection active={activeSection} code="obj" title="Objective" handleActivateSection={handleActivateSection}>
                    {objective}
                </ProjectSection>
                <ProjectSection active={activeSection} code="img" title="Images" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="firesidemobilehome.png" alt="Fireside landing page" />
                    <img className="site-shot" src="onboardingshot3.png" alt="Select all wanted age groups" />
                    <img className="site-shot" src="onboardingshot4.png" alt="What the user can offer" />
                    <img className="site-shot" src="viewingmessages.png" alt="All messages between two users" />
                </ProjectSection>
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="datamodels.png" alt="Code showing the user schema"/>
                    <Paragraph>The app is pretty simple and we only needed to make a user schema for the main data model. In it are a few nested schemas to model the data found in the user schema.</Paragraph>
                   </ProjectSection>               
            </ContentContainer>
        </div>
    )
}