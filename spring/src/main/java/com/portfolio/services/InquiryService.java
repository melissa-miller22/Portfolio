package com.portfolio.services;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portfolio.repository.InquiryRepository;
import com.portfolio.repository.entities.Inquiry;

@Service
public class InquiryService {
	
	@Autowired
    private InquiryRepository inquiryRepository;

	public Iterable<Inquiry> findAllInquiries() {		
    	return inquiryRepository.findAll();
    }
	
	public Optional<Inquiry> findById(Long l) {
		return inquiryRepository.findById(l);
	}
	
    public long findNumberOfInquiries() {
    	return inquiryRepository.count();
    }
    
    public Inquiry newInquiry(Inquiry newInquiry) {
    	newInquiry.setCreatedAt(new Date());
    	newInquiry.setCreatedBy("admin");
    	
    	return inquiryRepository.save(newInquiry);
    }
    
    public Inquiry editInquiry(Inquiry updatedInquiry) {
    	updatedInquiry.setUpdatedAt(new Date());
    	updatedInquiry.setUpdatedBy("admin");
    	
    	return inquiryRepository.save(updatedInquiry);
    }
}
