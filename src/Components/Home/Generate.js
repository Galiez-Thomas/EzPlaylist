import React from 'react';
import '../../App.css';

function Generate() {
    return (
        <div id="Generate">
            <input class='inputGenerate' type='text' placeholder='Saisis le titre de ton morceau préféré' />
            <button type="button" class="btnGenerate">Générer</button>
        </div>
    );
}

export default Generate; 