package com.PremireSystems.Portal.Repository;

import com.PremireSystems.Portal.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
}
