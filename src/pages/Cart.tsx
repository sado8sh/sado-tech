
import React, { useState } from 'react';
import { ShoppingCart, Trash, Plus, Minus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import CartSummary from '@/components/CartSummary';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

// Mock cart items for demonstration
const initialCartItems = [
  {
    id: 1,
    name: 'Wireless Noise Cancelling Headphones',
    price: 249.99,
    image: '/placeholder.svg',
    quantity: 1,
    options: { color: 'Black', warranty: '1 Year' }
  },
  {
    id: 2,
    name: 'Ultra HD Smart TV 55"',
    price: 699.99,
    image: '/placeholder.svg',
    quantity: 1,
    options: { color: 'Black', warranty: '2 Years' }
  },
  {
    id: 3,
    name: 'Smartphone Stand with Wireless Charger',
    price: 49.99,
    image: '/placeholder.svg',
    quantity: 2,
    options: { color: 'White', warranty: 'None' }
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const { toast } = useToast();
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 8.99;
  const taxes = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + taxes;
  
  // Update quantity of an item
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Remove an item from the cart
  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
      variant: "default",
    });
  };
  
  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
    
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold text-tech-dark flex items-center">
              <ShoppingCart className="mr-3 h-7 w-7" />
              Your Shopping Cart
            </h1>
            
            {cartItems.length > 0 && (
              <Button 
                variant="outline" 
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={clearCart}
              >
                <Trash className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>
            )}
          </div>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-6">
                    {cartItems.map(item => (
                      <CartItem 
                        key={item.id}
                        item={item}
                        updateQuantity={updateQuantity}
                        removeItem={removeItem}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <CartSummary 
                  subtotal={subtotal}
                  shipping={shipping}
                  taxes={taxes}
                  total={total}
                />
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <div className="mb-6 flex justify-center">
                <ShoppingCart className="h-16 w-16 text-gray-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/products">
                <Button>
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
