# API Documentation

## User Registration Endpoint

### /users/register

Registers a new user in the application.

### HTTP Method

POST

### Description
This endpoint creates a new user account using the provided personal details, email address, and password.

### Request Body
The request body must be sent as JSON and should include the following fields:

- `fullName.firstName` (required): string, minimum 3 characters
- `fullName.lastName` (optional): string, minimum 3 characters if provided
- `email` (required): valid email address
- `password` (required): string, minimum 6 characters

### Example Request
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "123456"
}
```

### Success Response
- Status Code: `201 Created`
- Description: User successfully registered

### Validation Errors
- Status Code: `400 Bad Request`
- Description: Invalid input data, such as invalid email, short first name, or short password

### Server Errors
- Status Code: `500 Internal Server Error`
- Description: Something went wrong while processing the request

---

## User Login Endpoint

### /users/login

Authenticates an existing user and returns a JWT token.

### HTTP Method

POST

### Description
This endpoint logs in a user by validating the provided email and password.

### Request Body
The request body must be sent as JSON and should include the following fields:

- `email` (required): valid email address
- `password` (required): string, minimum 6 characters

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "123456"
}
```

### Success Response
- Status Code: `200 OK`
- Description: User successfully logged in and a token is returned

### Invalid Credentials
- Status Code: `401 Unauthorized`
- Description: Invalid email or password

### Validation Errors
- Status Code: `400 Bad Request`
- Description: Invalid input data, such as invalid email or short password

### Server Errors
- Status Code: `500 Internal Server Error`
- Description: Something went wrong while processing the request

---

## Get User Profile Endpoint

### /users/me

Returns the authenticated user's profile information.

### HTTP Method

GET

### Description
This endpoint retrieves the logged-in user's profile details using the authentication token.

### Authentication
Include a valid JWT token in the request headers or cookies.

### Success Response
- Status Code: `200 OK`
- Description: User profile returned successfully

### Unauthorized
- Status Code: `401 Unauthorized`
- Description: Missing or invalid authentication token

### Server Errors
- Status Code: `500 Internal Server Error`
- Description: Something went wrong while processing the request

---

## Logout Endpoint

### /users/logout

Logs out the authenticated user and invalidates the current token.

### HTTP Method

GET

### Description
This endpoint clears the authentication cookie and blacklists the current token.

### Authentication
Include a valid JWT token in the request headers or cookies.

### Success Response
- Status Code: `200 OK`
- Description: User successfully logged out

### Unauthorized
- Status Code: `401 Unauthorized`
- Description: Missing or invalid authentication token

### Server Errors
- Status Code: `500 Internal Server Error`
- Description: Something went wrong while processing the request

---

## Captain Registration Endpoint

### /captains/register

Registers a new captain in the application.

### HTTP Method

POST

### Description
This endpoint creates a new captain account using the provided personal details, email address, password, and vehicle information.

### Request Body
The request body must be sent as JSON and should include the following fields:

- `fullName.firstName` (required): string, minimum 3 characters
- `fullName.lastName` (required): string, minimum 3 characters
- `email` (required): valid email address
- `password` (required): string, minimum 6 characters
- `vehicle.color` (required): string, minimum 3 characters
- `vehicle.plate` (required): string, minimum 3 characters
- `vehicle.capacity` (required): integer, minimum 1
- `vehicle.vehicleType` (required): string, must be one of: 'car', 'motorcycle', 'auto'

### Example Request
```json
{
  "fullName": {
    "firstName": "Jane",
    "lastName": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "123456",
  "vehicle": {
    "color": "blue",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Success Response
- Status Code: `201 Created`
- Description: Captain successfully registered with token and captain details

### Captain Already Exists
- Status Code: `400 Bad Request`
- Description: A captain with the provided email already exists

### Validation Errors
- Status Code: `400 Bad Request`
- Description: Invalid input data, such as invalid email, short first name, short password, invalid vehicle details, or invalid vehicle type

### Server Errors
- Status Code: `500 Internal Server Error`
- Description: Something went wrong while processing the request

---

## Captain Login Endpoint

### /captains/login

Authenticates an existing captain and returns a JWT token.

### HTTP Method

POST

### Description
This endpoint logs in a captain by validating the provided email and password.

### Request Body
The request body must be sent as JSON and should include the following fields:

- `email` (required): valid email address
- `password` (required): string, minimum 6 characters

### Example Request
```json
{
  "email": "jane.smith@example.com",
  "password": "123456"
}
```

### Success Response
- Status Code: `200 OK`
- Description: Captain successfully logged in and a token is returned

### Invalid Credentials
- Status Code: `401 Unauthorized`
- Description: Invalid email or password

### Validation Errors
- Status Code: `400 Bad Request`
- Description: Invalid input data, such as invalid email or short password

### Server Errors
- Status Code: `500 Internal Server Error`
- Description: Something went wrong while processing the request

---

## Get Captain Profile Endpoint

### /captains/me

Returns the authenticated captain's profile information.

### HTTP Method

GET

### Description
This endpoint retrieves the logged-in captain's profile details using the authentication token.

### Authentication
Include a valid JWT token in the request headers or cookies.

### Success Response
- Status Code: `200 OK`
- Description: Captain profile returned successfully

### Unauthorized
- Status Code: `401 Unauthorized`
- Description: Missing or invalid authentication token

### Server Errors
- Status Code: `500 Internal Server Error`
- Description: Something went wrong while processing the request

---

## Captain Logout Endpoint

### /captains/logout

Logs out the authenticated captain and invalidates the current token.

### HTTP Method

GET

### Description
This endpoint clears the authentication cookie and blacklists the current token.

### Authentication
Include a valid JWT token in the request headers or cookies.

### Success Response
- Status Code: `200 OK`
- Description: Captain successfully logged out

### Unauthorized
- Status Code: `401 Unauthorized`
- Description: Missing or invalid authentication token

### Server Errors
- Status Code: `500 Internal Server Error`
- Description: Something went wrong while processing the request
