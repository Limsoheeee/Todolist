import React from "react";
import { useSelector } from "react-redux";
import ToDo from "./ToDo";
import styled from "styled-components";

const List = () => {
  const toDoList = useSelector((state) => state.todo.todoList);

  const isDoneList = toDoList.filter((item) => {
    return item.isDone === true;
  });
  const isNotDone = toDoList.filter((item) => {
    return item.isDone === false;
  });
  return (
    <div>
      <h2>Work</h2>
      <ListUL>
        {isNotDone.map((item) => {
          const { id } = item;
          return (
            <div key={id}>
              <ToDo item={item} />
            </div>
          );
        })}
      </ListUL>
      <h2>Done</h2>
      <ListUL>
        {isDoneList.map((item) => {
          const { id } = item;
          return (
            <div key={id}>
              <ToDo item={item} />
            </div>
          );
        })}
      </ListUL>
    </div>
  );
};

const ListUL = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  gap: 20px;
  padding: 0;
  list-style: none;
  margin-left: 10px;
`;

export default List;
