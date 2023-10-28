import { useState, useEffect } from 'react';
import axios from 'axios';
import AddCustomerForm from '../../components/AddCustomer/AddCustomerForm';
import AddSalespersonForm from '../../components/AddSalespersonForm/AddSalespersonForm';
import AddSaleForm from '../../components/AddSaleForm/AddSaleForm';

const SalesForm = () => {
    const [automobiles, setAutomobiles] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8100/api/automobiles/')
            .then(({ data }) => {
                setAutomobiles(data.autos);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8090/api/salespeople/')
            .then(({ data }) => {
                setSalespeople(data.salespeople);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8090/api/customers/')
            .then(({ data }) => {
                setCustomers(data.customers);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <AddCustomerForm />
            <AddSalespersonForm />
            <AddSaleForm
                salespeople={salespeople}
                autos={automobiles}
                customers={customers}
            />
        </>
    );
};

export default SalesForm;
