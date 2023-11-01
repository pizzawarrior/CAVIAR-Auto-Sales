import React, { useState } from 'react';
import axios from 'axios';
import { TechDetails } from './style';
import Button from '../Button/Button';
import { ButtonStyle } from '../Button/style';
import { ModalContainer } from '../../pages/Sales/style';
import { Container } from './style';

const AddSalesperson = ({ salespeople, setFire }) => {
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employeeId, setEmployeeId] = useState('');

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8090/api/salespeople/${id}/`)
            .then(() => setFire(true))
            .catch((err) => console.log(err));
    };

    const handleClick = () => {
        axios
            .post('http://localhost:8090/api/salespeople/', {
                first_name: firstName,
                last_name: lastName,
                employee_id: employeeId,
            })
            .then(({ data }) => {
                setFirstName('');
                setLastName('');
                setEmployeeId('');
                setFire(true);
                setShowModal(false);

            })
            .catch((err) => console.log(err));
    };

    return (
        <Container>
          <div id='buttonBox'>
          <h1>Salespeople</h1>
                <Button
                    text='Add Salesperson'
                    showModal={setShowModal}
                />
            </div>

            {showModal && (
                <ModalContainer>

            <h1>Add A Salesperson</h1>
            <input
                type='text'
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder='First Name'
            />
            <br />

            <input
                type='text'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder='Last Name'
            />
            <br />

            <input
                type='text'
                onChange={(e) => setEmployeeId(e.target.value)}
                value={employeeId}
                placeholder='Employee ID'
            />
            <br />

            <div id='buttons'>
            <ButtonStyle onClick={() => handleClick()}>
                Submit
            </ButtonStyle>

            <ButtonStyle
                onClick={() => {
                    setShowModal(false)
                    setFirstName('')
                    setLastName('')
                    setEmployeeId('')
                }}
                > CANCEL
            </ButtonStyle>
        </div>
        </ModalContainer>
        )}
            {salespeople.map((salesperson) => {
                    return (
                        <TechDetails key={salesperson.employee_id}>
                            <p>{salesperson.first_name}</p>
                            <p>{salesperson.last_name}</p>
                            <p>{salesperson.employee_id}</p>
                            <button
                                onClick={() =>
                                    handleDelete(salesperson.id)
                                }
                            >
                                Delete
                            </button>
                        </TechDetails>
            )})}
        </Container>
    );
};

export default AddSalesperson;
