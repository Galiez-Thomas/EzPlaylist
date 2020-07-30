import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

function OtherButtonHome() {
    return (
        <Link to={"/"}>
            <button type="button" class="otherBtnHome">Acceuil</button>
        </Link>
    );
}

export default OtherButtonHome; 