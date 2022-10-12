const initialState = {
  todoList: [
    { id: 0, title: "isnotdone", content: "안녕", isDone: false },
    { id: 1, title: "isdone", content: "하세요", isDone: true },
  ],
  currentTodo:{},
};

//액션밸류
const ADD_CARD = "ADD_CARD";
const DEL_CARD = "DEL_CARD";
const CHANGE_CARD = "CHANGE_CARD";
const GETTODO_ID = "GETTODO_ID";
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

export const gettodoid = (payload) => {
  return {
    type: GETTODO_ID,
    payload,
  };
};

// 리듀서
const todo = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "DEL_CARD":
      const filterDelCard = state.todoList.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, todoList: filterDelCard };
    case "CHANGE_CARD":
      const changeCard = {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
      return changeCard;
      case "GETTODO_ID":
        return {
          ...state,
          currentTodo: state.todoList.find((item) =>
             item.id === action.payload          
          ),         
        };        
        default:
      return state;
  }
};

export default todo;
