import React, { useEffect, useState } from 'react';

import useAxios from '../../../Hooks/useAxios';
import PopularInstructorBox from './PopularInstructorBox';

const PopularInstructor = () => {
    const [axiosURL] = useAxios()
    const [instructors, setInstructors] = useState([]);
    

    useEffect(() => {
        axiosURL.get('instructors?limit=6')
            .then(data => setInstructors(data.data))
    }, [])
    
    

    return (
        <div>
            <h2 className='text-5xl text-center text-violet-800 mt-8 font-serif'>Popular Instructors</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {instructors.map(instructor => <PopularInstructorBox
                    key={instructor._id}
                    instructor={instructor}
                ></PopularInstructorBox>)}
            </div>
        </div>
    );
};

export default PopularInstructor;
