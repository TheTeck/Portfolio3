import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import TechListText from '../../Components/TechListText/TechListText';
import './MinesweeperPage.scss';

export default function MinesweeperPage (props) {

    const [activeSection, setActiveSection] = useState('des');

    const links = {
        site: "https://TheTeck.github.io/Minesweeper2",
        github: "https://github.com/TheTeck/Minesweeper2"
    }

    const tech = ['Javascript', 'React', 'Sass'];

    const description = <Paragraph><strong>Minesweeper</strong> is a single-player game in which the objective is to clear a rectangular grid of cells by avoiding those with mines and revealing all empty cells. Any empty cell can show a number indicating the quantity of mines surrounding it. It is with these numbers that the player can use logic to deduce the locations of the mines. The game ends when either the player reveals a mine or has cleared all empty cells.</Paragraph>
    const objective = <Paragraph>Minesweeper was my first project I developed in my full-stack bootcamp. It was done with HTML, CSS and Javascript and I simply wanted to recreate it using the React framework as a practice in total refactoring of the code.</Paragraph>

    function handleActivateSection (section) {
        if (activeSection === section) {
            setActiveSection(null);
        } else {
            setActiveSection(section);
        }
    }

    return (
        <div className="minesweeperpage-container">
            <Banner main="Minesweeper" />
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
                    <img className="site-shot" src="minesweeper.png" alt="The game Minesweeper in an 80's retro style" />
                </ProjectSection>
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="creategame.png" alt="Code showing the creation of the game board" />
                    <Paragraph>Every time a new game is started, a new array is created that is filled with instances of the CellData class. The CellData class has most instance variables starting with default values, but then each instance is supplied a value created by the functions populateBombs and popoulateNumbers.</Paragraph>
                    <img className="site-shot" src="exposecells.png" alt="Code showing recursive functionality to expose more of the game board" />
                    <Paragraph>When a user left-clicks on a cell, that cell becomes exposed. If the cell is not empty, such as a number or bomb, then the exposeMore function is done. However, if the cell is empty, the function is going to recursively call itself for each cell that surrounds it, if they are not already exposed.</Paragraph>
                </ProjectSection>               
            </ContentContainer>
        </div>
    )
}