package com.railtel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.railtel.model.ChannelPartner;
import com.railtel.service.ChannelPartnerService;

@RestController
@RequestMapping("channel-partner/v1")
public class ChannelPartnerController {


	@Autowired ChannelPartnerService channelPartnerService;

	@GetMapping("list")
	public List<ChannelPartner> loginPage() {
		 		return  channelPartnerService.channelPartnerList();
	}
	
	
	
}
