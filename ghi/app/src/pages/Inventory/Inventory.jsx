import {useEffect, useState} from 'react';
import { Wrapper, InventoryContainer } from './style';
import Button from '../../components/Button/Button';
import AutoList from '../../components/AutoList/AutoList';
import axios from 'axios'

const Inventory = () => {
    const [autos, setAutos] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8100/api/automobiles/')
            .then(({ data }) => setAutos(data.autos))
            .catch((err) => console.log(err));
    }, []);

    console.log(autos)
    return (
        <Wrapper>
            <InventoryContainer>
                <div id='one'>
                </div>
                <div id='two'></div>
                <div id='three'>
                    <AutoList autos={autos}/>
                </div>
            </InventoryContainer>
        </Wrapper>
    );
};

export default Inventory;
