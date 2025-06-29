package com.PremireSystems.Portal.Entity.MediaDisposal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
public class MediaDisposalFormHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String owner;
    private String department;
    private String reason;
    private String model;
    private String serialNumber;
    //    private String category;
    private String digitalHardware;
    private String digitalSoftware;
    private String physicalCategory;
    private String informationClassification;
    private String backUp;
    private String sanitizationMethod;
    private String disposedMedia;
    private String performedBy;
    private String validatedBy;
    private LocalDate performedDate;
    private LocalDate validatedDate;
    private String status;
    private LocalDateTime modifiedAt;

    public MediaDisposalFormHistory(){}

    public MediaDisposalFormHistory(Long id, String owner, String department, String reason, String model, String serialNumber, String digitalHardware, String digitalSoftware, String physicalCategory, String informationClassification, String backUp, String sanitizationMethod, String disposedMedia, String performedBy, String validatedBy, LocalDate performedDate, LocalDate validatedDate, String status, LocalDateTime modifiedAt) {
        this.id = id;
        this.owner = owner;
        this.department = department;
        this.reason = reason;
        this.model = model;
        this.serialNumber = serialNumber;
        this.digitalHardware = digitalHardware;
        this.digitalSoftware = digitalSoftware;
        this.physicalCategory = physicalCategory;
        this.informationClassification = informationClassification;
        this.backUp = backUp;
        this.sanitizationMethod = sanitizationMethod;
        this.disposedMedia = disposedMedia;
        this.performedBy = performedBy;
        this.validatedBy = validatedBy;
        this.performedDate = performedDate;
        this.validatedDate = validatedDate;
        this.status = status;
        this.modifiedAt = modifiedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getDigitalHardware() {
        return digitalHardware;
    }

    public void setDigitalHardware(String digitalHardware) {
        this.digitalHardware = digitalHardware;
    }

    public String getDigitalSoftware() {
        return digitalSoftware;
    }

    public void setDigitalSoftware(String digitalSoftware) {
        this.digitalSoftware = digitalSoftware;
    }

    public String getPhysicalCategory() {
        return physicalCategory;
    }

    public void setPhysicalCategory(String physicalCategory) {
        this.physicalCategory = physicalCategory;
    }

    public String getInformationClassification() {
        return informationClassification;
    }

    public void setInformationClassification(String informationClassification) {
        this.informationClassification = informationClassification;
    }

    public String getBackUp() {
        return backUp;
    }

    public void setBackUp(String backUp) {
        this.backUp = backUp;
    }

    public String getSanitizationMethod() {
        return sanitizationMethod;
    }

    public void setSanitizationMethod(String sanitizationMethod) {
        this.sanitizationMethod = sanitizationMethod;
    }

    public String getDisposedMedia() {
        return disposedMedia;
    }

    public void setDisposedMedia(String disposedMedia) {
        this.disposedMedia = disposedMedia;
    }

    public String getPerformedBy() {
        return performedBy;
    }

    public void setPerformedBy(String performedBy) {
        this.performedBy = performedBy;
    }

    public String getValidatedBy() {
        return validatedBy;
    }

    public void setValidatedBy(String validatedBy) {
        this.validatedBy = validatedBy;
    }

    public LocalDate getPerformedDate() {
        return performedDate;
    }

    public void setPerformedDate(LocalDate performedDate) {
        this.performedDate = performedDate;
    }

    public LocalDate getValidatedDate() {
        return validatedDate;
    }

    public void setValidatedDate(LocalDate validatedDate) {
        this.validatedDate = validatedDate;
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
