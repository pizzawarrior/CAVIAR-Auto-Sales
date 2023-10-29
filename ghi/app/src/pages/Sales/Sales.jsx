import { useEffect, useState } from 'react';
import { Wrapper, SalesContainer } from './style';
import AddCustomerForm from '../../components/AddCustomer/AddCustomerForm';
// import CustomerList from '../../components/CustomerList/CustomerList';
import SalespeopleList from '../../components/SalespeopleList/SalespeopleList';
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


//   })

//     useEffect(() => {
//         axios
//             .get('http://localhost:8090/api/customers/')
//             .then(({ data }) => setCustomers(data.customers))
//             .catch((err) => console.log(err));
//     }, [fire]);

//     useEffect(() => {
//         axios
//             .get('http://localhost:8090/api/salespeople/')
//             .then(({ data }) => {
//                 setSalespeople(data.salespeople);
//             })
//             .catch((err) => console.log(err));
//     }, [fire]);

//     const handleFilter = () => {
//         const filteredSale = sales.filter(
//             (item) => item.salesperson.employee_id === parseInt(filterValue)
//         );
//         setSales(filteredSale);
//     };

//     useEffect(() => {
//         axios
//             .get('http://localhost:8090/api/sales/')
//             .then(({ data }) => {
//                 setSales(data.sales);
//                 setFire(false);
//             })
//             .catch((err) => console.log(err));
//     }, [fire]);

    return (
        <Wrapper>
            <SalesContainer>
                <div
                    className='section'
                    id='two'
                >
                    <SalespeopleList
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
