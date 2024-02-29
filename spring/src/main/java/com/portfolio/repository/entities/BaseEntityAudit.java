package com.portfolio.repository.entities;

import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class BaseEntityAudit extends BaseEntity{

    @Column(updatable = false)
	private String createdBy;

    @CreationTimestamp
    @Column(updatable = false)
    private Date createdAt;
	
    private String updatedBy;

    @UpdateTimestamp
    private Date updatedAt;
    
    public String getCreatedBy() {
    	return createdBy;
    }
    
    public Date getCreatedAt() {
    	return createdAt;
    }
    
    public String getUpdatedBy() {
    	return updatedBy;
    }
    
    public Date getUpdatedAt() {
    	return updatedAt;
    }
    
    public void setCreatedBy(String createdBy) {
    	this.createdBy = createdBy;
    }

    public void setCreatedAt(Date createdAt) {
    	this.createdAt = createdAt;
    }
    
    public void setUpdatedBy(String updatedBy) {
    	this.updatedBy = updatedBy;
    }

    public void setUpdatedAt(Date updatedAt) {
    	this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
    	return "\nBaseEntityAudit{" +
                "createdBy='" + createdBy +
                "', updatedBy='" + updatedBy +
                "', createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                "}" +
                super.toString();
    }

}
