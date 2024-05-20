package com.example.Community.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String jobInfo;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
