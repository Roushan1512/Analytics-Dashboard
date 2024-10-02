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

import dashboard.springback.api.models.Fb;
import dashboard.springback.api.repositories.FbRepo;

@RestController()
@RequestMapping("/fb")
@CrossOrigin(origins = "http://localhost:5173")
public class FbController {

    @Autowired
    private FbRepo fbRepo;
    
    @PostMapping("/newFb")
    public String newFb(@RequestBody Fb fb)
    {
        System.out.println("New Fb Called");
        Optional<Fb> fbExists = fbRepo.findById(fb.getEmail());
        if(fbExists.isPresent())
        {
            return "Fb already exists";
        }
        else
        {
            fbRepo.save(fb);
            return "Fb added successfully";
        }
    }

    @GetMapping("/getFb")
    public Fb getFb(@RequestParam String email)
    {
        System.out.println("Get Fb Called"+email);
        Optional<Fb> fb = fbRepo.findById(email);
        if(fb.isPresent())
        {
            return fb.get();
        }
        else
        {
            return null;
        }
    }
}
