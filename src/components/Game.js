import React from 'react'
import Product from './Product';
const Game = () => {
    return (
        <div>
                <h2>Gaming Accessories</h2>
            <div className="home-row">
                    <Product title='Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB' price={30.40} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Oculus2.jpg" rating={5}/>
                    <Product title='2021 Microsoft Xbox series S White- Bundle Microsoft Xbox Controller Night Ops Camo and Woov HDMI Cable' price={31.47} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_XBOX2.png" rating={5}/>
                    <Product id={1}title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con' price={29.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Nintendo2.png" rating={7} />
                    <Product title='Playstation Classic Console with 20 Classic Playstation Games Pre-Installed Holiday Bundle, Includes Final Fantasy VII, Grand Theft Auto, Resident Evil Directors Cut and More' price={32.50} image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_Playstation3.jpg' rating={6}/>
                </div>
                <div className="home-row">
                    <Product title="Microsoft Xbox One S 1TB HDD Bundle with Two (2X)..." price={34.77} image="https://m.media-amazon.com/images/I/61bxKvTvi7L._AC_UY218_.jpg" rating={6}/>
                    <Product title='Vertical Stand for Xbox Series S with 2 Cooling Fan, 2 Charging Station for Xbox Series S Console with' price={31.47} image="https://m.media-amazon.com/images/I/51fBjlZFbDL._AC_UY218_.jpg" rating={5}/>
                    <Product title='SteelSeries Arctis 3 - All-Platform Gaming Headset - for PC, PlayStation 4, Xbox One, Nintendo Switch, VR' price={35.45} image="https://m.media-amazon.com/images/I/81HTX-uVLJL._AC_UY218_.jpg" rating={7}/>
                    <Product title='Razer Kraken Tournament Edition THX 7.1 Surround' price={35.45} image="https://m.media-amazon.com/images/I/61dwuOuWXmL._AC_UY218_.jpg" rating={7}/>
                </div>
        </div>
    )
}

export default Game
