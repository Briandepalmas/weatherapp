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
     let weather= response.data.list[1].main.temp;
     console.log("recipes ---->", weather)
    
     this.setState({data: weather})
 
   })
   .catch(error => {
     console.log('there is an error', error.response)
   })
 
 }

    render() {
        return (
          <React.Fragment >
            <div>
                <h1>Welcome to Santo Domingo</h1>
                <ul>
                  {this.state.data} 
                </ul>
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