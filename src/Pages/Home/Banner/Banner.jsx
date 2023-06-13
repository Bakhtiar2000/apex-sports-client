import React, { useEffect, useRef } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import cricketer from '../../../../public/assets/Banner images/cricketer.jpg'
import tennis_player from '../../../../public/assets/Banner images/tennis player.jpg'
import footballer from '../../../../public/assets/Banner images/footballer.png'
import { RxResume } from 'react-icons/rx';
import './Banner.css'
import CountUp from 'react-countup';

const Banner = () => {
    const countupRef = useRef(null);
    let countUpAnim;

    useEffect(() => {
        initCountUp();
    }, []);

    async function initCountUp() {
        const countUpModule = await import('countup.js');
        countUpAnim = new countUpModule.CountUp(countupRef.current, 1000);
        if (!countUpAnim.error) {
            countUpAnim.start();
        } else {
            console.error(countUpAnim.error);
        }
    }

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className='flex gap-3 md:gap-5 p-5 sm:p-10 md:p-20'>
            <div className='flex-1 my-auto'>
                <p style={{ fontFamily: 'EB Garamond, serif' }} className='text-md sm:text-2xl md:text-4xl max-w-md '>CREATING <span className='changing-text'>WORLD-CLASS </span>CHAMPION ATHLETES</p>
                <p className='mb-3 mt-5'>We provide top-notch training and guidance in a wide range of sports disciplines. Whether you're a beginner looking to learn the basics or an elite athlete striving for greatness, our personalized coaching programs are designed to elevate your performance to new heights.</p>

                <div className='flex items-center gap-8 text-left mb-8 mt-5'>
                    <div>
                    <CountUp start={0} end={20}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <span className='text-2xl' ref={countUpRef} />
                                    <button onClick={start}><span className='text-red-500 text-2xl'>+</span></button>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-slate-400 text-xs'>YEARS OF EXPERIENCE</p>
                    </div>
                    <div>
                    <CountUp start={0} end={60}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <span className='text-2xl' ref={countUpRef} />
                                    <button onClick={start}><span className='text-red-500 text-2xl'>+</span></button>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-slate-400 text-xs'>EXPERT COACHES</p>
                    </div>
                    <div>
                        <CountUp start={0} end={140}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <span className='text-2xl' ref={countUpRef} />
                                    <button onClick={start}><span className='text-red-500 text-2xl'>+</span></button>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-slate-400 text-xs'>MEMBERS JOINED</p>
                    </div>
                </div>

                <div className='flex items-center gap-5 mx-auto'>
                    <div>
                        <button className='get-started-btn'>
                            Get started
                        </button>
                    </div>
                    <div className='ml-5 flex items-center
                     gap-2'>
                        <div className='rounded-full border-2 border-violet-900 hover:bg-violet-900 p-3'>
                            <RxResume className='text-violet-700 hover:text-violet-400' />
                        </div>
                        <p style={{ fontFamily: 'EBGaramond, serif' }} className='text-xl '>Watch Video</p>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <AutoplaySlider animation="cubeAnimation" play={true}
                    cancelOnInteraction={false}
                    interval={5000}>
                    <div data-src={cricketer} />
                    <div data-src={tennis_player} />
                    <div data-src={footballer} />
                </AutoplaySlider>
            </div>




        </div>
    );
};

export default Banner;