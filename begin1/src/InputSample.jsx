import React, { useState } from 'react';

const InputSample = () => {

    const [text, setText] = useState("");

    const hanbleChange = (e) => {
        // alert(e.target.value)
        setText(e.target.value)

    };

    const hanbleReset = () => setText("");

    return (
        <div>
            <input type="text" onChange={hanbleChange} />
            <button onClick={hanbleReset}>초기화</button>
            <div>
                <b>값 : {text}</b>
            </div>
        </div>
    );
};

export default InputSample;