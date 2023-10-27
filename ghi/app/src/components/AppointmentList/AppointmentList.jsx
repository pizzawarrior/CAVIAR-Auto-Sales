import axios from 'axios';
import { AppointmentContainer, Row, Span } from './style';
import { Container } from '../Manufacturers/style';

const AppointmentList = ({ appointments, setFire }) => {
    let format = (date) =>
        new Date(date).toLocaleDateString('en-us', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });

    const cancel = (id) => {
        axios.put(`http://localhost:8080/api/appointments/${id}/cancel/`).then(() => setFire(true)).catch(err => console.log(err))
    };

    const done = (id) => {
        axios.put(`http://localhost:8080/api/appointments/${id}/finished/`).then(() => setFire(true)).catch(err => console.log(err))
    };

    return (
        <Container>
            <h1>Service Appointments</h1>
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
