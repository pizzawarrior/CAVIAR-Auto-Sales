import { useEffect, useState } from 'react';
import axios from 'axios';
import { Wrapper } from '../Inventory/style';
import { ServiceContainer } from './style';
import ServiceTechs from '../../components/ServiceTechs/ServiceTechs';
import AppointmentList from '../../components/AppointmentList/AppointmentList';
import AddAppointment from '../../components/AddAppointment/AddAppointment';

const Service = () => {
    const [technicians, setTechnicians] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [fire, setFire] = useState(false)

    useEffect(() => {
        let endpoints = [
            'http://localhost:8080/api/appointments/',
            'http://localhost:8080/api/technicians/',
        ];

        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            ([{ data: appointments }, { data: technicians }]) => {
                setTechnicians(technicians.technicians);
                setAppointments(appointments.appointments);
                setFire(false)
            }
        );
    }, [fire]);

    return (
        <Wrapper>
            <ServiceContainer>
                <div
                    className='section'
                    id='one'
                >
                    <AppointmentList setFire={setFire} appointments={appointments} />
                </div>
                <div
                    className='section'
                    id='two'
                >
                    <ServiceTechs setFire={setFire} technicians={technicians} />
                </div>
                <div
                    className='section'
                    id='three'
                ><AddAppointment technicians={technicians} setFire={setFire}/></div>
            </ServiceContainer>
        </Wrapper>
    );
};

export default Service;
