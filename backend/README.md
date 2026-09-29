# SimpleShop — Backend

Beginner-friendly Spring Boot REST API for the SimpleShop e-commerce project.

## Technology

- Java 17
- Spring Boot 3.5.16
- Spring Web
- Spring Data JPA
- Hibernate
- MySQL
- Maven

## Package structure

```text
com.examplesimpleshop.ecommerce
├── config
├── controller
├── dto
├── entity
├── repository
├── service
└── EcommerceApplication.java
```

## MySQL setup

1. Start MySQL.
2. Create the database:

```sql
CREATE DATABASE ecommerce_db;
```

3. Open `src/main/resources/application.properties`.
4. Replace `YOUR_PASSWORD` with your MySQL root password.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db?useSSL=false&serverTimezone=Asia/Kolkata&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
```

`ddl-auto=update` asks Hibernate to create missing tables and update the mapped schema during development. It should not be treated as a production database-migration strategy.

## Run in Eclipse

1. Open Eclipse.
2. Choose **File → Import → Maven → Existing Maven Projects**.
3. Select the `backend` folder.
4. Click **Finish**.
5. Wait for Maven dependencies to finish downloading.
6. Open `EcommerceApplication.java`.
7. Right-click → **Run As → Java Application**.
8. The console should show Spring Boot starting on port 8080.

## Run from terminal

Windows:

```bat
mvnw.cmd spring-boot:run
```

Linux/macOS:

```bash
./mvnw spring-boot:run
```

The included scripts bootstrap Maven 3.9.11 into `backend/.maven` when internet access is available. They are lightweight bootstrap scripts rather than the standard Maven Wrapper JAR distribution.

## Sample data

On the first run, the application automatically creates:

- 4 categories
- 10 products
- 1 admin user
- 1 normal user

## Authentication note

This college project uses a deliberately simple login check: the backend compares the supplied password with the stored password. This is easy to understand for a viva, but it is **not production-grade authentication**. A real application should use strong password hashing, server-side authorization, HTTPS, secure sessions/tokens, rate limiting and other protections.

## API endpoints

### Products

- `GET /api/products`
- `GET /api/products/{id}`
- `POST /api/products`
- `PUT /api/products/{id}`
- `DELETE /api/products/{id}`

Optional query parameters:

- `GET /api/products?keyword=phone`
- `GET /api/products?categoryId=1`

### Categories

- `GET /api/categories`
- `GET /api/categories/{id}`
- `POST /api/categories`
- `PUT /api/categories/{id}`
- `DELETE /api/categories/{id}`

### Users

- `POST /api/users/register`
- `POST /api/users/login`
- `GET /api/users`

### Orders

- `GET /api/orders`
- `GET /api/orders/{id}`
- `GET /api/orders/user/{userId}`
- `POST /api/orders`
- `PUT /api/orders/{id}/status`

### Dashboard

- `GET /api/dashboard/counts`

## Example product JSON

```json
{
  "name": "USB Keyboard",
  "description": "Simple wired keyboard",
  "price": 699,
  "stock": 15,
  "imageUrl": "https://example.com/keyboard.jpg",
  "categoryId": 1
}
```

## Example order JSON

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
    {"productId": 1, "quantity": 2}
  ]
}
```

## Test profile

The project includes `application-test.properties` with an in-memory H2 database and a simple `contextLoads` test.

```bat
mvnw.cmd test
```

or

```bash
./mvnw test
```
