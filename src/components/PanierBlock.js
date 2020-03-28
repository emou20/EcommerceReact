import React, { Component } from 'react';
import axios from 'axios';

export default class PanierBlock extends Component {
    state = {
        ListeprodG: [],
      };
      getProdPanier() {
        axios
          // This is where the data is hosted
          .get("https://api.myjson.com/bins/itesk")
          // Once we get a response and store data, let's change the loading state
          .then(response => {
            this.setState({
                ListeprodG: response.data,
            });
          })
         
      }
      componentDidMount() {
        this.getProdPanier();
      }
    render() {
        
        const ProdPanierRef= this.props.Panier;
        const ListeprodG = this.state.ListeprodG;
        let nomprod ="";
        let refprodd ="";
        //console.log(ProdPanierRef);
        //console.log(ListeprodG);
        return (
            <div>
               
               { 
               
               
               ListeprodG.map((prod, index) => {
                 
                 
                  ProdPanierRef.forEach(refProd => { 

                        if (refProd===prod.ref){
                            
                            console.log(prod.ref);
                            console.log(prod.nomProduit);
                            return <div> aaaaa</div>
                            
                        }

                }); 

                    
                })
            }



            </div>
        )
    }
}

