import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import React from 'react'
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
             <Link to="/brooklyn">Brooklyn</Link>
           </li>
           <li>
             <Link to="/santodomingo">Santo Domingo</Link>
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
