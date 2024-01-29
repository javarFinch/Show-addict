package com.example.showAddict.repositories;

import com.example.showAddict.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users,Integer> {
  @Query(value = "SELECT * FROM users u WHERE u.username=:username",nativeQuery = true)
  Users findByUsername(@Param("username") String username);

  @Query(value = "SELECT * FROM users u WHERE u.username=:username and u.password=:password",nativeQuery = true)
  Users findUserForLogin(@Param("username") String username, @Param("password") String password);
}
