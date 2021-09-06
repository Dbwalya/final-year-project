import React from 'react'
import Product from './Product';
const Shoes = () => {
    return (
        <div>
            <div className="home-row">
                    <Product title='Christian Louboutin Made in Denim Footwear Picks | Denim Jeans Fashion Week Runway Catwalks, Fashion Sh' price={30.40} image="https://i.pinimg.com/564x/97/15/28/971528872c5584acdb76349a366c1eb2.jpg" rating={5}/>
                    <Product title='The iconic Birch double monk strap has been transformed with this luxurious woven version.' price={31.47} image="https://i.pinimg.com/564x/3b/f4/ab/3bf4ab463c4b3849ad11a8624c0e2856.jpg" rating={5}/>
                    <Product title='THE SHOEMAKER WORLD' price={29.99} image="https://i.pinimg.com/564x/84/53/60/8453604f004beaa1fdfb30838c7e50a1.jpg" rating={7} />
                    <Product title='Summer mens fashion shoes' price={32.50} image='https://i.pinimg.com/564x/03/05/4b/03054b96c9427ce2201b99a380387c69.jpg' rating={6}/>
                </div>
                <h2>Computer Accessories</h2>
                <div className="home-row">
                    <Product title="Soulier homme - Chaussures homme / Chaussures : Chaussures et Sacs" price={34.77} image="https://i.pinimg.com/564x/f5/bf/48/f5bf485693e749d91148b6429684bb8d.jpg" rating={6}/>
                    <Product title='CHRISTIAN LOUBOUTIN' price={31.47} image="https://i.pinimg.com/564x/ab/90/42/ab9042c2681e773e89a7208bbc458b76.jpg" rating={5}/>
                    <Product title='Exclusively listed for our loyal customers' price={35.45} image="https://i.pinimg.com/564x/fa/76/66/fa7666a666bfdfa1357d6015f4510a09.jpg" rating={7}/>
                    <Product title='Cheap Mens Slip-ons and Loafers Online | Mens Slip-ons and Loafers for 2020' price={35.45} image="https://i.pinimg.com/564x/ba/d5/1e/bad51e34c9cdf6f3ee89e28d2322ae44.jpg" rating={7}/>
                </div>
        </div>
    )
}

export default Shoes
