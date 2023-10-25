import { useEffect, useState } from 'react';
import axios from 'axios';
import { Wrapper } from '../Inventory/style';
import { ServiceContainer } from './style';
import ServiceTechs from '../../components/ServiceTechs/ServiceTechs';
import AppointmentList from '../../components/AppointmentList/AppointmentList';

const Service = () => {
    const [technicians, setTechnicians] = useState([]);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        let endpoints = [
            'http://localhost:8080/api/appointments/',
            'http://localhost:8080/api/technicians/',
        ];

        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            ([{ data: appointments }, { data: technicians }]) => {
                setTechnicians(technicians.technicians);
                setAppointments(appointments.appointments);
            }
        );
    }, []);

    return (
        <Wrapper>
            <ServiceContainer>
                <div
                    className='section'
                    id='one'
                >
                    <AppointmentList appointments={appointments} />
                </div>
                <div
                    className='section'
                    id='two'
                >
                    <ServiceTechs technicians={technicians} />
                </div>
                <div
                    className='section'
                    id='three'
                ></div>
            </ServiceContainer>
        </Wrapper>
    );
};

export default Service;
