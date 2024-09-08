// WorkoutView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WorkoutView.css';

const WorkoutView = ({ id }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get(`/api/workouts/${id}/exercises`)
      .then(response => setExercises(response.data))
      .catch(error => console.error('Error fetching exercises:', error));
  }, [id]);

  return (
    <div className="workout-view">
      <h1>Exercises for Workout {id}</h1>
      <ul className="exercise-list">
        {exercises.map(exercise => (
          <li key={exercise.id}>
            {exercise.name}
            {console.log(exercise)}
          </li>
        ))}
      </ul>
      <button className="add-exercise-button"><a href={`/add-exercise?workoutId=${id}`}>Add New Exercise</a></button>
    </div>
  );
};

export default WorkoutView;
