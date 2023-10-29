import { useState } from 'react';
import axios from 'axios';
import { TechDetails } from './style';
import Button from '../Button/Button';
import { ButtonStyle } from '../Button/style';
import { ModalContainer } from '../../pages/Inventory/style';
import { Container } from '../Manufacturers/style';

const ServiceTechs = ({ technicians, setFire }) => {
    const [showModal, setShowModal] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [employee, setEmployee] = useState('');

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8080/api/technicians/${id}`)
            .then(() => setFire(true))
            .catch((err) => console.log(err));
    };

    const handleAdd = () => {
        const newTechnician = {
            first_name: firstName,
            last_name: lastName,
            employee_id: employee,
        };
        axios.post('http://localhost:8080/api/technicians/', newTechnician).then(() => {
            setEmployee('Employee ID')
            setFirstName('')
            setLastName('')
            setFire(true)
            setShowModal(false)
        })
    };

    return (
        <Container>
            <div id='buttonBox'>
                <h1>Service Technicians</h1>
                <Button
                    text='Add Technician'
                    showModal={setShowModal}
                />
            </div>
            {showModal && (
                <ModalContainer>
                    <h1>Add Technician</h1>
                    <input
                        type='text'
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <br />
                    <input
                        type='text'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <br />
                    <input
                        type='number'
                        placeholder='Employee ID'
                        value={employee}
                        onChange={(e) => setEmployee(e.target.value)}
                    />
                    <br />

                    <div id='buttons'>
                    <ButtonStyle onClick={() => handleAdd()}>
                        ADD
                    </ButtonStyle>
                    <ButtonStyle onClick={() => {
                        setShowModal(false)
                        setFirstName('')
                        setLastName('')
                        setEmployee(0)
                        }}>
                        CANCEL
                    </ButtonStyle>
                    </div>
                </ModalContainer>
            )}
            {technicians.map((tech, index) => (
                <TechDetails key={index}>
                    <p>{tech.first_name}</p>
                    <p>{tech.last_name}</p>
                    <p>{tech.employee_id}</p>
                    <button onClick={() => handleDelete(tech.employee_id)}>
                        Delete
                    </button>
                </TechDetails>
            ))}
        </Container>
    );
};

export default ServiceTechs;
