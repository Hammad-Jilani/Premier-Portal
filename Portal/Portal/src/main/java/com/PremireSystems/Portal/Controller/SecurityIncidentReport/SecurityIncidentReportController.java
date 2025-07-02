package com.PremireSystems.Portal.Controller.SecurityIncidentReport;

import com.PremireSystems.Portal.Entity.SecurityIncident.SecurityIncidentReport;
import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Service.SecurityIncidentReport.SecurityIncidentReportService;
import com.PremireSystems.Portal.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/security-incident-report")
public class SecurityIncidentReportController {
    @Autowired
    private SecurityIncidentReportService securityIncidentReportService;

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestHeader("Authorization") String jwt,
                                    @RequestBody SecurityIncidentReport securityIncidentReport) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(securityIncidentReportService.create(securityIncidentReport), HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAll(@RequestHeader("Authorization") String jwt) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(securityIncidentReportService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<?> getById(@RequestHeader("Authorization") String jwt,
                                    @PathVariable Long id
    ) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(securityIncidentReportService.getById(id), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestHeader("Authorization") String jwt,
                                    @RequestBody SecurityIncidentReport securityIncidentReport,
                                     @PathVariable Long id
    ) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(securityIncidentReportService.update(id,securityIncidentReport), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@RequestHeader("Authorization") String jwt,
                                    @PathVariable Long id
    ) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        securityIncidentReportService.delete(id);
        return new ResponseEntity<>("Deleted Security Incident Report", HttpStatus.OK);
    }

}
