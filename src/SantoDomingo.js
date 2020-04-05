import React, { Component } from 'react'
import axios from 'axios'

export class SantoDomingo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isLoaded: false,
      data: []
    }
  }
componentDidMount(){
    let one =  "http://anapioficeandfire.com/api/characters/583"
const a=axios.get(one)
   a.then(res => {
     const bc= res.data.culture;
     console.log("recipes ---->", bc)
    
     this.setState({data: bc})
 
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