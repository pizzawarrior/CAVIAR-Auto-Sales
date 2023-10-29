import { useEffect, useState } from 'react';
import { Wrapper, SalesContainer } from './style';
import AddCustomerForm from '../../components/AddCustomer/AddCustomerForm';
import AddSalespersonForm from '../../components/AddSalespersonForm/AddSalespersonForm';
import SalesList from '../../components/SalesList/SalesList';
import axios from 'axios';

const Sales = () => {
    const [customers, setCustomers] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [sales, setSales] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [fire, setFire] = useState(false);

  useEffect(() => {
    let endpoints = [
      'http://localhost:8090/api/customers/',
      'http://localhost:8090/api/salespeople/',
      'http://localhost:8090/api/sales/'
    ];

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: customers }, { data: salespeople }, { data: sales }]) => {
        setCustomers(customers.customers);
        setSalespeople(salespeople.salespeople);
        setSales(sales.sales);
        setFire(false)
      }
    );
  }, [fire]);

  const handleFilter = () => {
    const filteredSale = sales.filter(
        (item) => item.salesperson.employee_id === parseInt(filterValue)
    );
    setSales(filteredSale);
};

    return (
        <Wrapper>
            <SalesContainer>
                <div
                    className='section'
                    id='two'
                >
                    <AddSalespersonForm
                        salespeople={salespeople}
                        setFire={setFire}
                    />
                </div>
                <div
                    className='section'
                    id='one'
                >
                    {' '}
                    <AddCustomerForm
                        customers={customers}
                        setFire={setFire}
                    />
                </div>
                <div
                    className='section'
                    id='three'
                >
                    <SalesList
                        setFire={setFire}
                        handleFilter={handleFilter}
                        sales={sales}
                        setFilterValue={setFilterValue}
                        salespeople={salespeople}
                        filterValue={filterValue}
                    />
                </div>
            </SalesContainer>
        </Wrapper>
    );
};

export default Sales;
