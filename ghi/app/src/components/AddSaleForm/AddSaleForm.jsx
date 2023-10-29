import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { TechDetails } from './style';
import Button from '../Button/Button';
import { ButtonStyle } from '../Button/style';
import { ModalContainer } from '../../pages/Inventory/style';
import { Container } from '../Manufacturers/style';


const AddSaleForm = ({autos, customers, salespeople}) => {
    const [vin , setVin] = useState('')
    const [salesperson, setSalesperson] = useState('')
    const [customer, setCustomer] = useState('')
    const [price, setPrice] = useState(0)

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('click');

        axios
            .post('http://localhost:8090/api/sales/', {
                automobile: vin,
                salesperson: salesperson,
                customer: customer,
                price: price,
            })
            .then(({ data }) => {
                navigate('/sales');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Record a New Sale</h1>

            <select
                onChange={(e) => setVin(e.target.value)}
                name='automobile'
                id='automobile'
            >
                <option>Choose an automobile...</option>
                {autos
                    .filter((auto) => !auto.sold)
                    .map((auto) => {
                        return (
                            <option
                                key={auto.vin}
                                value={auto.vin}
                            >
                                {auto.vin}
                            </option>
                        );
                    })}
            </select>

            <select
                onChange={(e) => setSalesperson(e.target.value)}
                value={salesperson}
                name='salesperson'
                id='salesperson'
            >
                <option>Choose a salesperson...</option>
                {salespeople.map((person) => {
                    return (
                        <option
                            key={person.id}
                            value={person.employee_id}
                        >
                            {person.first_name} {person.last_name}
                        </option>
                    );
                })}
            </select>

            <select
                onChange={(e) => setCustomer(e.target.value)}
                name='customer'
                id='customer'
            >
                <option>Choose a customer...</option>
                {customers.map((customer) => {
                    return (
                        <option
                            key={customer.id}
                            value={customer.id}
                        >
                            {customer.first_name} {customer.last_name}
                        </option>
                    );
                })}
            </select>

            <label>Price</label>
            <input
                type='text'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />

            <button onClick={() => handleClick()}>Submit</button>
        </div>
    );
};

export default AddSaleForm;
