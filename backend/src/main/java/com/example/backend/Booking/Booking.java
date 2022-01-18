package com.example.backend.Booking;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Booking {
    String customerEmail;
    String documentId;
    String date;
    String cleaningType;
    String employeeEmail;
    String address;
    int grade; // 1-5
    String status;
}
