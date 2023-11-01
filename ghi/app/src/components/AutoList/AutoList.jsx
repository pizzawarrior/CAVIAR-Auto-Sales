import { useState } from 'react';
import axios from 'axios';
import { Container } from '../Manufacturers/style';
import Button from '../Button/Button';
import { ButtonStyle } from '../Button/style';
import { ModalContainer } from '../../pages/Inventory/style';
import { TechDetails } from "./style";

const AutoList = ({ autos, models, setFire }) => {
    const [showModal, setShowModal] = useState(false);
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [vin, setVin] = useState('');
    const [model, setModel] = useState('');

    const handleSubmit = () => {
        const newCar = {
            color: color,
            year: year,
            vin: vin,
            model_id: model,
        };
        axios
            .post('http://localhost:8100/api/automobiles/', newCar)
            .then(({ data }) => {
                console.log(data);
                setFire(true);
                setColor('');
                setYear('');
                setVin('');
                setModel('');
                setShowModal(false);
            })
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <div id='buttonBox'>
                <h1>Automobiles</h1>
                <Button
                    text='Add Car'
                    showModal={setShowModal}
                />
            </div>
            {showModal && (
                <ModalContainer>
                    <h1>New Automobile</h1>
                    <input
                        type='text'
                        placeholder='Color'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <br />
                    <input
                        type='number'
                        placeholder='Year'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <br />
                    <input
                        type='text'
                        placeholder='Vin'
                        value={vin}
                        onChange={(e) => setVin(e.target.value)}
                    />
                    <br />
                    <select
                        name='models'
                        required
                        id='models'
                        onChange={(e) => setModel(e.target.value)}
                    >
                        <option>Choose a model</option>
                        {models.map((item, index) => (
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
                        <ButtonStyle onClick={() => setShowModal(false)}>
                            CANCEL
                        </ButtonStyle>
                    </div>
                </ModalContainer>
            )}
            <TechDetails>
            <table>
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Color</th>
                        <th>Year</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Sold Status</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map((auto) => {
                        return (
                            <tr key={auto.vin}>
                                <td>{auto.vin}</td>
                                <td>{auto.color}</td>
                                <td>{auto.year}</td>
                                <td>{auto.model.name}</td>
                                <td>{auto.model.manufacturer.name}</td>
                                <td>{auto.sold ? 'Sold' : 'Available'}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </TechDetails>
        </Container>
    );
};

export default AutoList;
