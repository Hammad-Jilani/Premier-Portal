package com.PremireSystems.Portal.Repository;

import com.PremireSystems.Portal.Entity.AccessControlForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface AccessControlFormRepository extends JpaRepository<AccessControlForm,Long> {
}
