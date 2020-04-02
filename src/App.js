import React, { Component } from 'react';
import ListeProds from './components/ListeProds';
import PanierBlock from './components/PanierBlock';
//import SliderImg from './components/SliderImg'
import './App.css';

class App extends Component {
  state = {
    totalPanierGlobal: 0,
    Panier: [],
    siouvert:false,
  };




  getTotalPanier = (tpanier, Panier) => {
    this.setState({totalPanierGlobal: tpanier, Panier: Panier });

  }


  sendpanierDelet = panierAfterDelet => {
    console.log("panierAfterDelet",panierAfterDelet)
    const ancienTotalPanier = this.state.totalPanierGlobal;
    const nvTotalPanier = ancienTotalPanier - 1;
    this.setState({Panier: panierAfterDelet,totalPanierGlobal: nvTotalPanier });
    
    

  }

  openPanier= () => {
    
      this.setState({
        siouvert: true,
      });
        
  }
  render() {
    console.log("Panier apres",this.state.Panier)
    const totalPanierGlobal = this.state.totalPanierGlobal
    return (
      
      <div className="App">
        
        <div className="container-fluid contMenu">
        <a href="#" className="logo"></a>
        <div className="menuHaut">
          <div className="panier" onClick={this.openPanier}>{totalPanierGlobal} Produits</div><a href="#">HOMME</a><a href="#">FEMME</a><a href="#">ENFANT</a>
        </div>
        </div>
        
        
        <div className="ppanier" id="pan"></div>
        <PanierBlock Panier={this.state.Panier} isOpened={this.state.siouvert} sendpanierDelet={this.sendpanierDelet}/>
        <ListeProds getTotalPanier={this.getTotalPanier}  sendpanierDeletListe={this.state.Panier}/>
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
