import React, { Component } from 'react'
import axios from 'axios'

export class SantoDomingo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: []
    }
  }
componentDidMount(){
    //"id":3492908
   
const forecast=axios.get("https://api.openweathermap.org/data/2.5/forecast?id=3492908&appid=e9984ab7f3bed98ab978f1bfc5c63170")
   forecast.then(response => {
     let high= response.data.list[1].main.temp_max;
     let low= response.data.list[1].main.temp_min;
     
     console.log("temperature ---->", low)
    
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
                <h1>Welcome to Santo Domingo
                  Highest temperature is {this.state.data[0]}F
                  Lowest temperature is {this.state.data[1]}F
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