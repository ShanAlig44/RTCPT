package com.railtel.request;

public class CompanyRequest {
	
	private Long id;
	private String region;
	private String name;
	private String concernedExecutive;
	private String contactNumber;
	private String email;
	private String address;
	private String tenderNumber;
	private String pbgAmount;
	private String pbgIssueBank;
	private String pbgNumber;
	private String pbgIssueDate;
	private String pbgExpireDate;
	private String bgRefNumber;
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
		return "CompanyRequest [id=" + id + ", region=" + region + ", name=" + name + ", concernedExecutive="
				+ concernedExecutive + ", contactNumber=" + contactNumber + ", email=" + email + ", address=" + address
				+ ", tenderNumber=" + tenderNumber + ", pbgAmount=" + pbgAmount + ", pbgIssueBank=" + pbgIssueBank
				+ ", pbgNumber=" + pbgNumber + ", pbgIssueDate=" + pbgIssueDate + ", pbgExpireDate=" + pbgExpireDate
				+ ", bgRefNumber=" + bgRefNumber + ", poNumber=" + poNumber + "]";
	}
	
	
	
	
	
	

}
