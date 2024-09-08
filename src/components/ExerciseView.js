import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ExerciseView.css';

const ExerciseView = () => {
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExercise = { exercise, sets, reps, weight };

    axios.post('http://localhost:8080/api/exercises', newExercise)
      .then(response => {
        navigate('/');
      })
      .catch(error => console.error('Error adding exercise:', error));
  };

  return (
    <div className="exercise-view">
      <h1>Add Exercise</h1>
      <form onSubmit={handleSubmit}>
        <label>Exercise</label>
        <input type="text" value={exercise} onChange={(e) => setExercise(e.target.value)} />

        <label>Sets</label>
        <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} />

        <label>Reps</label>
        <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />

        <label>Weight (kg)</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />

        <button type="submit">Add Exercise</button>
      </form>
    </div>
  );
};

export default ExerciseView;
