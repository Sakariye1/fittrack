// ExerciseLog.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExerciseLog.css';

const ExerciseLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('/api/logs')
      .then(response => setLogs(response.data))
      .catch(error => console.error('Error fetching logs:', error));
  }, []);

  return (
    <div className="exercise-log">
      <h1>Exercise Log</h1>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            {log.exerciseName} - {log.reps} reps
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseLog;
