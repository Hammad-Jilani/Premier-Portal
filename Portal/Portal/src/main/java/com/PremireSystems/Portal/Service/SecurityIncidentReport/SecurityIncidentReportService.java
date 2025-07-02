package com.PremireSystems.Portal.Service.SecurityIncidentReport;

import com.PremireSystems.Portal.Entity.SecurityIncident.SecurityIncidentReport;
import com.PremireSystems.Portal.Entity.SecurityIncident.SecurityIncidentReportHistory;
import com.PremireSystems.Portal.Repository.SecurityIncidentReport.SecurityIncidentReportHistoryRepository;
import com.PremireSystems.Portal.Repository.SecurityIncidentReport.SecurityIncidentReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class SecurityIncidentReportService {

    @Autowired
    private SecurityIncidentReportRepository securityIncidentReportRepository;

    @Autowired
    private SecurityIncidentReportHistoryRepository historyRepository;

    public SecurityIncidentReport create(SecurityIncidentReport securityIncidentReport){
        SecurityIncidentReportHistory history = new SecurityIncidentReportHistory();

        history.setModifiedAt(LocalDateTime.now());
        history.setStatus("Created");
        history.setSuspects(securityIncidentReport.getSuspects());
        history.setReportDateTime(securityIncidentReport.getReportDateTime());
        history.setReportedSeverityLevel(securityIncidentReport.getReportedSeverityLevel());

        history.setIncidentOccurredDateTime(securityIncidentReport.getIncidentOccurredDateTime());
        history.setBusinessImpacted(securityIncidentReport.getBusinessImpacted());

        history.setIncidentDetectedDateTime(securityIncidentReport.getIncidentDetectedDateTime());
        history.setBusinessUnit(securityIncidentReport.getBusinessUnit());

        history.setIncidentLocation(securityIncidentReport.getIncidentLocation());
        history.setIncidentSource(securityIncidentReport.getIncidentSource());
        history.setIncidentStatus(securityIncidentReport.getIncidentStatus());

        history.setDetectionDetails(securityIncidentReport.getDetectionDetails());
        history.setSuspects(securityIncidentReport.getSuspects());
        history.setImpactedResources(securityIncidentReport.getImpactedResources());

        history.setHighestInfoClassification(securityIncidentReport.getHighestInfoClassification());
        history.setHighestSystemCriticality(securityIncidentReport.getHighestSystemCriticality());

        history.setReporterName(securityIncidentReport.getReporterName());
        history.setReporterBusinessUnit(securityIncidentReport.getReporterBusinessUnit());
        history.setReporterContact(securityIncidentReport.getReporterContact());

        history.setIrtLeaderName(securityIncidentReport.getIrtLeaderName());
        history.setIrtLeaderOfficeNumber(securityIncidentReport.getIrtLeaderOfficeNumber());
        history.setIrtLeaderMobileNumber(securityIncidentReport.getIrtLeaderMobileNumber());

        history.setNotifiedBy(securityIncidentReport.getNotifiedBy());
        history.setNotificationDateTime(securityIncidentReport.getNotificationDateTime());

        history.setActionsTaken(securityIncidentReport.getActionsTaken());
        history.setAdditionalInfo(securityIncidentReport.getAdditionalInfo());



        historyRepository.save(history);
        return securityIncidentReportRepository.save(securityIncidentReport);
    }

    public SecurityIncidentReport getById(Long id){
        return securityIncidentReportRepository.findById(id).orElseThrow(()-> new RuntimeException("No Incident Report found with id "+id));
    }

    public List<SecurityIncidentReport> getAll(){
        return securityIncidentReportRepository.findAll();
    }

    public void delete(Long id){
        Optional<SecurityIncidentReport> optionalSecurityIncidentReport = securityIncidentReportRepository.findById(id);
        if (optionalSecurityIncidentReport.isPresent()){
            securityIncidentReportRepository.delete(optionalSecurityIncidentReport.get());
        }else{
            throw new RuntimeException("No Incident Report found with id "+id+" deletion failed" );
        }
    }

    public boolean update(Long id,SecurityIncidentReport securityIncidentReport){
        Optional<SecurityIncidentReport> optional = securityIncidentReportRepository.findById(id);
        if (optional.isPresent()){

            SecurityIncidentReport existing = optional.get();

            existing.setReportDateTime(securityIncidentReport.getReportDateTime());
            existing.setReportedSeverityLevel(securityIncidentReport.getReportedSeverityLevel());

            existing.setIncidentOccurredDateTime(securityIncidentReport.getIncidentOccurredDateTime());
            existing.setBusinessImpacted(securityIncidentReport.getBusinessImpacted());

            existing.setIncidentDetectedDateTime(securityIncidentReport.getIncidentDetectedDateTime());
            existing.setBusinessUnit(securityIncidentReport.getBusinessUnit());

            existing.setIncidentLocation(securityIncidentReport.getIncidentLocation());
            existing.setIncidentSource(securityIncidentReport.getIncidentSource());
            existing.setIncidentStatus(securityIncidentReport.getIncidentStatus());

            existing.setDetectionDetails(securityIncidentReport.getDetectionDetails());
            existing.setSuspects(securityIncidentReport.getSuspects());
            existing.setImpactedResources(securityIncidentReport.getImpactedResources());

            existing.setHighestInfoClassification(securityIncidentReport.getHighestInfoClassification());
            existing.setHighestSystemCriticality(securityIncidentReport.getHighestSystemCriticality());

            existing.setReporterName(securityIncidentReport.getReporterName());
            existing.setReporterBusinessUnit(securityIncidentReport.getReporterBusinessUnit());
            existing.setReporterContact(securityIncidentReport.getReporterContact());

            existing.setIrtLeaderName(securityIncidentReport.getIrtLeaderName());
            existing.setIrtLeaderOfficeNumber(securityIncidentReport.getIrtLeaderOfficeNumber());
            existing.setIrtLeaderMobileNumber(securityIncidentReport.getIrtLeaderMobileNumber());

            existing.setNotifiedBy(securityIncidentReport.getNotifiedBy());
            existing.setNotificationDateTime(securityIncidentReport.getNotificationDateTime());

            existing.setActionsTaken(securityIncidentReport.getActionsTaken());
            existing.setAdditionalInfo(securityIncidentReport.getAdditionalInfo());

            SecurityIncidentReportHistory history = new SecurityIncidentReportHistory();
            history.setModifiedAt(LocalDateTime.now());
            history.setStatus("Modified");
            history.setSuspects(securityIncidentReport.getSuspects());
            history.setReportDateTime(securityIncidentReport.getReportDateTime());
            history.setReportedSeverityLevel(securityIncidentReport.getReportedSeverityLevel());

            history.setIncidentOccurredDateTime(securityIncidentReport.getIncidentOccurredDateTime());
            history.setBusinessImpacted(securityIncidentReport.getBusinessImpacted());

            history.setIncidentDetectedDateTime(securityIncidentReport.getIncidentDetectedDateTime());
            history.setBusinessUnit(securityIncidentReport.getBusinessUnit());

            history.setIncidentLocation(securityIncidentReport.getIncidentLocation());
            history.setIncidentSource(securityIncidentReport.getIncidentSource());
            history.setIncidentStatus(securityIncidentReport.getIncidentStatus());

            history.setDetectionDetails(securityIncidentReport.getDetectionDetails());
            history.setSuspects(securityIncidentReport.getSuspects());
            history.setImpactedResources(securityIncidentReport.getImpactedResources());

            history.setHighestInfoClassification(securityIncidentReport.getHighestInfoClassification());
            history.setHighestSystemCriticality(securityIncidentReport.getHighestSystemCriticality());

            history.setReporterName(securityIncidentReport.getReporterName());
            history.setReporterBusinessUnit(securityIncidentReport.getReporterBusinessUnit());
            history.setReporterContact(securityIncidentReport.getReporterContact());

            history.setIrtLeaderName(securityIncidentReport.getIrtLeaderName());
            history.setIrtLeaderOfficeNumber(securityIncidentReport.getIrtLeaderOfficeNumber());
            history.setIrtLeaderMobileNumber(securityIncidentReport.getIrtLeaderMobileNumber());

            history.setNotifiedBy(securityIncidentReport.getNotifiedBy());
            history.setNotificationDateTime(securityIncidentReport.getNotificationDateTime());

            history.setActionsTaken(securityIncidentReport.getActionsTaken());
            history.setAdditionalInfo(securityIncidentReport.getAdditionalInfo());
            historyRepository.save(history);



            securityIncidentReportRepository.save(existing);
            return true;
        }else{
            return false;
        }
    }
}
