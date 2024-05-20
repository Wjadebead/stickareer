package com.example.Community.Service;

import com.example.Community.Model.Community;
import com.example.Community.Repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommunityService {
    @Autowired
    private CommunityRepository communityRepository;

    public List<Community> getAllPosts() {
        return communityRepository.findAll();
    }

    public Optional<Community> getPostById(Long id) {
        return communityRepository.findById(id);
    }

    public Community createPost(Community community) {
        return communityRepository.save(community);
    }

    public void deletePost(Long id) {
        communityRepository.deleteById(id);
    }
}
