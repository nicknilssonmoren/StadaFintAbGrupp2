package com.example.backend.Booking;

import com.example.backend.Customer.Customer;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class BookingService {

    public static final String COL_NAME="bookings";

    public String saveBookingDetails(Booking booking) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection(COL_NAME).document(booking.getDocumentId()).set(booking);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Booking getBookingDetails(String documentId) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection(COL_NAME).document(documentId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        getAllBookingIds();

        Booking booking;

        if(document.exists()) {
            booking = document.toObject(Booking.class);
            return booking;
        }else {
            return null;
        }
    }

    public List getAllBookingIds() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection(COL_NAME).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List bookings = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) {
            System.out.println(document.getId() + " => " + document.toObject(Customer.class));
            bookings.add(document);
        }
        return bookings;
    }

    public List getAllBookings() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection(COL_NAME).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List bookings = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) {
            System.out.println(document.getData());
            //System.out.println(document.getId() + " => " + document.toObject(Customer.class));
            bookings.add(document.getData());
        }
        System.out.println(bookings);
        return bookings;
    }

    public String updateBookingDetails(Booking booking) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection(COL_NAME).document(booking.getDocumentId()).set(booking);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public String deleteBooking(String documentId) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection(COL_NAME).document(documentId).delete();
        return "Document with Customer ID "+documentId+" has been deleted";
    }
}
