package com.railtel.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.railtel.model.Specialization;

public interface SpecializationDao extends CrudRepository<Specialization, Long>{
	//@Query("SELECT u FROM Specialization u WHERE u.systemIntegration = ?1 OR u.telNetworkService = ?1 OR u.wifiNetworkService = ?1 OR u.MWTower = ?1 OR u.ICTSecurity = ?1 OR u.maintainnanceNetworkElements = ?1 OR u.dataCerterService = ?1 OR u.sofywareDevelopment = ?1 OR 	u.mobileApplicationDevelopment = ?1 OR 	u.ERP = ?1 OR 	u.aadharBasedSoution = ?1 OR u.webDevelopment = ?1 OR u.associatedTechnology = ?1 OR u.videoSurveillanceServices = ?1 OR u.education = ?1 OR u.healthcare = ?1 OR u.documentManagementSecurity = ?1 OR 	u.anyOtherSpecialization")
	@Query("SELECT u FROM Specialization u WHERE u.education  = ?1 OR u.associatedTechnology =?1 OR u.telNetworkService =?1")	
	List<Specialization>  specializationList(String range);

	 
//	@Query("SELECT u FROM Specialization u WHERE u.systemIntegration = ?1 OR " + 
//			"	u.telNetworkService = ?1 OR" + 
//			"	u.wifiNetworkService = ?1 OR" + 
//			"	u.MWTower = ?1 OR" + 
//			"	u.ICTSecurity = ?1 OR" + 
//			"	u.maintainnanceNetworkElements = ?1 OR" + 
//			"	u.dataCerterService = ?1 OR" + 
//			"	u.sofywareDevelopment = ?1 OR" + 
//			"	u.mobileApplicationDevelopment = ?1 OR" + 
//			"	u.ERP = ?1 OR" + 
//			"	u.aadharBasedSoution = ?1 OR" + 
//			"	u.webDevelopment = ?1 OR" + 
//			"	u.associatedTechnology = ?1 OR" + 
//			"	u.videoSurveillanceServices = ?1 OR" + 
//			"	u.education = ?1 OR" + 
//			"	u.healthcare = ?1 OR" + 
//			"	u.documentManagementSecurity = ?1 OR" + 
//			"	u.anyOtherSpecialization") 
	
}
