
# School Management API  

This project implements a set of APIs for managing school data, including adding new schools and retrieving a list of schools sorted by proximity to a user-specified location. The APIs are built using **Node.js**, **Express.js**, and **MySQL**, with a focus on efficient data handling and robust input validation.  

---

## Features  

1. **Add School API**  
   - Allows adding a new school to the database with name, address, latitude, and longitude.  
   - Ensures all inputs are validated for correctness and consistency.  

2. **List Schools API**  
   - Fetches all schools from the database and sorts them by their geographical distance from the user-provided coordinates.  
   - Uses the **Haversine formula** for accurate distance calculations.  

---

## Project Details  

- **Developer:** Shiv Pratap Singh Waghel  
- **Contact Email:** [sp09singhwaghel@gmail.com](mailto:sp09singhwaghel@gmail.com)  
- **Contact Number:** +91 9711707732  
- **Skill Rating (Node.js):** Good (4/5)  
- **Resume:** [View Resume](https://drive.google.com/file/d/1DYiDcE3iiYCr8LinSVOMnNC6RoBF22yH/view)  

---

## Deliverables  

### 1. Source Code  
The complete implementation of the APIs is available in the GitHub repository:  
[Source Code Repository](https://github.com/shivPratap007/school-management)  

### 2. Live API Endpoints  
The APIs are deployed and accessible for testing at the following URLs:  

- **Add School API**  
  - **Method:** `POST`  
  - **Endpoint:** [https://school-management-livid-six.vercel.app/addSchool](https://school-management-livid-six.vercel.app/addSchool)  

- **List Schools API**  
  - **Method:** `GET`  
  - **Endpoint:** [https://school-management-livid-six.vercel.app/listSchools](https://school-management-livid-six.vercel.app/listSchools)  

### 3. Postman Collection  
A Postman collection is available for testing the APIs, including sample requests and responses:  
[Postman Collection Link](https://www.postman.com/navigation-astronomer-55617972/efadb27b-f8df-429a-8a3a-427c219e9bdb/request/wkw8gni/get-all-the-schools)  

---

## Response Examples  

### Add School API  
- **Response Example:**  
  ```json
  { "message": "School added successfully!" }
  ```  

### List Schools API  
- **Query Parameters:**  
  - `latitude`: User's latitude  
  - `longitude`: User's longitude  
- **Response Example:**  
  ```json
  [
      { "id": 1, "name": "Greenwood High School", "address": "123 Main Street", "distance": 2.5 },
      { "id": 2, "name": "Springfield Academy", "address": "456 Elm Street", "distance": 3.1 }
  ]
  ```  

---

## Technologies Used  

- **Backend Framework:** Node.js, Express.js  
- **Database:** MySQL  
- **Hosting Platform:** Vercel  
- **API Testing Tool:** Postman  

---

For any queries or support, feel free to contact me at [sp09singhwaghel@gmail.com](mailto:sp09singhwaghel@gmail.com) or +91 9711707732.  
