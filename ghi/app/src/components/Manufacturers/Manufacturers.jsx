import { useState } from 'react';
import axios from 'axios';
import { ManufacturerGrid, Container } from './style';
import Button from '../Button/Button';
import { ButtonStyle } from '../Button/style';
import { ModalContainer } from '../../pages/Inventory/style';

const Manufacturers = ({ manufacturers, setFire }) => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');

    const handleClick = () => {
        axios
            .post('http://localhost:8100/api/manufacturers/', {
                name: name
            })
            .then(({ data }) => {
                setShowModal(false);
                setFire(true);
                console.log(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <div id='buttonBox'>
                <h1>Manufacturers</h1>
                <Button
                    text='Add Manufacturer'
                    showModal={setShowModal}
                />
            </div>
            <ManufacturerGrid>
                {manufacturers.map((item, index) => (
                    <p key={index}>{item.name}</p>
                ))}
            </ManufacturerGrid>
            {showModal && (
                <ModalContainer>
                    <h1>New Manufacturer</h1>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='New Manufacturer'
                        required
                    />
                    <div id='buttons'>
                        <ButtonStyle onClick={() => handleClick()}>
                            ADD
                        </ButtonStyle>
                        <ButtonStyle onClick={() => setShowModal(false)}>
                            CANCEL
                        </ButtonStyle>
                    </div>
                </ModalContainer>
            )}
        </Container>
    );
};

export default Manufacturers;
