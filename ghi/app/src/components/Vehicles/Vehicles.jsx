import { useState } from 'react';
import axios from 'axios';
import useInput from '../../hooks/useInput';
import { Container } from '../Manufacturers/style';
import { VehicleRow } from './style';
import Button from '../Button/Button';
import { ButtonStyle } from '../Button/style';
import { ModalContainer } from '../Modal/style';

const Vehicles = ({ vehicles, manufacturers, setFire }) => {
    const [showModal, setShowModal] = useState(false);
    const [manufacturer, setManufacturer] = useState(0);
    const name = useInput('');
    const image = useInput('');

    const handleSubmit = () => {
        const newModel = {
            name: name.value,
            picture_url: image.value,
            manufacturer_id: manufacturer,
        };
        axios
            .post('http://localhost:8100/api/models/', newModel)
            .then(({ data }) => {
                setFire(true);
                setShowModal(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <div id='buttonBox'>
                <h1>Models</h1>
                <Button
                    text='Add Model'
                    showModal={setShowModal}
                />
            </div>
            {showModal && (
                <ModalContainer>
                    <h1>New Model</h1>
                    <input
                        type='text'
                        placeholder='Model Name'
                        {...name}
                    />
                    <br />
                    <input
                        type='text'
                        placeholder='Model Image'
                        {...image}
                    />
                    <br />
                    <select
                        name='manufacturer'
                        required
                        id='manufacturer'
                        onChange={(e) => setManufacturer(e.target.value)}
                    >
                        <option value=''>Choose a manufacturer</option>
                        {manufacturers.map((item, index) => (
                            <option
                                key={index}
                                value={item.id}
                            >
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <ButtonStyle onClick={() => handleSubmit()}>
                        ADD
                    </ButtonStyle>
                    <ButtonStyle onClick={() => setShowModal(false)}>
                        CANCEL
                    </ButtonStyle>
                </ModalContainer>
            )}
            {vehicles.map((item, index) => (
                <VehicleRow key={index}>
                    <p>{item.manufacturer.name}</p>
                    <p>{item.name}</p>
                    <img
                        src={item.picture_url}
                        alt={item.name}
                    />
                </VehicleRow>
            ))}
        </Container>
    );
};

export default Vehicles;
