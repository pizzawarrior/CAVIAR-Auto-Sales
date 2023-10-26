import React from 'react';
import { ListContainer } from '../ServiceTechs/style';

const AppointmentList = ({ appointments }) => {
    console.log(appointments);
    let format = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    return (
        <ListContainer>
            <h1>Service Appointments</h1>
        </ListContainer>
    );
};

export default AppointmentList;
