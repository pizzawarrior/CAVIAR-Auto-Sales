import React from "react";
import { Container } from "../Manufacturers/style";

const CustomerList = ({customers}) => {
  return (
    <Container>
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone_number}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default CustomerList;
