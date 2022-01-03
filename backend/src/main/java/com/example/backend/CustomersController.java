package com.example.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("customers")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomersController {
    @GetMapping
    public List<Customer> all() {
        return List.of(new Customer("001", "John"));
    }


}
