import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Category from './components/Category'
import Products from './components/Products.js';
import Login from './components/Login.js';
 
function App() {
 return (
   <Router>
     <div className="App">
       <nav>
         <ul>
           <li>
             <Link to="/Home">Home</Link>
           </li>
           <li>
             <Link to="/Category">Category</Link>
           </li>
           <li>
             <Link to="/Product">Products</Link>
           </li>
           <li>
             <Link to="/Login">Login</Link>
           </li>
         </ul>
       </nav>
 
       <Switch>
         <Route exact path="/Home" component={Home} />
         <Route exact path="/Category" component={Category} />
         <Route exact path="/Product" component={Products} />
         <Route exact path="/Login" component={Login} />
       </Switch>
     </div>
   </Router>
 
 );
}
 
export default App;
