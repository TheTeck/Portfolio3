import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import TechList from '../../Components/TechList/TechList';
import './PuzzlePage.scss';

export default function PuzzlePage (props) {

    const [activeSection, setActiveSection] = useState(null);

    const links = {
        site: "https://just-puzzles.herokuapp.com/",
        github: "https://github.com/TheTeck/JustPuzzles"
    }

    const tech = ['HTML', 'SCSS', 'Javascript', 'React', 'Node', 'MongoDB', 'AWS S3'];

    const description = <Paragraph><strong>Just Puzzles</strong> is an online source for puzzles that takes an image and breaks it up into the number of pieces and piece shape specified by the user. As the admin, I can upload many images ahead of time and have them released upon the date given to each image for a hands-off daily update. The puzzle mechanics and image selections were designed to create a enjoyable, relaxing and satisfying user experience.</Paragraph>
    const objective = <Paragraph>The focus of this application was to develop my CSS skills as well as work with more complex algorithms than normally found in front end development.</Paragraph>

    function handleActivateSection (section) {
        if (activeSection === section) {
            setActiveSection(null);
        } else {
            setActiveSection(section);
        }
    }

    return (
        <div className="puzzlepage-container">
            <Banner main="Just Puzzles" />
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
                    <img className="site-shot" src="puzzles_homepage.png" />
                    <img className="site-shot" src="puzzles_options.png" />
                    <img className="site-shot" src="puzzles_tile.png" />
                    <img className="site-shot" src="polygonpuzzle.png" />
                </ProjectSection>
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection} />                
            </ContentContainer>
        </div>
    )
}