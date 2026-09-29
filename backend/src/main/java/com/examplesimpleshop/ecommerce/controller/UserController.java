package com.examplesimpleshop.ecommerce.controller;

import com.examplesimpleshop.ecommerce.dto.LoginRequest;
import com.examplesimpleshop.ecommerce.dto.RegisterRequest;
import com.examplesimpleshop.ecommerce.entity.User;
import com.examplesimpleshop.ecommerce.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public User register(@Valid @RequestBody RegisterRequest request) {
        return userService.register(request);
    }

    @PostMapping("/login")
    public User login(@Valid @RequestBody LoginRequest request) {
        return userService.login(request);
    }

    @GetMapping
    public List<User> getAll() {
        return userService.getAll();
    }
}
