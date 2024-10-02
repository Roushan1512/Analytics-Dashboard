package dashboard.springback.api.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import dashboard.springback.api.models.Twitter;

public interface TwitterRepo extends MongoRepository<Twitter,String>{}
