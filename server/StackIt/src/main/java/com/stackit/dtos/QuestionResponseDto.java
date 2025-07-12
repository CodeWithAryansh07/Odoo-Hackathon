package com.stackit.dtos;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
public class QuestionResponseDto {
    private Long id;
    private String title;
    private String description;
    private List<String> tags;
    private String authorUsername;
    private LocalDateTime createdAt;
}
