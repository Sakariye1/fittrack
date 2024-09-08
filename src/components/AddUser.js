import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { name, email };

        axios.post('http://localhost:8080/api/users', newUser)
            .then(response => {
                console.log('User added successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error adding the user!', error);
            });
    }

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default AddUser;
