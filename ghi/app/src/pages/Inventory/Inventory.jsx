import { useEffect, useState } from 'react';
import { Wrapper, InventoryContainer } from './style';
import AutoList from '../../components/AutoList/AutoList';
import axios from 'axios';
import Manufacturers from '../../components/Manufacturers/Manufacturers';
import Vehicles from '../../components/Vehicles/Vehicles';

const Inventory = () => {
    const [autos, setAutos] = useState([]);
    const [manufacturers, setManufacturer] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [fire, setFire] = useState(false)

    useEffect(() => {
        let endpoints = [
            'http://localhost:8100/api/automobiles/',
            'http://localhost:8100/api/manufacturers/',
            'http://localhost:8100/api/models/',
        ];

        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
            ([
                { data: automobiles },
                { data: manufacturer },
                { data: models },
            ]) => {
                setAutos(automobiles.autos);
                setManufacturer(manufacturer.manufacturers);
                setVehicles(models.models);
                setFire(false)
            }
        );
    }, [fire]);

    return (
        <Wrapper>
            <InventoryContainer>
                <div
                    className='section'
                    id='one'
                >
                    <Manufacturers manufacturers={manufacturers} setFire={setFire} />
                </div>
                <div
                    className='section'
                    id='two'
                >
                    <Vehicles vehicles={vehicles} manufacturers={manufacturers} setFire={setFire} />
                </div>
                <div
                    className='section'
                    id='three'
                >
                    <AutoList autos={autos} models={vehicles} setFire={setFire} />
                </div>
            </InventoryContainer>
        </Wrapper>
    );
};

export default Inventory;
