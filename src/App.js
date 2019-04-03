import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    noun1: '',
    noun2: '',
    adjective: '',
    item: '',
    show: false
  }

  
  // saveLogo(el){
  //   const canvas = document.getElementById("canvas");
  //   const img = canvas.toDataURL("image/png");
  //   document.write('<img src="'+img+'"/>');
  

  // }



  getWords = async () => {
    this.setState({show:false})
    let nouns1 = await axios.get(`/noun/getrandom`)
    let nouns2 = await axios.get(`/noun/getrandom`)
    let adjectives = await axios.get(`/adjective/getrandom`)
    let items = await axios.get(`/item/getrandom`)
    this.setState({
      noun1: nouns1.data[0].noun ,
      noun2: nouns2.data[0].noun,
      adjective: adjectives.data[0].adjective,
      item: items.data[0].item,
      show: true
    })
  }


  render() {
    const { noun1, noun2, adjective, item, show} = this.state
    return (
      <div className="App">
        <div>
          <h4>Hipster Shop Name Generator</h4>
          <button onClick={() => this.getWords()} >generate shop name</button>

          {noun1 ? (
                    <div className={show ? 'shopname show' : 'shopname' }>
                    <h1> {noun1} + {noun2} </h1>
                    <p>  {adjective} {item}  </p>
                  </div>

          ):(
            null
          )}
        </div>

          <p id="author">created by samantha jeet</p>
      </div>
    );
  }
}

export default App;
