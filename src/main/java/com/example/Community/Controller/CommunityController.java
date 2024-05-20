package com.example.Community.Controller;

import com.example.Community.Model.Community;
import com.example.Community.Service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/communities")
public class CommunityController {
    @Autowired
    private CommunityService communityService;

    @GetMapping
    public List<Community> getAllPosts() {
        return communityService.getAllPosts();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Community> getPostById(@PathVariable Long id) {
        Optional<Community> community = communityService.getPostById(id);
        return community.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Community createPost(@RequestBody Community community) {
        return communityService.createPost(community);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        communityService.deletePost(id);
        return ResponseEntity.ok().build();
    }
}