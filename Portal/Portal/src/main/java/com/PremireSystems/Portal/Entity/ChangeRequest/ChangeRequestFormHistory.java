package com.PremireSystems.Portal.Entity.ChangeRequest;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class ChangeRequestFormHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String crNumber;
    private String normalChange;
    private String emergencyChange;
    private String crType;
    private String projectName;
    private String submitterName;
    private String departmentOrLocation;
    private String phoneOrEmail;
    private LocalDate dateSubmitted;
    private String changeType;

    @Column(columnDefinition = "TEXT")
    private String otherChangeDescription;

    @Column(columnDefinition = "TEXT")
    private String briefDescription;

    private LocalDate changeNeededBy;
    private String priority;

    @Column(columnDefinition = "TEXT")
    private String reasonForChange;

    @Column(columnDefinition = "TEXT")
    private String environmentsImpacted;

    @Column(columnDefinition = "TEXT")
    private String assumptionsAndNotes;

    @Column(columnDefinition = "TEXT")
    private String comments;

    private String hasAttachments;
    private String attachmentLink;
    private LocalDate dateSignedBySubmitter;

    private Double hourImpact;
    private Integer durationImpact;
    private Double scheduleImpact;
    private Double costImpact;

    @Column(columnDefinition = "TEXT")
    private String commentsBySystemOwner;

    @Column(columnDefinition = "TEXT")
    private String recommendations;

    @Column(name = "test_plan", columnDefinition = "TEXT")
    private String testPlan;

    @Column(name = "rollback_plan", columnDefinition = "TEXT")
    private String rollbackPlan;
    private LocalDate dateSignedBySystemOwner;

    @Column(length = 50)
    private String decision;

    private LocalDate decisionDate;

    @Column(columnDefinition = "TEXT")
    private String decisionExplanation;

    @Column(columnDefinition = "TEXT")
    private String conditions;

    private LocalDate dateSigned;

    @Column(length = 50)
    private String implementedStatus;

    @Column(columnDefinition = "TEXT")
    private String stagingTestResults;

    @Column(columnDefinition = "TEXT")
    private String implementationTestResults;

    @Column(columnDefinition = "TEXT")
    private String remarks;

    private LocalDate implementerDate;

    private String status;
    private LocalDateTime modifiedAt;
    private Long changeRequestFormId;

    public  ChangeRequestFormHistory(){}

    public ChangeRequestFormHistory(Long id, String crNumber, String normalChange, String emergencyChange, String crType, String projectName, String submitterName, String departmentOrLocation, String phoneOrEmail, LocalDate dateSubmitted, String changeType, String otherChangeDescription, String briefDescription, LocalDate changeNeededBy, String priority, String reasonForChange, String environmentsImpacted, String assumptionsAndNotes, String comments, String hasAttachments, String attachmentLink, LocalDate dateSignedBySubmitter, Double hourImpact, Integer durationImpact, Double scheduleImpact, Double costImpact, String commentsBySystemOwner, String recommendations, String testPlan, String rollbackPlan, LocalDate dateSignedBySystemOwner, String decision, LocalDate decisionDate, String decisionExplanation, String conditions, LocalDate dateSigned, String implementedStatus, String stagingTestResults, String implementationTestResults, String remarks, LocalDate implementerDate, String status, LocalDateTime modifiedAt, Long changeRequestFormId) {
        this.id = id;
        this.crNumber = crNumber;
        this.normalChange = normalChange;
        this.emergencyChange = emergencyChange;
        this.crType = crType;
        this.projectName = projectName;
        this.submitterName = submitterName;
        this.departmentOrLocation = departmentOrLocation;
        this.phoneOrEmail = phoneOrEmail;
        this.dateSubmitted = dateSubmitted;
        this.changeType = changeType;
        this.otherChangeDescription = otherChangeDescription;
        this.briefDescription = briefDescription;
        this.changeNeededBy = changeNeededBy;
        this.priority = priority;
        this.reasonForChange = reasonForChange;
        this.environmentsImpacted = environmentsImpacted;
        this.assumptionsAndNotes = assumptionsAndNotes;
        this.comments = comments;
        this.hasAttachments = hasAttachments;
        this.attachmentLink = attachmentLink;
        this.dateSignedBySubmitter = dateSignedBySubmitter;
        this.hourImpact = hourImpact;
        this.durationImpact = durationImpact;
        this.scheduleImpact = scheduleImpact;
        this.costImpact = costImpact;
        this.commentsBySystemOwner = commentsBySystemOwner;
        this.recommendations = recommendations;
        this.testPlan = testPlan;
        this.rollbackPlan = rollbackPlan;
        this.dateSignedBySystemOwner = dateSignedBySystemOwner;
        this.decision = decision;
        this.decisionDate = decisionDate;
        this.decisionExplanation = decisionExplanation;
        this.conditions = conditions;
        this.dateSigned = dateSigned;
        this.implementedStatus = implementedStatus;
        this.stagingTestResults = stagingTestResults;
        this.implementationTestResults = implementationTestResults;
        this.remarks = remarks;
        this.implementerDate = implementerDate;
        this.status = status;
        this.modifiedAt = modifiedAt;
        this.changeRequestFormId = changeRequestFormId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCrNumber() {
        return crNumber;
    }

    public void setCrNumber(String crNumber) {
        this.crNumber = crNumber;
    }

    public String getNormalChange() {
        return normalChange;
    }

    public void setNormalChange(String normalChange) {
        this.normalChange = normalChange;
    }

    public String getEmergencyChange() {
        return emergencyChange;
    }

    public void setEmergencyChange(String emergencyChange) {
        this.emergencyChange = emergencyChange;
    }

    public String getCrType() {
        return crType;
    }

    public void setCrType(String crType) {
        this.crType = crType;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getSubmitterName() {
        return submitterName;
    }

    public void setSubmitterName(String submitterName) {
        this.submitterName = submitterName;
    }

    public String getDepartmentOrLocation() {
        return departmentOrLocation;
    }

    public void setDepartmentOrLocation(String departmentOrLocation) {
        this.departmentOrLocation = departmentOrLocation;
    }

    public String getPhoneOrEmail() {
        return phoneOrEmail;
    }

    public void setPhoneOrEmail(String phoneOrEmail) {
        this.phoneOrEmail = phoneOrEmail;
    }

    public LocalDate getDateSubmitted() {
        return dateSubmitted;
    }

    public void setDateSubmitted(LocalDate dateSubmitted) {
        this.dateSubmitted = dateSubmitted;
    }

    public String getChangeType() {
        return changeType;
    }

    public void setChangeType(String changeType) {
        this.changeType = changeType;
    }

    public String getOtherChangeDescription() {
        return otherChangeDescription;
    }

    public void setOtherChangeDescription(String otherChangeDescription) {
        this.otherChangeDescription = otherChangeDescription;
    }

    public String getBriefDescription() {
        return briefDescription;
    }

    public void setBriefDescription(String briefDescription) {
        this.briefDescription = briefDescription;
    }

    public LocalDate getChangeNeededBy() {
        return changeNeededBy;
    }

    public void setChangeNeededBy(LocalDate changeNeededBy) {
        this.changeNeededBy = changeNeededBy;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getReasonForChange() {
        return reasonForChange;
    }

    public void setReasonForChange(String reasonForChange) {
        this.reasonForChange = reasonForChange;
    }

    public String getEnvironmentsImpacted() {
        return environmentsImpacted;
    }

    public void setEnvironmentsImpacted(String environmentsImpacted) {
        this.environmentsImpacted = environmentsImpacted;
    }

    public String getAssumptionsAndNotes() {
        return assumptionsAndNotes;
    }

    public void setAssumptionsAndNotes(String assumptionsAndNotes) {
        this.assumptionsAndNotes = assumptionsAndNotes;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getHasAttachments() {
        return hasAttachments;
    }

    public void setHasAttachments(String hasAttachments) {
        this.hasAttachments = hasAttachments;
    }

    public String getAttachmentLink() {
        return attachmentLink;
    }

    public void setAttachmentLink(String attachmentLink) {
        this.attachmentLink = attachmentLink;
    }

    public LocalDate getDateSignedBySubmitter() {
        return dateSignedBySubmitter;
    }

    public void setDateSignedBySubmitter(LocalDate dateSignedBySubmitter) {
        this.dateSignedBySubmitter = dateSignedBySubmitter;
    }

    public Double getHourImpact() {
        return hourImpact;
    }

    public void setHourImpact(Double hourImpact) {
        this.hourImpact = hourImpact;
    }

    public Integer getDurationImpact() {
        return durationImpact;
    }

    public void setDurationImpact(Integer durationImpact) {
        this.durationImpact = durationImpact;
    }

    public Double getScheduleImpact() {
        return scheduleImpact;
    }

    public void setScheduleImpact(Double scheduleImpact) {
        this.scheduleImpact = scheduleImpact;
    }

    public Double getCostImpact() {
        return costImpact;
    }

    public void setCostImpact(Double costImpact) {
        this.costImpact = costImpact;
    }

    public String getCommentsBySystemOwner() {
        return commentsBySystemOwner;
    }

    public void setCommentsBySystemOwner(String commentsBySystemOwner) {
        this.commentsBySystemOwner = commentsBySystemOwner;
    }

    public String getRecommendations() {
        return recommendations;
    }

    public void setRecommendations(String recommendations) {
        this.recommendations = recommendations;
    }

    public String getTestPlan() {
        return testPlan;
    }

    public void setTestPlan(String testPlan) {
        this.testPlan = testPlan;
    }

    public String getRollbackPlan() {
        return rollbackPlan;
    }

    public void setRollbackPlan(String rollbackPlan) {
        this.rollbackPlan = rollbackPlan;
    }

    public LocalDate getDateSignedBySystemOwner() {
        return dateSignedBySystemOwner;
    }

    public void setDateSignedBySystemOwner(LocalDate dateSignedBySystemOwner) {
        this.dateSignedBySystemOwner = dateSignedBySystemOwner;
    }

    public String getDecision() {
        return decision;
    }

    public void setDecision(String decision) {
        this.decision = decision;
    }

    public LocalDate getDecisionDate() {
        return decisionDate;
    }

    public void setDecisionDate(LocalDate decisionDate) {
        this.decisionDate = decisionDate;
    }

    public String getDecisionExplanation() {
        return decisionExplanation;
    }

    public void setDecisionExplanation(String decisionExplanation) {
        this.decisionExplanation = decisionExplanation;
    }

    public String getConditions() {
        return conditions;
    }

    public void setConditions(String conditions) {
        this.conditions = conditions;
    }

    public LocalDate getDateSigned() {
        return dateSigned;
    }

    public void setDateSigned(LocalDate dateSigned) {
        this.dateSigned = dateSigned;
    }

    public String getImplementedStatus() {
        return implementedStatus;
    }

    public void setImplementedStatus(String implementedStatus) {
        this.implementedStatus = implementedStatus;
    }

    public String getStagingTestResults() {
        return stagingTestResults;
    }

    public void setStagingTestResults(String stagingTestResults) {
        this.stagingTestResults = stagingTestResults;
    }

    public String getImplementationTestResults() {
        return implementationTestResults;
    }

    public void setImplementationTestResults(String implementationTestResults) {
        this.implementationTestResults = implementationTestResults;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public LocalDate getImplementerDate() {
        return implementerDate;
    }

    public void setImplementerDate(LocalDate implementerDate) {
        this.implementerDate = implementerDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(LocalDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    public Long getChangeRequestFormId() {
        return changeRequestFormId;
    }

    public void setChangeRequestFormId(Long changeRequestFormId) {
        this.changeRequestFormId = changeRequestFormId;
    }
}
