import React from 'react';
import '../../App.css';

function Form() {
    return (
        <div id='Form'>
            <img class='imageQuestion' src={require('../../Image/question.png')} alt='Logo question' />
            <div class='form'>
                <p>Tu as besoin d'aide, tu veux nous donner ton avis<br />
                ou faire une réclamation ?<br />
                Contact-nous grâce à ce formulaire<br /></p>
                <form class='form'>
                    <label class='form'>
                        <input class='inputMail' type="text" name="mail" placeholder="Votre adresse mail" />
                        <textarea class='inputMessage' type="text" name="message" placeholder="Votre message" />
                    </label>
                    <input class='btnSubmitContact' type="submit" value="Soumettre" />
                </form>
            </div>
        </div>

    );
}

export default Form;