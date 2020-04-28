package com.railtel.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railtel.componentImp.ModelToDTOImp;
import com.railtel.dao.CompanyDao;
import com.railtel.model.Company;
import com.railtel.request.CompanyRequest;
import com.railtel.service.CompanyService;

@Service
public class CompanyServiceImp implements CompanyService{

	@Autowired CompanyDao companydao;
	@Autowired ModelToDTOImp  dtoComponent; 

	@Override
	public Boolean createComany(CompanyRequest req) {

		Company company = dtoComponent.setCompantDetails(req);
		System.out.println("In Servuce :: "  +company.toString()) ;
		return companydao.save(company) != null?true:false;
	}

	@Override
	public List<Company> companyListByRegion(String region) {
		if(region.equalsIgnoreCase("all"))
			return (List<Company>) companydao.findAll();
		return companydao.companyListByRegion(region);
	}

	@Override
	public Company companyById(Long id) {
		 
		return companydao.companyById(id);
	}



}
