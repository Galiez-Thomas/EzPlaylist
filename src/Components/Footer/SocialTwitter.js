import React from 'react';
import '../../App.css';

function SocialTwitter() {
    return (
        <a id='Twitter' href="http://google.fr">
            <img class='twitter' src={require('../../Image/logoTwitter.png')} alt='Logo Twitter' />
        </a>
    );
}

export default SocialTwitter;