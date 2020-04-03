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

      

      //ajout produit dans le panier
      addprodspanier= prod=> ev => { 
        console.log("tabPanier avant ajout", tabPanier)
        let prodexist = false;
        let indexProdExiste = 0;
        if (tabPanier.length >= 0){
          for (let i=0; i<tabPanier.length; i++){
            if(tabPanier[i].refProd===prod.ref){
              prodexist = true;
              indexProdExiste = i;
            }else{
              prodexist = false;
            }
          }
        }

        if(prodexist){
          console.log("index avant", tabPanier[indexProdExiste].quantite)
          tabPanier[indexProdExiste].quantite = tabPanier[indexProdExiste].quantite + 1;
          const TTPanier = tabPanier.length
          const TPanier = TTPanier + 1;
          this.props.getTotalPanier(TPanier, tabPanier);
          console.log("index apres", tabPanier[indexProdExiste].quantite)
        }else{
          const TPanier = tabPanier.push({quantite:1,refProd:prod.ref, photo: prod.photo,nomProduit: prod.nomProduit,prix: prod.prix});
          this.props.getTotalPanier(TPanier, tabPanier);
        }

      };

      //mise a jour panier apres suppression
      componentWillReceiveProps(nextProps){
        tabPanier = nextProps.sendpanierDeletListe
      }
      
      

    render() {
      console.log("tabpanier apres ajout",tabPanier)
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
