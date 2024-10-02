package dashboard.springback.api.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user_engage")
public class UserEngage {
    
    @Id
    private String email;
    private String promotions;
    private String ads;
    private int acc_engage;

    public UserEngage(String email,String promotions,String ads,int acc_engage)
    {
        this.email=email;
        this.promotions=promotions;
        this.ads=ads;
        this.acc_engage=acc_engage;
    }

    public String getEmail() {
        return email;
    }

    public String getPromotions() {
        return promotions;
    }

    public String getAds() {
        return ads;
    }

    public int getAcc_engage() {
        return acc_engage;
    }
}
