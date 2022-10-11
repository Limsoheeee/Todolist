const initialState = {
  todoList: [
    { id: 0, title: "isnotdone", content:"안녕" ,isDone:false, },
    { id: 0, title: "isdone", content:"하세요" ,isDone:true, }
],
};

//액션밸류
const ADD_CARD = "ADD_CARD";
const DEL_CARD = "DEL_CARD";
const CHANGE_CARD = "CHANGE_CARD";
// 엑션 creator
export const addCard = (payload) => {
  return {
    type: ADD_CARD,
    payload,
  };
};

export const delCard = (payload) => {
  return {
    type: DEL_CARD,
    payload,
  };
};

export const changeCard = (payload) => {
    return {
      type: CHANGE_CARD,
      payload,
    };
  };
// 리듀서
const todo = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_CARD":
      return { ...state, todoList: [...state.todoList, action.payload] };
    default:
      return state;
    case "DEL_CARD":
      const filterDelCard = state.todoList.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, todoList: filterDelCard };
      case "CHANGE_CARD":
        const changeCard = {...state,todoList: state.todoList.map((item) => 
            item.id === action.payload ? {...item,isDone: !item.isDone}:item
        )  
    };
    return changeCard;
    }
};

export default todo;
