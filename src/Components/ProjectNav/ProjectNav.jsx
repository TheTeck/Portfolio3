import React from 'react';

import NavLink from '../NavLink/NavLink';
import './ProjectNav.scss';

export default function ProjectNav (props) {
    return (
        <div className="projectnav-container">
            <NavLink icon="arrow_back" text="Back" link="/home" />
            <NavLink icon="web_asset" text="Site" link={props.links.site} />
            <NavLink icon="code" text="GitHub" link={props.links.github} />
        </div>
    )
}