package com.stackit.service;

import com.stackit.dtos.AnswerRequestDto;
import com.stackit.dtos.AnswerResponseDto;

import java.util.List;

public interface AnswerService {
    AnswerResponseDto postAnswer(Long userId, AnswerRequestDto requestDto);
    List<AnswerResponseDto> getAnswersByQuestionId(Long questionId);
    void upvoteAnswer(Long answerId);
}