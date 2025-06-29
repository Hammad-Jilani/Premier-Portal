package com.PremireSystems.Portal.Controller;

import com.PremireSystems.Portal.Entity.AccessControlForm;
import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Response.ResponseObject;
import com.PremireSystems.Portal.Service.AccessControlFormService;
import com.PremireSystems.Portal.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/access-control-form")
public class AccessControlFormController {

    @Autowired
    private AccessControlFormService accessControlFormService;

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/create")
    public ResponseEntity<?> createForm(@RequestHeader("Authorization") String jwt,
                                        @RequestBody AccessControlForm accessControlForm)
            throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(accessControlFormService.create(accessControlForm), HttpStatus.OK);
    }

    @GetMapping("/getAccess/{id}")
    public ResponseEntity<?> getAllForm(@RequestHeader("Authorization") String jwt,
                                        @PathVariable Long id) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(accessControlFormService.getById(id),HttpStatus.OK);
    }

    @GetMapping("/getAllAccess")
    public ResponseEntity<?> getForm(@RequestHeader("Authorization") String jwt)
            throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(accessControlFormService.getAllForms(),HttpStatus.OK);
    }



    @DeleteMapping("/delete-access-form/{id}")
    public ResponseEntity<?> removeAccessForm(@RequestHeader("Authorization") String jwt,@PathVariable Long id) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        AccessControlForm accessControlForm = accessControlFormService.removeById(id);
        return new ResponseEntity<>(new ResponseObject("Access Form deleted"),HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateAccessForm(@RequestHeader("Authorization") String jwt,
                                              @PathVariable Long id,
                                              @RequestBody AccessControlForm form)
            throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        AccessControlForm accessControlForm = accessControlFormService.updateForm(id,form);
        return new ResponseEntity<>(new ResponseObject("Access Form update"),HttpStatus.OK);
    }


}