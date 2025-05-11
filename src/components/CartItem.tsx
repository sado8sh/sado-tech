
import React from 'react';
import { Trash, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
    options?: Record<string, string>;
  };
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
}

const CartItem = ({ item, updateQuantity, removeItem }: CartItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4 first:pt-0 border-b pb-4 last:border-0 last:pb-0">
      {/* Product Image */}
      <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Details */}
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-medium text-gray-800">{item.name}</h3>
            {item.options && (
              <div className="text-sm text-gray-500 mt-1">
                {Object.entries(item.options).map(([key, value]) => (
                  <p key={key}>{key}: {value}</p>
                ))}
              </div>
            )}
          </div>
          <div className="text-lg font-semibold text-tech-dark mt-2 sm:mt-0">
            ${item.price.toFixed(2)}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
          {/* Quantity Controls */}
          <div className="flex items-center border rounded-md">
            <Button 
              type="button" 
              variant="ghost" 
              size="icon"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            
            <span className="w-8 text-center">{item.quantity}</span>
            
            <Button 
              type="button" 
              variant="ghost" 
              size="icon"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          
          {/* Remove Button */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50 mt-2 sm:mt-0"
          >
            <Trash className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
