import React from "react";
import { Container } from "../Manufacturers/style";

const SalespeopleList = ({salespeople}) => {
  return (
    <Container>
      <h1>Salespeople</h1>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {salespeople.map((salesperson) => {
            return (
              <tr key={salesperson.employee_id}>
                <td>{salesperson.employee_id}</td>
                <td>{salesperson.first_name}</td>
                <td>{salesperson.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default SalespeopleList;
