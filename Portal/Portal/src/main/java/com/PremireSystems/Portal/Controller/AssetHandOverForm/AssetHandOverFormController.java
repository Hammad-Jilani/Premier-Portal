package com.PremireSystems.Portal.Controller.AssetHandOverForm;

import com.PremireSystems.Portal.Entity.AssetHandover.AssetHandoverForm;
import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Service.AssetHoandOver.AssetHandOverFormService;
import com.PremireSystems.Portal.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/asset-handover-form")
public class AssetHandOverFormController {

    @Autowired
    private AssetHandOverFormService service;

    @Autowired
    private UserServiceImpl userService;

    @GetMapping("/get")
    public ResponseEntity<?> getAll(@RequestHeader("Authorization") String jwt) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getById(@RequestHeader("Authorization") String jwt,@PathVariable Long id) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return ResponseEntity.ok(service.getById(id));
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestHeader("Authorization") String jwt, @RequestBody AssetHandoverForm form) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return ResponseEntity.ok(service.create(form));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestHeader("Authorization") String jwt,@PathVariable Long id, @RequestBody AssetHandoverForm form) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        return ResponseEntity.ok(service.update(id, form));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@RequestHeader("Authorization") String jwt,@PathVariable Long id) throws Exception {
        User tokenUser  = userService.findUserProfileByJwt(jwt);
        User user =  userService.findUserById(tokenUser.getId());

        if (user==null){
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token.");
        }
        service.delete(id);
        return ResponseEntity.ok("Deleted successfully.");
    }

}
