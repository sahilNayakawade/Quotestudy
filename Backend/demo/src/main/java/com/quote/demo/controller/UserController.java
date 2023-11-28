package com.quote.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quote.demo.Entities.Quotes;
import com.quote.demo.Entities.User;
import com.quote.demo.dtos.LoginDto;
import com.quote.demo.dtos.SignInDto;
import com.quote.demo.dtos.UserDto;
import com.quote.demo.services.UserServices;

@RestController
@CrossOrigin
@RequestMapping("api/user")
public class UserController {
	
	@Autowired
	private UserServices userServices;
	
    @PostMapping("/signin")
	public ResponseEntity<?> checkUserNameAndPassword(@RequestBody SignInDto signInDto ) {

    	System.out.println(signInDto.getEmail()+" "+signInDto.getPassword());
		String email = signInDto.getEmail();
		String password = signInDto.getPassword();

		LoginDto loginedUser = userServices.checkUserNameAndPassword(email, password);

		if (loginedUser != null) {
			return  ResponseEntity.status(HttpStatus.OK).body(loginedUser);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("email or password wrong");
		}
	}
    @PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody UserDto userDto){
//		String email = userDto.getEmail();
		
		if(userServices.signUp(userDto.getEmail())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("email already exist");
		}
		else {
			return ResponseEntity.status(HttpStatus.CREATED).body(userServices.addUserDetails(userDto));
		}
	}
	@GetMapping("/edit/{userId}")
	public ResponseEntity<?> editUser(@PathVariable Long userId){
		return ResponseEntity.status(HttpStatus.OK).body(userServices.editUser(userId));
	}
	@PutMapping("/save")
	public ResponseEntity<?> updateUser(@PathVariable long userId,@RequestBody UserDto userDto){
		return ResponseEntity.status(HttpStatus.OK).body(userServices.updateUser(userId,userDto));
	}
}
