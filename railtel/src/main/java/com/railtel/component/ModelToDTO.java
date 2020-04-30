package com.railtel.component;

import com.railtel.model.Company;
import com.railtel.request.CompanyRequest;

public interface ModelToDTO {
	Company setCompantDetails(CompanyRequest req);
}

