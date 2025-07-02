package com.PremireSystems.Portal.Controller.SecurityIncidentReport;

import com.PremireSystems.Portal.Entity.SecurityIncident.SecurityIncidentReportHistory;
import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Repository.SecurityIncidentReport.SecurityIncidentReportHistoryRepository;
import com.PremireSystems.Portal.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/security-incident-report-history")
public class SecurityIncidentReportHistoryController {

    @Autowired
    private SecurityIncidentReportHistoryRepository history;

    @Autowired
    private UserServiceImpl userService;

    @GetMapping
    public ResponseEntity<?> getHistory(@RequestHeader("Authorization") String jwt
    ) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(history.findAll(), HttpStatus.OK);
    }
}
