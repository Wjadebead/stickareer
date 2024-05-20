package com.example.Community.Repository;

import com.example.Community.Model.Comment;
import com.example.Community.Model.Community;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByCommunity(Community community);
}