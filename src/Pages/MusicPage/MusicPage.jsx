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
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection}>
                    <Paragraph>In the sheet music editor, the "sheet music" is made of many components (as is the way of React). In the Page components, there are Staff components. And in each Staff component, there are Measure components. When a note is written by the user on the sheet music, it begins to build a string that represents the music.</Paragraph>
                    <img className="site-shot" src="inmeasure.png" />
                    <Paragraph>In handleStaffClick function (within the Measure component), when a note is entered onto a staff, its duration and pitch is represented as a string and concatenated to the string which makes up the current measure and then lifted to the parent Staff component.</Paragraph>
                    <img className="site-shot" src="instaff.png" />
                    <Paragraph>In the updateMeasure function (within the Staff component), the measure that had been updated is written over by the string value held by the 'notes' parameter and then calls updateStaff, concatenating all the strings representing the measures of the staff and lifts the data back to the parent Page component.</Paragraph>
                    <img className="site-shot" src="inpage.png" />
                    <Paragraph>Here in the updateStaff function (within the Page component), it works much like the updateMeasure in that it updates the active Staff and concatenates the string representing with the rest of the Staves and updates the entire Page's music with a string.</Paragraph>
                </ProjectSection>                
            </ContentContainer>
        </div>
    )
}