import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./components/nav";
import { Switch, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import BookOrder from "./components/bookorder";
import AddBookOrder  from "./components/addbookorder";
function App() {
  return (
    <div className="App">
      <Nav />
      
      <Switch>
      <Route path="/bookorder" component={BookOrder} />
      <Route path="/addbookorder" component={AddBookOrder} />
      </Switch>

    
    </div>
  );
}

export default App;
