import React from "react";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] border m-3 transition-all cursor-pointer">
      <div className="h-48 w-full object-cover object-left-top">
        <img src={product.imageUrl} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
          <p className="font-semibold opacity-50">White</p>
        </div>
        <div className="flex space-x-2 items-center">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="opacity-50 line-through">{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountPercent}% off</p>
        </div>
      </div>
    </div>
  );
};
