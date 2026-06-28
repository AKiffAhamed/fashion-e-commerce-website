import React from "react";
import image from "./../assets/New_Arrivals/newArrivals1.jpeg";

function Card() {
    return (
        <div className="flex flex-col items-center w-64 h-[400px] overflow-hidden">
            <img src={image} alt="product" className="w-full h-100 object-cover"/>
            <h2>Card Title</h2>
        </div>
    );
}

export default Card;