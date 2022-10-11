import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { delCard, changeCard } from "../redux/modules/todo";

const ToDo = ({ item }) => {
  const dispatch = useDispatch();
  const { title, content, isDone, id } = item;

  const onClickDel = (id) => {
    dispatch(delCard(id));
  };

  const onClickChange = (id) => {
    dispatch(changeCard(id));
  };

  return (
    <TodoCard>
      <div>
        <h4>{title}</h4>
        <Content>{content}</Content>
      </div>
      <ButtonWrap>
        <TodoBtn onClick={() => onClickChange(id)}>
          {isDone ? "완료" : "취소"}
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
