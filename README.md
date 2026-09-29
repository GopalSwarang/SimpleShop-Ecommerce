# SimpleShop — Beginner E-Commerce Website

SimpleShop is a beginner-friendly full-stack e-commerce website built with React.js, Bootstrap 5, Spring Boot, Spring Data JPA, Hibernate and MySQL.

The goal is to demonstrate a realistic college project without introducing advanced technologies such as microservices, Docker, Kafka, Redis, GraphQL, Redux, OAuth or a complex JWT/security system.

---

## 1. Project Overview

SimpleShop lets a customer browse products, search and filter products, view product details, add items to a shopping cart, complete a simple checkout and view order history.

An admin can manage products and categories, view users, view orders and change order statuses from a simple dashboard.

### Main flow

```text
Customer Browser
      ↓
React + Bootstrap 5
      ↓  Axios REST calls
Spring Boot REST API
      ↓
Service Layer
      ↓
Spring Data JPA Repository
      ↓
Hibernate
      ↓
MySQL
```

---

## 2. Features

### Customer

- Home page with hero section, categories and featured products
- Product listing
- Product search
- Product filtering by category
- Product details page
- Add to cart
- Increase/decrease quantity
- Remove product
- Clear cart
- Checkout form
- Demo Cash on Delivery / Demo Payment
- User registration
- User login/logout
- My Orders
- Order details

### Admin

- Dashboard counts
- Product CRUD
- Category CRUD
- Product search in admin table
- View users
- View all orders
- View order details
- Change order status

### Order status

```text
PENDING → CONFIRMED → SHIPPED → DELIVERED
                  ↘
                 CANCELLED
```

---

## 3. Technologies Used

| Layer | Technology |
|---|---|
| Frontend | React 19.3.0 |
| UI | Bootstrap 5.3.8 + small custom CSS |
| HTTP | Axios 1.20.0 |
| Routing | React Router DOM 6.30.6 |
| Build tool | Vite 8.3.1 |
| Backend | Spring Boot 3.5.16 |
| Language | Java 17 |
| REST | Spring Web |
| ORM | Spring Data JPA + Hibernate |
| Database | MySQL |
| Build | Maven 3.9.11 bootstrap scripts |

The project pins concrete versions so the setup is predictable. For a college project, keeping the same major versions on another PC is recommended.

---

## 4. System Requirements

### Minimum practical setup

- Windows 10/11, recent Linux distribution, or macOS
- 4 GB RAM minimum; 8 GB RAM recommended
- About 3–5 GB free disk space for IDE, JDK, Node modules and Maven dependencies
- JDK 17 or a newer compatible JDK
- Eclipse IDE for Enterprise Java and Web Developers (recent release)
- Node.js 24 LTS recommended
- npm included with Node.js
- MySQL 8.x or a compatible recent MySQL release
- Google Chrome, Microsoft Edge or Firefox
- Internet connection for first-time Maven/npm dependency downloads

### Recommended for a comfortable experience

- 8 GB RAM or more
- SSD storage
- JDK 17 LTS
- Node.js 24 LTS
- MySQL 8.x
- Recent Eclipse IDE for Enterprise Java and Web Developers

---

## 5. Requirement Checking Commands

Run these commands in Command Prompt / PowerShell / Terminal.

| Software | Command | What it checks |
|---|---|---|
| Java | `java -version` | Java runtime version |
| Java Compiler | `javac -version` | JDK/compiler version |
| Maven | `mvn -version` | Maven installation |
| Node.js | `node -v` | Node.js version |
| npm | `npm -v` | npm version |
| MySQL | `mysql --version` | MySQL client version |

### Expected project baseline

```text
Java: 17.x
Node.js: 24.x LTS recommended
npm: installed with Node.js
Maven: 3.6.3+ supported; wrapper bootstraps 3.9.11 when possible
MySQL: 8.x recommended
```

Spring Boot 3.5.x supports Java 17+ and Maven 3.6.3+. Node.js 24.x is the recommended LTS line for this project.

---

## 6. Project Structure

