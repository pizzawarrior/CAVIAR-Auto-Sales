/* eslint-disable eqeqeq */
import axios from 'axios';
import { AppointmentContainer, Row, Span } from './style';
import { Container } from '../Manufacturers/style';

const AppointmentList = ({
    appointments,
    setFire,
    technicians,
    setAppointments,
}) => {
    let format = (date) =>
        new Date(date).toLocaleDateString('en-us', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });

    const cancel = (id) => {
        axios
            .put(`http://localhost:8080/api/appointments/${id}/cancel/`)
            .then(() => setFire(true))
            .catch((err) => console.log(err));
    };

    const done = (id) => {
        axios
            .put(`http://localhost:8080/api/appointments/${id}/finish/`)
            .then(() => setFire(true))
            .catch((err) => console.log(err));
    };

    const handleFilter = (value) => {
        if (!value) {
            setFire(true);
        } else {
            let filtered = appointments.filter(
                (appt) => appt.technician.employee_id == value
            );
            setAppointments(filtered);
        }
    };

    return (
        <Container>
            <div id='buttonBox'>
                <h1>Service Appointments</h1>
                <select
                    name='technicians'
                    id='technicians'
                    onChange={(e) => {
                        handleFilter(e.target.value);
                    }}
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
            </div>
            {appointments.map((item, index) => (
                <AppointmentContainer key={index}>
                    <Row>
                        <p>
                            <Span>Date:</Span> {format(item.date_time)}
                        </p>
                        <p>
                            <Span>Status:</Span> {item.status}
                        </p>
                    </Row>
                    <Row>
                        <p>
                            <Span>Customer:</Span> {item.customer}
                        </p>
                        <p>
                            <Span>Technician:</Span>{' '}
                            {item.technician.first_name}
                        </p>
                    </Row>
                    <Row>
                        <p>
                            <Span>Issue:</Span> {item.reason}
                        </p>
                        <div className='buttons'>
                            <button onClick={() => cancel(item.id)}>
                                Cancel
                            </button>
                            <button onClick={() => done(item.id)}>Done</button>
                        </div>
                    </Row>
                </AppointmentContainer>
            ))}
        </Container>
    );
};

export default AppointmentList;
