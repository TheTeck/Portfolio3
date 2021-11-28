import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import TechListText from '../../Components/TechListText/TechListText';
import './WeatherPage.scss';

export default function PuzzlePage (props) {

    const [activeSection, setActiveSection] = useState('des');

    const links = {
        site: "https://ziipweather.herokuapp.com/",
        github: "https://github.com/TheTeck/Weather"
    }

    const tech = ['HTML', 'SCSS', 'Javascript', 'D3.js', 'React', 'Node', 'Express', 'Open Weather API', 'Geolocation DB API'];

    const description = <Paragraph><strong>Zip Weather</strong> is a site that will retrieve and display weather data for a given zipcode location. It will display the current weather, 24 hour forecasts and 7 day forecasts.</Paragraph>
    const objective = <Paragraph>The focus of this application to was two things: First, to further practice using 3rd party apis instead of using a user defined database. Second, to reinforce and see what I could accomplish in React without being burdoned with the designing of the UI (I just copied an actual website). Third objective was to utilize my new knowledge of D3.js. With it I created a line chart to visualize the change in temperature through the next 24 hours.</Paragraph>

    function handleActivateSection (section) {
        if (activeSection === section) {
            setActiveSection(null);
        } else {
            setActiveSection(section);
        }
    }

    return (
        <div className="weatherpage-container">
            <Banner main="Zip Weather" />
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
                    <img className="site-shot" src="zipweather.png" alt="Zip Weather homepage" />
                    <img className="site-shot" src="todayallweather.png" alt="All of today's weather metrics" />
                    <img className="site-shot" src="temperaturechart.png" alt="24 hour temperature line chart" />
                    <img className="site-shot" src="zipweatherhourly.png" alt="Zip Weather hourly forecast page" />
                    <img className="site-shot" src="zipweatherdays.png" alt="Zip Weather seven day forecast page" />
                </ProjectSection>
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="zipweatherapicall.png" alt="Code showing conditional api calls"/>
                    <Paragraph>For the most part, the user would enter a zipcode which would then be passed as a parameter to the API call. However, since there needs to be some kind of data displayed to the user when the application opens, and we can't wait for the user to enter a zipcode, a call will instantly be made to the backend with a value of 'local'. This is trigger a call to the Geolocation DB API to retrieve the user's current location. *This worked perfectly locally, but once the application was uploaded to a server, it seems to get the server's location.</Paragraph>
                    <img className="site-shot" src="zipweathercomponents.png" alt="Code showing component usage" />
                    <Paragraph>This is an example of how I used components to abstract out redundant code. Here, you can see there are a lot of couplings of icons with data that are styled the same, so I just put them in a reusable component.</Paragraph>
                </ProjectSection>               
            </ContentContainer>
        </div>
    )
}