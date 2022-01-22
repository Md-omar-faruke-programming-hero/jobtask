import React from 'react';
import Artical from '../Artical/Artical';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OurService from '../OurService/OurService';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurService></OurService>
            <Body></Body>
            <Review></Review>
            <Artical></Artical>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;