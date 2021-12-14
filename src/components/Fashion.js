import React from 'react'
import Product from './Product';
const Fashion = () => {
    return (
        <div>
            <div className="home-row">
                    <Product title='The White Carmel is a beautiful timepiece that will have you feeling and looking great. WATCH MATERIAL Face' price={30.40} image="https://i.pinimg.com/564x/b9/78/af/b978af31fa18a18a76d59f5ed8433697.jpg" rating={5}/>
                    <Product title='JUNGHANS 027/4003.44 Max Bill stainless steel Chronoscope watch' price={31.47} image="https://i.pinimg.com/564x/a3/85/3d/a3853d788799a7811a35f5dc79b345be.jpg" rating={5}/>
                    <Product id={1}title="Slim Wrist Watch Minimalist Design  Brathwait" price={29.99} image="https://i.pinimg.com/564x/1b/e5/80/1be5801d8b6d9584b6fa211baa303537.jpg" rating={7} />
                    <Product title='Watches | OPUMO Europe Our collection of men’s designer watches ranges from premium Swiss watches to innovative sports watches' price={32.50} image='https://i.pinimg.com/564x/6c/80/9f/6c809fd5b13a5be72130f7f9c99366f2.jpg' rating={6}/>
                </div>
                
                <div className="home-row">
                    <Product title=" WatchTime New York, America's luxury watch show, kicks off tomorrow at Manhattan's Gotham" price={34.77} image="https://i.pinimg.com/564x/f0/bf/f1/f0bff1fd99298f6466c79b2d1cac2695.jpg" rating={6}/>
                    <Product title='Pierre DeRoche watches Pierre DeRoche watches in stock now. Daily new offers. Safe favorite watches buy your dream watch on Chrono24.com' price={31.47} image="https://i.pinimg.com/564x/3f/eb/78/3feb78c57c4e8107fe0d0476cd8ea7cd.jpg" rating={5}/>
                    <Product title='MSI GF75 Thin Gaming Laptop: 17.3" 144Hz Display, Intel Core i5-10300H' price={35.45} image="https://i.pinimg.com/564x/18/9e/02/189e0219ebb880e8e721e49cc0386a1a.jpg" rating={7}/>
                    <Product title='Lenovo Chromebook Flex 5 13" Laptop, FHD (1920 x 1080) Touch Display, ' price={35.45} image="https://i.pinimg.com/564x/03/13/5e/03135e1047027adda5d8f2e80d0c1b01.jpg" rating={7}/>
                </div>
        </div>
    )
}

export default Fashion;
