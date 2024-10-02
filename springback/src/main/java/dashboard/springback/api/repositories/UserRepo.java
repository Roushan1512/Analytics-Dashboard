package dashboard.springback.api.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import dashboard.springback.api.models.User;

public interface UserRepo extends MongoRepository<User,String>{}