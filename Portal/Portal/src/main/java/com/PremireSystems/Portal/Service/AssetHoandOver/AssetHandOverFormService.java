package com.PremireSystems.Portal.Service.AssetHoandOver;

import com.PremireSystems.Portal.Entity.AssetHandover.AssetHandoverForm;
import com.PremireSystems.Portal.Entity.AssetHandover.AssetHandoverFormHistory;
import com.PremireSystems.Portal.Entity.AssetHandover.AssetItem;
import com.PremireSystems.Portal.Entity.AssetHandover.AssetItemHistory;
import com.PremireSystems.Portal.Repository.AssetHandOver.AssetHandOverFormHistoryRepository;
import com.PremireSystems.Portal.Repository.AssetHandOver.AssetHandOverFormRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Service
public class AssetHandOverFormService {

    private static final Logger log = LoggerFactory.getLogger(AssetHandOverFormService.class);
    @Autowired
    private AssetHandOverFormRepository assetHandOverFormRepository;

    @Autowired
    private AssetHandOverFormHistoryRepository historyRepository;

    @Transactional
    public AssetHandoverForm create(AssetHandoverForm form) {
        AssetHandoverForm savedForm = assetHandOverFormRepository.save(form);

        AssetHandoverFormHistory history = new AssetHandoverFormHistory();
        history.setOriginalFormId(savedForm.getId());
        history.setEmployeeName(savedForm.getEmployeeName());
        history.setDesignation(savedForm.getDesignation());
        history.setDepartment(savedForm.getDepartment());
        history.setAssetTransferNumber(savedForm.getAssetTransferNumber());
        history.setHandoverDate(savedForm.getHandoverDate());
        history.setHandoverBy(savedForm.getHandoverBy());
        history.setEmployeeAcknowledgementText(savedForm.getEmployeeAcknowledgementName());
        history.setModifiedAt(LocalDate.now());

        List<AssetItemHistory> itemHistoryList = new ArrayList<>();

        if (savedForm.getAssetItems() != null) {
            for (AssetItem item : savedForm.getAssetItems()) {
                AssetItemHistory itemHistory = new AssetItemHistory();
                itemHistory.setParticulars(item.getParticulars());
                itemHistory.setSerialNumber(item.getSerialNumber());
                itemHistory.setQuantity(item.getQuantity());
                itemHistory.setRemarks(item.getRemarks());
                itemHistoryList.add(itemHistory);
            }
        }

        history.setAssetItems(itemHistoryList);

        historyRepository.save(history);

        return savedForm;
    }


    public List<AssetHandoverForm> getAll(){
        return assetHandOverFormRepository.findAll();
    }

    public AssetHandoverForm getById(Long Id){
        return  assetHandOverFormRepository.findById(Id).orElseThrow(()-> new RuntimeException("Not found"));
    }

    public void delete(Long id) {
        AssetHandoverForm form = assetHandOverFormRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Form not found with ID: " + id));
        assetHandOverFormRepository.delete(form);
    }

    public AssetHandoverForm update(Long id, AssetHandoverForm updatedForm) {
        AssetHandoverForm existingForm = assetHandOverFormRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Form not found with ID: " + id));

        AssetHandoverFormHistory history = new AssetHandoverFormHistory();

        history.setOriginalFormId(existingForm.getId());
        history.setEmployeeName(existingForm.getEmployeeName());
        history.setDesignation(existingForm.getDesignation());
        history.setDepartment(existingForm.getDepartment());
        history.setAssetTransferNumber(existingForm.getAssetTransferNumber());
        history.setHandoverDate(existingForm.getHandoverDate());
        history.setHandoverBy(existingForm.getHandoverBy());
        history.setModifiedAt(LocalDate.now());

        List<AssetItemHistory> itemHistories = new ArrayList<>();
        for (AssetItem item : existingForm.getAssetItems()) {
            AssetItemHistory historyItem = new AssetItemHistory();
            historyItem.setParticulars(item.getParticulars());
            historyItem.setSerialNumber(item.getSerialNumber());
            historyItem.setQuantity(item.getQuantity());
            historyItem.setRemarks(item.getRemarks());
            itemHistories.add(historyItem);
        }
        history.setAssetItems(itemHistories);
        historyRepository.save(history);

        existingForm.setEmployeeName(updatedForm.getEmployeeName());
        existingForm.setDesignation(updatedForm.getDesignation());
        existingForm.setDepartment(updatedForm.getDepartment());
        existingForm.setAssetTransferNumber(updatedForm.getAssetTransferNumber());
        existingForm.setHandoverDate(updatedForm.getHandoverDate());
        existingForm.setHandoverBy(updatedForm.getHandoverBy());
        existingForm.setEmployeeAcknowledgementName(updatedForm.getEmployeeAcknowledgementName());
        existingForm.getAssetItems().clear();
        for (AssetItem item : updatedForm.getAssetItems()) {
            existingForm.getAssetItems().add(item);
        }

        return assetHandOverFormRepository.save(existingForm);
    }
}