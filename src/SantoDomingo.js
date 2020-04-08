import React, { Component } from 'react'
import axios from 'axios'

export class SantoDomingo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      temp:[],
      day:[]
    }
  }
componentDidMount(){
    //"id":3492908

    function kelvinToF(high){
      let a=(high-273.15) * (9/5) +32
      
      let maxF= a.toFixed(0)
      
      return[maxF]
    }


    let key=process.env.REACT_APP_WEATHER_API_KEY
   
const forecast=axios.get("https://api.openweathermap.org/data/2.5/forecast?id=3492908&appid="+key)
   forecast.then(response => {
     
     let day;
     let dailyMax;
     let tempF;

     for (let i=0;i<5;i++){
       // 5 days displayed and added to day state
      day= response.data.list[(i*8)+2].dt_txt;
      this.setState({day:[day]})
      console.log("abcd "+this.state.day)
      
      
      //display daily max temp in Farenheit
      dailyMax=response.data.list[(i*8)+2].main.temp_max
      tempF=kelvinToF(dailyMax)
      this.setState({temp:tempF})
      console.log("xxxxx "+this.state.temp)
    
    }
 
   })
   .catch(error => {
     console.log('there is an error', error.response)
   })
 
 }

 

    render() {
        return (
          <React.Fragment >
            <div>
                <h1>Welcome to Santo Domingo
                  Highest temperature is {this.state.temp[0]}°F
                </h1>
                
            </div>
          </React.Fragment>
        )
    }
}

export default SantoDomingo



// import React from 'react'
 
// function SantoDomingo() {
//    return (
//        <React.Fragment >
//        <h1>Welcome to Santo Domingo</h1>
 
      
//        </React.Fragment>
 
//    )
 
// }
 
// export default SantoDomingo