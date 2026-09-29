package com.examplesimpleshop.ecommerce.controller;

import com.examplesimpleshop.ecommerce.service.DashboardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/counts")
    public Map<String, Long> getCounts() {
        return dashboardService.getCounts();
    }
}
