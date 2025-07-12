package com.stackit.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuestionResponseDto {

    private Long id;
    private String title;
    private String description;
    private List<String> tags;
    private String authorUsername;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
