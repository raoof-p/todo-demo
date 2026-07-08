import { Children, createContext, useState } from "react";

const TodoContext = createContext();

import React from "react";

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        {children}
      </TodoContext.Provider>
    </div>
  );
};

export { TodoContext, TodoProvider };
