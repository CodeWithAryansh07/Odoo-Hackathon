package com.stackit.dtos;

import com.stackit.model.Role;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LoginResponse {
    private String message;
    private Long userId;
    private String username;
    private String email;
    private Role role;
}