```text
SimpleShop-Ecommerce/
│
├── backend/
│   ├── pom.xml
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── .mvn/
│   │   └── wrapper/
│   │       ├── maven-wrapper.properties
│   │       └── README.txt
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/examplesimpleshop/ecommerce/
│   │   │   │   ├── config/
│   │   │   │   ├── controller/
│   │   │   │   ├── dto/
│   │   │   │   ├── entity/
│   │   │   │   ├── repository/
│   │   │   │   ├── service/
│   │   │   │   └── EcommerceApplication.java
│   │   │   └── resources/application.properties
│   │   └── test/
│   │       ├── java/.../EcommerceApplicationTests.java
│   │       └── resources/application-test.properties
│   └── README.md
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   ├── src/
│   └── README.md
│
├── database/
│   └── ecommerce.sql
│
├── screenshots/
│   └── README.md
│
└── README.md
```

The ZIP intentionally does not contain `node_modules`, `target`, `.classpath` or `.project`.

---

## 7. MySQL Installation

Install MySQL Community Server and MySQL Workbench if you want a GUI.

During installation, remember the MySQL `root` password you choose.

### Check installation

```bash
mysql --version
```

If it says the command is not recognized, MySQL may not be installed or its `bin` directory is not in PATH.

On Windows, the MySQL client commonly lives under a folder similar to:

```text
C:\Program Files\MySQL\MySQL Server 8.x\bin
```

You can either add that folder to Windows PATH or use MySQL Workbench instead.

### Check that MySQL is running

Open MySQL Workbench and connect to your local server.

Or, on Windows, open **Services** and look for a MySQL service.

---

## 8. Database Creation

Open MySQL Workbench or MySQL command line.

Run:

```sql
CREATE DATABASE ecommerce_db;
```

Optional:

```sql
SHOW DATABASES;
USE ecommerce_db;
```

You can also run the included file:

```text
database/ecommerce.sql
```

For the normal project flow, you only need to create the empty database because Hibernate/JPA creates the tables from the entity classes.

### Why is `ddl-auto=update` used?

```properties
spring.jpa.hibernate.ddl-auto=update
```

It tells Hibernate to compare the Java entity model with the database schema and create/update tables as needed during development. It is convenient for a college project. It is not a substitute for proper production database migration tooling.

---

## 9. Backend Setup

Open:

```text
SimpleShop-Ecommerce/backend/src/main/resources/application.properties
```

Set your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db?useSSL=false&serverTimezone=Asia/Kolkata&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true

server.port=8080
```

Replace only:

```text
YOUR_PASSWORD
```

with your own local MySQL password.

Do **not** commit your real password to GitHub.

---

## 10. Eclipse Setup

1. Install JDK 17.
2. Install a recent **Eclipse IDE for Enterprise Java and Web Developers**.
3. Start Eclipse.
4. Choose a workspace folder.
5. Select **File → Import**.
6. Choose **Maven → Existing Maven Projects**.
7. Browse to the `backend` folder.
8. Eclipse should detect `pom.xml`.
9. Click **Finish**.
10. Wait for Maven dependencies to download.
11. Open:

```text
src/main/java/com/examplesimpleshop/ecommerce/EcommerceApplication.java
```

12. Right-click the file.
13. Choose **Run As → Java Application**.
14. Watch the Eclipse console.
15. When startup succeeds, the server is available at:

```text
http://localhost:8080
```

Spring Boot itself can run with normal Java development tools; Eclipse is not a special requirement of Spring Boot. citeturn115545search9

---

## 11. Frontend Setup

Install Node.js 24 LTS.

Check:

```bash
node -v
npm -v
```

Open a terminal inside:

```text
SimpleShop-Ecommerce/frontend
```

Run:

```bash
npm install
```

This downloads React, Bootstrap, Axios, React Router and Vite.

---

## 12. Bootstrap Setup

The project uses normal Bootstrap classes rather than React-Bootstrap.

The dependency is:

```json
"bootstrap": "5.3.8"
```

The project imports Bootstrap in `src/main.jsx`:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

Bootstrap 5.3.8 is pinned in `package.json` for predictable installation.

---

## 13. Running Backend

### Eclipse

Right-click `EcommerceApplication.java` → **Run As → Java Application**.

### Command line

Windows:

```bat
mvnw.cmd spring-boot:run
```

Linux/macOS:

```bash
./mvnw spring-boot:run
```

The included scripts bootstrap Maven 3.9.11 into a local `.maven` directory when internet access is available.

If your machine is offline, install Maven manually and use:

```bash
mvn spring-boot:run
```

---

## 14. Running Frontend

From the `frontend` folder:

```bash
npm install
npm start
```

Open:

```text
http://localhost:3000
```

The Vite script is intentionally named `start` so it matches the beginner-friendly command requested in this project brief.

---

## 15. Testing the Application

Use this order:

1. Start MySQL.
2. Start the Spring Boot backend.
3. Confirm backend is using port 8080.
4. Start React with `npm start`.
5. Open `http://localhost:3000`.
6. Browse products.
7. Register/login.
8. Add a product to the cart.
9. Checkout.
10. Check My Orders.
11. Login with the admin account.
12. Test product/category CRUD.
13. Test order status changes.

