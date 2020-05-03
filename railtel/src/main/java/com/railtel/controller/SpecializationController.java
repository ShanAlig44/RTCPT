package com.railtel.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.railtel.model.Specialization;
import com.railtel.service.SpecializationService;

@RestController
@RequestMapping("specialization/v1")
public class SpecializationController {


	@Autowired SpecializationService specializationService;

	@GetMapping("list")
	public List<Specialization> getSpecialization(@PathParam("range") String range) {
		 		return  specializationService.specializationList(range);
	}
	
	
	
}
