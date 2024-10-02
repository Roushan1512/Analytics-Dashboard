package dashboard.springback.api.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import dashboard.springback.api.models.Insta;

public interface InstaRepo extends MongoRepository<Insta,String>{}
