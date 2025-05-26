import React from 'react';

const TodoTemplate = ({ children }) => {
    return (
        <div className="flex flex-col">
            <div className="text-3xl bg-cyan-800 w-3/5 text-white text-center">일정관리</div>
            <div className="w-3/5 bg-white">{children}</div>
        </div>
    );
};

export default TodoTemplate;