import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";

const TodoListItem = ({ todo }) => {

    const { id, title, complated } = todo;

    return (
        <div className="p-4 flex items-center even:bg-gray-200">
            <div className="flex grow items-center" onClick={() => ontoggle()}>
                {complated ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className={`ml-2 flex-1 ${complated ? 'line-through text-gray-400' : ''}`}>{title} </div>
            </div>
            <div className="flex items-center text-2xl text-red-300 cursor-pointer hover:text-red-600">
                <MdRemoveCircleOutline onClick={() => onRemove(id)} />
            </div>
        </div>
    );
};

export default TodoListItem;