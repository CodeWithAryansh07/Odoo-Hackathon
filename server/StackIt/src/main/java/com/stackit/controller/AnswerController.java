package com.stackit.controller;

import com.stackit.dtos.AnswerRequestDto;
import com.stackit.dtos.AnswerResponseDto;
import com.stackit.service.AnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/answers")
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;

    @PostMapping("/question/{questionId}/user/{userId}")
    public ResponseEntity<AnswerResponseDto> postAnswer(
            @PathVariable Long questionId,
            @PathVariable Long userId,
            @RequestBody AnswerRequestDto dto
    ) {
        dto.setQuestionId(questionId);
        return ResponseEntity.ok(answerService.postAnswer(userId, dto));
    }

    @GetMapping("/question/{questionId}")
    public ResponseEntity<List<AnswerResponseDto>> getAnswers(@PathVariable Long questionId) {
        return ResponseEntity.ok(answerService.getAnswersByQuestionId(questionId));
    }

    @PostMapping("/{answerId}/upvote")
    public ResponseEntity<String> upvote(@PathVariable Long answerId) {
        answerService.upvoteAnswer(answerId);
        return ResponseEntity.ok("Answer upvoted successfully.");
    }
}
