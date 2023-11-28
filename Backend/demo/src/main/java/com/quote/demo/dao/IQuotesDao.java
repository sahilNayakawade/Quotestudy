package com.quote.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quote.demo.Entities.Quotes;

public interface IQuotesDao extends JpaRepository<Quotes, Long> {

	Quotes findByAuthor( String author);

	

}
