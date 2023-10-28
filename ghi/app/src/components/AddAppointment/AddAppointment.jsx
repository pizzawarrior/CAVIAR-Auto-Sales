import { useState } from 'react';
import axios from 'axios';
import { ButtonStyle } from '../Button/style';
import { Container } from '../Manufacturers/style';

const AddAppointment = ({ technicians, setFire }) => {
    const [technician, setTechnician] = useState('');
    const [reason, setReason] = useState('');
    const [vin, setVin] = useState('');
    const [customer, setCustomer] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = () => {
        const newAppointment = {
            reason: reason,
            vin: vin,
            customer: customer,
            technician: technician,
            date_time: date,
        };
        axios
            .post('http://localhost:8080/api/appointments/', newAppointment)
            .then(({ data }) => {
                console.log(data);
                setFire(true);
                setTechnician('');
                setDate('');
                setCustomer('');
                setReason('');
                setVin('');
            });
    };

    return (
        <Container>
            <h1>New Appointment</h1>
            <input
                type='text'
                placeholder='Customer'
                onChange={(e) => setCustomer(e.target.value)}
                value={customer}
            />
            <br />
            <input
                type='text'
                placeholder='Vin'
                value={vin}
                onChange={(e) => setVin(e.target.value)}
            />

            <br />
            <input
                type='datetime-local'
                placeholder='Date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <br />
            <select
                name='technician'
                required
                id='technician'
                onChange={(e) => setTechnician(e.target.value)}
            >
                <option value=''>Choose a technician</option>
                {technicians.map((item, index) => (
                    <option
                        key={index}
                        value={item.employee_id}
                    >
                        {item.first_name}
                    </option>
                ))}
            </select>
            <br />
            <textarea
                name='reason'
                id='reason'
                cols='60'
                rows='8'
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            ></textarea>
            <br />
            <ButtonStyle onClick={() => handleSubmit()}>ADD</ButtonStyle>
        </Container>
    );
};

export default AddAppointment;
