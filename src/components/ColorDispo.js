import React from 'react'

export default function ColorDispo({prods}) {
    const colors = [prods.colors]

    return (
        <div>
           
             { colors.map((color, index) => {
            return (
            <div className="contColor">
                <div className={color.color1}></div>
                <div className={color.color2}></div>
                <div className={color.color3}></div>
            </div>

            );
                })
            } 
    
        </div>
    )
}
