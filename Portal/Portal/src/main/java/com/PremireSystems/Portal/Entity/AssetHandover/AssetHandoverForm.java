package com.PremireSystems.Portal.Entity.AssetHandover;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class AssetHandoverForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String employeeName;
    private String designation;
    private String department;
    private String assetTransferNumber;

    private LocalDate handoverDate;
    private String handoverBy;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "asset_items_id")
    private List<AssetItem> assetItems;

    @Column(length = 1000)
    private String employeeAcknowledgementName;

    public AssetHandoverForm(){}

    public AssetHandoverForm(Long id, String employeeName, String designation, String department, String assetTransferNumber, LocalDate handoverDate, String handoverBy, List<AssetItem> assetItems, String employeeAcknowledgementName) {
        this.id = id;
        this.employeeName = employeeName;
        this.designation = designation;
        this.department = department;
        this.assetTransferNumber = assetTransferNumber;
        this.handoverDate = handoverDate;
        this.handoverBy = handoverBy;
        this.assetItems = assetItems;
        this.employeeAcknowledgementName = employeeAcknowledgementName;
    }

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

    public List<AssetItem> getAssetItems() {
        return assetItems;
    }

    public void setAssetItems(List<AssetItem> assetItems) {
        this.assetItems = assetItems;
    }

    public String getEmployeeAcknowledgementName() {
        return employeeAcknowledgementName;
    }

    public void setEmployeeAcknowledgementName(String employeeAcknowledgementName) {
        this.employeeAcknowledgementName = employeeAcknowledgementName;
    }
}
