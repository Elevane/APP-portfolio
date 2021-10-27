
import './App.css';
import React from 'react';
import Box from './Components/Box';

class App extends React.Component{
  constructor(props){
      super(props);
    
  }

  render(){
    return(
      <div className="app">
         <Box />
        <div className="app_list">
          <Box />
          <Box />
          <Box />
        </div>
        
      </div>
    )
  }
}

export default App;
