package com.PremireSystems.Portal.Service;

import com.PremireSystems.Portal.Entity.User;

public interface UserService {
    User findUserProfileByJwt(String jwt) throws Exception;

    User findUserByEmail(String Email) throws Exception;

    User findUserById(Long userId) throws Exception;
//
//    List<Contact> findAllContactsByUserId(Long userId);
//
//    void changePassword(ChangeRequest changeRequest);
}
