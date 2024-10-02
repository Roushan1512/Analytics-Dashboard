package dashboard.springback.api.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import dashboard.springback.api.models.UserEngage;

public interface UserEngageRepo extends MongoRepository<UserEngage,String>{}