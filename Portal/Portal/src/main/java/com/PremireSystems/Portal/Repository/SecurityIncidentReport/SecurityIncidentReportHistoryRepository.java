package com.PremireSystems.Portal.Repository.SecurityIncidentReport;

import com.PremireSystems.Portal.Entity.SecurityIncident.SecurityIncidentReportHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecurityIncidentReportHistoryRepository extends JpaRepository<SecurityIncidentReportHistory,Long> {
}
