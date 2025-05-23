import React, { useMemo, useState } from 'react';

// useMemo() : 특정 연산의 불필요한 재실행 방지

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState([]);

    const getAverage = (number) => {
        console.log("평균 계산 중.....");

        if (number.length == 0) return;

        // 일반적으로 가장 많이 사용하는 평균집계 코드 
        // let sum = 0;
        // list.forEach(element => {
        //     sum += element
        // });
        // 위의 코드를 아래 reduce 함수를 사용하여 단축시킬수있음   

        // const avg = sum / number.length;
        // return avg;

        // reduce(함수)
        const sum = number.reduce((a, b) => a + b);
        return sum / number.length;
    };

    const avg = useMemo(() => getAverage(list), [list])

    const handleClick = () => {
        // list에 추가 
        // list.push(number) (X)
        const nextList = list.concat(parseInt(number))
        // setList 등록
        setList(nextList)
        setNumber("")
        console.log(list);

    };

    return (
        <div>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={handleClick}>등록</button>
            <ul>
                <li>
                    {list.map((value, idx) => (
                        <li key={idx}>{value}</li>
                    ))}
                </li>
            </ul>
            <div>number : {number}</div>
            <div>평균 : {getAverage(list)}</div>
        </div>
    );
};

export default Average;