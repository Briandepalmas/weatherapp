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
    let fiveDays =  "api.openweathermap.org/data/2.5/forecast?id=524901&appid=e9984ab7f3bed98ab978f1bfc5c63170"
const forecast=axios.get(fiveDays)
   forecast.then(res => {
     const weather= res.data;
     console.log("recipes ---->", weather)
    
     this.setState({data: weather})
 
   })
   .catch(error => {
     console.log('there is an error', error)
   })
 
 }

    render() {
        return (
            <div>
              "id":3492908
                <h1>Welcome to Santo Domingo</h1>
                <ul>
                  <li>{this.state.data} </li>
                </ul>
            </div>
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