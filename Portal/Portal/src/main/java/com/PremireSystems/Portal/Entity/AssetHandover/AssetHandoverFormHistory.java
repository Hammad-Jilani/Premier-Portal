package com.PremireSystems.Portal.Entity.AssetHandover;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
public class AssetHandoverFormHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String employeeName;
    private String designation;
    private String department;
    private String assetTransferNumber;

    private LocalDate handoverDate;
    private String handoverBy;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "asset_item_history_id")
    private List<AssetItemHistory> assetItems;

    @Column(length = 1000)
    private String employeeAcknowledgementText;

    private LocalDate modifiedAt;

    private Long originalFormId;

    public AssetHandoverFormHistory(Long id, String employeeName, String designation, String department, String assetTransferNumber, LocalDate handoverDate, String handoverBy, List<AssetItemHistory> assetItems, String signatoryRequester, String signatoryApprover, String signatoryHandOverPerson, String employeeAcknowledgementText, String employeeSignature, LocalDate modifiedAt, Long originalFormId) {
        this.id = id;
        this.employeeName = employeeName;
        this.designation = designation;
        this.department = department;
        this.assetTransferNumber = assetTransferNumber;
        this.handoverDate = handoverDate;
        this.handoverBy = handoverBy;
        this.assetItems = assetItems;
        this.employeeAcknowledgementText = employeeAcknowledgementText;
        this.modifiedAt = modifiedAt;
        this.originalFormId = originalFormId;
    }

    public AssetHandoverFormHistory(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getAssetTransferNumber() {
        return assetTransferNumber;
    }

    public void setAssetTransferNumber(String assetTransferNumber) {
        this.assetTransferNumber = assetTransferNumber;
    }

    public LocalDate getHandoverDate() {
        return handoverDate;
    }

    public void setHandoverDate(LocalDate handoverDate) {
        this.handoverDate = handoverDate;
    }

    public String getHandoverBy() {
        return handoverBy;
    }

    public void setHandoverBy(String handoverBy) {
        this.handoverBy = handoverBy;
    }

    public List<AssetItemHistory> getAssetItems() {
        return assetItems;
    }

    public void setAssetItems(List<AssetItemHistory> assetItems) {
        this.assetItems = assetItems;
    }


    public String getEmployeeAcknowledgementText() {
        return employeeAcknowledgementText;
    }

    public void setEmployeeAcknowledgementText(String employeeAcknowledgementText) {
        this.employeeAcknowledgementText = employeeAcknowledgementText;
    }

    public LocalDate getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(LocalDate modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    public Long getOriginalFormId() {
        return originalFormId;
    }

    public void setOriginalFormId(Long originalFormId) {
        this.originalFormId = originalFormId;
    }
}
