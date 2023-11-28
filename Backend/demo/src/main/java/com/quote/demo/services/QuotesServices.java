package com.quote.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


import com.quote.demo.Entities.Quotes;
import com.quote.demo.Entities.User;

import com.quote.demo.dao.IQuotesDao;
import com.quote.demo.dao.IUserDao;
import com.quote.demo.dtos.LikeDto;
import com.quote.demo.dtos.QuotesDto;

@Service
@Transactional
public class QuotesServices {

	@Autowired
	private IQuotesDao iQuotesDao;
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private IUserDao iUserDao;
	
	public QuotesDto addQuotes(long userId, QuotesDto quotesDto) {

	    Quotes quote = modelMapper.map(quotesDto, Quotes.class);
	    User user = iUserDao.findById(userId).get();
	    iQuotesDao.save(quote);
	    List<Quotes> quotes = user.getQuotes();
	    quotes.add(quote);

	    quote.setUser(user);//important step
	    iUserDao.save(user);
	    return modelMapper.map(quote, QuotesDto.class);
	}

	public List<QuotesDto> getAllQuotes() {
	
		List<QuotesDto> quotesDtos = new ArrayList<QuotesDto>();
		for(Quotes q : iQuotesDao.findAll()) {
			QuotesDto quotesDto1 = modelMapper.map(q, QuotesDto.class );
			quotesDtos.add(quotesDto1);
		}
				
		return quotesDtos;
	}

	public List<QuotesDto> myQuotes(long userId) {
	    User user =iUserDao.findById(userId).get();
	     List<QuotesDto> quotesDtos = new ArrayList<>();
	     for(Quotes q : user.getQuotes()) {
	    	 QuotesDto quotesDto = modelMapper.map(q, QuotesDto.class);
	    	 quotesDtos.add(quotesDto);
	     }
	     return quotesDtos;
	}
    
	public List<QuotesDto> getFavQuotes(long userId){
		User user = iUserDao.findById(userId).get();
		List<QuotesDto> quotesDtos= new ArrayList<QuotesDto>();
		for(Quotes q : user.getFavquotes()) {
			QuotesDto quotesDto=modelMapper.map(q, QuotesDto.class);
			quotesDtos.add(quotesDto);
		}
		return quotesDtos;
	}

	public void deletequote(long quoteId) {
		 iQuotesDao.deleteById(quoteId);
		
	}
	public List<LikeDto> getAllLike(){
		List<LikeDto> likeDtos = new ArrayList<>();
		for(Quotes q : iQuotesDao.findAll()) {
			LikeDto likeDto = modelMapper.map(q, LikeDto.class);
			likeDtos.add(likeDto);
		}
		return likeDtos;
		
	}
	public List<QuotesDto> checkliked() {
		List<QuotesDto> quotesDtos = new ArrayList<QuotesDto>();
		for(Quotes q : iQuotesDao.findAll()) {
			QuotesDto quotesDto1 = modelMapper.map(q, QuotesDto.class );
			quotesDtos.add(quotesDto1);
		}
				
		return quotesDtos;
	}
	public boolean addToFavourite(long userId, long quoteId) {
		User user = iUserDao.findById(userId).get();
		Quotes quote = iQuotesDao.findById(quoteId).get();
		List<Quotes> quotes = user.getFavquotes();
		List<User>users=quote.getUsers();
		if(user.getQuotes().contains(quote)) {
			return false;
		}
		else
		{
			if(user.getFavquotes().contains(quote)) {
				quotes.remove(quote);
				return false;
			}
			else {
			quotes.add(quote);
			users.add(user);
			return true;
			}
			
			
		}
	}
	public QuotesDto editQuotes( long quoteId) {
		Quotes quote= iQuotesDao.findById(quoteId).get();
		return modelMapper.map(quote, QuotesDto.class);
	}
}