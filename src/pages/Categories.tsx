import React from 'react';
import ProductCard from '../components/ProductCard';

const categories = [
  {
    id: 1,
    name: 'Fruits & Vegetables',
    products: [
      {
        id: 101,
        name: 'Organic Bananas',
        price: 2.99,
        rating: 4.8,
        category: 'Fruits',
        image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&h=400&fit=crop',
      },
      {
        id: 102,
        name: 'Fresh Tomatoes',
        price: 3.49,
        rating: 4.7,
        category: 'Vegetables',
        image: 'https://images.unsplash.com/photo-1546470427-e26264fde6bc?w=500&h=400&fit=crop',
      },
      {
        id: 103,
        name: 'Avocados',
        price: 4.99,
        rating: 4.9,
        category: 'Fruits',
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&h=400&fit=crop',
      },
      {
        id: 104,
        name: 'Fresh Spinach',
        price: 2.49,
        rating: 4.6,
        category: 'Vegetables',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&h=400&fit=crop',
      },
      {
        id: 105,
        name: 'Red Apples',
        price: 3.99,
        rating: 4.8,
        category: 'Fruits',
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&h=400&fit=crop',
      },
    ],
  },
  {
    id: 2,
    name: 'Dairy & Eggs',
    products: [
      {
        id: 201,
        name: 'Organic Milk',
        price: 4.99,
        rating: 4.8,
        category: 'Dairy',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&h=400&fit=crop',
      },
      {
        id: 202,
        name: 'Free Range Eggs',
        price: 5.99,
        rating: 4.9,
        category: 'Eggs',
        image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&h=400&fit=crop',
      },
      {
        id: 203,
        name: 'Greek Yogurt',
        price: 3.99,
        rating: 4.7,
        category: 'Dairy',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop',
      },
      {
        id: 204,
        name: 'Cheddar Cheese',
        price: 6.99,
        rating: 4.8,
        category: 'Dairy',
        image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=500&h=400&fit=crop',
      },
    ],
  },
  {
    id: 3,
    name: 'Meat & Fish',
    products: [
      {
        id: 301,
        name: 'Fresh Salmon',
        price: 12.99,
        rating: 4.7,
        category: 'Fish',
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=500&h=400&fit=crop',
      },
      {
        id: 302,
        name: 'Organic Chicken',
        price: 8.99,
        rating: 4.8,
        category: 'Meat',
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&h=400&fit=crop',
      },
      {
        id: 303,
        name: 'Premium Beef',
        price: 15.99,
        rating: 4.9,
        category: 'Meat',
        image: 'https://images.unsplash.com/photo-1603048297172-c92544798d1e?w=500&h=400&fit=crop',
      },
      {
        id: 304,
        name: 'Fresh Tuna',
        price: 13.99,
        rating: 4.8,
        category: 'Fish',
        image: 'https://images.unsplash.com/photo-1595456982104-14cc660c4d22?w=500&h=400&fit=crop',
      },
    ],
  },
  {
    id: 4,
    name: 'Bakery',
    products: [
      {
        id: 401,
        name: 'Sourdough Bread',
        price: 4.99,
        rating: 4.8,
        category: 'Bread',
        image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=500&h=400&fit=crop',
      },
      {
        id: 402,
        name: 'Croissants',
        price: 2.99,
        rating: 4.9,
        category: 'Pastries',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=400&fit=crop',
      },
      {
        id: 403,
        name: 'Whole Grain Bread',
        price: 3.99,
        rating: 4.7,
        category: 'Bread',
        image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500&h=400&fit=crop',
      },
    ],
  },
  {
    id: 5,
    name: 'Beverages',
    products: [
      {
        id: 501,
        name: 'Fresh Orange Juice',
        price: 4.99,
        rating: 4.8,
        category: 'Juices',
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&h=400&fit=crop',
      },
      {
        id: 502,
        name: 'Green Smoothie',
        price: 5.99,
        rating: 4.7,
        category: 'Smoothies',
        image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=400&fit=crop',
      },
      {
        id: 503,
        name: 'Coconut Water',
        price: 3.99,
        rating: 4.9,
        category: 'Natural Drinks',
        image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=500&h=400&fit=crop',
      },
    ],
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Shop by Category</h1>
      
      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
              <button className="text-yellow-400 hover:text-yellow-300">
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;