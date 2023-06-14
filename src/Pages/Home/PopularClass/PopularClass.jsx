import React from 'react';

const PopularClass = () => {

    fetch('/classes.json')
    .then(res=> res.json)
    .then(data=> console.log(data))

    return (
        <div>
            <h2 className='text-5xl text-center text-violet-800 mt-8 font-serif'>Popular Classes</h2>

            {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={class1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cricket</h2>
                        <p>Learn from the best!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={class2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Football</h2>
                        <p>Learn from the best!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={class3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Badminton</h2>
                        <p>Learn from the best!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={class4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Cycling</h2>
                        <p>Learn from the best!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={class5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Tennis</h2>
                        <p>Learn from the best!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>

                <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img src={class6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Gymnastics</h2>
                        <p>Learn from the best!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default PopularClass;