package com.quote.demo.services;

import javax.transaction.Transactional;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.quote.demo.Entities.User;
import com.quote.demo.dao.IUserDao;
import com.quote.demo.dtos.LoginDto;
import com.quote.demo.dtos.UserDto;

@Service
@Transactional
public class UserServices {
	 
	@Autowired
	private IUserDao iUserDao;

	@Autowired
	private ModelMapper modelMapper;

//	public LoginDto checkUserNameAndPassword(String email, String password) {
//		System.out.println("email = "+email+"\npassword = "+password);
//		 User user=iUserDao.findByEmailAndPassword(email, password);
//		 System.out.println("******************"+user+"*************************");
//		LoginDto loginDto=modelMapper.map(user, LoginDto.class);
//		return loginDto;
//	}
   public LoginDto checkUserNameAndPassword(String email, String password) {
	   User user = iUserDao.findByEmailAndPassword(email, password);
	  // System.out.println(user);
	   LoginDto loginDto = modelMapper.map(user, LoginDto.class);
	   return loginDto;
	   
   }
	public boolean signUp(String email) {
		User u = iUserDao.findByEmail(email);
		return u != null ? true : false;
	}

	public UserDto addUserDetails(UserDto userDto) {
		User user = modelMapper.map(userDto, User.class);
		user=iUserDao.save(user);
		UserDto userDto2 = modelMapper.map(user, UserDto.class);
		return userDto2;
	}
	
	public UserDto editUser(long userId) {
       User user = iUserDao.findById(userId).get();
       UserDto userDto= modelMapper.map(user, UserDto.class);
       return userDto;
	}
	
	public UserDto updateUser(Long userId, UserDto updatedUserData) {
        // Retrieve the existing user from the database
        User existingUser = iUserDao.findById(userId).get();

        // Update the fields with new values
        existingUser.setFirstName(updatedUserData.getFirstName());
        existingUser.setLastName(updatedUserData.getLastName());
        existingUser.setEmail(updatedUserData.getEmail());
        // Add other fields as needed

        // Save the updated user back to the database
        iUserDao.save(existingUser);

        // Map the updated user to a DTO and return it
        return modelMapper.map(existingUser, UserDto.class);
    }
	
}
