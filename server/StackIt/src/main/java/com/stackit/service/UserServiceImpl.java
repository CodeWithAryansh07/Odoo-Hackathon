package com.stackit.service;

import com.stackit.dtos.LoginRequest;
import com.stackit.dtos.LoginResponse;
import com.stackit.dtos.UserDto;
import com.stackit.model.User;
import com.stackit.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public UserDto registerUser(UserDto userDto) {
        if (userRepository.findByEmail(userDto.getEmail()).isPresent() ||
                userRepository.findByUsername(userDto.getUsername()).isPresent()) {
            throw new RuntimeException("Username or Email already exists.");
        }

        User user = User.builder()
                .username(userDto.getUsername())
                .email(userDto.getEmail())
                .password(userDto.getPassword()) // ❗no encryption for now
                .role(userDto.getRole())
                .status(userDto.getStatus())
                .provider(userDto.getProvider())
                .enabled(true)
                .build();

        user = userRepository.save(user);
        return mapToDto(user);
    }

    @Override
    public UserDto getUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return mapToDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }

    private UserDto mapToDto(User user) {
        return UserDto.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .role(user.getRole())
                .status(user.getStatus())
                .provider(user.getProvider())
                .build();
    }

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        String identifier = loginRequest.getUsernameOrEmail();
        String password = loginRequest.getPassword();

        User user = userRepository.findByUsername(identifier)
                .or(() -> userRepository.findByEmail(identifier))
                .orElseThrow(() -> new RuntimeException("User not found with username/email: " + identifier));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return LoginResponse.builder()
                .message("Login successful")
                .userId(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }
}
