import React from "react";
import { Container } from "../Manufacturers/style";

const AutoList = ({autos}) => {
  return (
    <Container>
      <h1>Automobiles</h1>
      <table>
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold Status</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => {
            return (
              <tr key={auto.vin}>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.name}</td>
                <td>{auto.model.manufacturer.name}</td>
                <td>{auto.sold ? 'yes' : 'no'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default AutoList;
