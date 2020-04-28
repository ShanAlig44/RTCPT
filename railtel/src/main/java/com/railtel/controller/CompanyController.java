package com.railtel.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railtel.model.Company;
import com.railtel.request.CompanyRequest;
import com.railtel.service.CompanyService;

@RestController
@RequestMapping("company/v1")
public class CompanyController {


	@Autowired CompanyService companyService;

	@PostMapping("create")
	public Boolean loginPage(@RequestBody CompanyRequest req) {
		Boolean status = false;
		System.out.println(req.toString());
		if(companyService.createComany(req));
		status  = true;
		return  status;
	}
	
	
	@GetMapping("company-list-by-region")
	public List<Company> regiaonList(@PathParam("region") String region) {
		return  companyService.companyListByRegion(region);
	}
	
	@GetMapping("company")
	public Company companyById(@PathParam("id") Long id) {
		return  companyService.companyById(id);
	}


}
