package com.stackit.service;

import com.stackit.dtos.QuestionRequestDto;
import com.stackit.dtos.QuestionResponseDto;
import com.stackit.model.Question;
import com.stackit.model.User;
import com.stackit.repositories.QuestionRepository;
import com.stackit.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;

    @Override
    public QuestionResponseDto createQuestion(QuestionRequestDto request) {
        User author = userRepository.findById(request.getAuthorId())
                .orElseThrow(() -> new RuntimeException("Author not found"));

        Question question = Question.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .tags(request.getTags())
                .author(author)
                .build();

        Question saved = questionRepository.save(question);

        return mapToDto(saved);
    }

    @Override
    public List<QuestionResponseDto> getAllQuestions() {
        return questionRepository.findAll().stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public QuestionResponseDto getQuestionById(Long id) {
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Question not found"));
        return mapToDto(question);
    }

    private QuestionResponseDto mapToDto(Question question) {
        return QuestionResponseDto.builder()
                .id(question.getId())
                .title(question.getTitle())
                .description(question.getDescription())
                .tags(question.getTags())
                .authorUsername(question.getAuthor().getUsername())
                .createdAt(question.getCreatedAt())
                .build();
    }
}
