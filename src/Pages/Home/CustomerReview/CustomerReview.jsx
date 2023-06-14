import React, { useState, useEffect } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CustomerReview = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: 'John Doe',
            comment: 'Great coaching and fantastic facilities! I saw significant improvement in my game after joining.',
            image: '/assets/Customers/customer-1.png',
            rating: 4.2,
            job: 'Cricketer'
        },
        {
            id: 2,
            name: 'Jane Smith',
            comment: 'The coaches at Apex Sports are amazing. They are supportive, knowledgeable, and really push you to be your best.',
            image: '/assets/Customers/customer-2.png',
            rating: 4.5,
            job: 'Student'
        },
        {
            id: 3,
            name: 'Mike Johnson',
            comment: 'I highly recommend Apex Sports for anyone looking to take their sports skills to the next level. The coaching is top-notch!',
            image: '/assets/Customers/customer-3.png',
            rating: 4.4,
            job: 'Businessman'
        },
        {
            id: 4,
            name: 'Andrew Thompson',
            comment: 'Joining Apex Sports was the best decision I made for my athletic development. The personalized coaching has been invaluable.',
            image: '/assets/Customers/customer-4.png',
            rating: 4.6,
            job: 'Footballer'
        },
    ]);

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        // Auto swipe reviews every 5 seconds
        const timer = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [reviews.length]);

    const currentReview = reviews[currentReviewIndex];
    const nextReview = reviews[(currentReviewIndex + 1) % reviews.length];

    return (
        <div className="customer-review-section">
            <h2 className='text-5xl text-center text-violet-800 my-8 font-serif'>What they say about us</h2>

            <div className="flex justify-center items-stretch gap-3 md:gap-8 mb-10 max-w-4xl mx-auto">


                <div className="bg-violet-100 rounded-lg py-8 px-5 w-full">
                    <div className="review-content">
                        <p className='mb-3 italic text-slate-950'>{currentReview.comment}</p>
                        <Rating style={{ maxWidth: 100 }} value={Math.round(currentReview.rating || 0)} readOnly />
                        <div className='flex gap-5 items-center mt-5'>
                            <div className="review-image">
                                <img className='w-12 rounded-full' src={currentReview.image} alt={currentReview.name} />
                            </div>
                            <div>
                                <h3 className='font-semibold text-xl text-slate-950'>{currentReview.name}</h3>
                                <p className='text-sm text-slate-400'>{currentReview.job}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-violet-100 rounded-lg py-8 px-5 w-full">
                    <div className="review-content">
                        <p className='mb-3 italic text-slate-950'>{nextReview.comment}</p>
                        <Rating style={{ maxWidth: 100 }} value={Math.round(nextReview.rating || 0)} readOnly />
                        <div className='flex gap-5 items-center mt-5'>
                            <div className="review-image">
                                <img className='w-12 rounded-full' src={nextReview.image} alt={nextReview.name} />
                            </div>
                            <div>
                                <h3 className='font-semibold text-xl text-slate-950'>{nextReview.name}</h3>
                                <p className='text-sm text-slate-400'>{nextReview.job}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
