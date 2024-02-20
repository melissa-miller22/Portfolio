package com.portfolio.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.repository.entities.Inquiry;
import com.portfolio.services.InquiryService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/inquiries")
public class InquiryController {
 
    @Autowired
    private InquiryService inquiryService;
            
    @GetMapping
    public List<Inquiry> findAllInquiries() {
    	return inquiryService.findAllInquiries();    	
    }
    
    @GetMapping("/count")
    public long findNumberOfInquiries() {
    	return inquiryService.findNumberOfInquiries();
    }
    
}