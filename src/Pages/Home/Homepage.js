import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Democard from './Democard';
import DemoReview from './DemoReview';
import Footer from './Footer';
import Mill from './Mill';
import Tools from './Tools';

const Homepage = () => {









    return (
        <div className=''>
            <Mill></Mill>
            <Democard></Democard>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <DemoReview></DemoReview>

            <Banner></Banner>

            <Footer></Footer>
        </div>
    );
};

export default Homepage;