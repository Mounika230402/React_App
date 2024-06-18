// import logo from './logo.svg';
import './App.css';

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


// import { ButtonComponent } from "./components/button/button";
// import { Heading1,Heading2,Heading3,Heading4,Heading5,Heading6 } from './components/heading/headings';
// import { TableComponent } from './components/table/table';
import {ListItems} from './components/task/Jun13'
import { Image } from './components/image/image';
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
      


          <Image/>
          
            <ListItems />
    

    </div>
  )
}
export default App;
