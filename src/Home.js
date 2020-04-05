import React, { Component } from 'react'
import {Route,Switch, Link , BrowserRouter as Router} from 'react-router-dom';
import axios from'axios'
import SantoDomingo from './SantoDomingo'
import Brooklyn from './Brooklyn'

export class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            day: "d",
          data: []
        }
        
      }
    componentDidMount(){
        
        let key=process.env.REACT_APP_WEATHER_API_KEY
       
    const forecast=axios.get("https://api.openweathermap.org/data/2.5/forecast?id=5110302&appid="+key)
       forecast.then(response => {
        let high= response.data.list[1].main.temp_max;
        let low= response.data.list[1].main.temp_min;
         console.log("recipes ---->", low)
        
         this.setState({data: [high,low]})
        
        
         //this.setState({data: [high,low]})
     
       })
       .catch(error => {
         console.log('there is an error', error.response)
       })
     
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
                            <div className="city">
                                <Link id="hq" to="/Home">Sunday</Link>
                                <Link id="bk"  to="/brooklyn">Monday</Link>
                                <Link id="sdq" to="/santodomingo">Tuesday</Link>
                            </div> 
                        </Router>
                      </nav>
                      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/brooklyn" component={Brooklyn} />
         <Route exact path="/santodomingo" component={SantoDomingo} />
         
       </Switch>
                </div>
              </React.Fragment>
            )
        }
    }
     

export default Home
