package com.PremireSystems.Portal.Controller.MediaDisposalForm;

import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Service.MediaDisposalService.MediaDisposalFormHistoryService;
import com.PremireSystems.Portal.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/media-disposal-form-history")
public class MediaDisposalFormHistoryController {

    @Autowired
    private MediaDisposalFormHistoryService mediaDisposalFormHistoryService;

    @Autowired
    private UserService userService;

    @GetMapping("/all-disposal-form-history")
    public ResponseEntity<?> getAllForms(@RequestHeader("Authorization") String jwt
                                         ) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return new
                ResponseEntity<>(mediaDisposalFormHistoryService.getMediaDisposalFormHistory(), HttpStatus.OK);
    }
}
