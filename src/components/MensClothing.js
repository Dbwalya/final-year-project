import React from 'react'
import Product from './Product';
const MensClothing = () => {
    return (
        <div>
            <div className="home-row">
                    <Product title='Outfits comfy' price={30.40} image="https://i.pinimg.com/564x/8e/b1/dd/8eb1dd88aab8f6e0b6c931ac55f6a6d7.jpg" rating={5}/>
                    <Product title=' Polyvore featuring mens fashion, mens clothing' price={31.47} image="https://i.pinimg.com/236x/ce/23/21/ce23218f3938af15586126140f50ee78.jpg" rating={5}/>
                    <Product id={1}title='Designer slim Fit Shirts - Blue / 4XL / United States' price={29.99} image="https://i.pinimg.com/564x/a8/c5/b4/a8c5b41963fb2401703debc53cebf4b0.jpg" rating={7} />
                    <Product title='Floral Embroidered Slim Fit Shirt' price={32.50} image='https://i.pinimg.com/236x/f7/5a/fc/f75afc3bf80afe6a7198a687cd535be9.jpg' rating={6}/>
                </div>
                <h2>Computer Accessories</h2>
                <div className="home-row">
                    <Product title="Salvatore Piccolo Men Slim Fit Cotton Poplin Shirt" price={34.77} image="https://i.pinimg.com/564x/d1/69/75/d16975fc057dc1a226a990a6420c2035.jpg" rating={6}/>
                    <Product title='Smartcare™ Traditional Fit Herringbone Dress Shirt | Nordstrom' price={31.47} image="https://i.pinimg.com/236x/65/fe/71/65fe71f65fc0effc5be691610753e753.jpg" rating={5}/>
                    <Product title='Roll Neck Varsity Stripe Long Sleeve T-Shirt' price={35.45} image="https://i.pinimg.com/564x/7f/0a/07/7f0a07591ca3d87cd7f46ead214fceb0.jpg" rating={7}/>
                    <Product title='Sport Academy Warm Up 2-teiliger Trainingsanzug für Herren, Jacke und' price={35.45} image="https://i.pinimg.com/564x/45/f4/3a/45f43ac73338a6058be1b541073b4310.jpg" rating={7}/>
                </div>
        </div>
    )
}

export default MensClothing
