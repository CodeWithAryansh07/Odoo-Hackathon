package com.stackit.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(unique = true, nullable = false)
    @Email(message = "Please enter a valid email address !!!!")
    private String email;

    @Column(nullable = false)
    @NotEmpty(message = "Password required !!!")
    private String password;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Role is required !!!")
    private Role role;

    @Enumerated(EnumType.STRING)
    @NotNull(message = "Status is required !!!")
    private Status status;

    @Enumerated(EnumType.STRING)
    private Provider provider;

    private boolean enabled = true;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

}
