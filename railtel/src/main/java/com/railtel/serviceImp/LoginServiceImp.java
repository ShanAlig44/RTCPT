package com.railtel.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railtel.dao.LoginDao;
import com.railtel.model.Login;
import com.railtel.service.LoginService;

@Service
public class LoginServiceImp implements LoginService{

	@Autowired LoginDao logindao;
	
	@Override
	public Login checkLogin(String name, String password) {
		 
		return logindao.checkLogin(name, password);
	}

}
