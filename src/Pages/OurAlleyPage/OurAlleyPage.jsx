import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import TechList from '../../Components/TechList/TechList';
import './OurAlleyPage.scss';

export default function PuzzlePage (props) {

    const [activeSection, setActiveSection] = useState('des');

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
                    <div className="tech-name">Technologies Used</div>
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
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="getlocaldogs.png" />
                    <Paragraph>One of the more complicated parts of this application that I was in charge of was the implementation of searching more local dogs. Here, depending on whether the user used an explicit location, the algorithm will use that location or the user's home address, using a helper function to convert the address to latitude and longitude coordinates. Then the function filters through all other users' dogs that have a location within 2 miles, again using a helper function to get the distance of each dog.</Paragraph>
                    <img className="site-shot" src="helperfunctions.png" />
                    <Paragraph>The first helper function, the haversine function, returns the distance between two points on the surface of the Earth. The second helper function, extract_lat_long_via_address, makes a call the the Google Maps api to get the latitude and longitude coordinates for a given address.</Paragraph>
                </ProjectSection>                
            </ContentContainer>
        </div>
    )
}