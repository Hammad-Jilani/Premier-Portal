package com.PremireSystems.Portal.Entity.SapAccess;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class SapAccessHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate requestDate;
    private String department;
    private String employeeName;
    private String employeeNo;
    private String designation;
    private String currentSapId;

    @ElementCollection
    @CollectionTable(name="sap_history_location",joinColumns=@JoinColumn(name="sap_id"))
    private List<String> location;

    @ElementCollection
    @CollectionTable(name = "sap_history_area_office",joinColumns = @JoinColumn(name = "sap_id"))
    private List<String> areaOffice;

    // Access Request
    private String requestType;
    @Lob
    private String rolesRequired;
    @Lob
    private String businessJustification;
    @Lob
    private String tCodeRequired;

    @ElementCollection
    @CollectionTable(name = "sap_history_plant",joinColumns = @JoinColumn(name="sap_id"))
    private List<String> plant;

    @ElementCollection
    @CollectionTable(name = "sap_history_sales_organization",joinColumns = @JoinColumn(name="sap_id"))
    private List<String> salesOrganization;

    @ElementCollection
    @CollectionTable(name = "sap_history_distribution_channel",joinColumns = @JoinColumn(name="sap_id"))
    private List<String> distributionChannel;

    @ElementCollection
    @CollectionTable(name = "sap_history_division",joinColumns = @JoinColumn(name="sap_id"))
    private List<String> division;

    @ElementCollection
    @CollectionTable(name = "sap_history_sales_office",joinColumns = @JoinColumn(name="sap_id"))
    private List<String> salesOffice;
    private String saleOtherDetails;


    // Material Management (MM)
    private String purchasingOrg;
    private String purchasingGroup;
    private String purchasingDocument;
    private String movementType;
    private String mmOtherDetails;

    private String powerUser;
    private String powerUserName;

    private String crossModulePower;
    private String crossModulePowerUserName;

    private String itBusinessPartner;
    private String itBusinessPartnerName;

    private String dataOwner;
    private String dataOwnerName;

    private String functionalHeadApproval;
    private String functionalHeadRemarks;

    private String itsTechApproval;
    private String itTechRemarkable;

    private String userIdCreated;
    private String roleAssigned;
    private String roleCreated;
    private String roleCreatedDescription;
    private String roleModified;
    private String roleModifiedDescription;

    private String reviewerName;


    private String status;
    private LocalDateTime modifiedAt;

    public SapAccessHistory() {
    }

    public SapAccessHistory(Long id, LocalDate requestDate, String department, String employeeName, String employeeNo, String designation, String currentSapId, List<String> location, List<String> areaOffice, String requestType, String rolesRequired, String businessJustification, String tCodeRequired, List<String> plant, List<String> salesOrganization, List<String> distributionChannel, List<String> division, List<String> salesOffice, String saleOtherDetails, String purchasingOrg, String purchasingGroup, String purchasingDocument, String movementType, String mmOtherDetails, String powerUser, String powerUserName, String crossModulePower, String crossModulePowerUserName, String itBusinessPartner, String itBusinessPartnerName, String dataOwner, String dataOwnerName, String functionalHeadApproval, String functionalHeadRemarks, String itsTechApproval, String itTechRemarkable, String userIdCreated, String roleAssigned, String roleCreated, String roleCreatedDescription, String roleModified, String roleModifiedDescription, String reviewerName, String status, LocalDateTime modifiedAt) {
        this.id = id;
        this.requestDate = requestDate;
        this.department = department;
        this.employeeName = employeeName;
        this.employeeNo = employeeNo;
        this.designation = designation;
        this.currentSapId = currentSapId;
        this.location = location;
        this.areaOffice = areaOffice;
        this.requestType = requestType;
        this.rolesRequired = rolesRequired;
        this.businessJustification = businessJustification;
        this.tCodeRequired = tCodeRequired;
        this.plant = plant;
        this.salesOrganization = salesOrganization;
        this.distributionChannel = distributionChannel;
        this.division = division;
        this.salesOffice = salesOffice;
        this.saleOtherDetails = saleOtherDetails;
        this.purchasingOrg = purchasingOrg;
        this.purchasingGroup = purchasingGroup;
        this.purchasingDocument = purchasingDocument;
        this.movementType = movementType;
        this.mmOtherDetails = mmOtherDetails;
        this.powerUser = powerUser;
        this.powerUserName = powerUserName;
        this.crossModulePower = crossModulePower;
        this.crossModulePowerUserName = crossModulePowerUserName;
        this.itBusinessPartner = itBusinessPartner;
        this.itBusinessPartnerName = itBusinessPartnerName;
        this.dataOwner = dataOwner;
        this.dataOwnerName = dataOwnerName;
        this.functionalHeadApproval = functionalHeadApproval;
        this.functionalHeadRemarks = functionalHeadRemarks;
        this.itsTechApproval = itsTechApproval;
        this.itTechRemarkable = itTechRemarkable;
        this.userIdCreated = userIdCreated;
        this.roleAssigned = roleAssigned;
        this.roleCreated = roleCreated;
        this.roleCreatedDescription = roleCreatedDescription;
        this.roleModified = roleModified;
        this.roleModifiedDescription = roleModifiedDescription;
        this.reviewerName = reviewerName;
        this.status = status;
        this.modifiedAt = modifiedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(LocalDate requestDate) {
        this.requestDate = requestDate;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getEmployeeNo() {
        return employeeNo;
    }

    public void setEmployeeNo(String employeeNo) {
        this.employeeNo = employeeNo;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getCurrentSapId() {
        return currentSapId;
    }

    public void setCurrentSapId(String currentSapId) {
        this.currentSapId = currentSapId;
    }

    public List<String> getLocation() {
        return location;
    }

    public void setLocation(List<String> location) {
        this.location = location;
    }

    public List<String> getAreaOffice() {
        return areaOffice;
    }

    public void setAreaOffice(List<String> areaOffice) {
        this.areaOffice = areaOffice;
    }

    public String getRequestType() {
        return requestType;
    }

    public void setRequestType(String requestType) {
        this.requestType = requestType;
    }

    public String getRolesRequired() {
        return rolesRequired;
    }

    public void setRolesRequired(String rolesRequired) {
        this.rolesRequired = rolesRequired;
    }

    public String getBusinessJustification() {
        return businessJustification;
    }

    public void setBusinessJustification(String businessJustification) {
        this.businessJustification = businessJustification;
    }

    public String gettCodeRequired() {
        return tCodeRequired;
    }

    public void settCodeRequired(String tCodeRequired) {
        this.tCodeRequired = tCodeRequired;
    }

    public List<String> getPlant() {
        return plant;
    }

    public void setPlant(List<String> plant) {
        this.plant = plant;
    }

    public List<String> getSalesOrganization() {
        return salesOrganization;
    }

    public void setSalesOrganization(List<String> salesOrganization) {
        this.salesOrganization = salesOrganization;
    }

    public List<String> getDistributionChannel() {
        return distributionChannel;
    }

    public void setDistributionChannel(List<String> distributionChannel) {
        this.distributionChannel = distributionChannel;
    }

    public List<String> getDivision() {
        return division;
    }

    public void setDivision(List<String> division) {
        this.division = division;
    }

    public List<String> getSalesOffice() {
        return salesOffice;
    }

    public void setSalesOffice(List<String> salesOffice) {
        this.salesOffice = salesOffice;
    }

    public String getSaleOtherDetails() {
        return saleOtherDetails;
    }

    public void setSaleOtherDetails(String saleOtherDetails) {
        this.saleOtherDetails = saleOtherDetails;
    }

    public String getPurchasingOrg() {
        return purchasingOrg;
    }

    public void setPurchasingOrg(String purchasingOrg) {
        this.purchasingOrg = purchasingOrg;
    }

    public String getPurchasingGroup() {
        return purchasingGroup;
    }

    public void setPurchasingGroup(String purchasingGroup) {
        this.purchasingGroup = purchasingGroup;
    }

    public String getPurchasingDocument() {
        return purchasingDocument;
    }

    public void setPurchasingDocument(String purchasingDocument) {
        this.purchasingDocument = purchasingDocument;
    }

    public String getMovementType() {
        return movementType;
    }

    public void setMovementType(String movementType) {
        this.movementType = movementType;
    }

    public String getMmOtherDetails() {
        return mmOtherDetails;
    }

    public void setMmOtherDetails(String mmOtherDetails) {
        this.mmOtherDetails = mmOtherDetails;
    }

    public String getPowerUser() {
        return powerUser;
    }

    public void setPowerUser(String powerUser) {
        this.powerUser = powerUser;
    }

    public String getPowerUserName() {
        return powerUserName;
    }

    public void setPowerUserName(String powerUserName) {
        this.powerUserName = powerUserName;
    }

    public String getCrossModulePower() {
        return crossModulePower;
    }

    public void setCrossModulePower(String crossModulePower) {
        this.crossModulePower = crossModulePower;
    }

    public String getCrossModulePowerUserName() {
        return crossModulePowerUserName;
    }

    public void setCrossModulePowerUserName(String crossModulePowerUserName) {
        this.crossModulePowerUserName = crossModulePowerUserName;
    }

    public String getItBusinessPartner() {
        return itBusinessPartner;
    }

    public void setItBusinessPartner(String itBusinessPartner) {
        this.itBusinessPartner = itBusinessPartner;
    }

    public String getItBusinessPartnerName() {
        return itBusinessPartnerName;
    }

    public void setItBusinessPartnerName(String itBusinessPartnerName) {
        this.itBusinessPartnerName = itBusinessPartnerName;
    }

    public String getDataOwner() {
        return dataOwner;
    }

    public void setDataOwner(String dataOwner) {
        this.dataOwner = dataOwner;
    }

    public String getDataOwnerName() {
        return dataOwnerName;
    }

    public void setDataOwnerName(String dataOwnerName) {
        this.dataOwnerName = dataOwnerName;
    }

    public String getFunctionalHeadApproval() {
        return functionalHeadApproval;
    }

    public void setFunctionalHeadApproval(String functionalHeadApproval) {
        this.functionalHeadApproval = functionalHeadApproval;
    }

    public String getFunctionalHeadRemarks() {
        return functionalHeadRemarks;
    }

    public void setFunctionalHeadRemarks(String functionalHeadRemarks) {
        this.functionalHeadRemarks = functionalHeadRemarks;
    }

    public String getItsTechApproval() {
        return itsTechApproval;
    }

    public void setItsTechApproval(String itsTechApproval) {
        this.itsTechApproval = itsTechApproval;
    }

    public String getItTechRemarkable() {
        return itTechRemarkable;
    }

    public void setItTechRemarkable(String itTechRemarkable) {
        this.itTechRemarkable = itTechRemarkable;
    }

    public String getUserIdCreated() {
        return userIdCreated;
    }

    public void setUserIdCreated(String userIdCreated) {
        this.userIdCreated = userIdCreated;
    }

    public String getRoleAssigned() {
        return roleAssigned;
    }

    public void setRoleAssigned(String roleAssigned) {
        this.roleAssigned = roleAssigned;
    }

    public String getRoleCreated() {
        return roleCreated;
    }

    public void setRoleCreated(String roleCreated) {
        this.roleCreated = roleCreated;
    }

    public String getRoleCreatedDescription() {
        return roleCreatedDescription;
    }

    public void setRoleCreatedDescription(String roleCreatedDescription) {
        this.roleCreatedDescription = roleCreatedDescription;
    }

    public String getRoleModified() {
        return roleModified;
    }

    public void setRoleModified(String roleModified) {
        this.roleModified = roleModified;
    }

    public String getRoleModifiedDescription() {
        return roleModifiedDescription;
    }

    public void setRoleModifiedDescription(String roleModifiedDescription) {
        this.roleModifiedDescription = roleModifiedDescription;
    }

    public String getReviewerName() {
        return reviewerName;
    }

    public void setReviewerName(String reviewerName) {
        this.reviewerName = reviewerName;
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
}


