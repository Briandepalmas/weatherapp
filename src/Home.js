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
                    <h1>Welcome to Brooklyn
                    {/* {this.state.day} */}
                    </h1>
                    <nav>
                        <Router>
                            <div className="days">
                                <Link id="sun" to="/sunday">Sunday</Link>
                                <Link id="mon"  to="/monday">Monday</Link>
                                <Link id="tue" to="/tuesday">Tuesday</Link>
                            </div> 
                        </Router>
                      </nav>
                  
                </div>
              </React.Fragment>
            )
        }
    }
     

export default Home
