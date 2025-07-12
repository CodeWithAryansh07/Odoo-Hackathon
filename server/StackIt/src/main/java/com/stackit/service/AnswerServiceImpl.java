package com.stackit.service;

import com.stackit.dtos.AnswerRequestDto;
import com.stackit.dtos.AnswerResponseDto;
import com.stackit.model.Answer;
import com.stackit.model.Question;
import com.stackit.model.User;
import com.stackit.repositories.AnswerRepository;
import com.stackit.repositories.QuestionRepository;
import com.stackit.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnswerServiceImpl implements AnswerService {

    private final AnswerRepository answerRepository;
    private final UserRepository userRepository;
    private final QuestionRepository questionRepository;

    @Override
    public AnswerResponseDto postAnswer(Long userId, AnswerRequestDto dto) {
        User author = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Question question = questionRepository.findById(dto.getQuestionId())
                .orElseThrow(() -> new RuntimeException("Question not found"));

        Answer answer = Answer.builder()
                .author(author)
                .question(question)
                .content(dto.getContent())
                .votes(0)
                .accepted(false)
                .build();

        Answer saved = answerRepository.save(answer);

        System.out.println("🔔 Notify user " + question.getAuthor().getUsername() +
                ": New answer to your question '" + question.getTitle() + "'");

        return mapToDto(saved);
    }

    @Override
    public List<AnswerResponseDto> getAnswersByQuestionId(Long questionId) {
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new RuntimeException("Question not found"));

        return answerRepository.findByQuestion(question).stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    @Override
    public void upvoteAnswer(Long answerId) {
        Answer answer = answerRepository.findById(answerId)
                .orElseThrow(() -> new RuntimeException("Answer not found"));
        answer.setVotes(answer.getVotes() + 1);
        answerRepository.save(answer);
    }

    private AnswerResponseDto mapToDto(Answer answer) {
        return AnswerResponseDto.builder()
                .id(answer.getId())
                .content(answer.getContent())
                .votes(answer.getVotes())
                .accepted(answer.isAccepted())
                .questionId(answer.getQuestion().getId())
                .authorUsername(answer.getAuthor().getUsername())
                .createdAt(answer.getCreatedAt())
                .build();
    }
}
