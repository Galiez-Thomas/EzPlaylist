import React from 'react';
import '../../App.css';
import ButtonLogin from './ButtonLogin';
import OtherButtonHome from './OtherButtonHome';

function OtherHeader() {
    return (
        <div id='Header'>
            <OtherButtonHome />
            <ButtonLogin />
        </div>
    );
}

export default OtherHeader;