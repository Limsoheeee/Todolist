import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { delCard, changeCard, gettodoid } from "../redux/modules/todo";
import { useNavigate } from "react-router-dom";

const ToDo = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, content, isDone, id } = item;

  const onClickDel = (id) => {
    dispatch(delCard(id));
  };

  // const onClickDetail = (id) => {    
  //   navigate(`/detail/${toDoList.id}`);
  //   // const detail = { ...toDoList.id };
  //   // dispatch(gettodoid(detail));
  //   // console.log(detail)  
  // };

  const onClickChange = (id) => {
    dispatch(changeCard(id));
  };

  return (
    <TodoCard>
      <div>
        <span onClick={()=>{navigate(`/detail/${id}`)}}>상세보기</span>
        <h4>{title}</h4>
        <Content>{content}</Content>
      </div>
      <ButtonWrap>
        <TodoBtn onClick={() => onClickChange(id)}>
          {isDone ? "취소" : "완료"}
        </TodoBtn>
        <TodoBtn onClick={() => onClickDel(id)}>삭제</TodoBtn>
      </ButtonWrap>
    </TodoCard>
  );
};

const Content = styled.p`
  word-break: break-all;
`;

const TodoCard = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  border: 2px solid green;
  background-color: transparent;
  color: black;
  border-radius: 15px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const TodoBtn = styled.button`
  flex: 1;
  border: 2px solid green;
  background-color: transparent;
  color: black;
  border-radius: 5px;
`;

export default ToDo;
