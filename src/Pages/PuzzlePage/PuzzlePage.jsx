import React from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import './PuzzlePage.scss';

export default function PuzzlePage (props) {

    const links = {
        site: "https://just-puzzles.herokuapp.com/",
        github: "https://github.com/TheTeck/JustPuzzles"
    }

    return (
        <div className="puzzlepage-container">
            <ContentContainer>
                <h1>Just Puzzles</h1>
                <ProjectNav links={links} />
            </ContentContainer>
        </div>
    )
}