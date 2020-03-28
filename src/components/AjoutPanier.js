import React from 'react'

export default function AjoutPanier({prods, ref}) {
    console.log(prods);
    console.log(ref);
    function addprodspanier(){
       console.log('Ajouter au panier')
    }
    return (
        <div>
            <button className="bttAjoutPanier" onClick={addprodspanier}>Ajouter au panier</button>
        </div>
    )
}
