package com.PremireSystems.Portal.Controller.SapAccessForm;

import com.PremireSystems.Portal.Entity.SapAccess.SapAccessForm;
import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Service.SapAccess.SapAccessFormService;
import com.PremireSystems.Portal.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sap-access-form")
public class SapAccessFormController {

    @Autowired
    private SapAccessFormService sapAccessFormService;

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/create-sap-form")
    public ResponseEntity<?> create(@RequestHeader("Authorization") String jwt, @RequestBody SapAccessForm sapAccessForm) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(sapAccessFormService.createSapForm(sapAccessForm), HttpStatus.OK);
    }

    @GetMapping("/get-all-sap-forms")
    public ResponseEntity<?> getAllForms(@RequestHeader("Authorization") String jwt) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(sapAccessFormService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/get-sap-form/{id}")
    public ResponseEntity<?> getForm(@RequestHeader("Authorization") String jwt,@PathVariable Long id) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(sapAccessFormService.getById(id), HttpStatus.OK);
    }

    @DeleteMapping("/delete-sap-forms/{id}")
    public ResponseEntity<?> delete(@RequestHeader("Authorization") String jwt,@PathVariable Long id) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        sapAccessFormService.deleteSapForm(id);
        return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);

    }
    @PutMapping("/update-sap-forms/{id}")
    public ResponseEntity<?> update(@RequestHeader("Authorization") String jwt,
                                    @PathVariable Long id
    ,@RequestBody SapAccessForm sapAccessForm) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(sapAccessFormService.update(id,sapAccessForm), HttpStatus.OK);

    }
}
