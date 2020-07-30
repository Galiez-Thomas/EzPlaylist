import React from 'react';
import '../../App.css';
import LinkContactAbout from './LinkContactAbout';
import SocialFB from './SocialFB';
import SocialTwitter from './SocialTwitter';

function Footer() {
    return (
        <div id='Footer'>
            <LinkContactAbout />
            <div id='Social'>
                <SocialFB />
                <SocialTwitter />
            </div>
        </div>
    );
}

export default Footer; 