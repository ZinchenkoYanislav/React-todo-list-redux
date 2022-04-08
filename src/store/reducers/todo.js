import {
  ACTION_ADD_TODO,
  ACTION_DELETE_TODO,
  ACTION_UPDATE_TODO,
} from "../actions/todo";

const initialState = {
  todos: [
    {
      id: 1,
      title: "item 1",
      completed: false,
    },
    {
      id: 2,
      title: "item 2",
      completed: false,
    },
  ],
};

export default function rootReducer(state = initialState, { type, payload }) {
  console.log(state, type, payload);
  switch (type) {
    case ACTION_ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: new Date().getTime(), title: payload.title, completed: false },
        ],
      };
    case ACTION_DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload),
      };
    case ACTION_UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === payload ? { ...item, completed: !item.completed } : item
        ),
      };
    default:
      return state;
  }
}
