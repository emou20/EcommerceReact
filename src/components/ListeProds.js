import React, { Component } from 'react';
import axios from 'axios';
import ColorDispo from './ColorDispo';;

const tabPanier = [];
export default class ListeProds extends Component {
    state = {
        Prods: [],
        loading: true,

      };
      
      getPosts() {
        axios
          // This is where the data is hosted
          .get("https://api.myjson.com/bins/itesk")
          // Once we get a response and store data, let's change the loading state
          .then(response => {
            this.setState({
                Prods: response.data,
                loading: false,
            });
          })
         
      }
      // Let's our app know we're ready to render the data
      componentDidMount() {
        this.getPosts();
      }
      
      addprodspanier= prod=> ev => {      
        const TPanier = tabPanier.push(prod);
        
        this.props.getTotalPanier(TPanier, tabPanier);
      };
      

    render() {
        const Prods = this.state.Prods;
        const loading = this.state.loading;
        if (loading){
          return (
            <div className="contentLoading">
              <img src="shoe.gif" />
              <div className="textLoading">loading...</div>
          </div>
          )
        }else{
        return (
 
            <div className="containerListeProds container">
             <div className="titreBlockHome">Notre Collection 2020</div>
               { Prods.map(prod => {
                 
                  return (
                <div className="boxProd col-3" key={prod.ref}>
                    <a href="#" className="imgProd col"><img src={prod.photo} className="img-responsive" /></a>
                    <a href="#" className="nomProd col">{prod.nomProduit}</a>
                    <div className="priceProd col">{prod.prix} DT</div>
                    <div className="colorDispo">
                        <ColorDispo prods={prod} />
                    </div>
                    <button className="bttAjoutPanier" value={prod.ref} onClick={this.addprodspanier(prod)}>Ajouter au panier</button>

                   

                </div>
                 );
                
                })
            }
             
            </div>
        )
      }
    }
}
