package com.railtel.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "specialization")
public class Specialization implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	 
	
	@Column(name = "company_name")
	private String compantName;
	
	@Column(name = "fy_2014_15")
	private String fy1415;
	
	@Column(name = "fy_2015_16")
	private String fy1516;
	
	@Column(name = "fy_2016_17")
	private String fy1617;
	
	@Column(name = "total_turnover")
	private String totalTurnover;
	
	
	@Column(name = "ststem_integration")
	private String systemIntegration;
	
	@Column(name = "tel_network_service")
	private String telNetworkService;
	
	@Column(name = "wifi_network_service")
	private String wifiNetworkService;
	
	@Column(name = "mw_tower")
	private String MWTower;
	
	@Column(name = "ict_security")
	private String ICTSecurity;
	
	@Column(name = "maintainance_network_element")
	private String maintainnanceNetworkElements;
	
	@Column(name = "data_certer_service")
	private String dataCerterService;
	
	@Column(name = "software_develoipment")
	private String sofywareDevelopment;
	
	@Column(name = "mobile_application_development")
	private String mobileApplicationDevelopment;
	
	@Column(name = "erp")
	private String ERP;
	
	@Column(name = "aadhar_based_solution")
	private String aadharBasedSoution;
	
	@Column(name = "web_development")
	private String webDevelopment;
	
	@Column(name = "assiciated_technlogies")
	private String associatedTechnology;
	
	
	@Column(name = "video_surveillance_services")
	private String  videoSurveillanceServices;
	
	@Column(name = "education")
	private String  education;
	
	@Column(name = "healthcare")
	private String  healthcare;
	
	@Column(name = "document_management_security")
	private String  documentManagementSecurity;
	
	@Column(name = "any_other_specialization")
	private String  anyOtherSpecialization;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCompantName() {
		return compantName;
	}

	public void setCompantName(String compantName) {
		this.compantName = compantName;
	}

	public String getFy1415() {
		return fy1415;
	}

	public void setFy1415(String fy1415) {
		this.fy1415 = fy1415;
	}

	public String getFy1516() {
		return fy1516;
	}

	public void setFy1516(String fy1516) {
		this.fy1516 = fy1516;
	}

	public String getSystemIntegration() {
		return systemIntegration;
	}

	public void setSystemIntegration(String systemIntegration) {
		this.systemIntegration = systemIntegration;
	}

	public String getTelNetworkService() {
		return telNetworkService;
	}

	public void setTelNetworkService(String telNetworkService) {
		this.telNetworkService = telNetworkService;
	}

	public String getWifiNetworkService() {
		return wifiNetworkService;
	}

	public void setWifiNetworkService(String wifiNetworkService) {
		this.wifiNetworkService = wifiNetworkService;
	}

	public String getMWTower() {
		return MWTower;
	}

	public void setMWTower(String mWTower) {
		MWTower = mWTower;
	}

	public String getICTSecurity() {
		return ICTSecurity;
	}

	public void setICTSecurity(String iCTSecurity) {
		ICTSecurity = iCTSecurity;
	}

	public String getMaintainnanceNetworkElements() {
		return maintainnanceNetworkElements;
	}

	public void setMaintainnanceNetworkElements(String maintainnanceNetworkElements) {
		this.maintainnanceNetworkElements = maintainnanceNetworkElements;
	}

	public String getDataCerterService() {
		return dataCerterService;
	}

	public void setDataCerterService(String dataCerterService) {
		this.dataCerterService = dataCerterService;
	}

	public String getSofywareDevelopment() {
		return sofywareDevelopment;
	}

	public void setSofywareDevelopment(String sofywareDevelopment) {
		this.sofywareDevelopment = sofywareDevelopment;
	}

	public String getMobileApplicationDevelopment() {
		return mobileApplicationDevelopment;
	}

	public void setMobileApplicationDevelopment(String mobileApplicationDevelopment) {
		this.mobileApplicationDevelopment = mobileApplicationDevelopment;
	}

	public String getERP() {
		return ERP;
	}

	public void setERP(String eRP) {
		ERP = eRP;
	}

	public String getAadharBasedSoution() {
		return aadharBasedSoution;
	}

	public void setAadharBasedSoution(String aadharBasedSoution) {
		this.aadharBasedSoution = aadharBasedSoution;
	}

	public String getWebDevelopment() {
		return webDevelopment;
	}

	public void setWebDevelopment(String webDevelopment) {
		this.webDevelopment = webDevelopment;
	}

	public String getAssociatedTechnology() {
		return associatedTechnology;
	}

	public void setAssociatedTechnology(String associatedTechnology) {
		this.associatedTechnology = associatedTechnology;
	}

	public String getVideoSurveillanceServices() {
		return videoSurveillanceServices;
	}

	public void setVideoSurveillanceServices(String videoSurveillanceServices) {
		this.videoSurveillanceServices = videoSurveillanceServices;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getHealthcare() {
		return healthcare;
	}

	public void setHealthcare(String healthcare) {
		this.healthcare = healthcare;
	}

	public String getDocumentManagementSecurity() {
		return documentManagementSecurity;
	}

	public void setDocumentManagementSecurity(String documentManagementSecurity) {
		this.documentManagementSecurity = documentManagementSecurity;
	}

	public String getAnyOtherSpecialization() {
		return anyOtherSpecialization;
	}

	public void setAnyOtherSpecialization(String anyOtherSpecialization) {
		this.anyOtherSpecialization = anyOtherSpecialization;
	}

	
	
	public String getFy1617() {
		return fy1617;
	}

	public void setFy1617(String fy1617) {
		this.fy1617 = fy1617;
	}

	
	public String getTotalTurnover() {
		return totalTurnover;
	}

	public void setTotalTurnover(String totalTurnover) {
		this.totalTurnover = totalTurnover;
	}

	@Override
	public String toString() {
		return "Specialization [id=" + id + ", compantName=" + compantName + ", fy1415=" + fy1415 + ", fy1516=" + fy1516
				+ ", systemIntegration=" + systemIntegration + ", telNetworkService=" + telNetworkService
				+ ", wifiNetworkService=" + wifiNetworkService + ", MWTower=" + MWTower + ", ICTSecurity=" + ICTSecurity
				+ ", maintainnanceNetworkElements=" + maintainnanceNetworkElements + ", dataCerterService="
				+ dataCerterService + ", sofywareDevelopment=" + sofywareDevelopment + ", mobileApplicationDevelopment="
				+ mobileApplicationDevelopment + ", ERP=" + ERP + ", aadharBasedSoution=" + aadharBasedSoution
				+ ", webDevelopment=" + webDevelopment + ", associatedTechnology=" + associatedTechnology
				+ ", videoSurveillanceServices=" + videoSurveillanceServices + ", education=" + education
				+ ", healthcare=" + healthcare + ", documentManagementSecurity=" + documentManagementSecurity
				+ ", anyOtherSpecialization=" + anyOtherSpecialization + "]";
	}
	
	
		

}
