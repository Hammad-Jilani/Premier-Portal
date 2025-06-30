package com.PremireSystems.Portal.Repository.SapAccessForm;

import com.PremireSystems.Portal.Entity.SapAccess.SapAccessHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SapAccessHistoryRepository extends JpaRepository<SapAccessHistory,Long> {
}
