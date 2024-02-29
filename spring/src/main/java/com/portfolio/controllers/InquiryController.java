package com.portfolio.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.repository.entities.Inquiry;
import com.portfolio.services.InquiryService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/inquiries")
public class InquiryController {
 
    @Autowired
    private InquiryService inquiryService;
            
    @GetMapping("/all")
    public Iterable<Inquiry> findAllInquiries() {
    	return inquiryService.findAllInquiries();    	
    }
    
    @GetMapping("/getbyid/{id}")
    public Optional<Inquiry> findById(@PathVariable Long id) {
    	return inquiryService.findById(id);
    }
    
    @GetMapping("/getbyconfirmationcode/{cc}")
    public Inquiry findByConfirmationCode(@PathVariable String cc) {
    	return inquiryService.findByConfirmationCode(cc);
    }
    
    @GetMapping("/getbypendingreviewtrue")
    public List<Inquiry> findByPendingReviewTrue() {
    	return inquiryService.findByPendingReviewTrue();
    }
    
    @GetMapping("/getbypendingreviewfalse")
    public List<Inquiry> findByPendingReviewFalse() {
    	return inquiryService.findByPendingReviewFalse();
    }
    
    @GetMapping("/count")
    public long findNumberOfInquiries() {
    	return inquiryService.findNumberOfInquiries();
    }
    
    @PostMapping("/add")
    Inquiry newInquiry(@RequestBody Inquiry newInquiry) {
    	return inquiryService.newInquiry(newInquiry);
    }
    
    @PutMapping("/update")
    Inquiry updateInquiry(@RequestBody Inquiry updatedInquiry) {
    	return inquiryService.editInquiry(updatedInquiry);
    }
    
}