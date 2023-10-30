import { useState } from "react";
import axios from "axios";
import Button from "../Button/Button";
import { ButtonStyle } from "../Button/style";
import { ModalContainer } from "../../pages/Sales/style";
import { TechDetails, Container } from "./style";
import { SalespersonFilter } from "./style";

const AddSaleForm = ({
  autos,
  customers,
  salespeople,
  setFire,
  handleFilter,
  setFilterValue,
  sales,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [vin, setVin] = useState("");
  const [salesperson, setSalesperson] = useState("");
  const [customer, setCustomer] = useState("");
  const [price, setPrice] = useState("");

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8090/api/sales/${id}/`)
      .then(() => setFire(true))
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    console.log("click");

    axios
      .post("http://localhost:8090/api/sales/", {
        automobile: vin,
        salesperson: salesperson,
        customer: customer,
        price: price,
      })
      .then(({ data }) => {
        setVin("");
        setCustomer("");
        setSalesperson("");
        setPrice("");
        setFire(true);
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div id="buttonBox">
        <h1>Sales Records</h1>
        <Button text="Add Record" showModal={setShowModal} />
      </div>

      {showModal && (
        <ModalContainer>
          <h1>Record a New Sale</h1>
          <select
            onChange={(e) => setVin(e.target.value)}
            name="automobile"
            id="automobile"
          >
            <option>Choose an automobile...</option>
            {autos
              .filter((auto) => !auto.sold)
              .map((auto) => {
                return (
                  <option key={auto.vin} value={auto.vin}>
                    {auto.vin}
                  </option>
                );
              })}
          </select>
          <br />

          <select
            onChange={(e) => setSalesperson(e.target.value)}
            value={salesperson}
            name="salesperson"
            id="salesperson"
          >
            <option>Choose a salesperson...</option>
            {salespeople.map((person) => {
              return (
                <option key={person.id} value={person.employee_id}>
                  {person.first_name} {person.last_name}
                </option>
              );
            })}
          </select>
          <br />

          <select
            onChange={(e) => setCustomer(e.target.value)}
            name="customer"
            id="customer"
          >
            <option>Choose a customer...</option>
            {customers.map((customer) => {
              return (
                <option key={customer.id} value={customer.id}>
                  {customer.first_name} {customer.last_name}
                </option>
              );
            })}
          </select>
          <br />

          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="price..."
          />

          <div id="buttons">
            <ButtonStyle onClick={() => handleClick()}>Submit</ButtonStyle>

            <ButtonStyle
              onClick={() => {
                setShowModal(false);
                setVin("");
                setCustomer("");
                setSalesperson("");
                setPrice("");
              }}
            >
              {" "}
              CANCEL
            </ButtonStyle>
          </div>
        </ModalContainer>
      )}

      <SalespersonFilter>
        <select
          onChange={(e) => setFilterValue(e.target.value)}
          name="salesperson"
          id="salesperson"
          required
        >
          <option>Choose a salesperson...</option>
          {salespeople.map((salesperson) => {
            return (
              <option
                key={salesperson.employee_id}
                value={salesperson.employee_id}
              >
                {salesperson.first_name} {salesperson.last_name}
              </option>
            );
          })}
        </select>

        <button onClick={() => handleFilter()}>Submit</button>
        <button onClick={() => setFire(true)}>Clear</button>
      </SalespersonFilter>

      <TechDetails>
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Salesperson Name</th>
              <th>Customer Name</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => {
              return (
                <tr key={sale.id}>
                  <td>{sale.salesperson.employee_id}</td>
                  <td>
                    {sale.salesperson.first_name} {sale.salesperson.last_name}
                  </td>
                  <td>
                    {sale.customer.first_name} {sale.customer.last_name}
                  </td>
                  <td>{sale.automobile.vin}</td>
                  <td>{sale.price}</td>
                  <td>
                    <button onClick={() => handleDelete(sale.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TechDetails>
    </Container>
  );
};

export default AddSaleForm;
