package com.railtel.service;

import com.railtel.model.Login;

public interface LoginService {

	Login checkLogin(String name, String password);
	
}
