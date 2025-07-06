package com.PremireSystems.Portal.Controller.ChangeRequest;

import com.PremireSystems.Portal.Entity.ChangeRequest.ChangeRequestForm;
import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Service.ChangeRequestForm.ChangeRequestFormService;
import com.PremireSystems.Portal.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/change-request-form")
public class ChangeRequestFormController {

    @Autowired
    private ChangeRequestFormService changeRequestFormService;

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestHeader("Authorization") String jwt, @RequestBody ChangeRequestForm changeRequestForm)throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(changeRequestFormService.create(changeRequestForm),HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestHeader("Authorization") String jwt,
                                    @RequestBody ChangeRequestForm changeRequestForm
    ,@PathVariable Long id)throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(changeRequestFormService.update(id,changeRequestForm),HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAll(@RequestHeader("Authorization") String jwt)throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(changeRequestFormService.getAll(),HttpStatus.OK);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getById(@RequestHeader("Authorization") String jwt,
                                    @PathVariable Long id)throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(changeRequestFormService.getById(id),HttpStatus.OK);
    }

    @GetMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestHeader("Authorization") String jwt,
                                     @PathVariable Long id,
                                    @RequestBody ChangeRequestForm changeRequestForm)throws Exception {

        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(changeRequestFormService.update(id,changeRequestForm),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@RequestHeader("Authorization") String jwt,@PathVariable Long id) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(changeRequestFormService.delete(id),HttpStatus.OK);
    }
}
