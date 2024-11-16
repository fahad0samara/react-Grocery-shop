import React from 'react';
import { Users, Leaf, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4">About FreshMart</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          We're on a mission to make fresh, quality groceries accessible to everyone while supporting local farmers and sustainable practices.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        {[
          { number: '10K+', label: 'Happy Customers' },
          { number: '500+', label: 'Products' },
          { number: '50+', label: 'Local Farmers' },
          { number: '24/7', label: 'Support' },
        ].map((stat, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
            <div className="text-green-100">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Leaf className="h-8 w-8 text-yellow-400" />,
              title: 'Sustainability',
              description: 'Were committed to eco-friendly practices and reducing our carbon footprint.',
            },
            {
              icon: <Users className="h-8 w-8 text-yellow-400" />,
              title: 'Community',
              description: 'Supporting local farmers and building stronger communities.',
            },
            {
              icon: <Award className="h-8 w-8 text-yellow-400" />,
              title: 'Quality',
              description: 'Only the freshest, highest-quality products make it to your table.',
            },
            {
              icon: <Heart className="h-8 w-8 text-yellow-400" />,
              title: 'Care',
              description: 'Every order is handled with care and attention to detail.',
            },
          ].map((value, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-white/5 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-green-100">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-green-100">
            <p>
              Founded in 2020, FreshMart began with a simple idea: everyone deserves access to fresh, quality groceries without the hassle.
            </p>
            <p>
              What started as a small local delivery service has grown into a community of food lovers, health enthusiasts, and sustainability advocates.
            </p>
            <p>
              Today, we work with over 50 local farmers and producers to bring you the best products while supporting local communities and sustainable farming practices.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop"
            alt="Our Story"
            className="rounded-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-green-900 p-4 rounded-xl">
            <p className="font-bold">Since 2020</p>
            <p>Delivering Fresh</p>
          </div>
        </div>
      </div>

      {/* Join Us */}
      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-12">
        <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
          Be part of our mission to make fresh, quality groceries accessible to everyone while supporting sustainable practices.
        </p>
        <button className="bg-yellow-400 text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300">
          Get Started Today
        </button>
      </div>
    </div>
  );
}

export default About;