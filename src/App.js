import React, { Component } from 'react';
import ListeProds from './components/ListeProds';
import PanierBlock from './components/PanierBlock';
//import SliderImg from './components/SliderImg'
import './App.css';

class App extends Component {
  state = {
    totalPanierGlobal: 0,
    Panier: [],
  };

  getTotalPanier = (tpanier, Panier) => {
    this.setState({totalPanierGlobal: tpanier, Panier: Panier });

  }
  render() {
    const totalPanierGlobal = this.state.totalPanierGlobal
    console.log(totalPanierGlobal);
    const Panier = this.state.Panier;
    //console.log(Panier);
    return (
      
      <div className="App">
        
        <div className="container-fluid contMenu">
        <a href="#" className="logo"></a>
        <div className="menuHaut">
          <div className="panier">{totalPanierGlobal} Produits</div><a href="#">HOMME</a><a href="#">FEMME</a><a href="#">ENFANT</a>
        </div>
        </div>
        
        
        <div className="ppanier" id="pan"></div>
        <PanierBlock Panier={this.state.Panier}/>
        <ListeProds GettotalPanierGlobal={this.getTotalPanier}/>
        <div className="container-fluid contfooter">
          <div className="container">
            <a href="#" className="logo"></a>
            <div className="copyright">Copyright 2020  </div>

          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
