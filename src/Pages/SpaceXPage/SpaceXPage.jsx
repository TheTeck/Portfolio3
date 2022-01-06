import React, { useState } from 'react';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import ProjectNav from '../../Components/ProjectNav/ProjectNav';
import Banner from '../../Components/Banner/Banner';
import Paragraph from '../../Components/Paragraph/Paragraph';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import TechListText from '../../Components/TechListText/TechListText';
import './SpaceXPage.scss';

export default function SpaceXPage (props) {

    const [activeSection, setActiveSection] = useState('des');

    const links = {
        site: "https://theteck.github.io/SpaceX-Launches/",
        github: "https://github.com/TheTeck/SpaceX-Launches"
    }

    const tech = ['HTML', 'SCSS', 'Javascript', 'React', 'D3.js'];

    const description = <Paragraph><strong>SpaceX Launches</strong> is an application that presents the launch data of SpaceX to the site visitor in an accessible and intuitive way. It also presents links for each launch to an image of that launch's patch, wikipedia entry and to a video recording on YouTube.</Paragraph>
    const objective = <Paragraph>I created this application mainly to focus on my data visualization skills using D3.js. Taking data from a single API, I wanted to present it in different ways (types of charts) that would make most sense for each particular set of data.</Paragraph>

    function handleActivateSection (section) {
        if (activeSection === section) {
            setActiveSection(null);
        } else {
            setActiveSection(section);
        }
    }

    return (
        <div className="spacexpage-container">
            <Banner main="SpaceX Launches" />
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
                    <img className="site-shot" src="launches.png" alt="SpaceX Launches landing page" />
                    <img className="site-shot" src="launchdata1.png" alt="Pie chart showing makeup of launch customers and line graph showing launch frequency" />
                    <img className="site-shot" src="launchdata2.png" alt="Bar graph showing the number of failed and successful launches each year" />
                </ProjectSection>
                <ProjectSection active={activeSection} code="cod" title="Code Highlights" handleActivateSection={handleActivateSection}>
                    <img className="site-shot" src="piechart.png" alt="Code showing the creation of the ringed pie chart for the launch customers"/>
                    <Paragraph>The portion of code shows the creation of the ringed pie chart for the launch customers. The data is first extracted into pieData and as each datum is iterated over, the shape of each segment is created with the d3.arc function. The color is simply a color fill with a d3 color interpolation function.</Paragraph>
                   </ProjectSection>               
            </ContentContainer>
        </div>
    )
}