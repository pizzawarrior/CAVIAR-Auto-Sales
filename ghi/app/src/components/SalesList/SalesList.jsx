import React from "react";
import { Container } from "../Manufacturers/style";

const SalesList = ({sales, setFilterValue, handleFilter, setFire, salespeople}) => {
  // console.log(salespeople)
  return (
    <Container>
      <h1>Sales Records</h1>

        <p>Select A Salesperson From The Dropdown</p>

        <select
        onChange={(e) => setFilterValue(e.target.value)}
        // value={salesperson}
        name="salesperson"
        id="salesperson"
        // className={dropdown}
        required
        >
            <option>
                Choose a salesperson...
            </option>
            {salespeople.map((salesperson) => {
                return (
                    <option key={salesperson.employee_id} value={salesperson.employee_id}>
                        {salesperson.first_name} {salesperson.last_name}
                    </option>
                );
            } )}
        </select>

        <button onClick={() => handleFilter()}>Submit</button>
        <button onClick={() => setFire(true)}>Clear</button>

      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>VIN</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr key={sale.id}>
                <td>{sale.salesperson.employee_id}</td>
                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default SalesList;
