import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./components/nav";
import { Switch, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import BookOrder from "./components/bookorders";
import AddBookOrder  from "./components/addbookorder";
import UpdateBookOrder from "./components/updatebookorder";
import OrderDetail from "./components/orderdetails";
import AddOrderDetail  from "./components/addorderdetail";
import UpdateOrderDetail from "./components/updateorderdetail";


function App() {
  return (
    <div className="App">
      <Nav />
      
      <Switch>
      <Route path="/bookorders" component={BookOrder} />
      <Route path="/addbookorder" component={AddBookOrder} />
      <Route path="/update/:orderId" component={UpdateBookOrder} />
      <Route path="/orderdetails" component={OrderDetail} />
      <Route path="/addorderdetail" component={AddOrderDetail} />
      <Route path="/update/:quantity" component={UpdateOrderDetail} />



      </Switch>

    
    </div>
  );
}

export default App;