---

## 16. REST API Endpoints

### Product APIs

```text
GET     /api/products
GET     /api/products/{id}
POST    /api/products
PUT     /api/products/{id}
DELETE  /api/products/{id}
```

Optional server-side query support:

```text
GET /api/products?keyword=phone
GET /api/products?categoryId=1
```

### Category APIs

```text
GET     /api/categories
GET     /api/categories/{id}
POST    /api/categories
PUT     /api/categories/{id}
DELETE  /api/categories/{id}
```

### User APIs

```text
POST    /api/users/register
POST    /api/users/login
GET     /api/users
```

### Order APIs

```text
GET     /api/orders
GET     /api/orders/{id}
GET     /api/orders/user/{userId}
POST    /api/orders
PUT     /api/orders/{id}/status
```

### Dashboard API

```text
GET     /api/dashboard/counts
```

---

## 17. Admin Features

Login with the sample admin account.

Admin dashboard:

```text
http://localhost:3000/admin
```

Admin can:

- Add/edit/delete products
- Search products
- Add/edit/delete categories
- View registered users
- View orders
- View order details
- Change order status

A category cannot be deleted while products still reference it. A cancelled order cannot be reopened in this simple demo, and cancelling an order restores its stock.

---

## 18. Customer Features

A normal user can:

- Register
- Login/logout
- Browse products
- Search/filter products
- View details
- Add to cart
- Change cart quantities
- Checkout
- Place an order
- View My Orders
- View order details

The cart is maintained in browser localStorage for simplicity.

---

## 19. Sample Login Credentials

These accounts are inserted automatically the first time the database is empty.

```yaml
Admin:
  Email: admin@example.com
  Password: admin123

User:
  Email: user@example.com
  Password: user123
```

New registrations always receive the `USER` role. This prevents a normal registration form from creating a new admin account.

---

## 20. Common Errors

### Error: Port 8080 already in use

Another application is already using port 8080.

Solutions:

- Stop the other application.
- Or change the backend port in `application.properties`.

Example:

```properties
server.port=8081
```

If you change the backend port, also change the frontend API URL in:

```text
frontend/src/services/api.js
```

---

### Error: Access denied for user 'root'

Your MySQL username/password is wrong.

Check:

```properties
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
```

Use the actual password created during MySQL installation.

---

### Error: Unknown database 'ecommerce_db'

Create it:

```sql
CREATE DATABASE ecommerce_db;
```

---

### Error: npm is not recognized

Node.js is not installed or its PATH was not updated.

Close and reopen Command Prompt/PowerShell after installing Node.js.

Then run:

```bash
node -v
npm -v
```

---

### Error: CORS error

React runs on port 3000 and Spring Boot runs on port 8080, so the browser treats them as different origins.

`CorsConfig.java` allows:

```text
http://localhost:3000
```

Make sure the React app is really using port 3000.

---

### Error: Cannot connect to MySQL

Check that:

1. MySQL is installed.
2. MySQL service is running.
3. Port 3306 is correct.
4. Username/password are correct.
5. `ecommerce_db` exists.

---

### Error: Module not found in React

Run inside `frontend`:

```bash
npm install
```

Then:

```bash
npm start
```

---

### Maven dependency errors

In Eclipse:

