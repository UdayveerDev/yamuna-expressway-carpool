# API Documentation

## Endpoints

### 1. **Get All Carpool Rides**  
**GET** `/api/rides`  
Returns a list of all carpool rides.

### 2. **Create a New Carpool Ride**  
**POST** `/api/rides`  
Creates a new carpool ride.  
**Request Body:**  
```json
{

    "departure": "string",
    "destination": "string",
    "date": "YYYY-MM-DD",
    "seats_available": "integer"

}
```

### 3. **Get a Specific Carpool Ride**  
**GET** `/api/rides/:id`  
Returns details of a specific carpool ride based on the ride ID.

### 4. **Update a Carpool Ride**  
**PUT** `/api/rides/:id`  
Updates details of a specific carpool ride.  
**Request Body:**  
```json
{

    "departure": "string",
    "destination": "string",
    "date": "YYYY-MM-DD",
    "seats_available": "integer"

}
```

### 5. **Delete a Carpool Ride**  
**DELETE** `/api/rides/:id`  
Deletes a specific carpool ride.

---  

### Error Handling
Each API response includes an `error` field when applicable, detailing the nature of the error.

### Authentication
Some endpoints may require authentication. Ensure the user is logged in to access those endpoints.  
