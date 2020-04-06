import React, { Component } from 'react'
import { Link , BrowserRouter as Router} from 'react-router-dom';



export class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            day: "d",
          data: []
        }
        
      }
    componentDidMount(){
       
  
    
  
    }
        render() {
            return (
              <React.Fragment >
                <div>
                    <h1>Welcome to Home Page
                    
                    </h1>
                    <nav>
                        <Router>
                            <div className="days">
                                <div>
                                  <Link id="sun" to="/sunday">Sunday</Link>
                                  <h1>hoy</h1>
                                </div>
                                <div>
                                  <Link id="mon"  to="/monday">Monday</Link>
                                  <h1>maniana</h1>
                                </div>
                                <div>
                                  <Link id="tue" to="/tuesday">Tuesday</Link>
                                  <h1>pasado</h1>
                                </div>
                                
                            </div> 
                        </Router>
                      </nav>
                  
                </div>
              </React.Fragment>
            )
        }
    }
     

export default Home