1. Right-click the project.
2. Choose **Maven → Update Project**.
3. Select the project.
4. Click **OK**.
5. Let Maven finish downloading dependencies.

You can also run:

```bat
mvnw.cmd clean test
```

---

## 21. Troubleshooting

### Frontend opens but products are not shown

Check that backend is running on:

```text
http://localhost:8080
```

Then open this GET endpoint in a browser:

```text
http://localhost:8080/api/products
```

If you see JSON, the backend API is responding.

### Products table is empty

The first backend startup should insert sample data. Confirm the database connection is working and check the console for SQL statements.

### Images are not showing

Sample products use public image URLs. If a remote image is unavailable, the React ProductCard/ProductDetails components use a placeholder image fallback.

### Login works but refresh logs the user out in a different browser

The demo stores login information in the current browser's localStorage. This is intentionally simple and not a server-side session/JWT system.

---

## 22. How to Move the Project to Another PC

Copy the ZIP file.

On the new PC:

1. Install JDK 17.
2. Install Eclipse IDE for Enterprise Java and Web Developers.
3. Install Node.js 24 LTS.
4. Install MySQL.
5. Check:

```bash
java -version
javac -version
mvn -version
node -v
npm -v
mysql --version
```

6. Extract the ZIP.
7. Create `ecommerce_db` in MySQL.
8. Edit backend `application.properties`.
9. Replace `YOUR_PASSWORD`.
10. Import the backend into Eclipse as an existing Maven project.
11. Run `EcommerceApplication.java`.
12. Open a terminal inside `frontend`.
13. Run:

```bash
npm install
npm start
```

14. Open:

```text
http://localhost:3000
```

### Important

Do not copy `node_modules` or `target`. Running `npm install` and Maven on the new computer recreates what is needed.

---

## 23. How to Stop the Application

### Frontend

In the terminal where `npm start` is running:

```text
Ctrl + C
```

### Backend

In Eclipse, click the red **Stop** square in the Console view.

Or, when running from terminal:

```text
Ctrl + C
```

### MySQL

Normally leave MySQL running while working on the project. Stop the MySQL service only when you no longer need the database.

---

# New PC Setup — Exact Order

## Step 1 — Install JDK

Install Java 17 JDK.

Check:

```bash
java -version
javac -version
```

Both should report Java 17.x if you follow the project baseline exactly.

## Step 2 — Install Eclipse

Install Eclipse IDE for Enterprise Java and Web Developers.

## Step 3 — Install Node.js

Install Node.js 24 LTS.

Check:

```bash
node -v
npm -v
```

## Step 4 — Install MySQL

Install MySQL Server and optionally Workbench.

## Step 5 — Check all versions

```bash
java -version
javac -version
mvn -version
node -v
npm -v
mysql --version
```

## Step 6 — Extract ZIP

Extract:

```text
SimpleShop-Ecommerce.zip
```

## Step 7 — Open backend in Eclipse

Use **File → Import → Maven → Existing Maven Projects** and select `backend`.

## Step 8 — Configure MySQL

Open:

```text
backend/src/main/resources/application.properties
```

Replace:

```text
YOUR_PASSWORD
```

## Step 9 — Create database

```sql
CREATE DATABASE ecommerce_db;
```

## Step 10 — Run backend

Run `EcommerceApplication.java` in Eclipse.

## Step 11 — Open frontend folder

Open Command Prompt/PowerShell in:

```text
SimpleShop-Ecommerce/frontend
```

## Step 12 — Install frontend dependencies

```bash
npm install
```

## Step 13 — Start frontend

```bash
npm start
```

## Step 14 — Open browser

```text
http://localhost:3000
```

---

# API Testing with Browser or Postman

## GET products

Browser:

```text
http://localhost:8080/api/products
```

Expected response is a JSON array similar to:

```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 59999.00,
    "stock": 12,
    "category": {
      "id": 1,
      "name": "Electronics"
    }
  }
]
```

## POST register

URL:

```text
POST http://localhost:8080/api/users/register
```

