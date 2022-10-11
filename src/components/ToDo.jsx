import React  from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {delCard, changeCard} from "../redux/modules/todo";

const ToDo = ({item}) => {
    const dispatch = useDispatch();
    const{title, content, isDone, id} =item;
    const onClickDel = (id) => {
        dispatch(delCard(id))
    };
    const onClickChange = (id) => {
        dispatch(changeCard(id));
      };

    return (
        <TodoCard>
            <div>
        <h4>{title}</h4>
        <p>{content}</p>
        </div>
        <div>
        <TodoBtn onClick={()=>onClickChange(id)}>{isDone ? "완료" : "취소"}</TodoBtn>
        <TodoBtn onClick = {()=>onClickDel(id)}>삭제</TodoBtn>
        </div>
    </TodoCard>
    );
    
};

const TodoCard = styled.div` 
display: flex;
 width: 100px;
 height : 150px ;
border: 2px solid green;
background-color:transparent;
color: black;
border-radius:15px;
`; 

const TodoBtn = styled.button` 
display: flex;
flex-wrap: wrap;
 width: 30px;
 height : 20px ;
border: 2px solid green;
background-color:transparent;
color: black;
border-radius:5px;
margin-left:10px ;
margin-top: 70px;
`; 

export default ToDo;
