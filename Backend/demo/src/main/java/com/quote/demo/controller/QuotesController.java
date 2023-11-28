package com.quote.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.quote.demo.Entities.Quotes;
import com.quote.demo.dtos.QuotesDto;
import com.quote.demo.services.QuotesServices;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/quotes")
public class QuotesController {
	
	@Autowired
	private QuotesServices quotesServices;
	@PostMapping("/addquotes/{userId}")
	public ResponseEntity<?> addQuotes(@PathVariable  long userId, @RequestBody  QuotesDto quotesDto) {
		
		return ResponseEntity.status(HttpStatus.OK).body(quotesServices.addQuotes(userId, quotesDto));   
	}
	@GetMapping("/getallquotes")
	public ResponseEntity<?> getAllQuotes() {
		System.out.println(quotesServices.getAllQuotes());
		return ResponseEntity.status(HttpStatus.OK).body(quotesServices.getAllQuotes());   
	}
	@GetMapping("/myquotes/{userId}")
	public ResponseEntity<?> myQuotes(@PathVariable long userId) {
		return ResponseEntity.status(HttpStatus.OK).body(quotesServices.myQuotes(userId));    
	}
	@GetMapping("/favquotes/{userId}")
	public ResponseEntity<?> getFavQuotes(@PathVariable long userId) {
		return ResponseEntity.status(HttpStatus.OK).body(quotesServices.getFavQuotes(userId));    
	}
	@GetMapping("/deletequote/{quoteId}") 
	public ResponseEntity<?> deletequote(@PathVariable long quoteId){
		quotesServices.deletequote(quoteId);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
//	@GetMapping("/increasecount")
//	public ResponseEntity<?> getAllLikes(){
//		return ResponseEntity.status(HttpStatus.OK).body(quotesServices.getAllLike());
//		
//	}
//	@PostMapping("/pluscount/{quoteId}/{userId}")
//	public ResponseEntity<?> plusCount(@PathVariable long quoteId, @PathVariable long userId){
//		System.out.println(quoteId);
//		return ResponseEntity.status(HttpStatus.OK).body(quotesServices.plusCount(quoteId,userId));
//	}
//    @GetMapping("/checklike")
//    public ResponseEntity<?> checkliked(){
//    	return ResponseEntity.status(HttpStatus.OK).body(quotesServices.checkliked());
//    }
    @PostMapping("/addtofav/{userId}/{quoteId}")
    public ResponseEntity<?> addToFavourite(@PathVariable long userId, @PathVariable long quoteId){
          return ResponseEntity.status(HttpStatus.OK).body(quotesServices.addToFavourite(userId, quoteId));    	
    }
    @PostMapping("/editQuote/{quoteId}")
    public ResponseEntity<?> editQuote(@PathVariable long quoteId){
    	return ResponseEntity.status(HttpStatus.OK).body(quotesServices.editQuotes(quoteId));
    }
}
