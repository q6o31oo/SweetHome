package com.sweet.home.comment.controller.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sweet.home.comment.domain.Comment;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class CommentReportResponse {

    @JsonProperty("totalReports")
    private int totalReports;

    @JsonProperty("id")
    private Long id;

    @JsonProperty("content")
    private String content;

    @JsonProperty("username")
    private String username;

    @JsonProperty("created_at")
    private LocalDateTime createdAt;

    protected CommentReportResponse() {

    }

    public CommentReportResponse(int totalReports, Long id, String content, String username, LocalDateTime createdAt) {
        this.totalReports = totalReports;
        this.id = id;
        this.content = content;
        this.username = username;
        this.createdAt = createdAt;
    }

    public static CommentReportResponse from(Comment comment) {
        return new CommentReportResponse(
            comment.getTotalReports(),
            comment.getId(),
            comment.getContent(),
            comment.getMember().getUsername(),
            comment.getCreatedAt()
        );
    }
}
