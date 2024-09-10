import React, { useState, useEffect } from 'react';
import Exercises from './Exercises'; // Adjust the path as necessary
import { exerciseOptions, fetchData } from '../utils/fetchData';

const ParentComponent = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div>
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
    </div>
  );
};

export default ParentComponent;
