package dashboard.springback.api.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

    @Id
    private String email;
    private String nickname;
    private String category;
    private String bio;
    private long phone;

    public User(String email, String nickname, String category, String bio, long phone) {
        this.email = email;
        this.nickname = nickname;
        this.category = category;
        this.bio = bio;
        this.phone=phone;
    }

    public String getEmail() {
        return email;
    }

    public String getNickname() {
        return nickname;
    }

    public String getCategory() {
        return category;
    }

    public String getBio() {
        return bio;
    }

    public long getPhone() {
        return phone;
    }
}
