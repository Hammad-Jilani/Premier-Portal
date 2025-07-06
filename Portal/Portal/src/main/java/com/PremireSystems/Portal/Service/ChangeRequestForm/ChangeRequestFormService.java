package com.PremireSystems.Portal.Service.ChangeRequestForm;

import com.PremireSystems.Portal.Entity.ChangeRequest.ChangeRequestForm;
import com.PremireSystems.Portal.Entity.ChangeRequest.ChangeRequestFormHistory;
import com.PremireSystems.Portal.Repository.ChangeRequest.ChangeRequestFormHistoryRepository;
import com.PremireSystems.Portal.Repository.ChangeRequest.ChangeRequestFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ChangeRequestFormService {

    @Autowired
    private ChangeRequestFormRepository changeRequestFormRepository;

    @Autowired
    private ChangeRequestFormHistoryRepository historyRepository;

    @Transactional
    public ChangeRequestForm create(ChangeRequestForm changeRequestForm){
        ChangeRequestForm saved = changeRequestFormRepository.save(changeRequestForm);

        ChangeRequestFormHistory history = new ChangeRequestFormHistory();

        history.setChangeRequestFormId(saved.getId());
        history.setStatus("Created");
        history.setModifiedAt(LocalDateTime.now());

        history.setTestPlan(saved.getTestPlan());
        history.setSubmitterName(saved.getSubmitterName());
        history.setCrNumber(saved.getCrNumber());
        history.setNormalChange(saved.getNormalChange());
        history.setEmergencyChange(saved.getEmergencyChange());
        history.setCrType(saved.getCrType());
        history.setProjectName(saved.getProjectName());
        history.setSubmitterName(saved.getSubmitterName());
        history.setDepartmentOrLocation(saved.getDepartmentOrLocation());
        history.setPhoneOrEmail(saved.getPhoneOrEmail());
        history.setDateSubmitted(saved.getDateSubmitted());
        history.setChangeType(saved.getChangeType());
        history.setOtherChangeDescription(saved.getOtherChangeDescription());
        history.setBriefDescription(saved.getBriefDescription());
        history.setChangeNeededBy(saved.getChangeNeededBy());
        history.setPriority(saved.getPriority());
        history.setReasonForChange(saved.getReasonForChange());
        history.setEnvironmentsImpacted(saved.getEnvironmentsImpacted());
        history.setAssumptionsAndNotes(saved.getAssumptionsAndNotes());
        history.setComments(saved.getComments());
        history.setHasAttachments(saved.getHasAttachments());
        history.setAttachmentLink(saved.getAttachmentLink());
        history.setDateSignedBySubmitter(saved.getDateSignedBySubmitter());
        history.setHourImpact(saved.getHourImpact());
        history.setDurationImpact(saved.getDurationImpact());
        history.setScheduleImpact(saved.getScheduleImpact());
        history.setCostImpact(saved.getCostImpact());
        history.setCommentsBySystemOwner(saved.getCommentsBySystemOwner());
        history.setRecommendations(saved.getRecommendations());
        history.setTestPlan(saved.getTestPlan());
        history.setRollbackPlan(saved.getRollbackPlan());
        history.setDateSignedBySystemOwner(saved.getDateSignedBySystemOwner());
        history.setDecision(saved.getDecision());
        history.setDecisionDate(saved.getDecisionDate());
        history.setDecisionExplanation(saved.getDecisionExplanation());
        history.setConditions(saved.getConditions());
        history.setDateSigned(saved.getDateSigned());
        history.setImplementedStatus(saved.getImplementedStatus());
        history.setStagingTestResults(saved.getStagingTestResults());
        history.setImplementationTestResults(saved.getImplementationTestResults());
        history.setRemarks(saved.getRemarks());
        history.setImplementerDate(saved.getImplementerDate());


        historyRepository.save(history);
        return saved;
    }


    public List<ChangeRequestForm> getAll(){
        return changeRequestFormRepository.findAll();
    }

    public ChangeRequestForm getById(Long id){
        return changeRequestFormRepository.findById(id).orElseThrow(()->
                new RuntimeException("Change Request Form not found"));
    }

    @Transactional
    public ChangeRequestForm update(Long id,ChangeRequestForm form){
        Optional<ChangeRequestForm> optionalChangeRequestForm = changeRequestFormRepository.findById(id);
        if (optionalChangeRequestForm.isPresent()){
            ChangeRequestForm saved = optionalChangeRequestForm.get();

            ChangeRequestFormHistory history = new ChangeRequestFormHistory();

            history.setChangeRequestFormId(saved.getId());
            history.setStatus("Modified");
            history.setModifiedAt(LocalDateTime.now());
            history.setTestPlan(saved.getTestPlan());
            history.setSubmitterName(saved.getSubmitterName());
            history.setCrNumber(saved.getCrNumber());
            history.setNormalChange(saved.getNormalChange());
            history.setEmergencyChange(saved.getEmergencyChange());
            history.setCrType(saved.getCrType());
            history.setProjectName(saved.getProjectName());
            history.setSubmitterName(saved.getSubmitterName());
            history.setDepartmentOrLocation(saved.getDepartmentOrLocation());
            history.setPhoneOrEmail(saved.getPhoneOrEmail());
            history.setDateSubmitted(saved.getDateSubmitted());
            history.setChangeType(saved.getChangeType());
            history.setOtherChangeDescription(saved.getOtherChangeDescription());
            history.setBriefDescription(saved.getBriefDescription());
            history.setChangeNeededBy(saved.getChangeNeededBy());
            history.setPriority(saved.getPriority());
            history.setReasonForChange(saved.getReasonForChange());
            history.setEnvironmentsImpacted(saved.getEnvironmentsImpacted());
            history.setAssumptionsAndNotes(saved.getAssumptionsAndNotes());
            history.setComments(saved.getComments());
            history.setHasAttachments(saved.getHasAttachments());
            history.setAttachmentLink(saved.getAttachmentLink());
            history.setDateSignedBySubmitter(saved.getDateSignedBySubmitter());
            history.setHourImpact(saved.getHourImpact());
            history.setDurationImpact(saved.getDurationImpact());
            history.setScheduleImpact(saved.getScheduleImpact());
            history.setCostImpact(saved.getCostImpact());
            history.setCommentsBySystemOwner(saved.getCommentsBySystemOwner());
            history.setRecommendations(saved.getRecommendations());
            history.setTestPlan(saved.getTestPlan());
            history.setRollbackPlan(saved.getRollbackPlan());
            history.setDateSignedBySystemOwner(saved.getDateSignedBySystemOwner());
            history.setDecision(saved.getDecision());
            history.setDecisionDate(saved.getDecisionDate());
            history.setDecisionExplanation(saved.getDecisionExplanation());
            history.setConditions(saved.getConditions());
            history.setDateSigned(saved.getDateSigned());
            history.setImplementedStatus(saved.getImplementedStatus());
            history.setStagingTestResults(saved.getStagingTestResults());
            history.setImplementationTestResults(saved.getImplementationTestResults());
            history.setRemarks(saved.getRemarks());
            history.setImplementerDate(saved.getImplementerDate());
            historyRepository.save(history);

            saved.setTestPlan(form.getTestPlan());
            saved.setSubmitterName(form.getSubmitterName());
            saved.setCrNumber(form.getCrNumber());
            saved.setNormalChange(form.getNormalChange());
            saved.setEmergencyChange(form.getEmergencyChange());
            saved.setCrType(form.getCrType());
            saved.setProjectName(form.getProjectName());
            saved.setDepartmentOrLocation(form.getDepartmentOrLocation());
            saved.setPhoneOrEmail(form.getPhoneOrEmail());
            saved.setDateSubmitted(form.getDateSubmitted());
            saved.setChangeType(form.getChangeType());
            saved.setOtherChangeDescription(form.getOtherChangeDescription());
            saved.setBriefDescription(form.getBriefDescription());
            saved.setChangeNeededBy(form.getChangeNeededBy());
            saved.setPriority(form.getPriority());
            saved.setReasonForChange(form.getReasonForChange());
            saved.setEnvironmentsImpacted(form.getEnvironmentsImpacted());
            saved.setAssumptionsAndNotes(form.getAssumptionsAndNotes());
            saved.setComments(form.getComments());
            saved.setHasAttachments(form.getHasAttachments());
            saved.setAttachmentLink(form.getAttachmentLink());
            saved.setDateSignedBySubmitter(form.getDateSignedBySubmitter());
            saved.setHourImpact(form.getHourImpact());
            saved.setDurationImpact(form.getDurationImpact());
            saved.setScheduleImpact(form.getScheduleImpact());
            saved.setCostImpact(form.getCostImpact());
            saved.setCommentsBySystemOwner(form.getCommentsBySystemOwner());
            saved.setRecommendations(form.getRecommendations());
            saved.setRollbackPlan(form.getRollbackPlan());
            saved.setDateSignedBySystemOwner(form.getDateSignedBySystemOwner());
            saved.setDecision(form.getDecision());
            saved.setDecisionDate(form.getDecisionDate());
            saved.setDecisionExplanation(form.getDecisionExplanation());
            saved.setConditions(form.getConditions());
            saved.setDateSigned(form.getDateSigned());
            saved.setImplementedStatus(form.getImplementedStatus());
            saved.setStagingTestResults(form.getStagingTestResults());
            saved.setImplementationTestResults(form.getImplementationTestResults());
            saved.setRemarks(form.getRemarks());
            saved.setImplementerDate(form.getImplementerDate());

            return changeRequestFormRepository.save(saved);
        }else{
            throw new RuntimeException("No found");
        }
    }

    @Transactional
    public boolean delete(Long id){
        Optional<ChangeRequestForm> optionalChangeRequestForm = changeRequestFormRepository.findById(id);
        if (optionalChangeRequestForm.isPresent()){
            changeRequestFormRepository.delete(optionalChangeRequestForm.get());
            ChangeRequestFormHistory history = historyRepository.findById(id).orElseThrow(()-> new RuntimeException("Did not found change request form for deletion"));
            history.setStatus("Deleted");
            historyRepository.save(history);
            return true;
        }else{
            throw new RuntimeException("Did not find change request form to delete");

        }
    }

}