Body:

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "test123"
}
```

## POST login

```text
POST http://localhost:8080/api/users/login
```

Body:

```json
{
  "email": "user@example.com",
  "password": "user123"
}
```

## POST product

```text
POST http://localhost:8080/api/products
```

Body:

```json
{
  "name": "Mechanical Keyboard",
  "description": "USB mechanical keyboard",
  "price": 2499,
  "stock": 10,
  "imageUrl": "https://example.com/keyboard.jpg",
  "categoryId": 1
}
```

## POST order

```text
POST http://localhost:8080/api/orders
```

Body:

```json
{
  "userId": 2,
  "customerName": "Demo User",
  "email": "user@example.com",
  "phone": "9876543210",
  "address": "123 Main Road",
  "city": "Mumbai",
  "state": "Maharashtra",
  "pincode": "400001",
  "items": [
    {
      "productId": 1,
      "quantity": 1
    }
  ]
}
```

## PUT order status

```text
PUT http://localhost:8080/api/orders/1/status
```

Body:

```json
{
  "status": "CONFIRMED"
}
```

Postman is optional. GET APIs can be checked directly in a browser.

---

# Manual Testing Checklist

```text
[ ] Backend starts
[ ] Frontend starts
[ ] Home page opens
[ ] Products display
[ ] Product details work
[ ] Search works
[ ] Category filter works
[ ] Add product works
[ ] Update product works
[ ] Delete product works
[ ] Register works
[ ] Login works
[ ] Logout works
[ ] Cart works
[ ] Quantity increase works
[ ] Quantity decrease works
[ ] Remove item works
[ ] Checkout works
[ ] Order placement works
[ ] My Orders works
[ ] Order details works
[ ] Admin dashboard works
[ ] Admin category CRUD works
[ ] Admin product CRUD works
[ ] Admin users list works
[ ] Admin order list works
[ ] Admin can update order status
```

---

# Viva / College Project Explanation

## Project Introduction

**SimpleShop is a full-stack e-commerce website where customers can browse products, manage a shopping cart and place demo orders. An admin can manage products, categories and orders.**

## What problem does it solve?

It demonstrates the main flow of an online store in one application:

```text
Browse → Search → Product Details → Cart → Checkout → Order → Order Tracking
```

It also demonstrates how a React frontend communicates with a Java Spring Boot backend and stores data in MySQL.

## Why React?

React is useful for building interactive user interfaces. We can split the UI into reusable components such as Navbar and ProductCard and update the screen when state changes.

## Why Bootstrap?

Bootstrap gives ready-made responsive classes for grids, cards, buttons, forms, tables and navigation. It reduces the amount of custom CSS needed.

## Why Spring Boot?

Spring Boot makes it simple to build Java web applications and REST APIs with less configuration.

## Why MySQL?

MySQL is a popular relational database and is suitable for structured data such as users, categories, products and orders.

## Why JPA/Hibernate?

JPA provides a standard way to map Java objects to database tables. Hibernate is the implementation used here. This means we can work with entities and repositories instead of writing SQL for every CRUD operation.

## Architecture

```text
React
  ↓
REST API
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
JPA / Hibernate
  ↓
