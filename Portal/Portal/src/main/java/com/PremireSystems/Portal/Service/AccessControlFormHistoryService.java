package com.PremireSystems.Portal.Service;

import com.PremireSystems.Portal.Entity.AccessControlFormHistory;
import com.PremireSystems.Portal.Repository.AccessControlFormHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccessControlFormHistoryService {

    @Autowired
    private AccessControlFormHistoryRepository accessControlFormHistoryRepository;

    public AccessControlFormHistory create(AccessControlFormHistory accessControlFormHistory){
        return accessControlFormHistoryRepository.save(accessControlFormHistory);
    }

    public List<AccessControlFormHistory> getAll(){
        return accessControlFormHistoryRepository.findAll();
    }
}
