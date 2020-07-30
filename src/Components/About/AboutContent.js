import React from 'react';
import '../../App.css';

function AboutContent() {
    return (
        <div id="AboutContent">
            <img class='imageAbout' src={require('../../Image/logoEZ.png')} alt='Logo EzPlaylist' />
            <div class='layoutText'>
                <p class='titleContent'>EZPlaylist c'est quoi ?</p>
                <p class='content'>Envie de créer une nouvelle playlist YouTube, découvrir de nouvelles chansons<br/>
                dans la même veine que ce titre sur lequel vous venez de flasher ?<br/>
                Un jeu d’enfant avec Ez Playlist, entrer le nom du morceau en question, et<br/>
                c’est parti !<br/><br/>

                Créer en 2020 par un développeur web junior au cours de sa formation.<br/><br/>

                Il a eu cette idée car il adore écouter du bon son<br/>
                et en découvrir de nouveaux, il a donc voulu vous partager sa passion pour<br/>
                la musique en vous permettant de générer des playlists automatiquement<br/>
                en fonction de vos goûts !</p>
            </div>
        </div>
    );
}

export default AboutContent; 