MySQL
```

### Simple explanation

- **React** displays pages to the user.
- **Controller** receives HTTP requests.
- **Service** contains application/business logic.
- **Repository** talks to the database through JPA.
- **Hibernate** converts Java entity operations into SQL.
- **MySQL** stores the data permanently.

---

# 25 Common Viva Questions and Simple Answers

## 1. What is React?

React is a JavaScript library used to build interactive user interfaces.

## 2. Why did you use React?

I used React because it supports reusable components and updates the user interface efficiently when data changes.

## 3. What is Bootstrap?

Bootstrap is a frontend CSS framework that provides ready-made responsive UI classes and components.

## 4. Why use Bootstrap instead of writing all CSS yourself?

Bootstrap saves development time and gives a responsive layout with fewer custom CSS rules.

## 5. What is Spring Boot?

Spring Boot is a Java framework used to build Spring applications quickly with less configuration.

## 6. What is a REST API?

A REST API is a way for different applications to communicate through HTTP methods such as GET, POST, PUT and DELETE.

## 7. What is CRUD?

CRUD means Create, Read, Update and Delete.

## 8. What is JPA?

JPA is a Java standard for mapping Java objects to relational database tables.

## 9. What is Hibernate?

Hibernate is an ORM framework and the JPA implementation used by this project.

## 10. What is an Entity?

An entity is a Java class mapped to a database table.

## 11. What is a Repository?

A repository is the layer used to perform database operations such as save, find and delete.

## 12. What is a Service?

A service contains the application's business logic between the controller and repository.

## 13. What is a Controller?

A controller receives HTTP requests and returns HTTP responses.

## 14. How does React communicate with Spring Boot?

React sends HTTP requests using Axios to the Spring Boot REST API, and Spring Boot returns JSON responses.

## 15. How does Spring Boot connect to MySQL?

Spring Boot uses the MySQL JDBC driver, datasource settings and JPA/Hibernate to connect to MySQL.

## 16. What is MySQL?

MySQL is a relational database management system that stores data in tables.

## 17. What is a primary key?

A primary key uniquely identifies each row in a table.

## 18. What is a foreign key?

A foreign key links one table to another table using a referenced key.

## 19. What is CORS?

CORS is a browser security mechanism that controls whether a frontend from one origin can call a backend from another origin.

## 20. What happens when a customer places an order?

React sends the customer details and product IDs/quantities to the order API. The service checks stock, calculates the total, reduces stock and saves the order and order items.

## 21. How does the shopping cart work?

The React application stores cart items in its state and also saves them in browser localStorage so the cart survives a refresh.

## 22. How does admin CRUD work?

The admin form sends POST or PUT requests to the Spring Boot product/category API. The backend saves the data through the service and repository.

## 23. Why did you use Maven?

Maven manages Java dependencies, project building and testing using the `pom.xml` file.

## 24. What is dependency injection?

Dependency injection means Spring creates required objects and provides them to classes instead of those classes creating the objects themselves.

## 25. What is Spring Data JPA?

Spring Data JPA provides repository interfaces and common database operations so we can write less database-access code.

---

# Security and Production Disclaimer

This is a learning/college project.

The authentication is intentionally simplified. The backend stores and compares demo passwords directly so the code is easy to explain in a viva. This should **not** be copied into a real production application.

This project does not include a real payment gateway. Checkout is a demonstration flow only.

For a production application, improve at least:

- Password hashing
- Proper server-side authorization
- Session or token security
- HTTPS
- Validation and rate limiting
- Secure storage of database credentials
- Database migrations
- Audit logging
- Production error handling
- Real payment integration

Never publish your actual database password to GitHub.

---

# What Is Verified and What Is Not

## Verified / inspected in the generated project

- The requested React/Spring Boot/MySQL file structure is present.
- Backend package names match the directory structure.
- REST mappings are consistent with the frontend API service.
- Entity relationships use beginner-friendly JPA annotations.
- Password is marked write-only for JSON responses.
- Product/category/order/user DTOs are wired to their controllers and services.
- React routes are connected to the requested pages.
- Bootstrap is imported in the React entry point.
- Frontend API URLs point to `http://localhost:8080/api`.
- Frontend dev server is configured for `http://localhost:3000`.
- Sample login credentials are implemented by the backend data initializer.

## Not fully tested in this generation environment

The execution runner currently has Java and Node.js available, but Maven and MySQL are not installed. An `npm install` attempt also did not complete because this runner could not reliably reach the external npm registry. Therefore, I did **not** claim a successful Maven compile, Spring Boot startup against MySQL, or React production build here.

The project includes a Spring Boot context test with an H2 test database so that on a normal connected development machine you can run:

```bash
mvnw.cmd test
```

or:

```bash
./mvnw test
```

That test is not a substitute for testing the application against a real local MySQL database.

---

# Final URLs

```yaml
Frontend: http://localhost:3000
Backend: http://localhost:8080
Products API: http://localhost:8080/api/products
Admin Dashboard: http://localhost:3000/admin
```

---

# Run Commands — Quick Reference

```bash
java -version
javac -version
mvn -version
node -v
npm -v
mysql --version
```

Backend in Eclipse:

```text
EcommerceApplication.java
→ Right-click
→ Run As
→ Java Application
```

Frontend:

```bash
cd frontend
npm install
npm start
```

Then open:

```text
http://localhost:3000
```
