package com.PremireSystems.Portal.Controller;

import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Service.AccessControlFormHistoryService;
import com.PremireSystems.Portal.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/access-control-form-history")
public class AccessControlFormHistoryControl {

    @Autowired
    private UserService userService;

    @Autowired
    private AccessControlFormHistoryService accessControlFormService;

    @GetMapping("/get-history")
    public ResponseEntity<?> getControlFormHistory(@RequestHeader("Authorization") String jwt) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new ResponseEntity<>(accessControlFormService.getAll(),HttpStatus.OK);
    }
}
