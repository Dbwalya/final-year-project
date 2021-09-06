import React from 'react'
import Product from './Product';
const Laptop = () => {
    return (
        <div>
            <div className="home-row">
                    <Product title='ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display' price={30.40} image="https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY218_.jpg" rating={5}/>
                    <Product title='2021 Newest Dell Inspiron 3000 Laptop, 15.6 HD LED-Backlit Display' price={31.47} image="https://m.media-amazon.com/images/I/71qodgwQQ7S._AC_UY218_.jpg" rating={5}/>
                    <Product title='HP 15 Laptop, 11th Gen Intel Core i5-1135G7 Processor, 8 GB RAM' price={29.99} image="https://m.media-amazon.com/images/I/81skV7BufjL._AC_UY218_.jpg" rating={7} />
                    <Product title='ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU, 8GB RAM' price={32.50} image='https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY218_.jpg' rating={6}/>
                </div>
                <h2>Computer Accessories</h2>
                <div className="home-row">
                    <Product title="Acer Swift 3 Thin and Light Laptop, 14 Full HD IPS, AMD Ryzen 7 4700U Octa-Core with Radeon Graphics" price={34.77} image="https://m.media-amazon.com/images/I/71W5ZdS+sEL._AC_SX355_.jpg" rating={6}/>
                    <Product title='Soundance Laptop Stand, Aluminum Computer Riser, Ergonomic Laptops Elevator for Desk, Metal Holder' price={31.47} image="https://m.media-amazon.com/images/I/81MN9l2nl2S._AC_UL320_.jpg" rating={5}/>
                    <Product title='Lenovo IdeaPad 3 15 Intel i3-10110U 8GB 256GB SSD 15.6-inch Touch Screen Laptop' price={35.45} image="https://m.media-amazon.com/images/I/61CFBQbUeOS._AC_UY218_.jpg" rating={7}/>
                    <Product title='Lenovo Chromebook Flex 5 13" Laptop, FHD (1920 x 1080) Touch Display, ' price={35.45} image="https://m.media-amazon.com/images/I/61qIQqN3blS._AC_UL320_.jpg" rating={7}/>
                </div>
        </div>
    )
}

export default Laptop
