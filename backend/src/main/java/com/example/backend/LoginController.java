package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;

public class LoginController {
    @GetMapping(value = "/adminpage")
    public String viewAdminPage() {
        return "adminpage";
    }
}
