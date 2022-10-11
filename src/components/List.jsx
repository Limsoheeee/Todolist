import React  from "react";
import { useSelector } from "react-redux";
import ToDo from "./ToDo";

const List = () =>{
    const toDoList = useSelector((state)=>state.todo.todoList);

    const isDoneList = toDoList.filter((item)=>{
        return item.isDone === true;
    });
    const isNotDone = toDoList.filter((item)=>{
        return item.isDone === false;
    });
    return(
    <div>
        <div>
            <h2>Work</h2>
        </div>        
            {isNotDone.map((item)=>{
                const {id} = item
                return <div key={id}><ToDo item={item} /></div>
            })}
        <div>
            <h2>Done</h2>
        </div>
        {isDoneList.map((item)=>{
            const {id} = item
                return <div key={id}><ToDo item={item} /></div>
            })}
    </div>   
    );
};

export default List;