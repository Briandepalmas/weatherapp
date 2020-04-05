import React, { Component } from 'react'
import axios from 'axios'

export class Brooklyn extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: []
    }
  }
componentDidMount(){
    //"id":5110302
   
const forecast=axios.get("https://api.openweathermap.org/data/2.5/forecast?id=5110302&appid=e9984ab7f3bed98ab978f1bfc5c63170")
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

//  function kelvinToF(){
//    let a=8;
//    this.setState(a)
//  }

    render() {
        return (
          <React.Fragment >
            <div>
                <h1>Welcome to Brooklyn
                Highest temperature is {this.state.data[0]}F
                  Lowest temperature is {this.state.data[1]}F 
                </h1>
                
            </div>
          </React.Fragment>
        )
    }
}
 
export default Brooklyn