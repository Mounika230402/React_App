// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit.. <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>Hello World</h1>
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


import { ButtonComponent } from "./components/button/button";
import { Heading1,Heading2,Heading3,Heading4,Heading5,Heading6 } from './components/heading/headings';
import { TableComponent } from './components/table/table';
import TypesExample from './components/button/button_bootstrap';
// import BasicExample from './components/card/card';
import ShapeExample from './components/carousels/carousels'
// import BasicExample from './components/accordion/accordion';
import BasicExample from './components/card/card';
import CircleComponent from './components/class/circle/circle';
function App(){
  return (
    <div>
      {/* <ButtonComponent></ButtonComponent>
      <Heading1></Heading1>
      <Heading2></Heading2>
      <Heading3></Heading3>
      <Heading4></Heading4>
      <Heading5></Heading5>
      <Heading6></Heading6>
      <TableComponent></TableComponent> */}
      {/* <TypesExample/>
      <BasicExample/>
      <ShapeExample/> */}
      <BasicExample />
      <CircleComponent/>
    </div>
  )
}
export default App;
