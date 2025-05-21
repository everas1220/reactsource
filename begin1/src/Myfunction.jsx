import React from "react";

const MyFunction = () => {
    const name = "홍길동";
    // 함수 작성시 작성해야할 코드가한줄이라면 {}, return 생략 가능
    const greeting = (name) => `Hello, ${name}`;
    const formatDate = (date) => {
        return new Date(date).teLocalDateString();
    };

    return (
        <div>
            <p>{greeting("Alice")}</p>
            <p>{formatDate(new Date())}</p>
            <p>
                {(() => {
                    const hours = new Date().getHours();
                    return hours < 12 ? "moning" : "afternoon";
                })()}
            </p>
        </div>
    );
};

export default MyFunction;