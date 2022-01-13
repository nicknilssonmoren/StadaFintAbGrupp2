package com.example.backend.Customer;

import com.example.backend.Customer.Customer;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

//CRUD operations
@Service
public class CustomerService {

    public static final String COL_NAME="users";

    public String saveCustomerDetails(Customer customer) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection(COL_NAME).document(customer.getDocumentId()).set(customer);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Customer getCustomerDetails(String documentId) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbFirestore.collection(COL_NAME).document(documentId);
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();
        getAllDocumentIds();

        Customer customer;

        if(document.exists()) {
            customer = document.toObject(Customer.class);
            return customer;
        }else {
            return null;
        }
    }

    public List getAllDocumentIds() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        //asynchronously retrieve all documents
        ApiFuture<QuerySnapshot> future = dbFirestore.collection(COL_NAME).get();
        // future.get() blocks on response
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List customer = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) {
            System.out.println(document.getId() + " => " + document.toObject(Customer.class));
            customer.add(document);
        }
        return customer;
    }

    public List getAllCustomers() throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = dbFirestore.collection(COL_NAME).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        List customers = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) {
            System.out.println(document.getData());
            //System.out.println(document.getId() + " => " + document.toObject(Customer.class));
            customers.add(document.getData());
        }
        System.out.println(customers);
        return customers;
    }

    public String updateCustomerDetails(Customer person) throws InterruptedException, ExecutionException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection(COL_NAME).document(person.getDocumentId()).set(person);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public String deleteCustomer(String documentId) {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection(COL_NAME).document(documentId).delete();
        return "Document with Customer ID "+documentId+" has been deleted";
    }



}