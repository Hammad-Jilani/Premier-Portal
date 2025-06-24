package com.PremireSystems.Portal.Service;

import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Repository.UserRepository;
import com.PremireSystems.Portal.SecurityConfiguration.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User findUserProfileByJwt(String jwt) throws Exception {
        String email= JwtProvider.getEmailFromToken(jwt);

        return userRepository.findByEmail(email);
    }

    @Override
    public User findUserByEmail(String Email) throws Exception {
        User user = userRepository.findByEmail(Email);
        if (user == null) {
            throw new RuntimeException("User not found with email "+Email);
        }
        return user;
    }

    @Override
    public User findUserById(Long userId) throws Exception {
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            throw new RuntimeException("User not found with id " + userId);
        }
        return user.get();
    }
}
