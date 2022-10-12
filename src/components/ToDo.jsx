import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { delCard, changeCard, gettodoid } from "../redux/modules/todo";
import { useNavigate } from "react-router-dom";

const ToDo = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, content, isDone, id } = item;

  const todoList = useSelector((state)=> state.todo.todoList)

  const onClickDel = (id) => {
    dispatch(delCard(id));
  };

  const onClickDetail = (id) => {    
    dispatch(gettodoid(id));
    const findCard = todoList.filter((card)=>{
      return card.id === id
    })
    navigate(`/detail/${id}`, {state: findCard});
  };

  const onClickChange = (id) => {
    dispatch(changeCard(id));
  };

  return (
    <TodoCard>
      <div>
        <DeTail onClick={()=>onClickDetail(item.id)}>상세보기</DeTail>
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

const DeTail = styled.span`
  cursor: pointer;;
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
