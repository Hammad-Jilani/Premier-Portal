package com.PremireSystems.Portal.Entity;


import jakarta.persistence.*;

@Entity
public class ApplicationAccessRights {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String application;
    private String module;
    private String status;
    private String accessRights;

    public ApplicationAccessRights(){}

    public ApplicationAccessRights(Long id, String application, String module, String status, String accessRights) {
        this.id = id;
        this.application = application;
        this.module = module;
        this.status = status;
        this.accessRights = accessRights;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getApplication() {
        return application;
    }

    public void setApplication(String application) {
        this.application = application;
    }

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAccessRights() {
        return accessRights;
    }

    public void setAccessRights(String accessRights) {
        this.accessRights = accessRights;
    }

}

