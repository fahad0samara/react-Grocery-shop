import React from 'react';
import { CreditCard, MapPin } from 'lucide-react';
import DeliveryOptions from '../components/DeliveryOptions';

const Checkout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Delivery Address */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Delivery Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Street Address"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc."
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
              />
            </div>
          </div>

          {/* Delivery Options */}
          <DeliveryOptions />

          {/* Payment Method */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Payment Method</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
                />
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
                />
                <input
                  type="text"
                  placeholder="Expiry Date"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-fit">
          <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-green-100">
              <span>Subtotal</span>
              <span>$55.97</span>
            </div>
            <div className="flex justify-between text-green-100">
              <span>Delivery</span>
              <span>$4.99</span>
            </div>
            <div className="flex justify-between text-green-100">
              <span>Tax</span>
              <span>$3.99</span>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-4 mb-6">
            <div className="flex justify-between text-white font-bold">
              <span>Total</span>
              <span>$64.95</span>
            </div>
          </div>
          
          <button className="w-full bg-yellow-400 text-green-900 py-3 rounded-lg font-semibold hover:bg-yellow-300">
            Place Order
          </button>

          <p className="text-center text-green-100 text-sm mt-4">
            Estimated delivery time: 30-45 minutes
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;