package com.railtel.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railtel.dao.RegionDao;
import com.railtel.model.Region;
import com.railtel.service.RegionService;

@Service
public class RegionServiceImp implements RegionService {

	@Autowired RegionDao regionDao;
	
	@Override
	public Boolean createRegion(String reg) {
		Region region = new Region();
		region.setName(reg);			
		return regionDao.save(region)!=null?true:false;
	}

	@Override
	public List<Region> regionList() {		
		return (List<Region>) regionDao.findAll();
	}

}