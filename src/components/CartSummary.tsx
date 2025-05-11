
import React from 'react';
import { Button } from '@/components/ui/button';

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  taxes: number;
  total: number;
}

const CartSummary = ({ subtotal, shipping, taxes, total }: CartSummaryProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-tech-dark mb-4">Order Summary</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-600">Free</span>
          ) : (
            <span>${shipping.toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Estimated Tax</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
        
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-xl text-tech-dark">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <Button className="w-full">
          Proceed to Checkout
        </Button>
        
        <div className="mt-4 text-center text-gray-500 text-sm">
          Secure checkout powered by Stripe
        </div>
      </div>
      
      <div className="mt-6 border-t pt-6">
        <h3 className="font-medium text-gray-700 mb-3">Promo Code</h3>
        
        <div className="flex">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-grow bg-gray-50 border rounded-l-md px-3 py-2 text-sm"
          />
          <Button 
            variant="secondary" 
            className="rounded-l-none"
          >
            Apply
          </Button>
        </div>
      </div>
      
      <div className="mt-6 text-sm space-y-2">
        <div className="flex items-center text-green-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          Free shipping on orders over $100
        </div>
        <div className="flex items-center text-green-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          30 day money-back guarantee
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
