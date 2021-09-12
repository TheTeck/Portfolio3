import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import './PuzzlePage.scss';

export default function PuzzlePage (props) {

    const [activeSection, setActiveSection] = useState(null);

    const links = {
        site: "https://just-puzzles.herokuapp.com/",
        github: "https://github.com/TheTeck/JustPuzzles"
    }

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
                <ProjectSection active={activeSection === "des"} code="des" title="Description" handleActivateSection={handleActivateSection}>
                    <div>This is a test fjdowiejf owiejf lksjf owi ejf kjsowie jflks odkfjlskdjfowijef s owee dow we </div>
                </ProjectSection>
                <ProjectSection active={activeSection === "obj"} code="obj" title="Objective" handleActivateSection={handleActivateSection} />
                <ProjectSection active={activeSection === "cod"} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection} />
            </ContentContainer>
        </div>
    )
}