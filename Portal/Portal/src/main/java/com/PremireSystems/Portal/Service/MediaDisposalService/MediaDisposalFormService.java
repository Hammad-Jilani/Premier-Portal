package com.PremireSystems.Portal.Service.MediaDisposalService;

import com.PremireSystems.Portal.Entity.MediaDisposal.MediaDisposalForm;
import com.PremireSystems.Portal.Entity.MediaDisposal.MediaDisposalFormHistory;
import com.PremireSystems.Portal.Repository.MediaDisposalForm.MediaDisposalFormHistoryRepository;
import com.PremireSystems.Portal.Repository.MediaDisposalForm.MediaDisposalFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MediaDisposalFormService {

    @Autowired
    private MediaDisposalFormRepository mediaDisposalFormRepository;

    @Autowired
    private MediaDisposalFormHistoryRepository mediaDisposalFormHistoryRepository;

    public MediaDisposalForm create(MediaDisposalForm mediaDisposalForm){
        MediaDisposalFormHistory mediaDisposalFormHistory = new MediaDisposalFormHistory();

        mediaDisposalFormHistory.setReason(mediaDisposalForm.getReason());
        mediaDisposalFormHistory.setModel(mediaDisposalForm.getModel());
        mediaDisposalFormHistory.setOwner(mediaDisposalForm.getOwner());
        mediaDisposalFormHistory.setPerformedBy(mediaDisposalForm.getPerformedBy());
        mediaDisposalFormHistory.setPerformedDate(mediaDisposalForm.getPerformedDate());
        mediaDisposalFormHistory.setPhysicalCategory(mediaDisposalForm.getDisposedMedia());
        mediaDisposalFormHistory.setSanitizationMethod(mediaDisposalForm.getSanitizationMethod());
        mediaDisposalFormHistory.setValidatedBy(mediaDisposalForm.getValidatedBy());
        mediaDisposalFormHistory.setValidatedDate(mediaDisposalForm.getValidatedDate());
        mediaDisposalFormHistory.setInformationClassification(mediaDisposalForm.getInformationClassification());
        mediaDisposalFormHistory.setDisposedMedia(mediaDisposalForm.getDisposedMedia());
        mediaDisposalFormHistory.setSerialNumber(mediaDisposalForm.getSerialNumber());
        mediaDisposalFormHistory.setStatus("Created");
        mediaDisposalFormHistory.setModifiedAt(LocalDateTime.now());
        mediaDisposalFormHistory.setPhysicalCategory(mediaDisposalForm.getPhysicalCategory());
        mediaDisposalFormHistory.setDepartment(mediaDisposalForm.getDepartment());
        mediaDisposalFormHistory.setBackUp(mediaDisposalForm.getBackUp());
        mediaDisposalFormHistory.setDigitalSoftware(mediaDisposalForm.getDigitalSoftware());
        mediaDisposalFormHistory.setDigitalHardware(mediaDisposalForm.getDigitalHardware());
        mediaDisposalFormHistoryRepository.save(mediaDisposalFormHistory);

        return mediaDisposalFormRepository.save(mediaDisposalForm);
    }

    public MediaDisposalForm getById(Long id){
        return mediaDisposalFormRepository.findById(id).orElseThrow(()-> new RuntimeException("No Media Form Found with id= "+id));
    }

    public List<MediaDisposalForm> getAllForm(){
        return mediaDisposalFormRepository.findAll();
    }

    public void deleteById(Long id){
        Optional<MediaDisposalForm> optionalMediaDisposalForm = mediaDisposalFormRepository.findById(id);
        if (optionalMediaDisposalForm.isPresent()){
            mediaDisposalFormRepository.delete(optionalMediaDisposalForm.get());
        }
        else{
            throw new RuntimeException("No Media Disposal Form to delete");
        }
    }

    public void update(Long id,MediaDisposalForm mediaDisposalForm){
        Optional<MediaDisposalForm> optionalMediaDisposalForm = mediaDisposalFormRepository.findById(id);
        if (optionalMediaDisposalForm.isPresent()){
//            MediaDisposalForm mediaDisposalForm = optionalMediaDisposalForm.get();

            MediaDisposalFormHistory mediaDisposalFormHistory = new MediaDisposalFormHistory();
            mediaDisposalFormHistory.setReason(mediaDisposalForm.getReason());
            mediaDisposalFormHistory.setModel(mediaDisposalForm.getModel());
            mediaDisposalFormHistory.setOwner(mediaDisposalForm.getOwner());
            mediaDisposalFormHistory.setPerformedBy(mediaDisposalForm.getPerformedBy());
            mediaDisposalFormHistory.setPerformedDate(mediaDisposalForm.getPerformedDate());
            mediaDisposalFormHistory.setPhysicalCategory(mediaDisposalForm.getDisposedMedia());
            mediaDisposalFormHistory.setSanitizationMethod(mediaDisposalForm.getSanitizationMethod());
            mediaDisposalFormHistory.setValidatedBy(mediaDisposalForm.getValidatedBy());
            mediaDisposalFormHistory.setValidatedDate(mediaDisposalForm.getValidatedDate());
            mediaDisposalFormHistory.setInformationClassification(mediaDisposalForm.getInformationClassification());
            mediaDisposalFormHistory.setDisposedMedia(mediaDisposalForm.getDisposedMedia());
            mediaDisposalFormHistory.setSerialNumber(mediaDisposalForm.getSerialNumber());
            mediaDisposalFormHistory.setStatus("Modified");
            mediaDisposalFormHistory.setModifiedAt(LocalDateTime.now());
            mediaDisposalFormHistory.setPhysicalCategory(mediaDisposalForm.getPhysicalCategory());
            mediaDisposalFormHistory.setDepartment(mediaDisposalForm.getDepartment());
            mediaDisposalFormHistory.setBackUp(mediaDisposalForm.getBackUp());
            mediaDisposalFormHistory.setDigitalSoftware(mediaDisposalForm.getDigitalSoftware());
            mediaDisposalFormHistory.setDigitalHardware(mediaDisposalForm.getDigitalHardware());
            mediaDisposalFormHistoryRepository.save(mediaDisposalFormHistory);

            MediaDisposalForm existing = optionalMediaDisposalForm.get();

            existing.setReason(mediaDisposalForm.getReason());
            existing.setModel(mediaDisposalForm.getModel());
            existing.setOwner(mediaDisposalForm.getOwner());
            existing.setPerformedBy(mediaDisposalForm.getPerformedBy());
            existing.setPerformedDate(mediaDisposalForm.getPerformedDate());
            existing.setPhysicalCategory(mediaDisposalForm.getDisposedMedia());
            existing.setSanitizationMethod(mediaDisposalForm.getSanitizationMethod());
            existing.setValidatedBy(mediaDisposalForm.getValidatedBy());
            existing.setValidatedDate(mediaDisposalForm.getValidatedDate());
            existing.setInformationClassification(mediaDisposalForm.getInformationClassification());
            existing.setDisposedMedia(mediaDisposalForm.getDisposedMedia());
            existing.setSerialNumber(mediaDisposalForm.getSerialNumber());
            existing.setPhysicalCategory(mediaDisposalForm.getPhysicalCategory());
            existing.setDepartment(mediaDisposalForm.getDepartment());
            existing.setBackUp(mediaDisposalForm.getBackUp());
            existing.setDigitalSoftware(mediaDisposalForm.getDigitalSoftware());
            existing.setDigitalHardware(mediaDisposalForm.getDigitalHardware());
            mediaDisposalFormRepository.save(existing);
        }else {
            throw new RuntimeException(("No media form found"));
        }
    }
}
