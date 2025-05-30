import React, { createContext, useState } from 'react';

const CountContext = createContext();

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    //공급할 데이터를 객체로 묶어서 value 라는속성에 넣어주기
    return <CountContext value={{ count, setCount }}>{children}</CountContext>
};

export { CountContext, CountProvider };