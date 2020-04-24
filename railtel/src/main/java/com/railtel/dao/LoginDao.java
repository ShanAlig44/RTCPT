package com.railtel.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.railtel.model.Login;

public interface LoginDao extends CrudRepository<Login, Long>{
	@Query("SELECT u FROM Login u WHERE u.name  = ?1 and u.password =?2")
	Login checkLogin(String name, String password);

}
