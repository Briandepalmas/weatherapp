import React, { Component } from 'react'
import { Link , BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'
//import Brooklyn from './Brooklyn'



export class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {      
                 data:[],
                 day:[],
                 temp:[]           
        }     
        
      }
    componentDidMount(){
      
      function kelvinToF(high){
        let a=(high-273.15) * (9/5) +32
        let maxF= a.toFixed(0)
        return[maxF]
      }
      
      
      let key=process.env.REACT_APP_WEATHER_API_KEY
   
      const forecast=axios.get("https://api.openweathermap.org/data/2.5/forecast?id=5110302&appid="+key)
         forecast.then(response => {
           
           let day=[];
           let dailyMax;
           let tempF=[];
           
           for (let i=0;i<5;i++){
            // 5 days displayed and added to day state
           day.push(response.data.list[(i*8)+2].dt_txt);
           this.setState({day:day})
           console.log("abcd "+this.state.day)
           
           
           //display daily max temp in Farenheit
           dailyMax=response.data.list[(i*8)+2].main.temp_max
           tempF.push(kelvinToF(dailyMax))
           this.setState({temp:tempF})
           console.log("xxxxx "+this.state.temp)
          }

          console.log("final------>"+this.state.temp)
          console.log("final------>"+this.state.day)
          console.log("final------>"+tempF)
        
        })
         .catch(error => {
           console.log('there is an error', error.response)
         })
    }
        
        render() {
          //let h=calendar()

          function calendar(x){
            let d=new Date()
            let r= d.getDay()
            let n=r+x
            console.log("-----"+n)
            if(n===0){
              let y= "Sunday"
              return y
            }
            else if(n===1){
              let y= "Monday"
              return y
            }
            else if(n===2){
              let y= "Tuesdddday"
              return y
            }
            else if(n===3){
              let y= "Wednesday"
              return y
            }
            else if(n===4){
              let y= "Thursday"
              return y
            }
            else if(n===5){
              let y= "Friday"
              return y
            }
            else if(n===6){
              let y= "Saturday"
              return y
            }
          
    console.log("-----"+n)
          
            
            
          }
         
            return (
              <React.Fragment >
                <div>
                    <h1>Welcome to Home Page
                    
                    </h1>
                    <nav>
                        <Router>
                            <div className="days">
                                
                                <div>
                                  <Link id="mon"  to="/">{ calendar(0)}</Link>
                                  <h5>Date: {this.state.day[0]}</h5>
                                  
                                  <h1>Max Temp: {this.state.temp[0]}°F</h1>
                                </div>
                                <div>
                                  <Link id="tue" to="/tuesday">{ calendar(1)}</Link>
                                  <h5>Date: {this.state.day[1]}</h5>
                                  <h1>Max Temp: {this.state.temp[1]}°F</h1>
                                </div>
                                <div>
                                  <Link id="tue" to="/tuesday">{ calendar(2)}</Link>
                                  <h5>Date: {this.state.day[2]}</h5>
                                  <h1>Max Temp: {this.state.temp[2]}°F</h1>
                                </div>
                                <div>
                                  <Link id="tue" to="/tuesday">{ calendar(3)}</Link>
                                  <h5>Date: {this.state.day[3]}</h5>
                                  <h1>Max Temp: {this.state.temp[3]}°F</h1>
                                </div>
                                <div>
                                  <Link id="tue" to="/tuesday">{ calendar(4)}</Link>
                                  <h5>Date: {this.state.day[4]}</h5>
                                  <h1>Max Temp: {this.state.temp[4]}°F</h1>
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
