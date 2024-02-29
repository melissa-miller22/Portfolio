package com.portfolio.services;

import java.util.Date;
import java.util.Optional;
import java.util.Random;

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
    	newInquiry.setConfirmationCode(createConfirmationCode());
    	
    	return inquiryRepository.save(newInquiry);
    }
    
    public Inquiry editInquiry(Inquiry updatedInquiry) {
    	updatedInquiry.setUpdatedBy("admin");
    	
    	return inquiryRepository.save(updatedInquiry);
    }
    
    private String createConfirmationCode() {
        String allowableChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder randomCode = new StringBuilder();
        Random rnd = new Random();
        while (randomCode.length() < 12) { // length of the random string.
            int index = (int) (rnd.nextFloat() * allowableChars.length());
            randomCode.append(allowableChars.charAt(index));
        }
        String confirmationCode = randomCode.toString();
        return confirmationCode;

    }
}
