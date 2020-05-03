package com.railtel.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railtel.dao.SpecializationDao;
import com.railtel.model.Specialization;
import com.railtel.service.SpecializationService;

@Service
public class SpecializationServiceImp  implements SpecializationService{

	@Autowired SpecializationDao specializationDao;

	@Override
	public List<Specialization> specializationList(String range) {
		 		return specializationDao.specializationList(range);
	}

	

	

}
