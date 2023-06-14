import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import JoinUs from '../JoinUs/JoinUs';
import CustomerReview from '../CustomerReview/CustomerReview';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto px-2'>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <PopularClass></PopularClass>
            <JoinUs></JoinUs>
            <PopularInstructor></PopularInstructor>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;