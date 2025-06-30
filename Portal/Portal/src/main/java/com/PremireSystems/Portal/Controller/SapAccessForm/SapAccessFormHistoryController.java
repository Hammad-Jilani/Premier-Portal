package com.PremireSystems.Portal.Controller.SapAccessForm;

import com.PremireSystems.Portal.Service.SapAccess.SapAccessFormHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/sap-history")
public class SapAccessFormHistoryController {
    @Autowired
    private SapAccessFormHistoryService sapAccessFormHistoryService;

    @GetMapping
    public ResponseEntity<?> getHistory(){
        return new ResponseEntity<>(sapAccessFormHistoryService.getHistory(), HttpStatus.OK);
    }
}
