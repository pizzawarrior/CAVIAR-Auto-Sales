import { useEffect, useState } from 'react';
import { Wrapper, SalesContainer } from './style';
import AddSale from '../../components/AddSale/AddSale';
import AddCustomer from '../../components/AddCustomer/AddCustomer';
import AddSalesperson from '../../components/AddSalesperson/AddSalesperson';
import axios from 'axios';

const Sales = () => {
    const [automobiles, setAutomobiles] = useState([])
    const [customers, setCustomers] = useState([]);
    const [salespeople, setSalespeople] = useState([]);
    const [sales, setSales] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [fire, setFire] = useState(false);

  useEffect(() => {
    let endpoints = [
      'http://localhost:8090/api/customers/',
      'http://localhost:8090/api/salespeople/',
      'http://localhost:8100/api/automobiles/',
      'http://localhost:8090/api/sales/'
    ];

    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: customers }, { data: salespeople }, { data: autos}, { data: sales }]) => {
        setCustomers(customers.customers);
        setSalespeople(salespeople.salespeople);
        setSales(sales.sales);
        setAutomobiles(autos.autos);
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
                    <AddSalesperson
                        salespeople={salespeople}
                        setFire={setFire}
                    />
                </div>
                <div
                    className='section'
                    id='one'
                >
                    {' '}
                    <AddCustomer
                        customers={customers}
                        setFire={setFire}
                    />
                </div>
                <div
                    className='section'
                    id='three'
                >
                    <AddSale
                        setFire={setFire}
                        handleFilter={handleFilter}
                        sales={sales}
                        setFilterValue={setFilterValue}
                        salespeople={salespeople}
                        filterValue={filterValue}
                        autos={automobiles}
                        customers={customers}

                    />
                </div>
            </SalesContainer>
        </Wrapper>
    );
};

export default Sales;
