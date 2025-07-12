package com.stackit.dtos;

import com.stackit.model.Provider;
import com.stackit.model.Role;
import com.stackit.model.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private Long id;
    private String username;
    private String email;
    private String password;
    private Role role;
    private Status status;
    private Provider provider;
}
