package com.example.backend;
import com.example.backend.Customer;
import com.example.backend.CustomerService;
import com.example.backend.auth.models.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CustomerController {


    @Autowired
    CustomerService customerService;

    public CustomerController(CustomerService customerService){
        this.customerService  = customerService;
    }

    @GetMapping("/getCustomerDetails")
    public Customer getCustomer(@AuthenticationPrincipal User user, @RequestParam String documentId) throws InterruptedException, ExecutionException {
        return customerService.getCustomerDetails(documentId);
    }

    @GetMapping("/me")
    public Customer getMe(@AuthenticationPrincipal User user) throws InterruptedException, ExecutionException {
        return customerService.getCustomerDetails(user.getUid());
    }

    @PostMapping("/createCustomer")
    public String createCustomer(@RequestBody Customer customer ) throws InterruptedException, ExecutionException {
        return customerService.saveCustomerDetails(customer);
    }

    @PutMapping("/updateCustomer")
    public String updateCustomer(@RequestBody Customer customer ) throws InterruptedException, ExecutionException {
        return customerService.updateCustomerDetails(customer);
    }

    @DeleteMapping("/deleteCustomer")
    public String deleteCustomer(@RequestParam String documentId){
        return customerService.deleteCustomer(documentId);
    }
}
