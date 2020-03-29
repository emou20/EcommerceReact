import React, { Component } from 'react';
import axios from 'axios';

export default class PanierBlock extends Component {
  constructor(props){
    super(props)
    this.state = {
        ListeprodG: [],
        ListProsExist:[]
      };
  }
  componentWillReceiveProps(nextProps){
    const {Panier}=nextProps;
    console.log('Panier',Panier)
    this.state.ListProsExist=[]
      Panier.map(prod =>{
         (this.state.ListProsExist.push(prod))
      });
      console.log('ListProsExist', this.state.ListProsExist);        
  }
  render() {
      return (
          <div>
            {
              this.state.ListProsExist.map((prod)=>(
                <div>
                  <h1>{prod.nomProduit}</h1>
                  <h1>#{prod.ref}</h1>
                </div>
              ))
            }
          </div>
      )
  }
}

