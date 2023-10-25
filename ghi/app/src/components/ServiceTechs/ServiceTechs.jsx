import React from 'react';
import { ListContainer, TechDetails } from './style';

const ServiceTechs = ({ technicians }) => {
    return (
        <ListContainer>
            <h1>Avaliable Service Technicians</h1>
            {technicians.map((tech, index) => (
                <TechDetails key={index}>
                    <p>{tech.first_name}</p>
                    <p>{tech.last_name}</p>
                    <p>{tech.employee_id}</p>
                </TechDetails>
            ))}
        </ListContainer>
    );
};

export default ServiceTechs;
