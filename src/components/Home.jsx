import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import List from "./List"
import { addCard } from "../redux/modules/todo";

function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toDoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  }; 
  const onClickHandler = () => {
    const card = { title, content, isDone: false, id: toDoList[toDoList.length-1]?.id + 1 || 0 };
    dispatch(addCard(card))
      setTitle("");
    setContent("");   
  };
 
  return (
    <>
    <Header />
    <Container>
      <h4>
        제목:    
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => onChangeHandler(e)}
        />
        내용:
        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => onChangeHandler(e)}
        />
        <AddBts onClick={onClickHandler}>추가</AddBts>
      </h4>
      <List />
    </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

const AddBts = styled.button`
  width: 50px;
  border: 2px solid blue;
  background-color: transparent;
  color: black;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

export default Home;