import React, {useState} from 'react';
//import MyComponent from './MyComponent';
//import Counter from './Counter2';
//import Say from './Say';
//import EventPractice from './EventPractice';
//import ValidationSample from './ValidationSample';
//import ScrollBox from './ScrollBox';
//import IterationSample from './IterationSample';
//import LifeCycleSample from './LifeCycleSample';
//import Info from './Info';
import Average from './Average';

const App = () => {
 //return <MyComponent name="REACT" favoriteNumber={7}>리액트</MyComponent>
 //return <Counter />
 //return <Say />
 //return <ValidationSample />
 //return <Info />

 return <Average />

// const [visible, setVisible] = useState(false);
// return(
//     <div>
//         <button onClick={() => {setVisible(!visible);}}>
//             {visible ? '숨기기' : '보이기'}
//         </button>
//         <hr />{visible && <Info />}
//     </div>
// );
};

// function getRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//     state = {
//         color: '#000000'
//     }
    
//     handleClick = () => {
//         this.setState({
//             color: getRandomColor()
//         });
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.handleClick}>랜덤 색상</button>
//                 <LifeCycleSample color={this.state.color}/>
//             </div>
//         );
//     }
// }

export default App;