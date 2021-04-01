import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  const pages = [1, 2, 3, 4, 5];

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        );
      })}
      <div style={{ display: "flex" }}>
        {pages.map((pageNumber) => {
          return (
            <div
              onClick={() => setTodoPage(pageNumber)}
              key={pageNumber}
              style={{
                border:
                  pageNumber === page ? "2px solid green" : "1px solid gray",
                padding: "10px",
              }}
            >
              {pageNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
