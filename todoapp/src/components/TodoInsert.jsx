import React, { useCallback } from 'react';
import { IoMdAdd } from "react-icons/io";

const TodoInsert = () => {


    return (
        <form className="flex bg-black">
            <input type="text" placeholder="할 일 입력"
                className="grow p-2 text-gray-400
            placeholder:text-gray-400 focus:outline-" />
            <button type="submit"
                className="p-2 bg-gray-300
                 cursor-pointer hover:bg-gray-500">
                <IoMdAdd />
            </button>

        </form>
    );
};

export default TodoInsert;