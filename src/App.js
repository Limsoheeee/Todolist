import React from "react";
import Header from "./components/Header";
import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import List from "./components/List";
import { addCard } from "./redux/modules/todo";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const toDoList = useSelector((state) => state.todo.todoList);
  console.log(toDoList);

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
    const card = { title, content, id: uuidv4(), isDone: false };
    dispatch(addCard(card)); //카드내용을 페이로드해줌
    setTitle("");
    setContent("");
  };

  return (
    <Container>
      <Header />
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

export default App;
