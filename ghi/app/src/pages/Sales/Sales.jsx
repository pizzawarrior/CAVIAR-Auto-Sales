import {useEffect, useState} from 'react'
import { Wrapper, SalesContainer } from './style'
import CustomerList from '../../components/CustomerList/CustomerList'
import SalespeopleList from '../../components/SalespeopleList/SalespeopleList'
import SalesList from '../../components/SalesList/SalesList'
import axios from 'axios'

const Sales = () => {
    const [customers, setCustomers] = useState([])
    const [salespeople, setSalespeople] = useState([])
    const [sales, setSales] = useState([])
    const [filterValue, setFilterValue] = useState('')
    const [fire, setFire] = useState(false)

    // console.log(filterValue)

    useEffect(() => {
        axios
            .get('http://localhost:8090/api/customers/')
            .then(({ data }) => setCustomers(data.customers))
            .catch((err) => console.log(err));
    }, []);
    // console.log(customers)

    useEffect(() => {
        axios
            .get('http://localhost:8090/api/salespeople/')
            .then(({ data }) => {setSalespeople(data.salespeople)
            })
            .catch((err) => console.log(err));
    }, []);
    // console.log(salespeople)
    // console.log(filterValue)

    const handleFilter = () => {
        const filteredSale = sales.filter(item => item.salesperson.employee_id === parseInt(filterValue))
        // console.log(filteredSale)
        setSales(filteredSale)
    }


    useEffect(() => {
        axios
            .get('http://localhost:8090/api/sales/')
            .then(({ data }) => {setSales(data.sales)
            setFire(false)
            })
            .catch((err) => console.log(err));

    }, [fire]);
    // console.log(sales)


  return (
    <Wrapper>
      <SalesContainer>
        <div className='section' id='two'><SalespeopleList salespeople={salespeople}/></div>
        <div className='section' id='one'> <CustomerList customers={customers}/></div>
        <div className='section' id='three'><SalesList
        setFire={setFire}
        handleFilter={handleFilter}
        sales={sales} setFilterValue={setFilterValue}
        salespeople={salespeople} filterValue={filterValue}
        />
        </div>
      </SalesContainer>
    </Wrapper>
  )
}

export default Sales
