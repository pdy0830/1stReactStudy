//import React, {useEffect, useState} from 'react';
import React, {useReducer} from 'react';

function reducer(state, action){
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
 //const [name, setName] = useState('');
 //const [nickname, setNickname] = useState('');

 const [state, onChange] = useInputs({
     name: '',
     nickname: ''
 });
 const {name, nickname} = state;
 /*const onChange = e => {
     dispatch(e.target);
 };*/

 /*
 useEffect(() => {
     console.log('useEffect');
     console.log(name);
     return () => {
         console.log('cleanup');
         console.log(name);
     };
 });

 const onChangeName = e => {
     setName(e.target.value);
 };

 const onChangeNickname = e => {
     setNickname(e.target.value);
 };*/

 return (
     <div>
         <div>
             <input name="name" value={name} onChange={onChange} />
             <input name="nickname" value={nickname} onChange={onChange} />
         </div>
         <div>
             <div>
                 <b>이름:</b> {name}
             </div>
             <div>
                 <b>닉넴:</b> {nickname}
             </div>
         </div>
     </div>
 )
}

export default Info;