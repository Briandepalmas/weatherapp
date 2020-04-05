import React, { Component } from 'react'
import { Link , BrowserRouter as Router} from 'react-router-dom';
import axios from'axios'


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
