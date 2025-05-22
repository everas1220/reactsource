import React, { useState } from 'react';

const InputMultipleSample = () => {

    // const [name, setName] = useState();
    // const [nickname, setNickName] = useState();

    const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
    });

    return (
        <div>
            <div>
                <input type="text" placeholder="이름" name="name" />
            </div>
            <div>
                <input type="text" placeholder="닉네임" name="nickname" />
            </div>

            <div>
                <button>초기화</button>
            </div>
            <div>
                <h4>입력값 :</h4>
            </div>
        </div>

    );
};

export default InputMultipleSample;