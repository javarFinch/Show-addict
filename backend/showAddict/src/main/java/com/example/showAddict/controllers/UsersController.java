package com.example.showAddict.controllers;

import com.example.showAddict.models.Users;
import com.example.showAddict.repositories.UsersRepository;
import com.example.showAddict.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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
  @GetMapping(path = "/findUser")
  public ResponseEntity<Users> getUserByUsername(@RequestHeader(required = true,name = "username") String username) {
    username = username.toLowerCase();
    Users r = repository.findByUsername(username);
    System.out.println(r);
    return ResponseEntity.ok(r);
  }
  @GetMapping(path = "/login")
  public ResponseEntity<Users> loginUser(@RequestHeader(required = true,name = "username") String username, @RequestHeader(required = true,name = "password") String password) {
    Users user= repository.findUserForLogin(username,password);
    System.out.println(user);
    return ResponseEntity.ok(user);
  }

 @PostMapping(path = "/createNewUser", consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<Users> addNewUser(@RequestBody Users newUser) {
  repository.save(newUser);
    return ResponseEntity.ok(newUser);
  }
}
