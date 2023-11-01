import { useEffect, useState } from 'react';
import { Wrapper, InventoryContainer } from './style';
import AutoList from '../../components/AutoList/AutoList';
import Manufacturers from '../../components/Manufacturers/Manufacturers';
import Vehicles from '../../components/Vehicles/Vehicles';
import { handleGet } from '../../helpers/getFunction';

const Inventory = () => {
    const [autos, setAutos] = useState([]);
    const [manufacturers, setManufacturer] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [fire, setFire] = useState(false);

    useEffect(() => {
        handleGet(
            'http://localhost:8100/api/automobiles/',
            setAutos,
            'autos',
            setFire
        );
        handleGet(
            'http://localhost:8100/api/manufacturers/',
            setManufacturer,
            'manufacturers',
            setFire
        );
        handleGet(
            'http://localhost:8100/api/models/',
            setVehicles,
            'models',
            setFire
        );
    }, [fire]);

    return (
        <Wrapper>
            <InventoryContainer>
                <div
                    className='section'
                    id='one'
                >
                    <Manufacturers
                        manufacturers={manufacturers}
                        setFire={setFire}
                    />
                </div>
                <div
                    className='section'
                    id='two'
                >
                    <Vehicles
                        vehicles={vehicles}
                        manufacturers={manufacturers}
                        setFire={setFire}
                    />
                </div>
                <div
                    className='section'
                    id='three'
                >
                    <AutoList
                        autos={autos}
                        models={vehicles}
                        setFire={setFire}
                    />
                </div>
            </InventoryContainer>
        </Wrapper>
    );
};

export default Inventory;
