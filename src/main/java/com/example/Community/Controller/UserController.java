package com.example.Community.Controller;

import com.example.Community.Model.User;
import com.example.Community.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/mypage")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{username}")
    public String getUserProfile(@PathVariable String username, Model model) {
        User user = userService.getUserByUsername(username);
        model.addAttribute("user", user);
        return "mypage";
    }

    @PostMapping("/update")
    public String updateUserProfile(@ModelAttribute User user) {
        userService.saveUser(user);
        return "redirect:/mypage/" + user.getUsername();
    }


}