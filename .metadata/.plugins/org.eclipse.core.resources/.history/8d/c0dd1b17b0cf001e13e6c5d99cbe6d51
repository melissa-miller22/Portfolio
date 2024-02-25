package com.portfolio.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portfolio.repository.InquiryRepository;
import com.portfolio.repository.entities.Inquiry;

@Service
public class InquiryService {
	
	@Autowired
    private InquiryRepository inquiryRepository;

	public List<Inquiry> findAllInquiries() {
    	return (List<Inquiry>) inquiryRepository.findAll();
    }
	
    public long findNumberOfInquiries() {
    	return inquiryRepository.count();
    }
}
