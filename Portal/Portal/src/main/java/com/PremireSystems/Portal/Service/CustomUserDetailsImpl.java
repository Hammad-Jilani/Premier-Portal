package com.PremireSystems.Portal.Service;

import com.PremireSystems.Portal.Entity.User;
import com.PremireSystems.Portal.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class CustomUserDetailsImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if(user==null){
            throw new UsernameNotFoundException("User Not Found With Email "+username);
        }
        List<GrantedAuthority> authorities = new ArrayList<>();

        return new org.springframework.
                security.core.userdetails.
                User(user.getEmail(),user.getPassword(),authorities);
    }
}
