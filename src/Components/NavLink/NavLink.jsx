import React from 'react';
import { useHistory } from 'react-router-dom';

import './NavLink.scss';

export default function NavLink (props) {

    const history = useHistory();

    function handleLinkClick () {
        if (props.link === "/home")
            history.push(props.link);
    }

    return (
        <>
            {
                props.link === "/home" ? 
                    <button className="nav-back" onClick={handleLinkClick}>
                        <div className="material-icons custom-icon">{props.icon}</div>
                        <div className="link-text">{props.text}</div>
                    </button>
                :
                    <a  className="nav-link" href={props.link} rel="noreferrer" target="_blank">
                        <div className="material-icons custom-icon">{props.icon}</div>
                        <div className="link-text">{props.text}</div>
                    </a>
            }
        </>
    )
}