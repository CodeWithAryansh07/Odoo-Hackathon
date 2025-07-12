package com.stackit.dtos;

import lombok.Data;

import java.util.List;

@Data
public class QuestionRequestDto {
    private String title;
    private String description;
    private List<String> tags;
    private Long authorId;
}
