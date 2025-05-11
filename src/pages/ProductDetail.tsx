
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, ShoppingCart, Share2, Star, Check, Shield, Truck, RotateCcw, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  const [mainImage, setMainImage] = useState('https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80');
  const [quantity, setQuantity] = useState(1);
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([0]); // First FAQ is expanded by default
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Product details (in a real app, this would come from an API)
  const product = {
    id: 1,
    name: "Pro Ultra Slim Laptop 16\"",
    price: 1599.99,
    oldPrice: 1799.99,
    discount: 200,
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 156,
    availability: "In Stock",
    sku: "LP-PRO-1601",
    description: "Experience unparalleled performance with our flagship laptop. Featuring a stunning 16-inch Retina display, powerful processor, and all-day battery life in an incredibly thin and light design.",
    features: [
      "16-inch Liquid Retina XDR display",
      "12-core CPU with 8 performance cores and 4 efficiency cores",
      "32GB unified memory",
      "1TB SSD storage",
      "Up to 20 hours battery life",
      "Thunderbolt 4 ports",
      "1080p FaceTime HD camera",
      "Three-microphone array with directional beamforming"
    ],
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
    ],
    specs: {
      processor: "12-core CPU with 8 performance cores and 4 efficiency cores",
      memory: "32GB unified memory",
      storage: "1TB SSD",
      graphics: "16-core integrated GPU",
      display: "16-inch Liquid Retina XDR display (3456 x 2234)",
      battery: "Up to 20 hours wireless web browsing",
      ports: "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3",
      connectivity: "Wi-Fi 6E, Bluetooth 5.3",
      camera: "1080p FaceTime HD camera",
      audio: "Six-speaker sound system with force-cancelling woofers",
      keyboard: "Backlit Magic Keyboard with Touch ID",
      dimensions: "14.01 x 9.77 x 0.66 inches (35.57 x 24.81 x 1.68 cm)",
      weight: "4.7 pounds (2.1 kg)"
    },
    faqs: [
      {
        question: "What's included in the box?",
        answer: "The package includes the Pro Ultra Slim Laptop 16\", a 140W USB-C power adapter, and a USB-C to MagSafe 3 cable."
      },
      {
        question: "Is this laptop suitable for gaming?",
        answer: "Yes, with its powerful integrated GPU, this laptop can handle most modern games at medium to high settings, though it's primarily designed for creative professionals and productivity."
      },
      {
        question: "Can the memory or storage be upgraded later?",
        answer: "No, the memory and storage are soldered to the motherboard and cannot be upgraded after purchase. We recommend choosing the configuration that will meet your needs in the long term."
      },
      {
        question: "What's the warranty period?",
        answer: "The laptop comes with a standard 1-year limited warranty. You can purchase an extended warranty for up to 3 additional years."
      }
    ]
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqs(expandedFaqs.includes(index)
      ? expandedFaqs.filter(i => i !== index)
      : [...expandedFaqs, index]
    );
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} × ${quantity} has been added to your cart.`,
    });
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? "Product has been removed from your wishlist" : "Product has been added to your wishlist",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share link copied!",
      description: "Product link has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-10">
          {/* Breadcrumb */}
          <div className="text-sm text-tech-gray mb-8">
            <a href="/" className="hover:text-tech-accent">Home</a> / 
            <a href="/products" className="mx-2 hover:text-tech-accent">Products</a> / 
            <a href="/categories/laptops" className="hover:text-tech-accent">Laptops</a> / 
            <span className="ml-2 text-tech-dark font-medium">{product.name}</span>
          </div>
          
          {/* Product Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Images */}
            <div>
              <div className="mb-4 overflow-hidden rounded-xl bg-white p-2 border border-gray-100 shadow-md">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-auto object-contain aspect-square"
                />
              </div>
              
              <div className="flex overflow-x-auto space-x-4 pb-2 hide-scrollbar">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${mainImage === image ? 'border-tech-accent' : 'border-transparent'}`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`Product view ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              {/* New Tag + Name */}
              <div className="flex items-center mb-3">
                <span className="bg-tech-accent text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                  NEW
                </span>
                <span className="text-tech-gray text-sm">SKU: {product.sku}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-tech-dark mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-5">
                <div className="flex items-center text-yellow-400 mr-3">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-1 font-medium text-tech-dark">{product.rating}</span>
                </div>
                <a href="#reviews" className="text-tech-gray hover:text-tech-accent text-sm">
                  {product.reviewCount} reviews
                </a>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end mb-2">
                  <span className="text-3xl font-bold text-tech-dark mr-3">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-lg text-gray-500 line-through">${product.oldPrice}</span>
                  )}
                </div>
                {product.discount > 0 && (
                  <div className="inline-block bg-red-50 text-red-600 text-sm font-medium px-2 py-1 rounded">
                    Save ${product.discount} ({product.discountPercentage}% off)
                  </div>
                )}
              </div>
              
              {/* Short Description */}
              <p className="text-tech-gray mb-6">
                {product.description}
              </p>
              
              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-tech-dark font-semibold mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-tech-accent mr-2 flex-shrink-0" />
                      <span className="text-tech-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Add to Cart */}
              <div className="mb-6">
                <div className="flex items-center">
                  {/* Quantity */}
                  <div className="flex items-center border border-gray-300 rounded-md mr-4">
                    <button 
                      onClick={decrementQuantity}
                      className="px-3 py-2 text-gray-600 hover:text-tech-dark"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 text-tech-dark font-medium">{quantity}</span>
                    <button 
                      onClick={incrementQuantity}
                      className="px-3 py-2 text-gray-600 hover:text-tech-dark"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Availability */}
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    {product.availability}
                  </div>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button 
                    className="btn-tech-primary flex-1 sm:flex-none"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className={`btn-tech-secondary border ${isWishlisted ? 'border-tech-accent text-tech-accent' : 'border-gray-300'}`}
                    onClick={toggleWishlist}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-tech-accent text-tech-accent' : ''}`} />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="btn-tech-secondary border border-gray-300"
                    onClick={handleShare}
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              {/* Service Features */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent mr-3">
                      <Truck className="w-5 h-5" />
                    </div>
                    <span className="text-tech-dark text-sm font-medium">Free shipping</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent mr-3">
                      <RotateCcw className="w-5 h-5" />
                    </div>
                    <span className="text-tech-dark text-sm font-medium">30-day returns</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-tech-accent/10 flex items-center justify-center text-tech-accent mr-3">
                      <Shield className="w-5 h-5" />
                    </div>
                    <span className="text-tech-dark text-sm font-medium">2-year warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="specifications" className="text-base">Specifications</TabsTrigger>
                <TabsTrigger value="faqs" className="text-base">FAQs</TabsTrigger>
                <TabsTrigger value="reviews" className="text-base">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <div className="font-medium text-tech-dark capitalize mb-2">{key}</div>
                      <div className="text-tech-gray">{value}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="faqs" className="pt-4">
                <div className="space-y-6">
                  {product.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4">
                      <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => toggleFaq(index)}
                      >
                        <h3 className="text-lg font-medium text-tech-dark">{faq.question}</h3>
                        {expandedFaqs.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-tech-gray" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-tech-gray" />
                        )}
                      </button>
                      
                      {expandedFaqs.includes(index) && (
                        <p className="text-tech-gray mt-2">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="pt-4">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Rating Summary */}
                  <div className="md:w-1/3">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center mb-4">
                        <div className="text-5xl font-bold text-tech-dark">{product.rating}</div>
                        <div className="flex justify-center my-2 text-yellow-400">
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current text-yellow-200" />
                        </div>
                        <div className="text-tech-gray">{product.reviewCount} reviews</div>
                      </div>
                      
                      {/* Rating Bars */}
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <div key={star} className="flex items-center">
                            <div className="flex items-center text-sm text-tech-gray w-12">
                              {star} <Star className="w-3 h-3 ml-1 text-yellow-400 fill-current" />
                            </div>
                            <div className="flex-1 mx-3">
                              <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                                <div 
                                  className="bg-yellow-400 h-2 rounded-full"
                                  style={{ width: star > 3 ? `${85 - (5-star)*20}%` : `${10 + star*5}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="w-10 text-right text-sm text-tech-gray">
                              {star > 3 ? Math.floor(product.reviewCount * (0.85 - (5-star)*0.2)) : Math.floor(product.reviewCount * (0.1 + star*0.05))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full mt-6">Write a Review</Button>
                    </div>
                  </div>
                  
                  {/* Review List */}
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-bold text-tech-dark mb-6">Customer Reviews</h3>
                    
                    {/* Sample Reviews */}
                    <div className="space-y-8">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="border-b border-gray-100 pb-6">
                          <div className="flex justify-between mb-2">
                            <div className="font-medium text-tech-dark">
                              {["Alex S.", "Sarah K.", "Michael T."][index]}
                            </div>
                            <div className="text-sm text-tech-gray">
                              {["1 week ago", "2 weeks ago", "1 month ago"][index]}
                            </div>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            {Array.from({ length: 5 }).map((_, starIdx) => (
                              <Star key={starIdx} className={`w-4 h-4 ${starIdx < (index === 1 ? 4 : 5) ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                          <p className="text-tech-gray mb-2">
                            {[
                              "Absolutely love this laptop! The display is stunning and the performance is exceptional. Battery life exceeds expectations and the build quality is top-notch.",
                              "Great laptop overall, but I noticed it gets a bit warm during intensive tasks. The keyboard is excellent and the trackpad is responsive. Still, I'm very satisfied with my purchase.",
                              "Best laptop I've ever owned. The speed is incredible and the screen is perfect for design work. It's lightweight yet powerful enough for all my needs. Highly recommend!"
                            ][index]}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="mt-8">Show More Reviews</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
