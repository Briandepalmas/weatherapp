import React, { Component } from 'react'
import axios from 'axios'

export class SantoDomingo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      temp:[]
    }
  }
componentDidMount(){
    //"id":3492908

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
     let high= response.data.list[0].main.temp_max;
     let low= response.data.list[0].main.temp_min;
     let day= response.data.list.dt_txt;
     let dailyMax;
     let dailyMin;
     for (let i=0;i<6;i++){
       day= response.data.list[(i*8)+2];
        dailyMax=day.main.temp_max
        dailyMin=day.main.temp_min
       console.log(day)
       console.log(dailyMax)
       console.log(dailyMin)
     }
     
     
     let tempF=kelvinToF(high,low)
     console.log("temperature ---->", day)
    
     this.setState({data: [tempF[0],tempF[1],day]})
 
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
                  Highest temperature is {this.state.data[0]}°F
                  Lowest temperature is {this.state.data[1]}°F
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