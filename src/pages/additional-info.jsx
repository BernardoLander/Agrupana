import React, { useState } from 'react';
import { useUser } from "../context/Usuariocontext";
import { doc, updateDoc } from 'firebase/firestore';
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdditionalInfo = () => {
    const { user } = useUser();
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate(); // Get the navigate function

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Update the user's document in Firestore with the last name and phone number
            await updateDoc(doc(db, 'Usuarios', user.uid), {
                lastName: lastName,
                phone: phone,
            });

            // Navigate back to the home page
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Additional Information</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdditionalInfo;