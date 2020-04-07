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
      


      //display daily max temp
      dailyMax=response.data.list[(i*8)+2].main.temp_max
      //tempF
      console.log("xxxxx "+dailyMax)
      //this.setState({temp:[dailyMax]})
    
    }
    //  let high;= response.data.list[1].main.temp_max;
    //  let low;= response.data.list[1].main.temp_min;
    //  let day= response.data.list[1].dt_txt;
    //  let dailyMax;
    //  let dailyMin;
    //  let tempF;
    //  for (let i=0;i<6;i++){
    //    day= response.data.list[(i*8)+2];
        
    //     dailyMax=day.main.temp_max
    //     dailyMin=day.main.temp_min
    //    tempF= kelvinToF(dailyMax,dailyMin)
    //    this.setState({temp:[tempF[0],tempF[1]]})
    //    console.log(day)
    //    console.log(dailyMax)
    //    console.log(dailyMin)
    //  }
     
     
     
    //  console.log("temperature ---->", day)
    
    //  this.setState({temp: [tempF[0],tempF[1]]})
 
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
                  Lowest temperature is {this.state.temp[1]}°F
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