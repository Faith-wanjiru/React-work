// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// export function Introduction  (){
//      return(
//       <h1>We are Adalab</h1>
//      )
// }
// import About from "./About"







import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import LoginLink from "./Login/LoginLink";


const App = () =>{
return(
    <div>
      <LoginLink/>

<Routes>

  <Route path='/login' element={<Login/>}/>
  {/* <Login/> */}
  {/* <Route> */}
  <Route path='/users' element={<Users/>}/>
  {/* <users/> */}
  {/* <Route/> */}
</Routes>

{/* {<Login/>}
      <Users/> */}
</div>
)
}

export default App;
