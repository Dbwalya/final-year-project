import React, { useState } from 'react';
// import Product from './Product';
import ProductVariety from './ProductVariety';
import "./Home.css";
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { SliderData } from './SliderData';

function Home({ slides }) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
        console.log(current);
    }
    // setInterval(() => {
    //     nextSlide();
    // },)
    return (
        <div className="home">            
            <div className="home-container">
                <div className="slider">
                    <ArrowLeft className="arrow-left" onClick={prevSlide}/>
                    <ArrowRight className="arrow-right" onClick={nextSlide}/>
                    {SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide-active' : 'slide'} key={index} >
                                {index === current && (
                                    <img src={slide.image} alt="Product Images" className="image" />
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="product-variety-row">
                            <div>
                                <Link to="/games">
                                <ProductVariety image="https://m.media-amazon.com/images/I/61bxKvTvi7L._AC_UY218_.jpg" name="Gaming Accessories" button="Gaming Accessories"/>
                                </Link>
                                <Link to="television">
                                <ProductVariety image="https://m.media-amazon.com/images/I/61F0MXKMLwL._AC_UL320_.jpg" name="Gaming Accessories" button="Television Set"/>
                                </Link>
                                <Link to="/laptop">
                                <ProductVariety image="https://m.media-amazon.com/images/I/71StGaPWnPL._AC_UY218_.jpg" name="Gaming Accessories" button="Laptops"/>
                                </Link>                
                            </div>
                            <div>
                                <Link to="/shoes">
                                <ProductVariety image="https://i.pinimg.com/236x/97/b2/2a/97b22a18ac22e17e59654b48aec199dd.jpg" name="Gaming Accessories" button="Men's Shoes"/>
                                </Link>
                                <Link to="/fashion">
                                <ProductVariety image="https://i.pinimg.com/236x/b4/59/a2/b459a2b313cfe44ec5139080a07365a1.jpg" name="Gaming Accessories" button="Fashion Hub"/>
                                </Link>
                                <Link to="mensclothing">
                                <ProductVariety image="https://i.pinimg.com/236x/cf/cc/0d/cfcc0d30609564337c752ddb4b73fa5a.jpg" name="Gaming Accessories" button="Men's Clothing"/>
                                </Link>
                            </div>
                        </div>
                </div>
        </div>
    );
}

export default Home;
