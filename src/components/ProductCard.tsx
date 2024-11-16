import React from 'react';
import { Plus, Star } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, name, price, rating, category }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price, image, category });
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/15 transition-all">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover rounded-lg"
        />
        <span className="absolute top-2 left-2 bg-yellow-400 text-green-900 px-2 py-1 rounded-full text-sm font-semibold">
          {category}
        </span>
      </div>
      
      <div className="mt-4">
        <h3 className="text-white font-semibold">{name}</h3>
        
        <div className="flex items-center space-x-1 mt-1">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="text-green-100 text-sm">{rating}</span>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <span className="text-white font-bold">${price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-yellow-400 text-green-900 p-2 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;