import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import TechListText from '../../Components/TechListText/TechListText';
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
                    <TechListText tech={tech} />
                </ProjectSection>
                <ProjectSection active={activeSection} code="obj" title="Objective" handleActivateSection={handleActivateSection}>
                    {objective}
                </ProjectSection>
                <ProjectSection active={activeSection} code="img" title="Images" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="ouralley.png" alt="Login or signup page" />
                    <img className="site-shot" src="ouralley_mypets.png" alt="All the user's pets" />
                    <img className="site-shot" src="ouralley_playdate.png" alt="Creating a playdate to add dogs. Also shows dogs invited." />
                    <img className="site-shot" src="ouralley_playdates.png" alt="List of all the playdates with all the information displayed" />
                </ProjectSection>
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="getlocaldogs.png" alt="Code using helper functions to locate the user and surrounding local dogs" />
                    <Paragraph>One of the more complicated parts of this application that I was in charge of was the implementation of searching more local dogs. Here, depending on whether the user used an explicit location, the algorithm will use that location or the user's home address, using a helper function to convert the address to latitude and longitude coordinates. Then the function filters through all other users' dogs that have a location within 2 miles, again using a helper function to get the distance of each dog.</Paragraph>
                    <img className="site-shot" src="helperfunctions.png" alt="Code that helps with getting latitude and longitude coordinates from an address and finding the distance between two point on Earth." />
                    <Paragraph>The first helper function, the haversine function, returns the distance between two points on the surface of the Earth. The second helper function, extract_lat_long_via_address, makes a call the the Google Maps api to get the latitude and longitude coordinates for a given address.</Paragraph>
                </ProjectSection>                
            </ContentContainer>
        </div>
    )
}