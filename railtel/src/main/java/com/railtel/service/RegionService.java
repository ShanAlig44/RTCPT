package com.railtel.service;

import java.util.List;
import com.railtel.model.Region;

public interface RegionService {

	Boolean  createRegion(String company);
	List<Region>  regionList();
	
}
