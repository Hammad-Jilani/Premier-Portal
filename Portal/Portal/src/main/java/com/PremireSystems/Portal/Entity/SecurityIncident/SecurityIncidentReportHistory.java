package com.PremireSystems.Portal.Entity.SecurityIncident;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class SecurityIncidentReportHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime reportDateTime;
    private int reportedSeverityLevel;

    // Incident details
    private LocalDateTime incidentOccurredDateTime;
    private String businessImpacted;

    private LocalDateTime incidentDetectedDateTime;
    private String businessUnit;

    private String incidentLocation;

    private String incidentSource; // Internal / External
    private String incidentStatus; // Confirmed / Suspected

    @Column(columnDefinition = "TEXT")
    private String detectionDetails;

    @Column(columnDefinition = "TEXT")
    private String suspects; // Can be structured as a separate entity if needed

    @Column(columnDefinition = "TEXT")
    private String impactedResources;

    private String highestInfoClassification;
    private String highestSystemCriticality;

    // Reporter
    private String reporterName;
    private String reporterBusinessUnit;
    private String reporterContact;

    // IRT Leader
    private String irtLeaderName;
    private String irtLeaderOfficeNumber;
    private String irtLeaderMobileNumber;

    // Management Notification
    private String notifiedBy; // Name / Title
    private LocalDateTime notificationDateTime;

    @Column(columnDefinition = "TEXT")
    private String actionsTaken;

    @Column(columnDefinition = "TEXT")
    private String additionalInfo;

    private LocalDateTime modifiedAt;
    private String status;

    public SecurityIncidentReportHistory(){}

    public SecurityIncidentReportHistory(Long id, LocalDateTime reportDateTime, int reportedSeverityLevel, LocalDateTime incidentOccurredDateTime, String businessImpacted, LocalDateTime incidentDetectedDateTime, String businessUnit, String incidentLocation, String incidentSource, String incidentStatus, String detectionDetails, String suspects, String impactedResources, String highestInfoClassification, String highestSystemCriticality, String reporterName, String reporterBusinessUnit, String reporterContact, String irtLeaderName, String irtLeaderOfficeNumber, String irtLeaderMobileNumber, String notifiedBy, LocalDateTime notificationDateTime, String actionsTaken, String additionalInfo, LocalDateTime modifiedAt, String status) {
        this.id = id;
        this.reportDateTime = reportDateTime;
        this.reportedSeverityLevel = reportedSeverityLevel;
        this.incidentOccurredDateTime = incidentOccurredDateTime;
        this.businessImpacted = businessImpacted;
        this.incidentDetectedDateTime = incidentDetectedDateTime;
        this.businessUnit = businessUnit;
        this.incidentLocation = incidentLocation;
        this.incidentSource = incidentSource;
        this.incidentStatus = incidentStatus;
        this.detectionDetails = detectionDetails;
        this.suspects = suspects;
        this.impactedResources = impactedResources;
        this.highestInfoClassification = highestInfoClassification;
        this.highestSystemCriticality = highestSystemCriticality;
        this.reporterName = reporterName;
        this.reporterBusinessUnit = reporterBusinessUnit;
        this.reporterContact = reporterContact;
        this.irtLeaderName = irtLeaderName;
        this.irtLeaderOfficeNumber = irtLeaderOfficeNumber;
        this.irtLeaderMobileNumber = irtLeaderMobileNumber;
        this.notifiedBy = notifiedBy;
        this.notificationDateTime = notificationDateTime;
        this.actionsTaken = actionsTaken;
        this.additionalInfo = additionalInfo;
        this.modifiedAt = modifiedAt;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getReportDateTime() {
        return reportDateTime;
    }

    public void setReportDateTime(LocalDateTime reportDateTime) {
        this.reportDateTime = reportDateTime;
    }

    public int getReportedSeverityLevel() {
        return reportedSeverityLevel;
    }

    public void setReportedSeverityLevel(int reportedSeverityLevel) {
        this.reportedSeverityLevel = reportedSeverityLevel;
    }

    public LocalDateTime getIncidentOccurredDateTime() {
        return incidentOccurredDateTime;
    }

    public void setIncidentOccurredDateTime(LocalDateTime incidentOccurredDateTime) {
        this.incidentOccurredDateTime = incidentOccurredDateTime;
    }

    public String getBusinessImpacted() {
        return businessImpacted;
    }

    public void setBusinessImpacted(String businessImpacted) {
        this.businessImpacted = businessImpacted;
    }

    public LocalDateTime getIncidentDetectedDateTime() {
        return incidentDetectedDateTime;
    }

    public void setIncidentDetectedDateTime(LocalDateTime incidentDetectedDateTime) {
        this.incidentDetectedDateTime = incidentDetectedDateTime;
    }

    public String getBusinessUnit() {
        return businessUnit;
    }

    public void setBusinessUnit(String businessUnit) {
        this.businessUnit = businessUnit;
    }

    public String getIncidentLocation() {
        return incidentLocation;
    }

    public void setIncidentLocation(String incidentLocation) {
        this.incidentLocation = incidentLocation;
    }

    public String getIncidentSource() {
        return incidentSource;
    }

    public void setIncidentSource(String incidentSource) {
        this.incidentSource = incidentSource;
    }

    public String getIncidentStatus() {
        return incidentStatus;
    }

    public void setIncidentStatus(String incidentStatus) {
        this.incidentStatus = incidentStatus;
    }

    public String getDetectionDetails() {
        return detectionDetails;
    }

    public void setDetectionDetails(String detectionDetails) {
        this.detectionDetails = detectionDetails;
    }

    public String getSuspects() {
        return suspects;
    }

    public void setSuspects(String suspects) {
        this.suspects = suspects;
    }

    public String getImpactedResources() {
        return impactedResources;
    }

    public void setImpactedResources(String impactedResources) {
        this.impactedResources = impactedResources;
    }

    public String getHighestInfoClassification() {
        return highestInfoClassification;
    }

    public void setHighestInfoClassification(String highestInfoClassification) {
        this.highestInfoClassification = highestInfoClassification;
    }

    public String getHighestSystemCriticality() {
        return highestSystemCriticality;
    }

    public void setHighestSystemCriticality(String highestSystemCriticality) {
        this.highestSystemCriticality = highestSystemCriticality;
    }

    public String getReporterName() {
        return reporterName;
    }

    public void setReporterName(String reporterName) {
        this.reporterName = reporterName;
    }

    public String getReporterBusinessUnit() {
        return reporterBusinessUnit;
    }

    public void setReporterBusinessUnit(String reporterBusinessUnit) {
        this.reporterBusinessUnit = reporterBusinessUnit;
    }

    public String getReporterContact() {
        return reporterContact;
    }

    public void setReporterContact(String reporterContact) {
        this.reporterContact = reporterContact;
    }

    public String getIrtLeaderName() {
        return irtLeaderName;
    }

    public void setIrtLeaderName(String irtLeaderName) {
        this.irtLeaderName = irtLeaderName;
    }

    public String getIrtLeaderOfficeNumber() {
        return irtLeaderOfficeNumber;
    }

    public void setIrtLeaderOfficeNumber(String irtLeaderOfficeNumber) {
        this.irtLeaderOfficeNumber = irtLeaderOfficeNumber;
    }

    public String getIrtLeaderMobileNumber() {
        return irtLeaderMobileNumber;
    }

    public void setIrtLeaderMobileNumber(String irtLeaderMobileNumber) {
        this.irtLeaderMobileNumber = irtLeaderMobileNumber;
    }

    public String getNotifiedBy() {
        return notifiedBy;
    }

    public void setNotifiedBy(String notifiedBy) {
        this.notifiedBy = notifiedBy;
    }

    public LocalDateTime getNotificationDateTime() {
        return notificationDateTime;
    }

    public void setNotificationDateTime(LocalDateTime notificationDateTime) {
        this.notificationDateTime = notificationDateTime;
    }

    public String getActionsTaken() {
        return actionsTaken;
    }

    public void setActionsTaken(String actionsTaken) {
        this.actionsTaken = actionsTaken;
    }

    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    public LocalDateTime getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(LocalDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
