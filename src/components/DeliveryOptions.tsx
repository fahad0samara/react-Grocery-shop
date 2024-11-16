import React from 'react';
import { Truck, Home, Clock } from 'lucide-react';

const DeliveryOptions = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Delivery Options</h3>
      
      <div className="space-y-4">
        <label className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10">
          <input type="radio" name="delivery" className="mt-1" defaultChecked />
          <div>
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-semibold">Standard Delivery</span>
            </div>
            <p className="text-green-100 text-sm mt-1">Delivery within 30-45 minutes</p>
            <p className="text-yellow-400 text-sm mt-1">$4.99</p>
          </div>
        </label>

        <label className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10">
          <input type="radio" name="delivery" className="mt-1" />
          <div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-semibold">Express Delivery</span>
            </div>
            <p className="text-green-100 text-sm mt-1">Delivery within 15-20 minutes</p>
            <p className="text-yellow-400 text-sm mt-1">$7.99</p>
          </div>
        </label>

        <label className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10">
          <input type="radio" name="delivery" className="mt-1" />
          <div>
            <div className="flex items-center space-x-2">
              <Home className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-semibold">Pickup</span>
            </div>
            <p className="text-green-100 text-sm mt-1">Ready for pickup in 20 minutes</p>
            <p className="text-yellow-400 text-sm mt-1">Free</p>
          </div>
        </label>
      </div>
    </div>
  );
}

export default DeliveryOptions;