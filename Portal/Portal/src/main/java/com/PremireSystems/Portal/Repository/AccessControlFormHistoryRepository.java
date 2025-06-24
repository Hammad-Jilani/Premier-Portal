package com.PremireSystems.Portal.Repository;

import com.PremireSystems.Portal.Entity.AccessControlFormHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccessControlFormHistoryRepository extends
        JpaRepository<AccessControlFormHistory,Long> {

}

