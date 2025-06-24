package com.PremireSystems.Portal.Service;

import com.PremireSystems.Portal.Entity.AccessControlForm;
import com.PremireSystems.Portal.Entity.AccessControlFormHistory;
import com.PremireSystems.Portal.Entity.ApplicationAccessFormRightsHistory;
import com.PremireSystems.Portal.Entity.ApplicationAccessRights;
import com.PremireSystems.Portal.Repository.AccessControlFormRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AccessControlFormService {

    @Autowired
    private AccessControlFormRepository accessControlFormRepository;

    @Autowired
    private AccessControlFormHistoryService accessControlFormHistoryService;

    public AccessControlForm create(AccessControlForm accessControlForm){
        AccessControlFormHistory accessControlFormHistory =
                new AccessControlFormHistory();

        accessControlFormHistory.setPhysicalAccess(accessControlForm.getPhysicalAccess());
        accessControlFormHistory.setPhone_number(accessControlForm.getPhone_number());
        accessControlFormHistory.setModifiedAt(LocalDate.from(ZonedDateTime.now()));
        accessControlFormHistory.setLastName(accessControlForm.getLastName());
        accessControlFormHistory.setMiddleName(accessControlForm.getMiddleName());
        accessControlFormHistory.setFirstName(accessControlForm.getFirstName());
        accessControlFormHistory.setJoining(accessControlForm.getJoining());
        accessControlFormHistory.setDesignation(accessControlForm.getDesignation());
        accessControlFormHistory.setDepartment(accessControlForm.getDepartment());
        accessControlFormHistory.setCreateDateAction(accessControlForm.getCreateDateAction());
//        accessControlFormHistory.setApplicationAccessRightsListHistory(accessControlForm.getApplicationAccessRightsList());
        accessControlFormHistory.setAccessPeriod(accessControlForm.getAccessPeriod());
        accessControlFormHistory.setLogicalAccess(accessControlForm.getLogicalAccess());
        accessControlFormHistory.setEmployeeId(accessControlForm.getEmployeeId());
        accessControlFormHistory.setEndDate(accessControlForm.getEndDate());
        accessControlFormHistory.setEmailAddressAction(accessControlForm.getEmailAddressAction());
        accessControlFormHistory.setStartDate(accessControlForm.getStartDate());
        accessControlFormHistory.setHrSecurity(accessControlForm.getHrSecurity());
        accessControlFormHistory.setUserAcknowledgementRemarks(accessControlForm.getUserAcknowledgementRemarks());
        accessControlFormHistory.setRemarks(accessControlForm.getRemarks());
        accessControlFormHistory.setLoginIdAction(accessControlForm.getLoginIdAction());
        accessControlFormHistory.setUserStatus(accessControlForm.getUserStatus());
        accessControlFormHistory.setOperationStatus("Create");

        List<ApplicationAccessFormRightsHistory> applicationAccessFormRightsHistories
                = new ArrayList<>();

        for (ApplicationAccessRights original : accessControlForm.getApplicationAccessRightsList()){
            ApplicationAccessFormRightsHistory copy = new ApplicationAccessFormRightsHistory();
            copy.setStatus(original.getStatus());
            copy.setModule(original.getModule());
            copy.setApplication(original.getApplication());
            copy.setAccessRights(original.getAccessRights());
            applicationAccessFormRightsHistories.add(copy);
        }
        accessControlFormHistory.setApplicationAccessRightsListHistory(applicationAccessFormRightsHistories);

        accessControlFormHistoryService.create(accessControlFormHistory);

        return accessControlFormRepository.save(accessControlForm);
    }

    public AccessControlForm get(Long AccessControlFormId ){
        return accessControlFormRepository.findById(AccessControlFormId).orElseThrow(()-> new RuntimeException("Access Form Not Found"));
    }

    public void delete(Long AccessControlFormId ) {
        accessControlFormRepository.deleteById(AccessControlFormId);
    }

    public List<AccessControlForm> getAllForms() {
        return accessControlFormRepository.findAll();
    }

    public AccessControlForm removeById(Long id){
        Optional<AccessControlForm> optionalAccessControlForm = accessControlFormRepository.findById(id);
        if(optionalAccessControlForm.isEmpty()){
            throw new EntityNotFoundException("Access Control Form with ID "+id+" not found");
        }
        else{
            AccessControlForm accessControlForm = optionalAccessControlForm.get();
            System.out.println(accessControlForm.toString());
            accessControlFormRepository.delete(accessControlForm);
            return accessControlForm;
        }
    }

    public AccessControlForm getById(Long id){
        return accessControlFormRepository.findById(id).orElseThrow(()-> new RuntimeException("Not Form found"));
    }

    public AccessControlForm updateForm(Long id, AccessControlForm form) throws Exception {
        AccessControlForm existing = accessControlFormRepository.findById(id)
                .orElseThrow(() -> new Exception("No Access Form found with id: " + id));

        AccessControlFormHistory accessControlFormHistory =
                new AccessControlFormHistory();

        accessControlFormHistory.setPhysicalAccess(form.getPhysicalAccess());
        accessControlFormHistory.setPhone_number(form.getPhone_number());
        accessControlFormHistory.setModifiedAt(LocalDate.from(ZonedDateTime.now()));
        accessControlFormHistory.setLastName(form.getLastName());
        accessControlFormHistory.setMiddleName(form.getMiddleName());
        accessControlFormHistory.setFirstName(form.getFirstName());
        accessControlFormHistory.setJoining(form.getJoining());
        accessControlFormHistory.setDesignation(form.getDesignation());
        accessControlFormHistory.setDepartment(form.getDepartment());
        accessControlFormHistory.setCreateDateAction(form.getCreateDateAction());
//        accessControlFormHistory.setApplicationAccessRightsListHistory(form.getApplicationAccessRightsList());
        accessControlFormHistory.setAccessPeriod(form.getAccessPeriod());
        accessControlFormHistory.setLogicalAccess(form.getLogicalAccess());
        accessControlFormHistory.setEmployeeId(form.getEmployeeId());
        accessControlFormHistory.setEndDate(form.getEndDate());
        accessControlFormHistory.setEmailAddressAction(form.getEmailAddressAction());
        accessControlFormHistory.setStartDate(form.getStartDate());
        accessControlFormHistory.setHrSecurity(form.getHrSecurity());
        accessControlFormHistory.setUserAcknowledgementRemarks(form.getUserAcknowledgementRemarks());
        accessControlFormHistory.setRemarks(form.getRemarks());
        accessControlFormHistory.setLoginIdAction(form.getLoginIdAction());
        accessControlFormHistory.setUserStatus(form.getUserStatus());
        accessControlFormHistory.setOperationStatus("Modified");
        accessControlFormHistoryService.create(accessControlFormHistory);

        List<ApplicationAccessFormRightsHistory> applicationAccessFormRightsHistories
                = new ArrayList<>();

        for (ApplicationAccessRights original : form.getApplicationAccessRightsList()){
            ApplicationAccessFormRightsHistory copy = new ApplicationAccessFormRightsHistory();
            copy.setStatus(original.getStatus());
            copy.setModule(original.getModule());
            copy.setApplication(original.getApplication());
            copy.setAccessRights(original.getAccessRights());
            applicationAccessFormRightsHistories.add(copy);
        }
        accessControlFormHistory.setApplicationAccessRightsListHistory(applicationAccessFormRightsHistories);

        accessControlFormHistoryService.create(accessControlFormHistory);

        existing.setFirstName(form.getFirstName());
        existing.setMiddleName(form.getMiddleName());
        existing.setLastName(form.getLastName());
        existing.setDepartment(form.getDepartment());
        existing.setJoining(form.getJoining());
        existing.setPhone_number(form.getPhone_number());
        existing.setDesignation(form.getDesignation());
        existing.setUserStatus(form.getUserStatus());
        existing.setAccessPeriod(form.getAccessPeriod());
        existing.setHrSecurity(form.getHrSecurity());
        existing.setRemarks(form.getRemarks());
        existing.setLoginIdAction(form.getLoginIdAction());
        existing.setCreateDateAction(form.getCreateDateAction());
        existing.setEmailAddressAction(form.getEmailAddressAction());
        existing.setUserAcknowledgementRemarks(form.getUserAcknowledgementRemarks());
        existing.setStartDate(form.getStartDate());
        existing.setEndDate(form.getEndDate());

        existing.setPhysicalAccess(form.getPhysicalAccess());
        existing.setLogicalAccess(form.getLogicalAccess());

//        Important Improvement
        existing.getApplicationAccessRightsList().clear();
        existing.getApplicationAccessRightsList().addAll(form.getApplicationAccessRightsList());

        return accessControlFormRepository.save(existing);
    }

}
