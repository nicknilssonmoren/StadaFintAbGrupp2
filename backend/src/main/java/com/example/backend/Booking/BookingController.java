package com.example.backend.Booking;
import com.example.backend.Customer.Customer;
import com.example.backend.auth.models.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class BookingController {

    @Autowired
    BookingService bookingService;

    public BookingController(BookingService bookingService){
        this.bookingService  = bookingService;
    }

    @GetMapping("/getBookingDetails")
    public Booking getBooking(@AuthenticationPrincipal User user, @RequestParam String documentId) throws InterruptedException, ExecutionException {
        return bookingService.getBookingDetails(documentId);
    }

    @PostMapping("/createBooking")
    public String createBooking(@AuthenticationPrincipal User user, @RequestBody Booking booking ) throws InterruptedException, ExecutionException {
        return bookingService.saveBookingDetails(booking);
    }

    @PutMapping("/updateBooking")
    public String updateBooking(@RequestBody Booking booking ) throws InterruptedException, ExecutionException {
        return bookingService.updateBookingDetails(booking);
    }
    @DeleteMapping("/deleteBooking")
    public String deleteBooking(@RequestParam String documentId){
        return bookingService.deleteBooking(documentId);
    }

    @GetMapping("/getAllBookings")
    public List getAllBookings(@AuthenticationPrincipal User user) throws InterruptedException, ExecutionException {
        return bookingService.getAllBookings();
    }


}
