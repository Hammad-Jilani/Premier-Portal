package com.PremireSystems.Portal.Controller.MediaDisposalForm;

import com.PremireSystems.Portal.Entity.MediaDisposal.MediaDisposalForm;
import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Service.MediaDisposalService.MediaDisposalFormService;
import com.PremireSystems.Portal.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/media-disposal-form")
public class MediaDisposalFormController {
    @Autowired
    private MediaDisposalFormService mediaDisposalFormService;

    @Autowired
    private UserService userService;

    @PostMapping("/create-media-disposal-form")
    public ResponseEntity<?> createForm(@RequestHeader("Authorization") String jwt, @RequestBody MediaDisposalForm mediaDisposalForm) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(mediaDisposalFormService.create(mediaDisposalForm), HttpStatus.OK);
    }

    @GetMapping("/get-media-disposal-form")
    public ResponseEntity<?> getAllForms(@RequestHeader("Authorization") String jwt) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(mediaDisposalFormService.getAllForm(),HttpStatus.OK);
    }

    @GetMapping("/get-media-disposal-form/{id}")
    public ResponseEntity<?> getForms(@RequestHeader("Authorization") String jwt,
                                          @PathVariable Long id ) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(mediaDisposalFormService.getById(id),HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteForm(@RequestHeader("Authorization") String jwt,
                                         @PathVariable Long id) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        mediaDisposalFormService.deleteById(id);
        return new ResponseEntity<>("Deleted Successfully",HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestHeader("Authorization") String jwt,
                                    @PathVariable Long id,
                                    @RequestBody MediaDisposalForm mediaDisposalForm) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        mediaDisposalFormService.update(id,mediaDisposalForm);
        return new ResponseEntity<>("Updated Successfully",HttpStatus.OK);

    }

}
