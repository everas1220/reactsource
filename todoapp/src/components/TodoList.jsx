import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoList;