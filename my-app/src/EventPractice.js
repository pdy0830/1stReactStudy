import React, {useState} from 'react';

const EventPractice = () => {
    //const [username, setUsername] = useState('ㅋㅋ');
    //const [message, setMessage] = useState('ㅎㅎ');
    //const onChangeUsername = e => setUsername(e.target.value);
    //const onChangeMessage = e => setMessage(e.target.value);
    
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form, //기존form 복사
            [e.target.name]: e.target.value //원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    }
    
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '셋유저네임',
            message: '셋메시지'
        });


    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onclick();
        }
    };
    return (
        <div>
            <h1>이벤트연습</h1>

            <input type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input type="text"
                name="message"
                placeholder="아무거나"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />

            <button onClick={onClick}> setState확인 </button>
        </div>
    )
}

export default EventPractice;