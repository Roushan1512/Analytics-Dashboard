package dashboard.springback.api.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatusController {
    
    @CrossOrigin(origins="http://localhost:5173")
    @GetMapping("/status")
    public String getStatus()
    {
        String response = "SpringBoot API is working";
        System.out.println(response);
        return response;
    }
}
