import React from 'react';
import '../../App.css';
import Header from '../Header/Header';
import Generate from './Generate';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div class="contain">
            <Header />
            <Generate />
            <Footer />
        </div>
    );
}

export default Home; 