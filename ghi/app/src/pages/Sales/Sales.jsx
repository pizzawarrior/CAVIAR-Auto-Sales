import {useEffect, useState} from 'react'
import { Wrapper, SalesContainer } from './style'
import CustomerList from '../../components/CustomerList/CustomerList'
import SalespeopleList from '../../components/SalespeopleList/SalespeopleList'
import SalesList from '../../components/Sales/Sales'
import axios from 'axios'

const Sales = () => {

    // CUSTOMERS
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        axios
            .get('	http://localhost:8090/api/customers/')
            .then(({ data }) => setCustomers(data.customers))
            .catch((err) => console.log(err));
    }, []);

    // console.log(customers)

    // SALESPEOPLE:
    const [salespeople, setSalespeople] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:8090/api/salespeople/')
            .then(({ data }) => setSalespeople(data.salespeople))
            .catch((err) => console.log(err));
    }, []);

    // console.log(salespeople)

    // SALES RECORDS
    const [sales, setSales] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:8090/api/sales/')
            .then(({ data }) => setSales(data.sales))
            .catch((err) => console.log(err));
    }, []);

    console.log(sales)



  return (
    <Wrapper>
      <SalesContainer>
        <div className='section' id='one'></div>
        <div className='section' id='two'><SalesList sales={sales}/></div>
        <div className='section' id='three'><SalespeopleList salespeople={salespeople}/></div>
        <div className='section' id='four'> <CustomerList customers={customers}/></div>
      </SalesContainer>
    </Wrapper>
  )
}

export default Sales
