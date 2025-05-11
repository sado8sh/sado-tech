
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

// Example wishlist data (in a real app, this would come from an API)
const wishlistItems = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    price: 199.99,
    image: '/placeholder.svg',
    discount: 15,
    inStock: true
  },
  {
    id: 2,
    name: 'Ultra-thin Laptop 15.6"',
    price: 899.99,
    image: '/placeholder.svg',
    discount: 0,
    inStock: true
  },
  {
    id: 3,
    name: '4K Ultra HD Smart TV 55"',
    price: 649.99,
    image: '/placeholder.svg',
    discount: 10,
    inStock: false
  },
  {
    id: 4,
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    image: '/placeholder.svg',
    discount: 0,
    inStock: true
  }
];

const Wishlist = () => {
  const handleRemoveItem = (id: number) => {
    toast({
      title: "Item removed",
      description: "Item has been removed from your wishlist."
    });
  };

  const handleAddToCart = (id: number) => {
    toast({
      title: "Added to cart",
      description: "Item has been added to your cart."
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-tech-dark mb-6">My Wishlist</h2>
      
      {wishlistItems.length > 0 ? (
        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border border-gray-200">
              <CardContent className="p-0">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/4 bg-gray-100 p-4 flex items-center justify-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-32 w-32 object-contain"
                    />
                  </div>
                  <div className="sm:w-3/4 p-4 sm:p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg text-tech-dark mb-1">{item.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-lg text-tech-dark">
                            ${(item.price * (1 - item.discount / 100)).toFixed(2)}
                          </span>
                          {item.discount > 0 && (
                            <>
                              <span className="text-gray-500 text-sm line-through">
                                ${item.price.toFixed(2)}
                              </span>
                              <Badge className="bg-red-100 text-red-800 border-none">
                                {item.discount}% OFF
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <div className="mt-4">
                      {item.inStock ? (
                        <Badge className="bg-green-100 text-green-800 border-none mb-4">
                          In Stock
                        </Badge>
                      ) : (
                        <Badge className="bg-amber-100 text-amber-800 border-none mb-4">
                          Out of Stock
                        </Badge>
                      )}
                      
                      <div className="flex space-x-2">
                        <Button 
                          className="bg-tech-accent hover:bg-tech-accent/90 text-white" 
                          disabled={!item.inStock}
                          onClick={() => handleAddToCart(item.id)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-tech-dark mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500 mb-6">Save items you love for later by clicking the heart icon.</p>
          <Button className="bg-tech-accent hover:bg-tech-accent/90 text-white">
            Start Shopping
          </Button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
