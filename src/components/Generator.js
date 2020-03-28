import React, {Component} from 'react';
import axios from 'axios';

class Generator extends Component {
  state = { 
    nouns: [],
    item: '',
    adjective: '',
    show: false,
    fontList:['Nunito', 'PlayfairDisplay',  'Roboto', 'CabinSketch', 'Montserrat', 'CrimsonText' ],
    font: '',
    andList: [ '+', '&'],
    and: ''
   }

  getWords = async() => {
    try {
      this.setState({ show:false })
      let response = await axios.get('/api/getWords')
      const { nouns, adjective, item } = response.data;
      const fontindex = await Math.floor(Math.random() * this.state.fontList.length)
      const andindex = await Math.floor(Math.random() * this.state.andList.length)
      this.setState({
        nouns: [...nouns],
        item: item[0],
        adjective: adjective[0],
        show: true, 
        font: this.state.fontList[fontindex],
        and: this.state.andList[andindex]
      })
    } catch (err){
      console.log(err)
    }
  }


  render() { 
    const { nouns, adjective, item, and, show, font } = this.state
    console.log(font)
    return ( 
      <div>
        <button
          onClick={this.getWords}
        >
          generate
        </button>
        {show && (
          <section className="shopname show">
            <h1 id={`${font}`}>{nouns[0]} {and} {nouns[1]}</h1>
            <p>{adjective} {item}</p>
          </section>
        )}
      </div>
     );
  }
}
 
export default Generator;