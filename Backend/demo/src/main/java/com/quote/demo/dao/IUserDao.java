package com.quote.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quote.demo.Entities.Quotes;
import com.quote.demo.Entities.User;

public interface IUserDao extends JpaRepository<User, Long> {



	

	User findByEmail(String email);

	User findByEmailAndPassword(String email, String password);
	
}
