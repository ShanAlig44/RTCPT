package com.railtel.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.railtel.model.Company;

public interface CompanyDao extends CrudRepository<Company, Long>{
	
	@Query("SELECT u FROM Company u WHERE u.region  = ?1")
	List<Company>  companyListByRegion(String region);

	@Query("SELECT u FROM Company u WHERE u.id  = ?1")
	Company companyById(Long id);
	
	
}
