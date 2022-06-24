
import React from 'react';
import './App.css';
import {Assignment1,Assignment2} from './Assignment/Assignment1';
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        
          <Assignment1 />
          <Assignment2/>
     
      </div>

    );
  }
}
App.listen(3000,function(req,res){
  console.log('Server started at 3000')
})

