package com.examplesimpleshop.ecommerce.repository;

import com.examplesimpleshop.ecommerce.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserIdOrderByOrderDateDesc(Long userId);
    long countByUserId(Long userId);
}
