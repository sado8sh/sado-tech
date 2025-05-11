import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, ArrowRight, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
}

const FeaturedProducts: React.FC = () => {
  const { toast } = useToast();
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Ultra HD Gaming Monitor",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 549.99,
      oldPrice: 649.99,
      rating: 4.8,
      reviewCount: 154,
      isNew: true
    },
    {
      id: 2,
      name: "Pro Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 129.99,
      rating: 4.9,
      reviewCount: 231
    },
    {
      id: 3,
      name: "Ultra-Slim Laptop Pro",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 1299.99,
      oldPrice: 1499.99,
      rating: 4.7,
      reviewCount: 89
    },
    {
      id: 4,
      name: "Smart Home Hub",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 149.99,
      rating: 4.5,
      reviewCount: 76,
      isNew: true
    },
    {
      id: 5,
      name: "Pro Camera 4K",
      image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      price: 799.99,
      oldPrice: 899.99,
      rating: 4.9,
      reviewCount: 112
    },
    {
      id: 6,
      name: "Noise Cancelling Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 249.99,
      rating: 4.6,
      reviewCount: 208
    },
    {
      id: 7,
      name: "Smart Watch Pro",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      price: 299.99,
      rating: 4.7,
      reviewCount: 175,
      isNew: true
    },
    {
      id: 8,
      name: "Wireless Gaming Mouse",
      image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      price: 89.99,
      oldPrice: 99.99,
      rating: 4.5,
      reviewCount: 143
    }
  ];

  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      toast({
        title: "Removed from wishlist",
        description: "Product has been removed from your wishlist",
      });
    } else {
      setWishlist([...wishlist, productId]);
      toast({
        title: "Added to wishlist",
        description: "Product has been added to your wishlist",
      });
    }
  };

  const addToCart = (productId: number) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
      toast({
        title: "Added to cart",
        description: "Product has been added to your cart",
      });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-tech-dark mb-4">Featured Products</h2>
            <p className="text-tech-gray max-w-2xl">
              Explore our handpicked selection of premium tech products with exclusive deals and offers
            </p>
          </div>
          <Link to="/products" className="hidden sm:flex items-center text-tech-accent hover:text-tech-accent/80 font-medium">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-all z-10"
                >
                  <Heart 
                    className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                  />
                </button>
                
                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-tech-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    NEW
                  </div>
                )}
                
                {/* Quick Add */}
                <div className="absolute -bottom-14 left-0 right-0 opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-300 px-4">
                  <button
                    onClick={() => addToCart(product.id)}
                    className={`w-full py-2.5 bg-tech-dark text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-tech-accent transition-colors ${cart.includes(product.id) ? 'bg-tech-accent' : ''}`}
                  >
                    {cart.includes(product.id) ? (
                      <>
                        <Check className="w-4 h-4" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        Quick Add
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-5">
                <Link to={`/products/${product.id}`} className="block">
                  <h3 className="text-lg font-medium text-tech-dark hover:text-tech-accent transition-colors mb-2">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center text-yellow-400 mr-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium text-tech-dark ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-lg font-bold text-tech-dark">${product.price}</span>
                  {product.oldPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10 sm:hidden">
          <Link to="/products" className="flex items-center text-tech-accent hover:text-tech-accent/80 font-medium">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
