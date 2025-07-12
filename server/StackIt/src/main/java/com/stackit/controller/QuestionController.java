package com.stackit.controller;

import com.stackit.dtos.QuestionRequestDto;
import com.stackit.dtos.QuestionResponseDto;
import com.stackit.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;

    @PostMapping("/create")
    public ResponseEntity<QuestionResponseDto> create(@RequestBody QuestionRequestDto request) {
        return ResponseEntity.ok(questionService.createQuestion(request));
    }

    @GetMapping
    public ResponseEntity<List<QuestionResponseDto>> getAll() {
        return ResponseEntity.ok(questionService.getAllQuestions());
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuestionResponseDto> getById(@PathVariable Long id) {
        return ResponseEntity.ok(questionService.getQuestionById(id));
    }
}
