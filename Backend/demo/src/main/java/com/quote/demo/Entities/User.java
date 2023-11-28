package com.quote.demo.Entities;

import java.util.ArrayList;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;
	
	private String firstName;
	
	private String lastName;
	
	@Column(unique = true)
	private String email;
	
	private String password;
	@Transient
	private String confirmPassword;
	
	private String address;
	
	private String mobile;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name="favouritequotes",
			joinColumns=@JoinColumn(name="user_user_id"),
			inverseJoinColumns = @JoinColumn(name="quote_id")
			)
	
	List<Quotes> favquotes = new ArrayList<Quotes>();
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	List<Quotes> quotes = new ArrayList<Quotes>();
	
	

 
}
