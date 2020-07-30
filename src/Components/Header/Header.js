import React from 'react';
import '../../App.css';
import ButtonLogin from './ButtonLogin';
import ButtonHome from './ButtonHome';

function Header() {
    return (
        <div id='Header'>
            <ButtonHome />
            <ButtonLogin />
        </div>
    );
}

export default Header;