import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

function LinkContactAbout() {
    return (
        <div id='LinkContactAbout'>
            <Link to={"/contact"} class='linkFooter'>
                <li>Contact</li>
            </Link>
            <Link to={"/about"} class='linkFooter'>
                <li>À propos</li>
            </Link>
        </div>
    );
}

export default LinkContactAbout;