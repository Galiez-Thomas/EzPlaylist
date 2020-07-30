import React from 'react';
import '../../App.css';
import OtherHeader from '../Header/OtherHeader';
import Footer from '../Footer/Footer';
import AboutContent from './AboutContent';

function About() {
    return (
        <div class="contain">
            <OtherHeader />
            <AboutContent />
            <Footer />
        </div>
    );
}

export default About; 