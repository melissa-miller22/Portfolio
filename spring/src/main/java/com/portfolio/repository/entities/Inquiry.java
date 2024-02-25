package com.portfolio.repository.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name="Inquiry")
public class Inquiry extends BaseEntityAudit{
	
	public Inquiry(){}
	
	public Inquiry(String firstName, String lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	@Column(name="FirstName")
	private String firstName;

	@Column(name="LastName")
	private String lastName;
	
	/*private String EmailAddress;
	
	private String InquiryTitle;
	
	private String InquiryDescription;
	
	private String ShootLocation;
	
	private Date StartDate;
	
	private Date EndDate;
	
	private String Notes;
	
	private Date SubmittedAt;
	
	private Date UpdatedAt;*/
		
	public String getFirstName() {
		return firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	@Override
	public String toString() {
        return "Product{" +
                " name=" + firstName + " " + lastName + super.toString();
	}

}
