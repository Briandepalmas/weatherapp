import React, { Component } from 'react'
import { Route,Link , BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios'
import Monday from './components/Monday'




export class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {      
                 data:[],
                 day:[],
                 temp:[], 
                 weather:[]         
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
           let cond=[];
           
           for (let i=0;i<5;i++){
            // 5 days displayed and added to day state
           day.push(response.data.list[(i*8)].dt_txt);
           this.setState({day:day})
           console.log("abcd "+this.state.day)
           
           
           //display daily max temp in Farenheit
           dailyMax=response.data.list[(i*8)].main.temp_max
           tempF.push(kelvinToF(dailyMax))
           this.setState({temp:tempF})
           console.log("xxxxx "+this.state.temp)


           cond.push(response.data.list[(i*8)].weather[0].main);
           this.setState({weather:cond})

          }

          console.log("final------>"+this.state.temp)
          console.log("final------>"+this.state.day)
          console.log("final------>"+tempF)
          console.log("zzzzzzz"+this.state.weather)
        
        })
         .catch(error => {
           console.log('there is an error', error.response)
         })
    }
        
        render() {
          
          
           
          function calendar(x){
            let d=new Date()
            let r= d.getDay()
            let n=r+x
            //console.log("-----"+n)
            if(n===0){
              let y= "Sunday"
              return y
            }
            else if(n===1){
              let y= "Monday"
              return y
            }
            else if(n===2){
              let y= "Tuesday"
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
          
          // function conditions(){


          // }
          // Rain
          // Clouds 
          // Clear
            
            
          }
         
            return (
              <Router>
                
                <div>
                    <h1>Welcome to Home Page</h1>  
                    <nav>
                        
                    <div className="days">
                                
                                <div>
                                  
                                  <Link id="sun"  to={ calendar(0)}>{ calendar(0)}</Link>
                                  
                                  {/* <Monday message={this.state.weather[0]}/> */}
                                  <h5>Date: {this.state.day[0]}</h5>
                                  <h1>Max Temp: {this.state.temp[0]}°F</h1>
                                </div>
                               
                                <div>
                                  <Link id="mon" to={ calendar(1)}>{ calendar(1)}</Link>
                                  {/* <Monday message={this.state.weather[1]}/> */}
                                  <h5>Date: {this.state.day[1]}</h5>
                                  <h1>Max Temp: {this.state.temp[1]}°F</h1>
                                </div>
                               
                                <div>
                                  <Link id="tue" to={ calendar(2)}>{ calendar(2)}</Link>
                                  {/* <Monday message={this.state.weather[2]}/> */}
                                  <h5>Date: {this.state.day[2]}</h5>
                                  <h1>Max Temp: {this.state.temp[2]}°F</h1>
                                </div>
                              
                                <div>
                                  <Link id="wed" to={ calendar(3)}>{ calendar(3)}</Link>
                                  {/* <Monday message={this.state.weather[3]}/> */}
                                  <h5>Date: {this.state.day[3]}</h5>
                                  <h1>Max Temp: {this.state.temp[3]}°F</h1>
                                </div>
                                
                                <div>
                                  <Link id="thu" to={ calendar(4)}>{ calendar(4)}</Link>
                                  {/* <Monday message={this.state.weather[4]}/> */}
                                  <h5>Date: {this.state.day[4]}</h5>
                                  <h1>Max Temp: {this.state.temp[4]}°F</h1>
                                </div>
                                
                                <div>
                                  <Link id="fri" to={ calendar(5)}>{ calendar(5)}</Link>
                                  {/* <Monday message={this.state.weather[0]}/> */}
                                  {/* <h5>Date: {this.state.day[0]}</h5>
                                  <h1>Max Temp: {this.state.temp[0]}°F</h1> */}
                                </div>
                                
                                <div>
                                  <Link id="sat" to={ calendar(6)}>{ calendar(6)}</Link>
                                  {/* <Monday message={this.state.weather[1]}/> */}
                                  {/* <h5>Date: {this.state.day[1]}</h5>
                                  <h1>Max Temp: {this.state.temp[1]}°F</h1> */}
                                </div>
                                
                            </div> 
                       
                      </nav>
                      <Route exact path="/monday" component={Monday} /> 
                     
                </div>
                
              </Router>
            )
        }
    }
     

export default Home
