package com.railtel.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.railtel.model.Region;
import com.railtel.service.RegionService;

@RestController
@RequestMapping("region/v1")
public class RegionController {


	@Autowired RegionService regionservice;

	@PostMapping("create")
	public Boolean regionCreate(@PathParam("region") String region) {
		Boolean status = false;
		if(regionservice.createRegion(region));
		status  = true;
		return  status;
	}


	@GetMapping("list")
	public List<Region> regiaonList() {
		return  regionservice.regionList();
	}


}
