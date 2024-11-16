import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-green-100 mb-8">Start shopping to add items to your cart</p>
          <Link
            to="/categories"
            className="inline-block bg-yellow-400 text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
              
              <div className="flex-1">
                <h3 className="text-white font-semibold">{item.name}</h3>
                <p className="text-green-100">${item.price}</p>
                
                <div className="flex items-center space-x-4 mt-2">
                  <button 
                    className="p-1 text-white hover:text-yellow-400"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-white">{item.quantity}</span>
                  <button 
                    className="p-1 text-white hover:text-yellow-400"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                  <button 
                    className="p-1 text-red-400 hover:text-red-300"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="text-white font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-fit">
          <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-green-100">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-100">
              <span>Delivery</span>
              <span>$4.99</span>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-4 mb-6">
            <div className="flex justify-between text-white font-bold">
              <span>Total</span>
              <span>${(total + 4.99).toFixed(2)}</span>
            </div>
          </div>
          
          <Link
            to="/checkout"
            className="block w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-400 text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;