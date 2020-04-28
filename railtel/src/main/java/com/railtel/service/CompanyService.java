package com.railtel.service;

import java.util.List;

import com.railtel.model.Company;
import com.railtel.request.CompanyRequest;

public interface CompanyService {

	Boolean  createComany(CompanyRequest company);
	List<Company>  companyListByRegion(String region);
	Company companyById(Long id);
	
}
