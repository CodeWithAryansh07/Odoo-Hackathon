package com.stackit.service;

import com.stackit.dtos.LoginRequest;
import com.stackit.dtos.LoginResponse;
import com.stackit.dtos.UserDto;

import java.util.List;

public interface UserService {
    UserDto registerUser(UserDto userDto);
    UserDto getUserById(Long id);
    List<UserDto> getAllUsers();
    LoginResponse login(LoginRequest loginRequest);

}
