package com.PremireSystems.Portal.Entity.AssetHandover;


import jakarta.persistence.*;

@Entity
public class AssetItemHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String particulars;
    private String serialNumber;
    private Integer quantity;

    @Column(length = 500)
    private String remarks;

//    @ManyToOne
//    @JoinColumn(name = "history_id")
//    private AssetHandoverFormHistory history;

    public AssetItemHistory(){}

    public AssetItemHistory(Long id, String particulars, String serialNumber, Integer quantity, String remarks) {
        this.id = id;
        this.particulars = particulars;
        this.serialNumber = serialNumber;
        this.quantity = quantity;
        this.remarks = remarks;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getParticulars() {
        return particulars;
    }

    public void setParticulars(String particulars) {
        this.particulars = particulars;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
