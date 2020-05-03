package com.railtel.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.railtel.model.ChannelPartner;

public interface ChannelPartnerDao extends CrudRepository<ChannelPartner, Long>{
	
	@Query("FROM ChannelPartner")
	List<ChannelPartner>  channelPartnerList();

	 
	
	
}
