import React, { useEffect, useRef } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import cricketer from '/assets/Banner images/cricketer.jpg'
import tennis_player from '/assets/Banner images/tennis player.jpg'
import footballer from '/assets/Banner images/footballer.png'
import { RxResume } from 'react-icons/rx';
import './Banner.css'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';


const Banner = ({ startTour }) => {
    const countUpRef = useRef(null);

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div className='flex flex-col lg:flex-row gap-3 md:gap-5 px-2 sm:p-10 md:p-20 pt-20 sm:pt-24 md:pt-28'>
            <dialog  id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <div className="modal-action">
                        <iframe
                            className="responsive-iframe"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/-DwAVMDPUYk"
                            title="YouTube Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <div className='flex-1 my-auto'>
                <p style={{ fontFamily: 'EB Garamond, serif' }} className='text-2xl md:text-4xl max-w-md '>CREATING <span className='changing-text'>WORLD-CLASS </span>CHAMPION ATHLETES</p>
                <p className='mb-3 mt-5 text-sm md:text-base'>We provide top-notch training and guidance in a wide range of sports disciplines. Whether you're a beginner looking to learn the basics or an elite athlete striving for greatness, our personalized coaching programs are designed to elevate your performance to new heights.</p>

                <div className='flex items-center gap-8 text-left mb-8 mt-5'>
                    <div>
                        <CountUp start={0} end={20} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className='text-2xl' ref={countUpRef} />
                                    <span className='text-red-500 text-2xl'>+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-slate-400 text-xs'>YEARS OF EXPERIENCE</p>
                    </div>
                    <div>
                        <CountUp start={0} end={60} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className='text-2xl' ref={countUpRef} />
                                    <span className='text-red-500 text-2xl'>+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-slate-400 text-xs'>EXPERT COACHES</p>
                    </div>
                    <div>
                        <CountUp start={0} end={140} delay={0}>
                            {({ countUpRef }) => (
                                <div>
                                    <span className='text-2xl' ref={countUpRef} />
                                    <span className='text-red-500 text-2xl'>+</span>
                                </div>
                            )}
                        </CountUp>
                        <p className='text-slate-400 text-xs'>MEMBERS JOINED</p>
                    </div>
                </div>

                <div className='flex items-center gap-5 mx-auto'>
                    <div>
                        <button onClick={startTour} className='get-started-btn '>
                            Get started
                        </button>
                    </div>
                    <div className='ml-5 flex items-center
                     gap-2'>
                        <div className='rounded-full border-2 border-violet-900 hover:bg-violet-900 p-3 banner-video' onClick={() => window.my_modal_1.showModal()}>
                            <RxResume className='text-violet-700 hover:text-violet-400' />
                        </div>
                        <p style={{ fontFamily: 'EBGaramond, serif' }} className='text-xl '>Watch Video</p>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <AutoplaySlider animation="cubeAnimation" play={true}
                    autoplay={true}
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