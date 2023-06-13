import React from 'react';
import { RiTeamLine } from 'react-icons/ri';
import { BsPersonCheck, BsGraphUpArrow, BsHandThumbsUp } from 'react-icons/bs';
import './WhyChooseUs.css'
const WhyChooseUs = () => {
    return (
        <div className='mb-28 mt-10'>
            <h2 className='text-5xl text-center text-violet-800 my-8 font-serif'>Why Choose Us</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='w-60 h-80 rounded-lg border-2 p-5 flex flex-col justify-between reason'>
                    <RiTeamLine className='text-4xl text-violet-900 rounded-full border-2 border-violet-800' />
                    <h4 className='text-2xl font-semibold my-3'>Expert Coaching Team</h4>
                    <p className='text-slate-400'> Our dedicated team of experienced coaches brings a wealth of knowledge and expertise in various sports disciplines.</p>
                </div>
                <div className='w-60 h-80 rounded-lg border-2 p-5 flex flex-col justify-between reason'>
                    <BsPersonCheck className='text-4xl text-violet-900 rounded-full border-2 border-violet-800' />
                    <h4 className='text-2xl font-semibold my-3'>Tailored Approach</h4>
                    <p className='text-slate-400'>We take the time to understand your specific needs and create customized coaching programs that cater to your individual requirements.</p>
                </div>
                <div className='w-60 h-80 rounded-lg border-2 p-5 flex flex-col justify-between reason'>
                    <BsHandThumbsUp className='text-4xl text-violet-900 rounded-full border-2 border-violet-800 p-1' />
                    <h4 className='text-2xl font-semibold my-3'>Proven Results</h4>
                    <p className='text-slate-400'> Over the years, we have helped numerous athletes achieve outstanding results, from beginners to elite competitors reaching the pinnacle of their performance.</p>
                </div>
                <div className='w-60 h-80 rounded-lg border-2 p-5 flex flex-col justify-between reason'>
                    <BsGraphUpArrow className='text-4xl text-violet-900' />
                    <h4 className='text-2xl font-semibold my-3'>Holistic Development</h4>
                    <p className='text-slate-400'> Our coaching programs encompass not only technical skills but also mental resilience, emotional well-being, and strategic thinking.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
