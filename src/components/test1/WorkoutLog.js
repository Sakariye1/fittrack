import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const WorkoutLog = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Hae harjoitukset Spring Boot -backendistä
    axios.get('http://localhost:8080/api/workouts')
      .then(response => setWorkouts(response.data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h2>Workout Log</h2>
      <ul className="workout-list">
        {workouts.map((workout) => (
          <li key={workout.id}>
            <Link to={`/workout/${workout.id}`}>
              {workout.date}: {workout.exercise} - {workout.sets} sets x {workout.reps} reps
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutLog;
