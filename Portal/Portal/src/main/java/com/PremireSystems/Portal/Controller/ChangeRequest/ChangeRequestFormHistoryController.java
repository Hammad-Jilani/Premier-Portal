package com.PremireSystems.Portal.Controller.ChangeRequest;

import com.PremireSystems.Portal.Entity.ChangeRequest.ChangeRequestFormHistory;
import com.PremireSystems.Portal.Repository.ChangeRequest.ChangeRequestFormHistoryRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/change-request-history")
public class ChangeRequestFormHistoryController {

    @Autowired
    private ChangeRequestFormHistoryRepository changeRequestFormHistory;

    @GetMapping("/all")
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(changeRequestFormHistory.findAll(), HttpStatus.OK);
    }

}
