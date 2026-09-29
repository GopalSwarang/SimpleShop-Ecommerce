package com.examplesimpleshop.ecommerce.config;

import com.examplesimpleshop.ecommerce.entity.Category;
import com.examplesimpleshop.ecommerce.entity.Product;
import com.examplesimpleshop.ecommerce.entity.Role;
import com.examplesimpleshop.ecommerce.entity.User;
import com.examplesimpleshop.ecommerce.repository.CategoryRepository;
import com.examplesimpleshop.ecommerce.repository.ProductRepository;
import com.examplesimpleshop.ecommerce.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner loadSampleData(CategoryRepository categoryRepository,
                                     ProductRepository productRepository,
                                     UserRepository userRepository) {
        return args -> {
            if (categoryRepository.count() == 0) {
                Category electronics = categoryRepository.save(new Category("Electronics", "Gadgets and electronic devices"));
                Category clothing = categoryRepository.save(new Category("Clothing", "Everyday clothes and footwear"));
                Category books = categoryRepository.save(new Category("Books", "Programming and learning books"));
                Category accessories = categoryRepository.save(new Category("Accessories", "Bags and useful everyday accessories"));

                if (productRepository.count() == 0) {
                    productRepository.save(new Product(
                            "Laptop",
                            "15.6-inch laptop suitable for study, coding and office work.",
                            new BigDecimal("59999.00"), 12,
                            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
                            electronics));
                    productRepository.save(new Product(
                            "Smartphone",
                            "Modern smartphone with a bright display and reliable battery.",
                            new BigDecimal("24999.00"), 20,
                            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
                            electronics));
                    productRepository.save(new Product(
                            "Wireless Headphones",
                            "Comfortable wireless headphones for music, classes and calls.",
                            new BigDecimal("2499.00"), 35,
                            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
                            electronics));
                    productRepository.save(new Product(
                            "T-Shirt",
                            "Comfortable cotton T-shirt for everyday wear.",
                            new BigDecimal("799.00"), 50,
                            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
                            clothing));
                    productRepository.save(new Product(
                            "Jeans",
                            "Classic blue denim jeans with a comfortable fit.",
                            new BigDecimal("1599.00"), 30,
                            "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
                            clothing));
                    productRepository.save(new Product(
                            "Running Shoes",
                            "Lightweight sports shoes for walking and running.",
                            new BigDecimal("2299.00"), 22,
                            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
                            clothing));
                    productRepository.save(new Product(
                            "Java Programming Book",
                            "Beginner-friendly Java book covering core programming concepts.",
                            new BigDecimal("899.00"), 25,
                            "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80",
                            books));
                    productRepository.save(new Product(
                            "Spring Boot Guide",
                            "A practical introduction to building REST APIs with Spring Boot.",
                            new BigDecimal("1099.00"), 18,
                            "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
                            books));
                    productRepository.save(new Product(
                            "Laptop Backpack",
                            "Water-resistant backpack with a dedicated laptop compartment.",
                            new BigDecimal("1299.00"), 28,
                            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
                            accessories));
                    productRepository.save(new Product(
                            "Travel Wallet",
                            "Compact wallet for cards, cash and travel documents.",
                            new BigDecimal("499.00"), 40,
                            "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
                            accessories));
                }
            }

            if (userRepository.count() == 0) {
                userRepository.save(new User("SimpleShop Admin", "admin@example.com", "admin123", Role.ADMIN));
                userRepository.save(new User("Demo User", "user@example.com", "user123", Role.USER));
            }
        };
    }
}
