import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import ProductViewModal from './ProductViewModal';

const ProductCard = ({ productId, productName, image, description, quantity, price, discount, specialPrice }) => {
  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const [selectedViewProduct, setSelectedViewProduct] = useState({});
  const isAvailable = quantity && Number(quantity) > 0;

  const handleProductView = (product) => {
    setSelectedViewProduct(product);
    setOpenProductViewModal(true); // Open modal after setting the product
  };

  return (
    <div className="border-none rounded-lg shadow-lg overflow-hidden transition-shadow duration-300">
      <div
        onClick={() => handleProductView({ productId, productName, image, description, quantity, price, discount, specialPrice })}
        className="w-full overflow-hidden aspect-[3/2]"
      >
        <img
          className="w-full h-full cursor-pointer transition-transform transform duration-300 hover:scale-105"
          src={image}
          alt={productName}
        />
      </div>
      <div className="p-4">
        <h2
          onClick={() => handleProductView({ productId, productName, image, description, quantity, price, discount, specialPrice })}
          className="text-lg font-semibold cursor-pointer"
        >
          {productName}
        </h2>
        <div className="min-h-20 max-h-20">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          {specialPrice ? (
            <div className="flex flex-col">
              <span className="text-gray-400 line-through">${Number(price).toFixed(2)}</span>
              <span className="text-slate-700 font-bold text-xl">${Number(specialPrice).toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-slate-700 font-bold text-xl">${Number(price).toFixed(2)}</span>
          )}
          <button
            onClick={() => {}}
            disabled={!isAvailable}
            className={`bg-blue-500 ${isAvailable ? 'opacity-100 hover:bg-blue-600' : 'opacity-60'} text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center cursor-pointer`}
          >
            <FaShoppingCart className="mr-2" />
            {isAvailable ? 'Add to Cart' : 'Stock Out'}
          </button>
        </div>
      </div>
      <ProductViewModal open={openProductViewModal} setOpen={setOpenProductViewModal} product={selectedViewProduct} isAvailable={isAvailable} />
    </div>
  );
};

export default ProductCard;
