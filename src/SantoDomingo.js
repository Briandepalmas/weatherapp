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
    let fiveDays =  "http://anapioficeandfire.com/api/characters/583"
const forecast=axios.get(fiveDays)
   forecast.then(res => {
     const weather= res.data.culture;
     console.log("recipes ---->", weather)
    
     this.setState({data: weather})
 
   })
   .catch(error => {
     console.log('there is an eror', error)
   })
 
 }

    render() {
        return (
            <div>
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