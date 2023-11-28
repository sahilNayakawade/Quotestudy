package com.quote.demo.dtos;

import com.quote.demo.Entities.Quotes;
import com.quote.demo.Entities.User;

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
public class FavouriteQuotesDto {
	private Long userId;
	private Long quoteId;
	
}
