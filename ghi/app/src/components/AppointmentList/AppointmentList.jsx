import React from 'react'
import { ListContainer } from '../ServiceTechs/style'

const AppointmentList = ({ appointments }) => {
    console.log(appointments)
  return (
    <ListContainer>
        <h1>Service Appointments</h1>
    </ListContainer>
  )
}

export default AppointmentList
