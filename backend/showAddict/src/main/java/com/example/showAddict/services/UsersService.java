package com.example.showAddict.services;

import com.example.showAddict.models.Users;
import com.example.showAddict.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
  @Autowired
  public UsersRepository repo;

  public List<Users> getAllUsers() {
    return repo.findAll();
  }
}
