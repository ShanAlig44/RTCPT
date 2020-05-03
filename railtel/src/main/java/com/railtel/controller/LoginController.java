package com.railtel.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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
	
	
	@RequestMapping("list-specialization")
	public String  listSpecialization() {
		return  "list-specialization";
	}

}
