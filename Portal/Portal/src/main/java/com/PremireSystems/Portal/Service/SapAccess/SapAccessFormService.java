package com.PremireSystems.Portal.Service.SapAccess;

import com.PremireSystems.Portal.Entity.SapAccess.SapAccessForm;
import com.PremireSystems.Portal.Entity.SapAccess.SapAccessHistory;
import com.PremireSystems.Portal.Repository.SapAccessForm.SapAccessFormRepository;
import com.PremireSystems.Portal.Repository.SapAccessForm.SapAccessHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class SapAccessFormService {

    @Autowired
    private SapAccessFormRepository sapAccessFormRepository;

    @Autowired
    private SapAccessHistoryRepository sapAccessHistoryRepository;

    public SapAccessForm createSapForm(SapAccessForm sapAccessForm){
        SapAccessHistory sapAccessHistory = new SapAccessHistory();

        sapAccessHistory.setAreaOffice(sapAccessForm.getAreaOffice());
        sapAccessHistory.setModifiedAt(LocalDateTime.now());
        sapAccessHistory.setStatus("Created");
        sapAccessHistory.setRequestDate(sapAccessForm.getRequestDate());
        sapAccessHistory.setDepartment(sapAccessForm.getDepartment());
        sapAccessHistory.setEmployeeName(sapAccessForm.getEmployeeName());
        sapAccessHistory.setEmployeeNo(sapAccessForm.getEmployeeNo());
        sapAccessHistory.setDesignation(sapAccessForm.getDesignation());
        sapAccessHistory.setCurrentSapId(sapAccessForm.getCurrentSapId());

        sapAccessHistory.setLocation(sapAccessForm.getLocation());
        sapAccessHistory.setAreaOffice(sapAccessForm.getAreaOffice());

        sapAccessHistory.setRequestType(sapAccessForm.getRequestType());
        sapAccessHistory.setRolesRequired(sapAccessForm.getRolesRequired());
        sapAccessHistory.setBusinessJustification(sapAccessForm.getBusinessJustification());
        sapAccessHistory.settCodeRequired(sapAccessForm.gettCodeRequired());

        sapAccessHistory.setPlant(sapAccessForm.getPlant());
        sapAccessHistory.setSalesOrganization(sapAccessForm.getSalesOrganization());
        sapAccessHistory.setDistributionChannel(sapAccessForm.getDistributionChannel());
        sapAccessHistory.setDivision(sapAccessForm.getDivision());
        sapAccessHistory.setSalesOffice(sapAccessForm.getSalesOffice());
        sapAccessHistory.setSaleOtherDetails(sapAccessForm.getSaleOtherDetails());

        sapAccessHistory.setPurchasingOrg(sapAccessForm.getPurchasingOrg());
        sapAccessHistory.setPurchasingGroup(sapAccessForm.getPurchasingGroup());
        sapAccessHistory.setPurchasingDocument(sapAccessForm.getPurchasingDocument());
        sapAccessHistory.setMovementType(sapAccessForm.getMovementType());
        sapAccessHistory.setMmOtherDetails(sapAccessForm.getMmOtherDetails());

        sapAccessHistory.setPowerUser(sapAccessForm.getPowerUser());
        sapAccessHistory.setPowerUserName(sapAccessForm.getPowerUserName());

        sapAccessHistory.setCrossModulePower(sapAccessForm.getCrossModulePower());
        sapAccessHistory.setCrossModulePowerUserName(sapAccessForm.getCrossModulePowerUserName());

        sapAccessHistory.setItBusinessPartner(sapAccessForm.getItBusinessPartner());
        sapAccessHistory.setItBusinessPartnerName(sapAccessForm.getItBusinessPartnerName());

        sapAccessHistory.setDataOwner(sapAccessForm.getDataOwner());
        sapAccessHistory.setDataOwnerName(sapAccessForm.getDataOwnerName());

        sapAccessHistory.setFunctionalHeadApproval(sapAccessForm.getFunctionalHeadApproval());
        sapAccessHistory.setFunctionalHeadRemarks(sapAccessForm.getFunctionalHeadRemarks());

        sapAccessHistory.setItsTechApproval(sapAccessForm.getItsTechApproval());
        sapAccessHistory.setItTechRemarkable(sapAccessForm.getItTechRemarkable());

        sapAccessHistory.setUserIdCreated(sapAccessForm.getUserIdCreated());
        sapAccessHistory.setRoleAssigned(sapAccessForm.getRoleAssigned());
        sapAccessHistory.setRoleCreated(sapAccessForm.getRoleCreated());
        sapAccessHistory.setRoleCreatedDescription(sapAccessForm.getRoleCreatedDescription());
        sapAccessHistory.setRoleModified(sapAccessForm.getRoleModified());
        sapAccessHistory.setRoleModifiedDescription(sapAccessForm.getRoleModifiedDescription());
        sapAccessHistory.setReviewerName(sapAccessForm.getReviewerName());

        sapAccessHistoryRepository.save(sapAccessHistory);
        return sapAccessFormRepository.save(sapAccessForm);
    }

    public List<SapAccessForm> getAll(){
        return sapAccessFormRepository.findAll();
    }

    public SapAccessForm getById(Long id){
        return sapAccessFormRepository.findById(id).orElseThrow(()->new RuntimeException("No sap form with id = "+id));
    }

    public void deleteSapForm(Long id){
        Optional<SapAccessForm> optionalSapAccessForm = sapAccessFormRepository.findById(id);
        if (optionalSapAccessForm.isPresent()){
            SapAccessForm sapAccessForm = optionalSapAccessForm.get();
            sapAccessFormRepository.delete(sapAccessForm);
        }
        else{
            throw new RuntimeException("No Sap Form found with id = "+id);
        }
    }

    public SapAccessForm update(Long Id,SapAccessForm sapAccessForm){

        Optional<SapAccessForm> optionalSapAccessForm = sapAccessFormRepository.findById(Id);
        if(optionalSapAccessForm.isPresent()) {

            SapAccessHistory sapAccessHistory = new SapAccessHistory();

            sapAccessHistory.setAreaOffice(sapAccessForm.getAreaOffice());
            sapAccessHistory.setModifiedAt(LocalDateTime.now());
            sapAccessHistory.setStatus("Modified");
            sapAccessHistory.setRequestDate(sapAccessForm.getRequestDate());
            sapAccessHistory.setDepartment(sapAccessForm.getDepartment());
            sapAccessHistory.setEmployeeName(sapAccessForm.getEmployeeName());
            sapAccessHistory.setEmployeeNo(sapAccessForm.getEmployeeNo());
            sapAccessHistory.setDesignation(sapAccessForm.getDesignation());
            sapAccessHistory.setCurrentSapId(sapAccessForm.getCurrentSapId());

            sapAccessHistory.setLocation(sapAccessForm.getLocation());
            sapAccessHistory.setAreaOffice(sapAccessForm.getAreaOffice());

            sapAccessHistory.setRequestType(sapAccessForm.getRequestType());
            sapAccessHistory.setRolesRequired(sapAccessForm.getRolesRequired());
            sapAccessHistory.setBusinessJustification(sapAccessForm.getBusinessJustification());
            sapAccessHistory.settCodeRequired(sapAccessForm.gettCodeRequired());

            sapAccessHistory.setPlant(sapAccessForm.getPlant());
            sapAccessHistory.setSalesOrganization(sapAccessForm.getSalesOrganization());
            sapAccessHistory.setDistributionChannel(sapAccessForm.getDistributionChannel());
            sapAccessHistory.setDivision(sapAccessForm.getDivision());
            sapAccessHistory.setSalesOffice(sapAccessForm.getSalesOffice());
            sapAccessHistory.setSaleOtherDetails(sapAccessForm.getSaleOtherDetails());

            sapAccessHistory.setPurchasingOrg(sapAccessForm.getPurchasingOrg());
            sapAccessHistory.setPurchasingGroup(sapAccessForm.getPurchasingGroup());
            sapAccessHistory.setPurchasingDocument(sapAccessForm.getPurchasingDocument());
            sapAccessHistory.setMovementType(sapAccessForm.getMovementType());
            sapAccessHistory.setMmOtherDetails(sapAccessForm.getMmOtherDetails());

            sapAccessHistory.setPowerUser(sapAccessForm.getPowerUser());
            sapAccessHistory.setPowerUserName(sapAccessForm.getPowerUserName());

            sapAccessHistory.setCrossModulePower(sapAccessForm.getCrossModulePower());
            sapAccessHistory.setCrossModulePowerUserName(sapAccessForm.getCrossModulePowerUserName());

            sapAccessHistory.setItBusinessPartner(sapAccessForm.getItBusinessPartner());
            sapAccessHistory.setItBusinessPartnerName(sapAccessForm.getItBusinessPartnerName());

            sapAccessHistory.setDataOwner(sapAccessForm.getDataOwner());
            sapAccessHistory.setDataOwnerName(sapAccessForm.getDataOwnerName());

            sapAccessHistory.setFunctionalHeadApproval(sapAccessForm.getFunctionalHeadApproval());
            sapAccessHistory.setFunctionalHeadRemarks(sapAccessForm.getFunctionalHeadRemarks());

            sapAccessHistory.setItsTechApproval(sapAccessForm.getItsTechApproval());
            sapAccessHistory.setItTechRemarkable(sapAccessForm.getItTechRemarkable());

            sapAccessHistory.setUserIdCreated(sapAccessForm.getUserIdCreated());
            sapAccessHistory.setRoleAssigned(sapAccessForm.getRoleAssigned());
            sapAccessHistory.setRoleCreated(sapAccessForm.getRoleCreated());
            sapAccessHistory.setRoleCreatedDescription(sapAccessForm.getRoleCreatedDescription());
            sapAccessHistory.setRoleModified(sapAccessForm.getRoleModified());
            sapAccessHistory.setRoleModifiedDescription(sapAccessForm.getRoleModifiedDescription());
            sapAccessHistory.setReviewerName(sapAccessForm.getReviewerName());

            sapAccessHistoryRepository.save(sapAccessHistory);

            SapAccessForm existing = optionalSapAccessForm.get();

            existing.setUserIdCreated(sapAccessForm.getUserIdCreated());
            existing.setRequestDate(sapAccessForm.getRequestDate());
            existing.setDepartment(sapAccessForm.getDepartment());
            existing.setEmployeeName(sapAccessForm.getEmployeeName());
            existing.setEmployeeNo(sapAccessForm.getEmployeeNo());
            existing.setDesignation(sapAccessForm.getDesignation());
            existing.setCurrentSapId(sapAccessForm.getCurrentSapId());

            existing.setLocation(sapAccessForm.getLocation());
            existing.setAreaOffice(sapAccessForm.getAreaOffice());

            existing.setRequestType(sapAccessForm.getRequestType());
            existing.setRolesRequired(sapAccessForm.getRolesRequired());
            existing.setBusinessJustification(sapAccessForm.getBusinessJustification());
            existing.settCodeRequired(sapAccessForm.gettCodeRequired());

            existing.setPlant(sapAccessForm.getPlant());
            existing.setSalesOrganization(sapAccessForm.getSalesOrganization());
            existing.setDistributionChannel(sapAccessForm.getDistributionChannel());
            existing.setDivision(sapAccessForm.getDivision());
            existing.setSalesOffice(sapAccessForm.getSalesOffice());
            existing.setSaleOtherDetails(sapAccessForm.getSaleOtherDetails());

            existing.setPurchasingOrg(sapAccessForm.getPurchasingOrg());
            existing.setPurchasingGroup(sapAccessForm.getPurchasingGroup());
            existing.setPurchasingDocument(sapAccessForm.getPurchasingDocument());
            existing.setMovementType(sapAccessForm.getMovementType());
            existing.setMmOtherDetails(sapAccessForm.getMmOtherDetails());

            existing.setPowerUser(sapAccessForm.getPowerUser());
            existing.setPowerUserName(sapAccessForm.getPowerUserName());

            existing.setCrossModulePower(sapAccessForm.getCrossModulePower());
            existing.setCrossModulePowerUserName(sapAccessForm.getCrossModulePowerUserName());

            existing.setItBusinessPartner(sapAccessForm.getItBusinessPartner());
            existing.setItBusinessPartnerName(sapAccessForm.getItBusinessPartnerName());

            existing.setDataOwner(sapAccessForm.getDataOwner());
            existing.setDataOwnerName(sapAccessForm.getDataOwnerName());

            existing.setFunctionalHeadApproval(sapAccessForm.getFunctionalHeadApproval());
            existing.setFunctionalHeadRemarks(sapAccessForm.getFunctionalHeadRemarks());

            existing.setItsTechApproval(sapAccessForm.getItsTechApproval());
            existing.setItTechRemarkable(sapAccessForm.getItTechRemarkable());

            existing.setUserIdCreated(sapAccessForm.getUserIdCreated());
            existing.setRoleAssigned(sapAccessForm.getRoleAssigned());
            existing.setRoleCreated(sapAccessForm.getRoleCreated());
            existing.setRoleCreatedDescription(sapAccessForm.getRoleCreatedDescription());
            existing.setRoleModified(sapAccessForm.getRoleModified());
            existing.setRoleModifiedDescription(sapAccessForm.getRoleModifiedDescription());

            existing.setReviewerName(sapAccessForm.getReviewerName());


            return sapAccessFormRepository.save(existing);
        }
        else{
            throw new RuntimeException("Sap Access Form Not found");
        }

    }

}
