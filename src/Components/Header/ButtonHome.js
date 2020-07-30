import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";

function ButtonHome() {
    return (
        <Link to={"/"} id='logo'>
            <img  class='logo' src={require('../../Image/logoEZ.png')} alt='logo' />
        </Link>
    );
}

export default ButtonHome; 