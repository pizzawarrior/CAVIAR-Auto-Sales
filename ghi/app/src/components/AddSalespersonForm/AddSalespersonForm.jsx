import React, { useState } from 'react'
import axios from 'axios'

const AddSalespersonForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employeeId, setEmployeeId] = useState('')

    const handleClick = () => {
        // e.preventDefault()
        console.log('click')

        axios
            .post('http://localhost:8090/api/salespeople/', {
                first_name: firstName,
                last_name: lastName,
                employee_id: employeeId,
            }).then(({data}) => console.log(data))
            .catch(err => console.log(err))
    }

  return (

        <form>
            <label>First Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            />

            <label>Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            />

            <label>Employee ID</label>
            <input type="text" onChange={(e) => setEmployeeId(e.target.value)}
            value={employeeId}
            />

            <button onClick={() => handleClick()}>Submit</button>
        </form>


  )
}

export default AddSalespersonForm
