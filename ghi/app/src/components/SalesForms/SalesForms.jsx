import {useState, useEffect} from 'react'
import axios from 'axios'
import AddCustomerForm from '../AddCustomer/AddCustomerForm'
import AddSalespersonForm from '../AddSalespersonForm/AddSalespersonForm'
import AddSaleForm from '../AddSaleForm/AddSaleForm'
import { Container } from "../Manufacturers/style";


const SalesForms = () => {

  const [automobiles, setAutomobiles] = useState([])
  const [salespeople, setSalespeople] = useState([])
  const [customers, setCustomers] = useState([])

  useEffect(() => {
      axios
          .get('http://localhost:8100/api/automobiles/')
          .then(({ data }) => {setAutomobiles(data.autos)
          })
          .catch((err) => console.log(err));
  }, []);
  // console.log(automobiles)

  useEffect(() => {
      axios
          .get('http://localhost:8090/api/salespeople/')
          .then(({ data }) => {
              setSalespeople(data.salespeople)
          })
          .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
      axios
          .get('http://localhost:8090/api/customers/')
          .then(({ data }) => {
              setCustomers(data.customers)
          })
          .catch((err) => console.log(err));
  }, []);
  // console.log(customers)

  return (
    <>
    <Container>
        <AddCustomerForm />
    </Container>

    <Container>
        <AddSalespersonForm />
    </Container>

    <Container>
        <AddSaleForm
        salespeople={salespeople}
        autos={automobiles}
        customers={customers}
        />
    </Container>
        </>

  )
}

export default SalesForms
