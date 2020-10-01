import React, { Component } from 'react';
import './App.css';

class Person extends Component {
    
  constructor() {
      super()
      this.state = {
          fullName: "Elias Ben Azouz",
          bio: "01/03/1993",
          imgSrc: "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-cat-names-nationalgeographic_1525054.jpg?w=1900&h=1267",
          profession: "marketing responsible",
          show: true,
          count: 0
      }
  }
  toggler() { this.state.show ? this.setState({show: false}) : this.setState({show: true})}
    
  componentDidMount() {
    setInterval(()=>{ 
      this.setState({
        count: this.state.count + 1 
      })
    }, 1000);
  }
  render() {
      return <React.Fragment>
                <div className="App">
                  {this.state.show === true &&
                  <div>                    
                  <h1>{this.state.fullName}</h1>              
                  <h2>Was born: {this.state.bio}</h2>
                  <img width="300px" alt="cat" src={this.state.imgSrc}></img>
                  <h2>He works as a {this.state.profession}.</h2>  
                  </div> }
                  <button onClick={()=> this.toggler()}>Click to hide/show</button>
                  <h2>The component mounted {this.state.count} seconds ago.</h2>
              </div> 
            </React.Fragment>
  }
}

export default Person;
