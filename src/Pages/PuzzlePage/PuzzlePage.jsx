import React from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import './PuzzlePage.scss';

export default function PuzzlePage (props) {

    const links = {
        site: "https://just-puzzles.herokuapp.com/",
        github: "https://github.com/TheTeck/JustPuzzles"
    }

    return (
        <div className="puzzlepage-container">
            <Banner main="Just Puzzles" />
            <ContentContainer>
                <ProjectNav links={links} />
            </ContentContainer>
        </div>
    )
}