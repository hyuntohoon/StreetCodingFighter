package com.scf.user.profile.domain.entity;

import com.scf.user.member.domain.entity.Member;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "characters")
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "character_id")
    private Integer characterId;

    @Column(name = "exp")
    private Long exp = 0L;

    @Column(name = "character_type")
    private Integer characterType;

    @OneToOne
    @JoinColumn(name = "member_id", nullable = false) // FK 설정
    private Member member;

}
