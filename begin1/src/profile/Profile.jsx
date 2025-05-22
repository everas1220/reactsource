import React, { useState } from 'react';

const Profile = ({ name }) => {
    const [status, setStatus] = useState("Available");
    console.log("Profile Rndered");

    return (
        <div>
            <h3>Name : {name}</h3>
            <h3>Status : {status} </h3>
            <button onClick={() => setStatus('Away')}>Set Away</button>
            <button onClick={() => setStatus('Available')}>Set Available</button>
        </div>
    );
};

export default Profile;