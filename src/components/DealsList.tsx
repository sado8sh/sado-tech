
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tag, 
  BadgePercent, 
  Star, 
  Heart, 
  ShoppingCart, 
  Check,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

type Deal = {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  isHotDeal?: boolean;
  isFeatured?: boolean;
  remainingTime?: string;
  sold?: number;
  available?: number;
};

const DealsList = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('all');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const deals: Deal[] = [
    {
      id: 101,
      name: "Ultra HD 4K Smart TV - 55\"",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "TVs",
      price: 699.99,
      originalPrice: 1299.99,
      discountPercentage: 46,
      rating: 4.8,
      reviewCount: 124,
      isHotDeal: true,
      remainingTime: "2d 05h 32m",
      sold: 78,
      available: 22
    },
    {
      id: 102,
      name: "Premium Noise Cancelling Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Audio",
      price: 199.99,
      originalPrice: 349.99,
      discountPercentage: 43,
      rating: 4.9,
      reviewCount: 253,
      isFeatured: true
    },
    {
      id: 103,
      name: "Portable SSD 2TB External Drive",
      image: "https://images.unsplash.com/photo-1541807120430-f3f78c281225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      category: "Storage",
      price: 179.99,
      originalPrice: 299.99,
      discountPercentage: 40,
      rating: 4.7,
      reviewCount: 98,
      remainingTime: "1d 12h 45m",
      sold: 65,
      available: 35
    },
    {
      id: 104,
      name: "Professional Gaming Mechanical Keyboard",
      image: "https://images.unsplash.com/photo-1595044778792-33c4e909a4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Gaming",
      price: 89.99,
      originalPrice: 149.99,
      discountPercentage: 40,
      rating: 4.6,
      reviewCount: 187,
      isFeatured: true
    },
    {
      id: 105,
      name: "Smartphone 5G - 128GB",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80",
      category: "Smartphones",
      price: 499.99,
      originalPrice: 799.99,
      discountPercentage: 38,
      rating: 4.5,
      reviewCount: 312,
      isHotDeal: true,
      remainingTime: "0d 17h 22m",
      sold: 89,
      available: 11
    },
    {
      id: 106,
      name: "Smart Fitness Watch & Heart Rate Monitor",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      category: "Wearables",
      price: 149.99,
      originalPrice: 249.99,
      discountPercentage: 40,
      rating: 4.4,
      reviewCount: 176,
      isFeatured: true
    },
    {
      id: 107,
      name: "Gaming Console Pro Bundle",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Gaming",
      price: 449.99,
      originalPrice: 599.99,
      discountPercentage: 25,
      rating: 4.9,
      reviewCount: 241,
      isHotDeal: true,
      remainingTime: "3d 08h 56m",
      sold: 45,
      available: 55
    },
    {
      id: 108,
      name: "Ultra-Slim Laptop 15\" - 512GB SSD",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      category: "Laptops",
      price: 899.99,
      originalPrice: 1299.99,
      discountPercentage: 31,
      rating: 4.7,
      reviewCount: 109,
      isFeatured: true
    }
  ];

  const toggleWishlist = (dealId: number) => {
    if (wishlist.includes(dealId)) {
      setWishlist(wishlist.filter(id => id !== dealId));
      toast({
        title: "Removed from wishlist",
        description: "Deal has been removed from your wishlist"
      });
    } else {
      setWishlist([...wishlist, dealId]);
      toast({
        title: "Added to wishlist",
        description: "Deal has been added to your wishlist"
      });
    }
  };

  const addToCart = (dealId: number) => {
    if (!cart.includes(dealId)) {
      setCart([...cart, dealId]);
      toast({
        title: "Added to cart",
        description: "Deal has been added to your cart"
      });
    }
  };

  // Filter deals based on active tab
  const filteredDeals = activeTab === 'all' 
    ? deals 
    : activeTab === 'hot' 
      ? deals.filter(deal => deal.isHotDeal) 
      : deals.filter(deal => deal.isFeatured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-tech-dark mb-2">Today's Best Deals</h2>
            <p className="text-tech-gray">Handpicked offers with incredible prices</p>
          </div>
          
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Deals</TabsTrigger>
              <TabsTrigger value="hot">Hot Deals</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <Link to={`/products/${deal.id}`} className="block aspect-square overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={deal.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                  <BadgePercent className="w-3 h-3 mr-1" />
                  {deal.discountPercentage}% OFF
                </div>
                
                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(deal.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-all z-10"
                >
                  <Heart 
                    className={`w-4 h-4 ${wishlist.includes(deal.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
                  />
                </button>
                
                {/* Deal Status Banner */}
                {deal.isHotDeal && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-4 flex justify-between items-center text-xs">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{deal.remainingTime}</span>
                    </div>
                    <div>
                      {deal.sold} / {deal.sold! + deal.available!} sold
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="text-xs text-tech-gray mb-1">{deal.category}</div>
                <Link to={`/products/${deal.id}`} className="block">
                  <h3 className="font-medium text-tech-dark hover:text-tech-accent transition-colors mb-2 line-clamp-2">
                    {deal.name}
                  </h3>
                </Link>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center text-yellow-400 mr-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium text-tech-dark ml-1">
                      {deal.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({deal.reviewCount} reviews)
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-tech-dark">${deal.price}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ${deal.originalPrice}
                  </span>
                  <span className="ml-2 text-xs font-medium bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                    Save ${(deal.originalPrice - deal.price).toFixed(2)}
                  </span>
                </div>
                
                <Button
                  onClick={() => addToCart(deal.id)}
                  className={`w-full ${cart.includes(deal.id) ? 'bg-tech-accent hover:bg-tech-accent/90' : ''}`}
                >
                  {cart.includes(deal.id) ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Deal Sections */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-tech-dark">Flash Sales</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                  alt="Wireless Earbuds"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-tech-gray mb-1">Audio</div>
                  <h3 className="font-medium text-tech-dark mb-1">Premium Wireless Earbuds Pro</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-bold text-tech-dark mr-2">$79.99</span>
                    <span className="text-sm text-gray-500 line-through">$149.99</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>Ends in 5h 23m</span>
                  </div>
                </div>
                <Button size="sm">View Deal</Button>
              </div>
            </div>
            
            <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Smartwatch"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-tech-gray mb-1">Wearables</div>
                  <h3 className="font-medium text-tech-dark mb-1">Smart Fitness Tracker Watch</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-bold text-tech-dark mr-2">$129.99</span>
                    <span className="text-sm text-gray-500 line-through">$229.99</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>Ends in 12h 55m</span>
                  </div>
                </div>
                <Button size="sm">View Deal</Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Deal of the Day */}
        <div className="mt-16 bg-gradient-to-br from-tech-dark to-tech-accent/90 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-10"></div>
          
          <div className="p-8 md:p-12 flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 relative z-10">
              <div className="inline-flex items-center p-1 px-2.5 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <Tag className="w-3.5 h-3.5 text-white mr-1" />
                <span className="text-white text-xs font-medium">Deal of the Day</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-md">
                Premium 4K Curved Gaming Monitor - 32" Ultra-wide
              </h3>
              
              <div className="flex items-center mb-2">
                <span className="text-2xl font-bold text-white mr-3">$499.99</span>
                <span className="text-lg text-white/70 line-through">$899.99</span>
                <span className="ml-3 text-sm font-bold bg-white/20 text-white px-2 py-0.5 rounded">
                  44% OFF
                </span>
              </div>
              
              <p className="text-white/70 mb-6 max-w-md">
                Experience gaming like never before with this premium curved monitor offering immersive visuals and ultra-fast response time.
              </p>
              
              <div className="flex space-x-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <span className="block text-xl font-bold text-white">08</span>
                  <span className="text-xs text-white/70">Hours</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <span className="block text-xl font-bold text-white">43</span>
                  <span className="text-xs text-white/70">Minutes</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <span className="block text-xl font-bold text-white">22</span>
                  <span className="text-xs text-white/70">Seconds</span>
                </div>
              </div>
              
              <Button className="bg-white text-tech-dark hover:bg-white/90">
                Shop Now
              </Button>
            </div>
            
            <div className="md:w-1/2 flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1616711906333-23cf8bf9f29c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Curved Gaming Monitor"
                className="max-w-full rounded-lg shadow-2xl rotate-2 transform hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsList;
