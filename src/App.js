import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Brooklyn from './Brooklyn'
import SantoDomingo from './SantoDomingo'

 
function App() {
 return (
   <Router>
     <div className="App">
       <nav>
         <ul>
           <li>
             <Link to="/brooklyn">Home</Link>
           </li>
           <li>
             <Link to="/santodomingo">Category</Link>
           </li>
         </ul>
       </nav>
 
       <Switch>
         <Route exact path="/brooklyn" component={Brooklyn} />
         <Route exact path="/santodomingo" component={SantoDomingo} />
         
       </Switch>
     </div>
   </Router>
 
 );
}
 
export default App;
