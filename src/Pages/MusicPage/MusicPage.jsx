import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import TechList from '../../Components/TechList/TechList';
import './MusicPage.scss';

export default function MusicPage (props) {

    const [activeSection, setActiveSection] = useState(null);

    const links = {
        site: "https://sheetmusicmaker.herokuapp.com",
        github: "https://github.com/TheTeck/Sheet-Music-Maker"
    }

    const tech = ['HTML', 'CSS', 'Javascript', 'React', 'Node', 'Express', 'MongoDB', 'AWS S3'];

    const description = <Paragraph><strong>Sheet Music Maker</strong> is a sheet music editing application with a community aspect to it. A user can share their works with any other user that follows them and vice versa. This project was done over the course of one week and in that time I was only able to get the editor to allow the input of just quarter notes and their deletion from the staves.</Paragraph>
    const objective = <Paragraph>This application was my final project for my full-stack bootcamp and was made to showcase my collective skills learned up to that point. The main focus of it's development was with the front end, using React.</Paragraph>

    function handleActivateSection (section) {
        if (activeSection === section) {
            setActiveSection(null);
        } else {
            setActiveSection(section);
        }
    }

    return (
        <div className="musicpage-container">
            <Banner main="Sheet Music Maker" />
            <ContentContainer>
                <ProjectNav links={links} />
                <ProjectSection active={activeSection} code="des" title="Description" handleActivateSection={handleActivateSection}>
                    {description}
                    <div className="tech-name">Technologies Used</div>
                    <TechList tech={tech} />
                </ProjectSection>
                <ProjectSection active={activeSection} code="obj" title="Objective" handleActivateSection={handleActivateSection}>
                    {objective}
                </ProjectSection>
                <ProjectSection active={activeSection} code="img" title="Images" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="musiclandingpage.png" />
                    <img className="site-shot" src="musichomepage.png" />
                    <img className="site-shot" src="musicopusindexpage.png" />
                    <img className="site-shot" src="musiceditopuspage.png" />
                </ProjectSection>
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection} />                
            </ContentContainer>
        </div>
    )
}