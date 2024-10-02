package dashboard.springback.api.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import dashboard.springback.api.models.Fb;

public interface FbRepo extends MongoRepository<Fb,String>{}