import React from 'react';
import { Truck, Clock, ShieldCheck, Headphones } from 'lucide-react';

const services = [
  {
    icon: <Truck className="h-8 w-8 text-yellow-400" />,
    title: 'Express Delivery',
    description: 'Get your groceries delivered within 30 minutes in your area. We ensure fresh and quick delivery to your doorstep.',
  },
  {
    icon: <Clock className="h-8 w-8 text-yellow-400" />,
    title: '24/7 Service',
    description: 'Our service is available 24/7. Shop anytime you want and get your groceries delivered at your convenient time.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-yellow-400" />,
    title: 'Quality Assurance',
    description: 'We guarantee the quality of all our products. If youre not satisfied, we offer a 100% money-back guarantee.',
  },
  {
    icon: <Headphones className="h-8 w-8 text-yellow-400" />,
    title: 'Customer Support',
    description: 'Our dedicated customer support team is always ready to help you with any queries or concerns.',
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-green-100 text-lg">
          We provide the best grocery shopping experience with our premium services
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-white/5 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-green-100">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Service Features */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Membership Benefits
          </h3>
          <ul className="space-y-3 text-green-100">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Exclusive discounts on all products</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Free delivery on orders above $50</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Early access to special deals</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Priority customer support</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Business Services
          </h3>
          <ul className="space-y-3 text-green-100">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Bulk ordering for businesses</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Customized delivery schedules</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Special corporate discounts</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>Dedicated account manager</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;