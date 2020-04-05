import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import React from 'react'
import './App.css';
import Brooklyn from './Brooklyn'
import SantoDomingo from './SantoDomingo'
import Home from './Home'



 
function App() {
 return (
   <Router>
     <div className="App">
       <nav>
         <div className="city">
           <Link id="hq" to="/">Home</Link>
           <Link id="bk"  to="/brooklyn">Brooklyn</Link>
           <Link id="sdq" to="/santodomingo">Santo Domingo</Link>
         </div>
         </nav>
       
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/brooklyn" component={Brooklyn} />
         <Route exact path="/santodomingo" component={SantoDomingo} />
         
       </Switch>
     </div>
   </Router>
 
 );
}
 
export default App;
