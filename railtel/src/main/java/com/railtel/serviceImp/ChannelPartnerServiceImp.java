package com.railtel.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.railtel.dao.ChannelPartnerDao;
import com.railtel.model.ChannelPartner;
import com.railtel.service.ChannelPartnerService;

@Service
public class ChannelPartnerServiceImp  implements ChannelPartnerService{

	@Autowired ChannelPartnerDao channelPartnerDao;

	@Override
	public List<ChannelPartner> channelPartnerList() {
		 
		return channelPartnerDao.channelPartnerList();
	}

	

}
