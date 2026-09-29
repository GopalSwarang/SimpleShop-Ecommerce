-- SimpleShop database helper script
-- Hibernate/JPA normally creates the schema from the Java entities.
-- This file is useful when you want to create the database and sample data manually.

CREATE DATABASE IF NOT EXISTS ecommerce_db;
USE ecommerce_db;

CREATE TABLE IF NOT EXISTS categories (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS products (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(1000),
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    image_url VARCHAR(1000),
    category_id BIGINT NOT NULL,
    CONSTRAINT fk_products_category FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    order_date DATETIME NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    address VARCHAR(500) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    CONSTRAINT fk_orders_user FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS order_items (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    order_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES orders(id),
    CONSTRAINT fk_order_items_product FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT IGNORE INTO categories (id, name, description) VALUES
(1, 'Electronics', 'Gadgets and electronic devices'),
(2, 'Clothing', 'Everyday clothes and footwear'),
(3, 'Books', 'Programming and learning books'),
(4, 'Accessories', 'Bags and useful everyday accessories');

INSERT IGNORE INTO products (id, name, description, price, stock, image_url, category_id) VALUES
(1, 'Laptop', '15.6-inch laptop suitable for study, coding and office work.', 59999.00, 12, 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80', 1),
(2, 'Smartphone', 'Modern smartphone with a bright display and reliable battery.', 24999.00, 20, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80', 1),
(3, 'Wireless Headphones', 'Comfortable wireless headphones for music, classes and calls.', 2499.00, 35, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80', 1),
(4, 'T-Shirt', 'Comfortable cotton T-shirt for everyday wear.', 799.00, 50, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80', 2),
(5, 'Jeans', 'Classic blue denim jeans with a comfortable fit.', 1599.00, 30, 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80', 2),
(6, 'Running Shoes', 'Lightweight sports shoes for walking and running.', 2299.00, 22, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80', 2),
(7, 'Java Programming Book', 'Beginner-friendly Java book covering core programming concepts.', 899.00, 25, 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80', 3),
(8, 'Spring Boot Guide', 'A practical introduction to building REST APIs with Spring Boot.', 1099.00, 18, 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80', 3),
(9, 'Laptop Backpack', 'Water-resistant backpack with a dedicated laptop compartment.', 1299.00, 28, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80', 4),
(10, 'Travel Wallet', 'Compact wallet for cards, cash and travel documents.', 499.00, 40, 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80', 4);

INSERT IGNORE INTO users (id, name, email, password, role) VALUES
(1, 'SimpleShop Admin', 'admin@example.com', 'admin123', 'ADMIN'),
(2, 'Demo User', 'user@example.com', 'user123', 'USER');
