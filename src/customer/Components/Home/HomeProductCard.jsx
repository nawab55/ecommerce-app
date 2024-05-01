import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product, section }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    // console.log(product, section);
    if(section === "Men's Kurta"){
      navigate('men/clothing/mens_kurta')
    }
    if(section === "Saree"){
      navigate('women/clothing/saree')
    }
    if(section === "Dress"){
      navigate('women/clothing/women_dress')
    }
    if(section === "Lehanga Choli"){
      navigate('women/clothing/lengha_choli')
    }
    if(section === "Women's Gouns"){
      navigate('women/clothing/top')
    }
    if(section === "Women's Kurtas"){
      navigate('women/clothing/women_dress')
    }

  }

  return (
    <div
      onClick={clickHandler}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
