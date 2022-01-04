package com.example.backend;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class Customer {
    String password;
    String role;
    String address;
    String documentId;
}