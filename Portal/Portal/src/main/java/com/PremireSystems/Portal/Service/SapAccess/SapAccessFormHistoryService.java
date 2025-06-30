package com.PremireSystems.Portal.Service.SapAccess;

import com.PremireSystems.Portal.Entity.SapAccess.SapAccessHistory;
import com.PremireSystems.Portal.Repository.SapAccessForm.SapAccessHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SapAccessFormHistoryService {
    @Autowired
    private SapAccessHistoryRepository sapAccessHistory;

    public List<SapAccessHistory> getHistory(){
        return sapAccessHistory.findAll();
    }
}
