package dashboard.springback.api.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="twitter")
public class Twitter {

    @Id
    private String email;

    private int followers;
    private int following;
    private int posts;

    private int stories;
    private int likes;
    private int comments;
    private int shares;
    private int saves;

    public Twitter(String email, int followers, int following, int posts, int stories, int likes, int comments, int shares, int saves){
        this.email = email;
        this.followers = followers;
        this.following = following;
        this.posts = posts;
        this.stories = stories;
        this.likes = likes;
        this.comments = comments;
        this.shares = shares;
        this.saves = saves;
    }

    public String getEmail() {
        return email;
    }

    public int getFollowers() {
        return followers;
    }

    public int getFollowing() {
        return following;
    }

    public int getPosts() {
        return posts;
    }

    public int getStories() {
        return stories;
    }

    public int getLikes() {
        return likes;
    }

    public int getComments() {
        return comments;
    }

    public int getShares() {
        return shares;
    }

    public int getSaves() {
        return saves;
    }
    
}
