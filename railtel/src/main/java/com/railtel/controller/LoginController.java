package com.railtel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.railtel.model.Login;
import com.railtel.service.LoginService;

//@RestController
@Controller
public class LoginController {
	
	//@Autowired LoginService  loginService;
	
	
//	@PostMapping("")
//	public Login loginPage(@RequestParam(name = "name") String name, @RequestParam(name = "password") String password) {
//		//loginService.get
//		return  loginService.checkLogin(name, password);
//	}
	
	@RequestMapping("")
	public String loginPage() {
		return  "login";
	}
	
	
	@RequestMapping("dashboard")
	public String index() {
		return  "dashboard";
	}
	
	@RequestMapping("channel_partner")
	public String channel_partner() {
		return  "channel_partner";
	}
	
	@RequestMapping("channel-partner-list")
	public String channelPartnerList() {
		return  "channel-partner-list";
	}
	
	@RequestMapping("logout")
	public String logout() {
		return  "login";
	}
	@RequestMapping("region")
	public String region() {
		return  "region";
	}
	@RequestMapping("company")
	public String company() {
		return  "company";
	}
	
	@RequestMapping("list-company")
	public String companyList() {
		return  "list-company";
	}
	

}
