import React from "react";
import axios from 'axios'

const SalespeopleList = ({salespeople, setFire}) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8090/api/salespeople/${id}/`)
      .then(() => setFire(true))
      .catch(err => console.log(err))
  }

  return (
    <div>
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
                <td><button onClick={() => handleDelete(salesperson.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalespeopleList;
