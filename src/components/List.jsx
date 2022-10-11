import React  from "react";
import { useSelector } from "react-redux";
import ToDo from "./ToDo";
import styled from "styled-components";

const List = () => {
    const toDoList = useSelector((state)=>state.todo.todoList);

    const isDoneList = toDoList.filter((item)=>{
        return item.isDone === true;
    });
    const isNotDone = toDoList.filter((item)=>{
        return item.isDone === false;
    });
    return(
    <>
        <div>
            <h2>Work</h2>
        </div>        
          {isNotDone.map((item)=>{
                const {id} = item
                return <div key={id}><ToDo item={item} /></div>
            })}
        <div/>
        <div>
            <h2>Done</h2>
        </div>
        {isDoneList.map((item)=>{
            const {id} = item
                return <div key={id}><ToDo item={item} /></div>
            })}
    </>
    )
};

const TodoCard = styled.div` 
display: flex;
 width: 100px;
 height : 150px ;
border: 2px solid green;
background-color:transparent;
color: black;
border-radius:15px;
margin-left:10px ;
text-align: center;
`;

export default List;