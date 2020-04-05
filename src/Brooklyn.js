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
     let weather= response.data.list[1].main.temp;
     console.log("recipes ---->", weather)
    
     this.setState({data: weather})
 
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
                  the temperature is {this.state.data}F 
                </h1>
                
            </div>
          </React.Fragment>
        )
    }
}
 
export default Brooklyn