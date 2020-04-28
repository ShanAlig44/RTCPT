package com.railtel.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "company")
public class Company implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "region")
	private String region;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "concerned_executive")
	private String concernedExecutive;
	
	@Column(name = "contact_number")
	private String contactNumber;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "tender_number")
	private String tenderNumber;
	
	@Column(name = "pbg_amount")
	private String pbgAmount;
	
	@Column(name = "pbg_issue_bank")
	private String pbgIssueBank;
	
	@Column(name = "pbg_number")
	private String pbgNumber;
	
	@Column(name = "pbg_issue_date")
	private String pbgIssueDate;
	
	@Column(name = "pbg_expire_date")
	private String pbgExpireDate;
	
	@Column(name = "bg_ref_number")
	private String bgRefNumber;
	
	@Column(name = "po_number")
	private String poNumber;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getConcernedExecutive() {
		return concernedExecutive;
	}

	public void setConcernedExecutive(String concernedExecutive) {
		this.concernedExecutive = concernedExecutive;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTenderNumber() {
		return tenderNumber;
	}

	public void setTenderNumber(String tenderNumber) {
		this.tenderNumber = tenderNumber;
	}

	public String getPbgAmount() {
		return pbgAmount;
	}

	public void setPbgAmount(String pbgAmount) {
		this.pbgAmount = pbgAmount;
	}

	public String getPbgIssueBank() {
		return pbgIssueBank;
	}

	public void setPbgIssueBank(String pbgIssueBank) {
		this.pbgIssueBank = pbgIssueBank;
	}

	public String getPbgNumber() {
		return pbgNumber;
	}

	public void setPbgNumber(String pbgNumber) {
		this.pbgNumber = pbgNumber;
	}

	public String getPbgIssueDate() {
		return pbgIssueDate;
	}

	public void setPbgIssueDate(String pbgIssueDate) {
		this.pbgIssueDate = pbgIssueDate;
	}

	public String getPbgExpireDate() {
		return pbgExpireDate;
	}

	public void setPbgExpireDate(String pbgExpireDate) {
		this.pbgExpireDate = pbgExpireDate;
	}

	public String getBgRefNumber() {
		return bgRefNumber;
	}

	public void setBgRefNumber(String bgRefNumber) {
		this.bgRefNumber = bgRefNumber;
	}

	public String getPoNumber() {
		return poNumber;
	}

	public void setPoNumber(String poNumber) {
		this.poNumber = poNumber;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", region=" + region + ", name=" + name + ", concernedExecutive="
				+ concernedExecutive + ", contactNumber=" + contactNumber + ", email=" + email + ", address=" + address
				+ ", tenderNumber=" + tenderNumber + ", pbgAmount=" + pbgAmount + ", pbgIssueBank=" + pbgIssueBank
				+ ", pbgNumber=" + pbgNumber + ", pbgIssueDate=" + pbgIssueDate + ", pbgExpireDate=" + pbgExpireDate
				+ ", bgRefNumber=" + bgRefNumber + ", poNumber=" + poNumber + "]";
	}
	
	
	
	
	
	

}
