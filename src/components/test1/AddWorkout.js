import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddWorkout = () => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newWorkout = { exercise, sets, reps, weight };

    // Lähetä POST-pyyntö backendille
    axios.post('http://localhost:8080/api/workouts', newWorkout)
      .then(response => {
        console.log('Workout added:', response.data);
        navigate('/');
      })
      .catch(error => console.error('Error adding workout:', error));
  };

  return (
    <div>
      <h2>Add Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>Exercise</label>
        <input type="text" value={exercise} onChange={(e) => setExercise(e.target.value)} required />
        
        <label>Sets</label>
        <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} required />
        
        <label>Reps</label>
        <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} required />
        
        <label>Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;
