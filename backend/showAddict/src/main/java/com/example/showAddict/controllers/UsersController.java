package com.example.showAddict.controllers;

import com.example.showAddict.models.Users;
import com.example.showAddict.repositories.UsersRepository;
import com.example.showAddict.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200",methods = {RequestMethod.GET,RequestMethod.POST})
public class UsersController {
  @Autowired
  private UsersService service;
  @Autowired
  private UsersRepository repository;


  @GetMapping(path = "/validUsername")
  public ResponseEntity<Boolean> isUsernameAvailable(@RequestParam String username) {
    username = username.toLowerCase();
    Users r = repository.findByUsername(username);
    System.out.println(r);
    return ResponseEntity.ok(r == null);
  }

 @PostMapping(path = "/createNewUser")
  public ResponseEntity<Users> addNewUser(@RequestBody Users newUser) {
  repository.save(newUser);
    return ResponseEntity.ok(newUser);
  }
}
