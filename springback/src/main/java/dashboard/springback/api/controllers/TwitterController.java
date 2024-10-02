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
import dashboard.springback.api.models.Twitter;
import dashboard.springback.api.repositories.TwitterRepo;

@RestController()
@RequestMapping("/twitter")
@CrossOrigin(origins = "http://localhost:5173")
public class TwitterController {
    
    @Autowired
    private TwitterRepo twitterRepo;

    @PostMapping("/newTwitter")
    public String newTwitter(@RequestBody Twitter twitter)
    {
        System.out.println("New Twitter Called");
        Optional<Twitter> twitterExists = twitterRepo.findById(twitter.getEmail());
        if(twitterExists.isPresent())
        {
            return "Twitter already exists";
        }
        else
        {
            twitterRepo.save(twitter);
            return "Twitter added successfully";
        }
    }

    @GetMapping("/getTwitter")
    public Twitter getTwitter(@RequestParam String email)
    {
        System.out.println("Get Twitter Called"+email);
        Optional<Twitter> twitter = twitterRepo.findById(email);
        if(twitter.isPresent())
        {
            return twitter.get();
        }
        else
        {
            return null;
        }
    }
}
