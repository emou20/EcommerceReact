import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class PanierBlock extends Component {
  constructor(props){
    super(props)
    this.state = {
        ListeprodG: [],
        ListProsExist:[],
        opened:true,
        quantiteProdPanier:0,

      };
  }
  componentWillReceiveProps(nextProps, openedProps){
    const {Panier}=nextProps;
    this.state.ListProsExist=[]
      Panier.map(prod =>{
         (this.state.ListProsExist.push(prod))
      });
      
      const issopened = openedProps
      this.setState({
        opened: issopened,
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

    if (isOpened){
			classOpen = 'panierFloat animOpen';
    }
    
    if(!opened){
			classOpen = 'panierFloat animClose';
    }
    
    let idclass = "idclass";
    let totalePanier = 0;
    let quantite = 1;
      return (
          <div className={classOpen} id="panierFloat">
            <Button close onClick={this.closePan} />
            <div className="titrepanier">Votre panier : </div>
            {
              this.state.ListProsExist.map((prod, index)=>(
                totalePanier = totalePanier + prod.prix,
                idclass = idclass+index,

                <div key={index}>
                  <div className="lignePanier" id={idclass}>
                    <div className="contite">{quantite}</div>
                    <div className="photoProd"><img src={prod.photo} /></div>
                    <div className="nomProd">{prod.nomProduit}</div>
                    <div className="prixProd">{prod.prix} DT</div>
                  </div>
                </div>
              ))
              
            }
            <div className="totalepanier">Totale : {totalePanier} DT</div>
            <div className="containerButton">
              <Button outline color="secondary">Passer à la caisse</Button>
            </div>
          </div>
      )
  }
}

