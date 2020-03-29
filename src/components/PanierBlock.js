import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class PanierBlock extends Component {
  constructor(props){
    super(props)
    this.state = {
        ListeprodG: [],
        ListProsExist:[],
        opened:true,

      };
  }
  componentWillReceiveProps(nextProps){
    const {Panier}=nextProps;
    this.state.ListProsExist=[]
      Panier.map(prod =>{
         (this.state.ListProsExist.push(prod))
      });
      
      this.setState({
        opened: this.props.isOpened,
      });
  }


  closePan= () => {
    this.setState({
			opened: false,
    });
  }
 
  render() {
    let classOpen = 'panierFloat';
    const isOpened = this.props.isOpened;
    const opened  = this.state.opened;
    console.log(isOpened);
    console.log(opened);
    if (isOpened){
			classOpen = 'panierFloat animOpen';
    }
    
    if(!opened){
			classOpen = 'panierFloat animClose';
    }
    

      return (
          <div className={classOpen} id="panierFloat">
            <Button close onClick={this.closePan} />
            <div className="titrepanier">Votre panier : </div>
            {
              this.state.ListProsExist.map((prod)=>(
                <div>
                  <div className="lignePanier">
                  <div className="contite">1</div>
                  <div className="photoProd"><img src={prod.photo} /></div>
                  <div className="nomProd">{prod.nomProduit}</div>
                  <div className="prixProd">{prod.prix} DT</div>
                  </div>
                </div>
              ))
            }
          </div>
      )
  }
}

