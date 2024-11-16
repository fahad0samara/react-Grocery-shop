import React from 'react';
import { ShoppingBag, Clock, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Organic Vegetables Bundle',
    price: 24.99,
    rating: 4.8,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Fresh Farm Eggs',
    price: 5.99,
    rating: 4.9,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Organic Fruits Pack',
    price: 18.99,
    rating: 4.7,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&h=400&fit=crop',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-800 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&h=1080&fit=crop')] opacity-10 bg-cover bg-center" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-white">Express Delivery Available</span>
              </div>
              
              <h1 className="text-6xl font-bold text-white leading-tight">
                Fresh Grocery<br />
                <span className="text-yellow-400">Delivered</span> to<br />
                Your Door.
              </h1>
              
              <p className="text-green-100 text-xl">
                Quality products, fast delivery, unbeatable prices.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <select className="bg-white/10 text-white rounded-lg px-6 py-4 w-full sm:w-64 backdrop-blur-sm border border-white/20">
                  <option>Select Category</option>
                  <option>Fruits & Vegetables</option>
                  <option>Dairy & Eggs</option>
                  <option>Meat & Fish</option>
                  <option>Bakery</option>
                  <option>Beverages</option>
                </select>
                
                <button className="bg-yellow-400 text-green-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 w-full sm:w-auto">
                  Shop Now
                </button>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 w-fit">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop" className="w-10 h-10 rounded-full border-2 border-green-900" />
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop" className="w-10 h-10 rounded-full border-2 border-green-900" />
                  <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=50&h=50&fit=crop" className="w-10 h-10 rounded-full border-2 border-green-900" />
                </div>
                <div className="text-white">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold ml-1">4.8</span>
                  </div>
                  <p className="text-sm">2.5k+ Happy Customers</p>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=600&fit=crop" 
                alt="Grocery delivery" 
                className="rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="h-10 w-10 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600">Total Orders</p>
                    <p className="text-xl font-bold text-green-900">12.5K+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;