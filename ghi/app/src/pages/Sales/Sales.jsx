import {useEffect, useState} from 'react'
import { Wrapper, SalesContainer } from './style'
import CustomerList from '../../components/CustomerList/CustomerList'
import axios from 'axios'

const Sales = () => {

    const [customers, setCustomers] = useState([])
    useEffect(() => {
        axios
            .get('	http://localhost:8090/api/customers/')
            .then(({ data }) => setCustomers(data.customers))
            .catch((err) => console.log(err));
    }, []);

    console.log(customers)

  return (
    <Wrapper>
      <SalesContainer>
        <div className='section' id='one'></div>
        <div className='section' id='two'></div>
        <div className='section' id='three'></div>
        <div className='section' id='four'> <CustomerList customers={customers}/></div>
      </SalesContainer>
    </Wrapper>
  )
}

export default Sales
