import React, { Component } from 'react'
import axios from 'axios'



export class Brooklyn extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data:[],
      time:[],
      temp:[]
    }
  }
componentDidMount(){
    //"id":5110302

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
    // let tempF;
   
    // for (let i=0;i<8;i++){
    //    tempF=kelvinToF(high,low)
    //   this.setState({time: [response.data.list[i].dt_txt]})
    //   this.setState({temp: [response.data.list[i].tempF[0]]})
    //   console.log("list="+this.state.time)
    //   console.log("list="+this.state.temp)
    // //
    // }


    this.setState({data: [tempF[0],tempF[1]]})
 
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
                Highest temperature is {this.state.data[0]}°F
                  Lowest temperature is {this.state.data[1]}°F 
                  </h1>
                  <div>
                      <h1> Time and weather </h1>
                        <ul>
        {this.state.time.map((recipe, id) => <li key={id}> {this.state.temp}</li>)}
                         </ul>
                 </div>
                
                
            </div>
          </React.Fragment>
        )
    }
}
 
export default Brooklyn