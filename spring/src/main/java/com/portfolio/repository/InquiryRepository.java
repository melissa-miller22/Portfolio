package com.portfolio.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.repository.entities.Inquiry;

@Repository
public interface InquiryRepository extends CrudRepository<Inquiry, Long> {
	
	List<Inquiry> findByConfirmationCode(String cc);
	
	List<Inquiry> findByPendingReviewTrue();
	
	List<Inquiry> findByPendingReviewFalse();
}
