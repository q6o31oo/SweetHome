package com.sweet.home.message.service;

import com.sweet.home.member.domain.Member;
import com.sweet.home.member.service.MemberService;
import com.sweet.home.message.controller.dto.request.MessageSendRequest;
import com.sweet.home.message.domain.Message;
import com.sweet.home.message.domain.MessageContent;
import com.sweet.home.message.domain.MessageRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MessageService {

    private final MessageRepository messageRepository;
    private final MemberService memberService;

    public MessageService(MessageRepository messageRepository, MemberService memberService) {
        this.messageRepository = messageRepository;
        this.memberService = memberService;
    }

    // 메세지 보내기
    @Transactional
    public void sendMessage(String email, MessageSendRequest request) {
        Member sender = memberService.findByEmail(email);
        Member receiver = memberService.findByUsername(request.getReceiverName());

        // 메세지 콘텐트 만들기
        MessageContent messageContent = request.toCreateMessageContent();

        // 받는 사람의 받은 메시지함에 보관
        messageRepository.saveAll(Message.createMessage(sender, receiver, messageContent));
    }
}