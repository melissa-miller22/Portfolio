package com.portfolio.repository.entities;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="Inquiry")
public class Inquiry extends BaseEntityAudit{
	
	private String firstName;
	private String lastName;
	private String phoneNumber;
	private String emailAddress;
	private String preferredContact;
	private String organization;
	private String duration;
	private Date startDate;
	private Date endDate;
	private String location;
	private String expectations;
	private String details;
	private String questions;
	private String confirmationCode;
	private boolean pendingReview;
	private String status;
	private boolean pendingInvoice;
	
			
	public String getFirstName() {
		return firstName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getPreferredContact() {
		return preferredContact;
	}

	public void setPreferredContact(String preferredContact) {
		this.preferredContact = preferredContact;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getExpectations() {
		return expectations;
	}

	public void setExpectations(String expectations) {
		this.expectations = expectations;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getQuestions() {
		return questions;
	}

	public void setQuestions(String questions) {
		this.questions = questions;
	}

	public String getConfirmationCode() {
		return confirmationCode;
	}

	public void setConfirmationCode(String confirmationCode) {
		this.confirmationCode = confirmationCode;
	}
	
	public boolean isPendingReview() {
		return pendingReview;
	}

	public void setPendingReview(boolean pendingReview) {
		this.pendingReview = pendingReview;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the pendingInvoice
	 */
	public boolean isPendingInvoice() {
		return pendingInvoice;
	}

	/**
	 * @param pendingInvoice the pendingInvoice to set
	 */
	public void setPendingInvoice(boolean pendingInvoice) {
		this.pendingInvoice = pendingInvoice;
	}

	@Override
	public String toString() {
        return "Product{" +
                " name=" + firstName + " " + lastName + super.toString();
	}

}
