package dashboard.springback.api.controllers;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import dashboard.springback.api.models.Insta;
import dashboard.springback.api.repositories.InstaRepo;

@RestController()
@RequestMapping("/insta")
@CrossOrigin(origins = "http://localhost:5173")
public class InstaController {
    
    @Autowired
    private InstaRepo instaRepo;

    @PostMapping("/newInsta")
    public String newInsta(@RequestBody Insta insta)
    {
        System.out.println("New Insta Called");
        Optional<Insta> instaExists = instaRepo.findById(insta.getEmail());
        if(instaExists.isPresent())
        {
            return "Insta already exists";
        }
        else
        {
            instaRepo.save(insta);
            return "Insta added successfully";
        }
    }

    @GetMapping("/getInsta")
    public Insta getInsta(@RequestParam String email)
    {
        System.out.println("Get Insta Called"+email);
        Optional<Insta> insta = instaRepo.findById(email);
        if(insta.isPresent())
        {
            return insta.get();
        }
        else
        {
            return null;
        }
    }
}
