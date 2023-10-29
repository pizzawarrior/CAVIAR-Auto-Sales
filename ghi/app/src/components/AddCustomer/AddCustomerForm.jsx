import React, { useState } from "react";
import axios from "axios";
import { TechDetails } from "./style";
import Button from "../Button/Button";
import { ButtonStyle } from "../Button/style";
import { ModalContainer } from "../../pages/Inventory/style";
import { Container } from "../Manufacturers/style";

const AddCustomerForm = ({ customers, setFire }) => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const handleDelete = (id) => {
    axios
        .delete(`http://localhost:8090/api/customers/${id}/`)
        .then(() => setFire(true))
        .catch((err) => console.log(err));
};

  const handleAdd = () => {
    const newCustomer = {
        first_name: firstName,
        last_name: lastName,
        address: address,
        phone_number: phoneNumber,
    };
    axios
      .post("http://localhost:8090/api/customers/", newCustomer).then(() => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setPhoneNumber("")
        setFire(true)
        setShowModal(false)
      })
    };

  return (
    <Container>
      <div id="buttonBox">
        <h1>Customers</h1>
            <Button
                text="Add Customer"
                showModal={setShowModal}
            />
      </div>

      {showModal && (
        <ModalContainer>
        <h1>Add Customer</h1>
          <input
            type="text"
            placeholder='First name'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />

            <br />
          <input
            type="text"
            placeholder='Last name'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <br />

          <input
            type="text"
            placeholder='Address'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <br />

          <input
            type="text"
            placeholder='Phone number'
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />

        <br />
        <div id='buttons'>
          <ButtonStyle onClick={() => handleAdd()}>
            Submit
          </ButtonStyle>

          <ButtonStyle
            onClick={() => {
                setShowModal(false);
                setFirstName('');
                setLastName('');
                setAddress('');
                setPhoneNumber('')
            }}
        >
            CANCEL
        </ButtonStyle>

        </div>
        </ModalContainer>
      )}

            {customers.map((customer) => {
                return (
                <TechDetails key={customer.id}>
                    <p>{customer.first_name}</p>
                    <p>{customer.last_name}</p>
                    <p>{customer.address}</p>
                    <p>{customer.phone_number}</p>
                    <button
                        onClick={() =>
                            handleDelete(customer.id)
                        }
                    >
                        Delete
                    </button>
                </TechDetails >
                )
            })}
    </Container>
  );
};

export default AddCustomerForm;
