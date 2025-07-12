package com.stackit.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AnswerResponseDto {

    private Long id;
    private String content;
    private int votes;
    private boolean accepted;
    private String authorUsername;
    private Long questionId;
    private LocalDateTime createdAt;
}
