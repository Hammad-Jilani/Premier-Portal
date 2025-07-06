package com.PremireSystems.Portal.Controller.AssetHandOverForm;

import com.PremireSystems.Portal.Repository.AssetHandOver.AssetHandOverFormHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/asset-handover-form-history")
public class AssetHandoverFormHistory {

    @Autowired
    private AssetHandOverFormHistoryRepository repository;

    @GetMapping("/allhistory")
    public ResponseEntity<?> getAllHistory(){
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

}
