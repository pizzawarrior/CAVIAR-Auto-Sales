import { useState } from 'react';
import axios from 'axios';
import { Container } from '../Manufacturers/style';
import { VehicleRow } from './style';
import Button from '../Button/Button';
import { ButtonStyle } from '../Button/style';
import { ModalContainer } from '../../pages/Inventory/style';

const Vehicles = ({ vehicles, manufacturers, setFire }) => {
    const [showModal, setShowModal] = useState(false);
    const [manufacturer, setManufacturer] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = () => {
        const newModel = {
            name: name,
            picture_url: image,
            manufacturer_id: manufacturer,
        };
        axios
            .post('http://localhost:8100/api/models/', newModel)
            .then(({ data }) => {
                setFire(true);
                setShowModal(false);
                setImage('');
                setName('');
                setManufacturer('');
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <input
                        type='text'
                        placeholder='Model Image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
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
                    <div id='buttons'>
                        <ButtonStyle onClick={() => handleSubmit()}>
                            ADD
                        </ButtonStyle>
                        <ButtonStyle
                            onClick={() => {
                                setShowModal(false);
                                setImage('');
                                setName('');
                            }}
                        >
                            CANCEL
                        </ButtonStyle>
                    </div>
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
