# NestJS Gym API

A simple REST API built using NestJS to understand backend fundamentals such as modules, controllers, services, routing, and API testing with Postman.

## Features

* GET all gyms
* POST new gym
* Route parameter handling
* Request body logging
* In-memory data storage

## Technologies Used

* NestJS
* TypeScript
* Node.js
* Postman

## API Endpoints

### Get All Gyms

GET /gym

### Create Gym

POST /gym

Sample Request:

{
"id": 3,
"name": "Power House",
"address": "Nashik",
"rating": 4.8
}

## Run Locally

npm install

npm run start:dev

Server runs on:

http://localhost:3000
