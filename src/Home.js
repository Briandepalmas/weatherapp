import React, { Component } from 'react'
import { Link , BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'
//import Brooklyn from './Brooklyn'



export class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
            data: []
            
        }
        
      }
    componentDidMount(){
       
      function kelvinToF(high,low){
        let a=(high-273.15) * (9/5) +32
        let b=(low-273.15) * (9/5) +32
        let maxF= a.toFixed(0)
        let minF= b.toFixed(0)
        return[maxF,minF]
      }
        let key=process.env.REACT_APP_WEATHER_API_KEY
        const forecast=axios.get("https://api.openweathermap.org/data/2.5/forecast?id=5110302&appid="+key)
           forecast.then(response => {
             
            
            let high= response.data.list[1].main.temp_max;
            let low= response.data.list[1].main.temp_min;
            let tempF=kelvinToF(high,low)

            this.setState({data: [tempF[0],tempF[1]]})
            console.log(this.state.data)
         
           })
           .catch(error => {
             console.log('there is an error', error.response)
           })
         
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
                                  <h1>Max Temp: {this.state.data[0]}°F</h1>
                                  <h1>Min Temp: {this.state.data[1]}°F</h1>
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
