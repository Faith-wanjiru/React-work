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










// import About from "./About"
import React from 'react';
import Login from "./Login";
import Users from "./Users";


// export function Introduction  (){
//      return(
//       <h1>We are Adalab</h1>
//      )
// }



const App = () =>{
return(
    <div>
      {<Login/>}
      <Users/>
    </div>
  )
}
export default App;
