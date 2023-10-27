import React from "react";
import axios from 'axios';


const CustomerList = ({customers, setFire}) => {

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8090/api/customers/${id}/`)
      .then(() => setFire(true))
      .catch(err => console.log(err))
  }


  return (
    <div>
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
                <td><button onClick={() => handleDelete(customer.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
