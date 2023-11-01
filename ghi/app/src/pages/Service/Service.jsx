import { useEffect, useState } from 'react';
import { Wrapper } from '../Inventory/style';
import { ServiceContainer } from './style';
import ServiceTechs from '../../components/ServiceTechs/ServiceTechs';
import AppointmentList from '../../components/AppointmentList/AppointmentList';
import AddAppointment from '../../components/AddAppointment/AddAppointment';
import { handleGet } from '../../helpers/getFunction';

const Service = () => {
    const [technicians, setTechnicians] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [fire, setFire] = useState(false);

    useEffect(() => {
        handleGet(
            'http://localhost:8080/api/technicians/',
            setTechnicians,
            'technicians',
            setFire
        )
        handleGet(
            'http://localhost:8080/api/appointments/',
            setAppointments,
            'appointments',
            setFire
        );
    }, [fire]);

    return (
        <Wrapper>
            <ServiceContainer>
                <div
                    className='section'
                    id='one'
                >
                    <AppointmentList
                        setFire={setFire}
                        appointments={appointments}
                        technicians={technicians}
                        setAppointments={setAppointments}
                    />
                </div>
                <div
                    className='section'
                    id='two'
                >
                    <ServiceTechs
                        setFire={setFire}
                        technicians={technicians}
                    />
                </div>
                <div
                    className='section'
                    id='three'
                >
                    <AddAppointment
                        technicians={technicians}
                        setFire={setFire}
                    />
                </div>
            </ServiceContainer>
        </Wrapper>
    );
};

export default Service;
