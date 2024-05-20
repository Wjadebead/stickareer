package com.example.Community.Controller;

import com.example.Community.Model.Comment;
import com.example.Community.Model.Community;
import com.example.Community.Service.CommentService;
import com.example.Community.Service.CommunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @Autowired
    private CommunityService communityService;

    @GetMapping("/post/{postId}")
    public ResponseEntity<List<Comment>> getCommentsByPost(@PathVariable Long postId) {
        Optional<Community> community = communityService.getPostById(postId);
        return community.map(value -> ResponseEntity.ok(commentService.getCommentsByPost(value)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable Long id) {
        Optional<Comment> comment = commentService.getCommentById(id);
        return comment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
        Optional<Community> community = communityService.getPostById(comment.getCommunity().getPostId());
        if (community.isPresent()) {
            comment.setCommunity(community.get());
            return ResponseEntity.ok(commentService.createComment(comment));
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long id) {
        commentService.deleteComment(id);
        return ResponseEntity.ok().build();
    }
}