package com.stackit.service;

import com.stackit.dtos.QuestionRequestDto;
import com.stackit.dtos.QuestionResponseDto;

import java.util.List;

public interface QuestionService {
    QuestionResponseDto createQuestion(QuestionRequestDto request);
    List<QuestionResponseDto> getAllQuestions();
    QuestionResponseDto getQuestionById(Long id);
}
