package com.PremireSystems.Portal.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class AccessControlFormHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long history_id;

    private String employeeId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String department;
    private LocalDate joining;
    private String phone_number;
    private String designation;
    private String userStatus;
    private String accessPeriod;
    private String hrSecurity;
    private String operationStatus;

    @ElementCollection
    private List<String> physicalAccess;

    @ElementCollection
    private List<String> logicalAccess;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "history_id")
    private List<ApplicationAccessFormRightsHistory> applicationAccessRightsListHistory;

    private String loginIdAction;
    private LocalDate createDateAction;
    private String emailAddressAction;
    private String remarks;
    private LocalDate startDate;
    private LocalDate endDate;
    private String userAcknowledgementRemarks;

    private LocalDateTime modifiedAt;

    public AccessControlFormHistory(){}

    public AccessControlFormHistory(Long history_id, String employeeId, String firstName, String middleName, String lastName, String department, LocalDate joining, String phone_number, String designation, String userStatus, String accessPeriod, String hrSecurity, String operationStatus, List<String> physicalAccess, List<String> logicalAccess, List<ApplicationAccessFormRightsHistory> applicationAccessRightsListHistory, String loginIdAction, LocalDate createDateAction, String emailAddressAction, String remarks, LocalDate startDate, LocalDate endDate, String userAcknowledgementRemarks, LocalDateTime modifiedAt) {
        this.history_id = history_id;
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.department = department;
        this.joining = joining;
        this.phone_number = phone_number;
        this.designation = designation;
        this.userStatus = userStatus;
        this.accessPeriod = accessPeriod;
        this.hrSecurity = hrSecurity;
        this.operationStatus = operationStatus;
        this.physicalAccess = physicalAccess;
        this.logicalAccess = logicalAccess;
        this.applicationAccessRightsListHistory = applicationAccessRightsListHistory;
        this.loginIdAction = loginIdAction;
        this.createDateAction = createDateAction;
        this.emailAddressAction = emailAddressAction;
        this.remarks = remarks;
        this.startDate = startDate;
        this.endDate = endDate;
        this.userAcknowledgementRemarks = userAcknowledgementRemarks;
        this.modifiedAt = modifiedAt;
    }

    public Long getHistory_id() {
        return history_id;
    }

    public void setHistory_id(Long history_id) {
        this.history_id = history_id;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public LocalDate getJoining() {
        return joining;
    }

    public void setJoining(LocalDate joining) {
        this.joining = joining;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(String userStatus) {
        this.userStatus = userStatus;
    }

    public String getAccessPeriod() {
        return accessPeriod;
    }

    public void setAccessPeriod(String accessPeriod) {
        this.accessPeriod = accessPeriod;
    }

    public String getHrSecurity() {
        return hrSecurity;
    }

    public void setHrSecurity(String hrSecurity) {
        this.hrSecurity = hrSecurity;
    }

    public String getOperationStatus() {
        return operationStatus;
    }

    public void setOperationStatus(String operationStatus) {
        this.operationStatus = operationStatus;
    }

    public List<String> getPhysicalAccess() {
        return physicalAccess;
    }

    public void setPhysicalAccess(List<String> physicalAccess) {
        this.physicalAccess = physicalAccess;
    }

    public List<String> getLogicalAccess() {
        return logicalAccess;
    }

    public void setLogicalAccess(List<String> logicalAccess) {
        this.logicalAccess = logicalAccess;
    }

    public List<ApplicationAccessFormRightsHistory> getApplicationAccessRightsListHistory() {
        return applicationAccessRightsListHistory;
    }

    public void setApplicationAccessRightsListHistory(List<ApplicationAccessFormRightsHistory> applicationAccessRightsListHistory) {
        this.applicationAccessRightsListHistory = applicationAccessRightsListHistory;
    }

    public String getLoginIdAction() {
        return loginIdAction;
    }

    public void setLoginIdAction(String loginIdAction) {
        this.loginIdAction = loginIdAction;
    }

    public LocalDate getCreateDateAction() {
        return createDateAction;
    }

    public void setCreateDateAction(LocalDate createDateAction) {
        this.createDateAction = createDateAction;
    }

    public String getEmailAddressAction() {
        return emailAddressAction;
    }

    public void setEmailAddressAction(String emailAddressAction) {
        this.emailAddressAction = emailAddressAction;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getUserAcknowledgementRemarks() {
        return userAcknowledgementRemarks;
    }

    public void setUserAcknowledgementRemarks(String userAcknowledgementRemarks) {
        this.userAcknowledgementRemarks = userAcknowledgementRemarks;
    }

    public LocalDateTime getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(LocalDateTime modifiedAt) {
        this.modifiedAt = modifiedAt;
    }
}
