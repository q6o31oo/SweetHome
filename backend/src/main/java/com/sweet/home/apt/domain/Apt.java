package com.sweet.home.apt.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Builder;
import lombok.Getter;

@Entity
@Getter
public class Apt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "apt_id")
    private Long id;

    @Column(name = "adm_code")
    private Integer admCode;

    @Column(name = "sido")
    private String sido;

    @Column(name = "road_name")
    private String roadName;

    @Column(name = "road_code")
    private Integer roadCode;

    @Column(name = "apt_main_num")
    private Integer aptMainNum;

    @Column(name = "apt_sub_num")
    private Integer aptSubNum;

    @Column(name = "name")
    private String name;

    public Apt() {
    }

    @Builder
    public Apt(Long id, Integer admCode, String sido, String roadName, Integer roadCode, Integer aptMainNum,
        Integer aptSubNum, String name) {
        this.id = id;
        this.admCode = admCode;
        this.sido = sido;
        this.roadName = roadName;
        this.roadCode = roadCode;
        this.aptMainNum = aptMainNum;
        this.aptSubNum = aptSubNum;
        this.name = name;
    }
}