package com.quote.demo.dtos;

import java.util.List;
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
public class QuotesDto {
	private long  quoteId;
	private String quote;
	private String author;
	private boolean hasliked;
}

