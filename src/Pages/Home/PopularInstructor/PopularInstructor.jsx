import React, { useEffect, useState } from 'react';
import './PopularInstructor.css';
import useAxios from '../../../Hooks/useAxios';

const PopularInstructor = () => {
const [axiosURL] = useAxios()
  const [instructors, setInstructors] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  axiosURL.get('instructors?limit=6')
    .then(data => setInstructors(data.data))

  const handleHover = id => {
    setHoveredId(id);
  };

  const handleLeave = () => {
    setHoveredId(null);
  };

  return (
    <div>
      <h2 className='text-5xl text-center text-violet-800 mt-8 font-serif'>Popular Instructors</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {instructors.map(instructor => (
          <div
            key={instructor._id}
            className='card mx-auto'
            onMouseEnter={() => handleHover(instructor.id)}
            onMouseLeave={handleLeave}
          >
            <img src={instructor.image} alt='Image' className={`image ${hoveredId === instructor.id ? 'darken' : ''}`} />
            <div className={`text-heading ${hoveredId === instructor.id ? 'visible' : ''}`}>
              {hoveredId === instructor.id && <h2 className='text-xl font-semibold mb-4'>{instructor.name}</h2>}
            </div>
            {hoveredId === instructor.id && (
              <div className='text'>
                <p className='text-xs text-slate-200'>{instructor.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
