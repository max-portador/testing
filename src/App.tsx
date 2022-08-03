import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Users from "./users/Users";
import UserDetailsPage from "./pages/UserDetailsPage";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

// function App() {
//   const [toggle, setToggle] = useState<boolean>(false);
//   const [value, setValue] = useState<string>('')
//
//   const handleClick = () => {
//     setToggle(prev => !prev)
//   }
//
//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.currentTarget.value)
//   }
//
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//         <button data-testid='toggle-btn' onClick={handleClick} >Click me</button>
//         <input type={'text'} placeholder={'Input value is ...'} value={value} onChange={handleInput}  />
//       {toggle && <div data-testid='toggle-elem'>toggle</div>}
//       <h1 data-testid='value-elem'>{value}</h1>
//     </div>
//
//   );
// }

function App() {

    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}


export default App;
