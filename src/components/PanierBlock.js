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



  componentWillReceiveProps(nextProps, openedProps){
    const {Panier}=nextProps;
    this.state.ListProsExist=[]
    const tabTemp = []
     Panier.map(prod =>{
     // ajout dans le panier
      (tabTemp.push(prod))
      this.setState({
        ListProsExist: tabTemp
      })   
    });            
      const issopened = openedProps
      this.setState({
        opened: issopened,
      });   
  }

//fermeture layout panier
  closePan= () => {
    this.setState({
			opened: false,
    });
  }
  
//suppression panier
  deletProd = Prod=>  ev => {
      this.state.ListProsExist.forEach((emp, index)=>{
        if(emp.refProd===Prod.refProd){
          this.state.ListProsExist.splice(index, 1);
          this.setState({
            ListProsExist:this.state.ListProsExist
          })
        } 

        this.props.sendpanierDelet(this.state.ListProsExist);
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

   

      return (
          <div className={classOpen} id="panierFloat">
            <Button close onClick={this.closePan} />
            <div className="titrepanier">Votre panier : </div>
            {
              this.state.ListProsExist.map((prod, index)=>(
                totalePanier = totalePanier + (prod.prix * prod.quantite) ,
                idclass = idclass+index,
               

                <div key={index}>
                  <div className="lignePanier" id={idclass}>
                    <div className="contite">{prod.quantite}</div>
                    <div className="photoProd"><img src={prod.photo} /></div>
                    <div className="nomProd">{prod.nomProduit}</div>
                    <div className="prixProd">{prod.prix} DT</div>
                    <div className="deletProd">
                      <Button close aria-label="Cancel" onClick={this.deletProd(prod)}>
                        <span aria-hidden>&ndash;</span>
                      </Button>
                    </div>
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

