package com.railtel.componentImp;

import org.springframework.stereotype.Component;

import com.railtel.component.ModelToDTO;
import com.railtel.model.Company;
import com.railtel.request.CompanyRequest;

@Component
public class ModelToDTOImp implements ModelToDTO{

	public Company setCompantDetails(CompanyRequest req) {
		Company company  = null;
		try {
			company  = new Company();
			company.setRegion(req.getRegion());
			company.setName(req.getName());
			company.setConcernedExecutive(req.getConcernedExecutive());
			company.setContactNumber(req.getContactNumber());
			company.setAddress(req.getAddress());
			company.setEmail(req.getEmail());
			company.setTenderNumber(req.getTenderNumber());
			company.setPbgAmount(req.getPbgAmount());
			company.setPbgExpireDate(req.getPbgExpireDate());
			company.setPbgIssueBank(req.getPbgIssueBank());
			company.setPbgNumber(req.getPbgNumber());
			company.setPbgIssueDate(req.getPbgIssueDate());
			company.setPbgExpireDate(req.getPbgExpireDate());
			company.setBgRefNumber(req.getBgRefNumber());
			company.setPoNumber(req.getPoNumber());

		} catch (Exception e) {
			e.printStackTrace();
		}

		return company;
	}

	



}
