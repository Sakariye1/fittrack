import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WorkoutDetails = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/workouts/${id}`)
      .then(response => setWorkout(response.data))
      .catch(error => console.error('Error fetching workout details:', error));
  }, [id]);

  if (!workout) return <div>Loading...</div>;

  return (
    <div>
      <h2>Workout Details</h2>
      <p>Exercise: {workout.exercise}</p>
      <p>Sets: {workout.sets}</p>
      <p>Reps: {workout.reps}</p>
      <p>Weight: {workout.weight} kg</p>
    </div>
  );
};

export default WorkoutDetails;
