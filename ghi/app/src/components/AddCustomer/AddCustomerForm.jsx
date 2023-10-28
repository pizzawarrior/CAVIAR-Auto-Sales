import React, { useState } from 'react';
import axios from 'axios';

const AddCustomerForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleClick = () => {
        axios
            .post('http://localhost:8090/api/customers/', {
                first_name: firstName,
                last_name: lastName,
                address: address,
                phone_number: phoneNumber,
            })
            .then(({ data }) => {
                setFirstName('');
                setLastName('');
                setAddress('');
                setPhoneNumber('');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <label>First Name</label>
            <input
                type='text'
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />

            <label>Last Name</label>
            <input
                type='text'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />

            <label>Address</label>
            <input
                type='text'
                onChange={(e) => setAddress(e.target.value)}
                value={address}
            />

            <label>Phone Number</label>
            <input
                type='text'
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
            />

            <button onClick={() => handleClick()}>Submit</button>
        </div>
    );
};

export default AddCustomerForm;
