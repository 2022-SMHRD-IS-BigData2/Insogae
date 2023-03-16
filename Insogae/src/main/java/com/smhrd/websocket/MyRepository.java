package com.smhrd.websocket;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smhrd.entity.Predict_View;


public interface MyRepository extends JpaRepository<Predict_View, Long>{

	List<Predict_View> findAll();
	
	// extends JpaRepository<테이블 역할을 하는 클래스, 기본키의 자료형>
	
		// JpaRepository를 상속 받음으로써 기본 CRUD 메서드들이 제공된다.
		
		// findAll 메서드 : select * from board
		// findById 메서드 : select * from where idx = #{idx}
		// save(Board)
		// 만약 Board안에 idx값이 없다면 : 1. insert into board (title, writer, content, img)
		// 								 values(#{title},#{wirter},#{content},#img)
		// 만약 Board안에 idx값이 있다면 : 2. update board
		//								 set title=#{title}, content=#{content}, img=#{img}, count=#{count} 
		// 								 where idx = #{idx}
		//
		// 작성자의 게시글 찾기 ?? 메서드 이름 만들기 주의사항!  
		// select * from board where writer = #{writer}
		// find + Board + By + Writer
		// find + 테이블명(생략 가능) + By + 컬럼명 + And(Or) ... 
		// 주의! 카멜식 기법으로 작성해야함
		// 작성자와 제목이  일치하는 게시글 찾기 ??  
		// select * from board where writer = #{writer} and title = #{title}
		// find + Board + By + Writer + And + Title
		// MyBatis처럼 메서드위에 어노테이션으로 SQL문을 지정해주는 방식
		// @Query("select * from Board")
		// public List<Board> testQuery();
}
