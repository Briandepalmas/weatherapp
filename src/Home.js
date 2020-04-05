import React, { Component } from 'react'
import axios from'axios'

export class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            day: "d",
          data: []
        }
        
      }
    componentDidMount(){
        
       let d=new Date()
       this.setState({day:d})
    const forecast=axios.get("https://api.openweathermap.org/data/2.5/forecast?id=5110302&appid=e9984ab7f3bed98ab978f1bfc5c63170")
       forecast.then(response => {
       
        
        
         //this.setState({data: [high,low]})
     
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
                    {/* {this.state.day} */}
                    </h1>
                    
                </div>
              </React.Fragment>
            )
        }
    }
     

export default Home
