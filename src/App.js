import HelloWorld from "./Labs/a6/hello-world.js";
import Labs from './Labs';
import Tuiter from './tuiter';
import Nav from './nav.js';
import {BrowserRouter} from 'react-router-dom';
import {Route,Routes} from 'react-router';
import {Link} from "react-router-dom";


function App() {
  return(
  <BrowserRouter>
      <div className="container">
      

      <Routes>
        <Route path = "/hello" element={<HelloWorld/>}/>
        <Route index element={<Labs/>}/>
        <Route path = "/tuiter/*" element={<Tuiter/>}/>
      </Routes>

      </div>
  </BrowserRouter>
  )
}

export default App;
