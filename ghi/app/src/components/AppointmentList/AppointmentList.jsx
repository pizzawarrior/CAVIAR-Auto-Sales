import React from 'react';
import { ListContainer } from '../ServiceTechs/style';
import { AppointmentRow, AppointmentContainer } from './style';

const AppointmentList = ({ appointments }) => {
    let format = (date) =>
        new Date(date).toLocaleDateString('en-us', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });
    return (
        <ListContainer>
            <h1>Service Appointments</h1>
            {appointments.map((item, index) => (
                <AppointmentContainer key={index}>
                    <AppointmentRow>
                        <p>{item.customer}</p>
                        <p>{item.status}</p>
                        <p>{format(item.date_time)}</p>
                    </AppointmentRow>
                    <AppointmentRow>
                        <p>Issue: {item.reason}</p>
                        <p>With: {item.technician.first_name}</p>
                    </AppointmentRow>
                </AppointmentContainer>
            ))}
        </ListContainer>
    );
};

export default AppointmentList;
