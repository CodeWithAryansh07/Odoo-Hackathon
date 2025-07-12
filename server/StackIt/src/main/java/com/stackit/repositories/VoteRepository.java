package com.stackit.repositories;

import com.stackit.model.Answer;
import com.stackit.model.User;
import com.stackit.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findByAnswerAndUser(Answer answer, User user);
}
