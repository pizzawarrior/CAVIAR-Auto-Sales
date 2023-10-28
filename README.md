# CarCar

An application for internal dealership use. The expected users would be dealership management and team leads for the monitoring of sales and service activities, as well as current inventory.

Team:

* Jessica Dickerson - Service
* Person 2 - Which microservice?

## Running the Project

1. Fork and clone the repo
2. Run the following commands in your terminal
- docker volume create beta-data
- docker-compose build
- docker-compose up

To view the project, open http://localhost:3000/

## Design

## Service microservice
The microservice for all actions and informaton related to the service department of the dealership. The primary actions are to add technicians, add appointments, and update appointment statuses.

### Service Models
1. AutomobileVO: this is the model created by the poller function. It saves vin and sold status, taking it from the Automobile model in Inventory.
2. Technician: saves a technician's employee number and first and last name.
3. Appointment: saves the appointment time, reason, status, and customer. Also records the automobile vin and the technician (as a ForeignKey) performing the service.

### Service Endpoints
1. api/technicians/ - get all technicians or create a technician
2. api/technicians/<int:id>/ - delete a technician
3. api/appointments/ - get all appointments or create an appointment
4. api/appointments/<int:id>/ - delete an appointment
5. api/appointments/<int:id>/cancel/ - set an appointment's status to canceled
6. api/appointments/<int:id>/finish/ - set an appointment's status to finished


## Sales microservice

Explain your models and integration with the inventory
microservice, here.
