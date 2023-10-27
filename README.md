# Caviar: Luxury Car Service and Inventory App

Team:

* Jessica Dickerson - Service 
* Ian Norstad - Sales

## Running the Project

1. Fork and clone the repo
2. Run the following commands in your terminal:
- docker volume create beta-data
- docker-compose build
- docker-compose up

## Design

## Service Microservice
The microservice for all actions and informaton related to the service department of the dealership. The primary actions are to add technicians, add appointments, and update appointment statuses.

### Service Models
1. AutomobileVO: this is the model created by the poller function. It saves vin and sold status by pulling the data from the Automobile model in Inventory.
2. Technician: saves a technician's employee number, and first and last name.
3. Appointment: saves the appointment time, reason, status, and customer. Also records the automobile VIN and the technician, (as a ForeignKey,) performing the service.

### Service Endpoints
1. api/technicians/ - GET all technicians or create a technician
2. api/technicians/id/ - Delete a technician
3. api/appointments/ - GET all appointments or create an appointment
4. api/appointments/id/ - Delete an appointment
5. api/appointments/id/cancel/ - Set an appointment's status to canceled
6. api/appointments/id/finish/ - Set an appointment's status to finished

## Sales microservice
The microservice for all actions and information related to the sales department of the dealership. Primary actions include adding customers, salespeople, and sales records to the database, as well as the ability to delete them.

### Sales Models
1. AutomobileVO: this is the model created by the poller function. It saves vin and sold status by pulling the data from the Automobile model in Inventory.
2. Customer: saves the first name, last name, address, and phone number.
3. Salesperson: saves the first name, last name, and employee ID.
4. Sales: saves the price, as well as the information of the customer, employee, and automobile, all as ForeignKeys.

### Sales Endpoints
1. api/customers/ - GET all customers or create a customer
2. api/customers/id/ - Delete a customer
3. api/salespeople/ - GET all salespeople or create a salesperson
4. api/salespeople/id/ - Delete a salesperson
5. api/sales/ - List all sales or create a sale
6. api/sales/id/ - Delete a sale


