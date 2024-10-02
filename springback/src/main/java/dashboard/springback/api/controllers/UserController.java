package dashboard.springback.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import dashboard.springback.api.models.User;
import dashboard.springback.api.models.UserEngage;
import dashboard.springback.api.repositories.UserEngageRepo;
import dashboard.springback.api.repositories.UserRepo;

@RestController()
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserEngageRepo userEngageRepo;

    @PostMapping("/newUser")
    public String newUser(@RequestBody User user)
    {
        System.out.println("New User Called");
        Optional<User> userExists = userRepo.findById(user.getEmail());
        if(userExists.isPresent())
        {
            return "User already exists";
        }
        else
        {
            userRepo.save(user);
            return "User added successfully";
        }
    }

    @GetMapping("/allUsers")
    public List<User> allUsers()
    {
        return userRepo.findAll();
    }

    @GetMapping("/getUser")
    public User getUser(@RequestParam String email)
    {
        System.out.println("Get User Called");
        Optional<User> user = userRepo.findById(email);
        if(user.isPresent())
        {
            return user.get();
        }
        else
        {
            return null;
        }
    }

    @GetMapping("/getEngageInfo")
    public UserEngage getEngageInfo(@RequestParam String email)
    {
        System.out.println("Get Engage Info Called");
        Optional<UserEngage> userEngage = userEngageRepo.findById(email);
        if(userEngage.isPresent())
        {
            return userEngage.get();
        }
        else
        {
            return null;
        }
    }

    @PostMapping("/setEngageInfo")
    public String setEngageInfo(@RequestBody UserEngage userEngage)
    {
        System.out.println("Set Engage Info Called");
        userEngageRepo.save(userEngage);
        return "Engage Info set successfully";
    }
}