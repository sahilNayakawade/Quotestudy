//package com.quote.demo.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.quote.demo.Entities.FavouriteQuotes;
//import com.quote.demo.dtos.FavouriteQuotesDto;
//import com.quote.demo.dtos.QuotesDto;
//import com.quote.demo.dtos.UserDto;
//import com.quote.demo.services.FavouriteQuotesServices;
//
//@RestController
//
//@CrossOrigin
//
//@RequestMapping("/api/favquotes")
//public class FavouriteController {
//	
//	@Autowired
//	private FavouriteQuotesServices favouriteQuotesServices;
//	
//	@PostMapping("/addtofav/{quoteId}/{userId}")
//	public ResponseEntity<?> addToFavourite(@RequestBody FavouriteQuotesDto favouriteQuotesDto,  @PathVariable("quoteId") long quoteId,@PathVariable("userId") long userId) {
//		return ResponseEntity.status(HttpStatus.OK).body(favouriteQuotesServices.addToFavourite(favouriteQuotesDto,quoteId, userId));
//	}
//
//	@GetMapping("/getfav")
//	public ResponseEntity<?> getFavourite( @RequestParam long userId) {
////		QuotesDto quotesDto = new QuotesDto(); 
////		UserDto userDto = new UserDto(); 
//		
//		return ResponseEntity.status(HttpStatus.OK).body(favouriteQuotesServices.getFavourite(userId));
//	}
//}
//
//
