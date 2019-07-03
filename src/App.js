import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Content from './components/content';
import './App.css';
import p1 from './assets/image/alaska.jpg';
import p2 from './assets/image/gdog.jpg';
import p3 from './assets/image/pull.jpg';
import p4 from './assets/image/shiba.jpg';
import p5 from './assets/image/vang.jpg';


const menu = {
  title: "KingDog",
  menu: ["Pull Dog", "Corgi Dog", "Alaska Dog", "Golden Dog"]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product:
        [
          {
            img: p1,
            name: "Golden Dog",
            description: "so cute and so sexy"
          },
          {
            img: p2,
            name: "Shiba Dog",
            description: "so cute and so sexy"
          },
          {
            img: p3,
            name: "Pull Dog",
            description: "so cute and so sexy"
          },
          {
            img: p4,
            name: "Baby Dog",
            description: "so cute and so sexy"
          },
          {
            img: p5,
            name: "Alaska Dog",
            description: "so cute and so sexy"
          }
        ]

    };


  }
  render() {
    return (
      <>
        <Header menu = { menu } />
        <Slider />
        <Content product = { this.state.product } key = { this.state.product } />
      </>
    )
  }

}

export default App;
