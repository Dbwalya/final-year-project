import React from 'react'
import Product from './Product';
const Laptop = () => {
    return (
        <div>
            <h2>TELEVISION SETS</h2>
            <div className="home-row">
                    <Product title='SAMSUNG 40-inch Class LED Smart FHD TV 1080P' price={30.40} image="https://m.media-amazon.com/images/I/71Ao8Im97TL._AC_UL320_.jpg" rating={5}/>
                    <Product title='LG 55UP8000PUA Alexa Built-in 55" 4K Smart UHD TV (2021)' price={31.47} image="https://m.media-amazon.com/images/I/A1zA6slZ2-L._AC_UL320_.jpg" rating={5}/>
                    <Product title='SAMSUNG 82-inch Class Crystal UHD TU-6950 Series' price={29.99} image="https://m.media-amazon.com/images/I/919Rd1f7fxL._AC_UL320_.jpg" rating={7} />
                    <Product title='TCL 65-inch 6-Series 4K UHD Dolby Vision HDR QLED' price={32.50} image='https://m.media-amazon.com/images/I/91CXxVtVkAL._AC_UL320_.jpg' rating={6}/>
                </div>
                <div className="home-row">
                    <Product title="SAMSUNG 85-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV" price={34.77} image="https://m.media-amazon.com/images/I/91FcuuZwcrL._AC_UL320_.jpg" rating={6}/>
                    <Product title='Hisense 40-Inch 40H5500F Class H55 Series Android Smart TV' price={31.47} image="https://m.media-amazon.com/images/I/61lJa-K8CqL._AC_UL320_.jpg" rating={5}/>
                    <Product title='Sony X90J 65 Inch TV: BRAVIA XR Full Array LED 4K Ultra HD' price={35.45} image="https://m.media-amazon.com/images/I/91KZbi-CbzL._AC_UL320_.jpg" rating={7}/>
                    <Product title='SAMSUNG 75-inch Class QLED Q80T Series - 4K UHD Direct' price={35.45} image="https://m.media-amazon.com/images/I/61UxxNFRsRL._AC_UL320_.jpg" rating={7}/>
                </div>
        </div>
    )
}

export default Laptop
