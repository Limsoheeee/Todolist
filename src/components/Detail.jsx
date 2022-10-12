import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const toDoList = useSelector((state) => state.todo.todoList);
  const { id } = useParams();
  const detailpage = toDoList.find((todo)=>todo.id === Number(id));

  return (
    <StBox>
       <p>ID:{id}</p>   
      <h2>{detailpage.title}</h2>
      <h3>{detailpage.content}</h3>
      <button onClick={()=>{navigate(-1)}}>이전페이지</button>
    </StBox>
  );
}

const StBox = styled.div`
  border: 1px solid black;
border-radius: 20px;
height: 220px;
padding: 0 20px;
background: #fafafa;
width: 300px;
position: absolute;
left: 50%;
top: 50%;
margin-left: -150px;
margin-top: -150px;
`;

export default Detail;