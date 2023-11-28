package com.quote.demo.Entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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
@Table(name="quotes")
public class Quotes {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
     private long  quoteId;
	 private String quote;
	 private String author;
	 private boolean hasliked;
	 
	 @ManyToMany(mappedBy = "favquotes")
	 private List<User> users= new ArrayList<User>();
	 @ManyToOne()
	 @JoinColumn(name="user_id")
	 private User user;
	
}
