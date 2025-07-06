package com.PremireSystems.Portal.Repository.ChangeRequest;

import com.PremireSystems.Portal.Entity.ChangeRequest.ChangeRequestFormHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChangeRequestFormHistoryRepository extends
        JpaRepository<ChangeRequestFormHistory,Long> {
}
