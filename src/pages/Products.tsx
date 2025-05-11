import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid3x3, List, ChevronDown, Star, Heart, ShoppingCart, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Products = () => {
  const {
    toast
  } = useToast();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample products data
  const products = [{
    id: 1,
    name: "Ultra HD Gaming Monitor",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 549.99,
    oldPrice: 649.99,
    rating: 4.8,
    reviewCount: 154,
    isNew: true,
    category: "Monitors",
    brand: "TechVision"
  }, {
    id: 2,
    name: "Pro Wireless Earbuds",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 129.99,
    rating: 4.9,
    reviewCount: 231,
    category: "Audio",
    brand: "SoundWave"
  }, {
    id: 3,
    name: "Ultra-Slim Laptop Pro",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 1299.99,
    oldPrice: 1499.99,
    rating: 4.7,
    reviewCount: 89,
    category: "Laptops",
    brand: "PowerTech"
  }, {
    id: 4,
    name: "Smart Home Hub",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 149.99,
    rating: 4.5,
    reviewCount: 76,
    isNew: true,
    category: "Smart Home",
    brand: "HomeSmart"
  }, {
    id: 5,
    name: "Pro Camera 4K",
    image: "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    price: 799.99,
    oldPrice: 899.99,
    rating: 4.9,
    reviewCount: 112,
    category: "Cameras",
    brand: "OptikPro"
  }, {
    id: 6,
    name: "Noise Cancelling Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 249.99,
    rating: 4.6,
    reviewCount: 208,
    category: "Audio",
    brand: "SoundWave"
  }, {
    id: 7,
    name: "Smart Watch Pro",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    price: 299.99,
    rating: 4.7,
    reviewCount: 175,
    isNew: true,
    category: "Wearables",
    brand: "TechFit"
  }, {
    id: 8,
    name: "Wireless Gaming Mouse",
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 89.99,
    oldPrice: 99.99,
    rating: 4.5,
    reviewCount: 143,
    category: "Gaming",
    brand: "GameXtreme"
  }, {
    id: 9,
    name: "4K Smart TV",
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 699.99,
    oldPrice: 799.99,
    rating: 4.8,
    reviewCount: 95,
    category: "TVs",
    brand: "VisuTech"
  }, {
    id: 10,
    name: "Wireless Charging Pad",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 49.99,
    rating: 4.4,
    reviewCount: 67,
    category: "Accessories",
    brand: "PowerTech"
  }, {
    id: 11,
    name: "Gaming Console Pro",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 499.99,
    rating: 4.9,
    reviewCount: 203,
    category: "Gaming",
    brand: "GameXtreme"
  }, {
    id: 12,
    name: "Portable SSD 1TB",
    image: "https://images.unsplash.com/photo-1531492053551-414e8461ae41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    price: 159.99,
    oldPrice: 189.99,
    rating: 4.7,
    reviewCount: 84,
    category: "Storage",
    brand: "DataPlus"
  }];
  const categories = ["Monitors", "Audio", "Laptops", "Smart Home", "Cameras", "Wearables", "Gaming", "TVs", "Accessories", "Storage"];
  const brands = ["TechVision", "SoundWave", "PowerTech", "HomeSmart", "OptikPro", "TechFit", "GameXtreme", "VisuTech", "DataPlus"];

  // Filter products based on filters and search
  const filteredProducts = products.filter(product => {
    // Filter by search query
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Filter by price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Filter by selected categories
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }

    // Filter by selected brands
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    return true;
  });

  // Sort products based on sortBy value
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    // Default to featured (id order)
    return a.id - b.id;
  });

  // Pagination logic
  const productsPerPage = 8;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);
  const toggleWishlist = (productId: number) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      toast({
        title: "Removed from wishlist",
        description: "Product has been removed from your wishlist"
      });
    } else {
      setWishlist([...wishlist, productId]);
      toast({
        title: "Added to wishlist",
        description: "Product has been added to your wishlist"
      });
    }
  };
  const addToCart = (productId: number) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
      toast({
        title: "Added to cart",
        description: "Product has been added to your cart"
      });
    }
  };
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    setCurrentPage(1); // Reset to first page on filter change
  };
  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
    setCurrentPage(1); // Reset to first page on filter change
  };
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
    setCurrentPage(1); // Reset to first page on filter change
  };
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 2000]);
    setSearchQuery('');
    setCurrentPage(1);
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page on search
    // Search is already applied through the filteredProducts logic
  };
  return <div className="min-h-screen flex flex-col">
      {/* Dark background header section to make navbar links visible */}
      <div className="bg-tech-dark h-64 w-full absolute top-0 left-0 z-0"></div>
      
      <Navbar />
      
      {/* Page Content */}
      <main className="flex-grow pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-50">All Products</h1>
            <p className="text-tech-gray">Discover our extensive collection of premium tech products</p>
          </div>
          
          {/* Search and Actions Bar */}
          <div className="mb-8 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <form onSubmit={handleSearch} className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input type="text" placeholder="Search products..." className="pl-9" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </form>
            
            <div className="flex flex-wrap gap-3 items-center justify-between w-full lg:w-auto">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-1">
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
                
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-tech-accent" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')}>
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('list')}>
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-tech-dark">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm text-tech-accent hover:text-tech-accent/80">
                    Clear all
                  </Button>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-tech-dark mb-3">Price Range</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Input type="number" min="0" placeholder="Min" value={priceRange[0]} onChange={e => handlePriceChange(Number(e.target.value), priceRange[1])} className="text-sm" />
                    </div>
                    <div>
                      <Input type="number" min="0" placeholder="Max" value={priceRange[1]} onChange={e => handlePriceChange(priceRange[0], Number(e.target.value))} className="text-sm" />
                    </div>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-tech-dark mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => <label key={category} className="flex items-center">
                        <input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => toggleCategory(category)} className="rounded border-gray-300 text-tech-accent focus:ring-tech-accent" />
                        <span className="ml-2 text-sm text-tech-gray">{category}</span>
                      </label>)}
                  </div>
                </div>
                
                {/* Brands */}
                <div>
                  <h4 className="text-sm font-medium text-tech-dark mb-3">Brands</h4>
                  <div className="space-y-2">
                    {brands.map(brand => <label key={brand} className="flex items-center">
                        <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} className="rounded border-gray-300 text-tech-accent focus:ring-tech-accent" />
                        <span className="ml-2 text-sm text-tech-gray">{brand}</span>
                      </label>)}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid/List */}
            <div className="flex-1">
              {currentProducts.length === 0 ? <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="text-xl font-medium text-tech-dark mb-2">No products found</h3>
                  <p className="text-tech-gray mb-6">Try adjusting your filters or search query</p>
                  <Button onClick={clearFilters}>Clear all filters</Button>
                </div> : <>
                  {/* Products Count */}
                  <div className="mb-6">
                    <p className="text-sm text-tech-gray">
                      Showing {startIndex + 1}-{Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} products
                    </p>
                  </div>
                  
                  {/* Grid View */}
                  {viewMode === 'grid' && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {currentProducts.map(product => <div key={product.id} className="product-card group">
                          {/* Product Image */}
                          <div className="relative overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                            
                            {/* Wishlist Button */}
                            <button onClick={() => toggleWishlist(product.id)} className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-all z-10">
                              <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                            </button>
                            
                            {/* New Badge */}
                            {product.isNew && <div className="absolute top-4 left-4 bg-tech-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                NEW
                              </div>}
                            
                            {/* Quick Add */}
                            <div className="absolute -bottom-14 left-0 right-0 opacity-0 group-hover:bottom-4 group-hover:opacity-100 transition-all duration-300 px-4">
                              <button onClick={() => addToCart(product.id)} className={`w-full py-2.5 bg-tech-dark text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-tech-accent transition-colors ${cart.includes(product.id) ? 'bg-tech-accent' : ''}`}>
                                {cart.includes(product.id) ? <>
                                    <Check className="w-4 h-4" />
                                    Added to Cart
                                  </> : <>
                                    <ShoppingCart className="w-4 h-4" />
                                    Quick Add
                                  </>}
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
                              {product.oldPrice && <span className="ml-2 text-sm text-gray-500 line-through">
                                  ${product.oldPrice}
                                </span>}
                            </div>
                          </div>
                        </div>)}
                    </div>}
                  
                  {/* List View */}
                  {viewMode === 'list' && <div className="space-y-6">
                      {currentProducts.map(product => <Card key={product.id} className="overflow-hidden">
                          <div className="flex flex-col sm:flex-row">
                            <div className="relative sm:w-48 md:w-64">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
                              {product.isNew && <div className="absolute top-4 left-4 bg-tech-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                  NEW
                                </div>}
                            </div>
                            
                            <CardContent className="flex-1 p-6">
                              <div className="flex justify-between">
                                <Link to={`/products/${product.id}`} className="block">
                                  <h3 className="text-xl font-medium text-tech-dark hover:text-tech-accent transition-colors">
                                    {product.name}
                                  </h3>
                                </Link>
                                <button onClick={() => toggleWishlist(product.id)} className="p-2 rounded-full hover:bg-gray-100">
                                  <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                                </button>
                              </div>
                              
                              <div className="flex items-center mt-2">
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
                              
                              <div className="mt-1 text-sm text-tech-gray">
                                <span className="font-medium">Brand:</span> {product.brand} | <span className="font-medium">Category:</span> {product.category}
                              </div>
                              
                              <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                  <span className="text-xl font-bold text-tech-dark">${product.price}</span>
                                  {product.oldPrice && <span className="ml-2 text-sm text-gray-500 line-through">
                                      ${product.oldPrice}
                                    </span>}
                                </div>
                                
                                <Button onClick={() => addToCart(product.id)} className={cart.includes(product.id) ? 'bg-tech-accent hover:bg-tech-accent/90' : ''}>
                                  {cart.includes(product.id) ? <>
                                      <Check className="w-4 h-4 mr-2" />
                                      Added to Cart
                                    </> : <>
                                      <ShoppingCart className="w-4 h-4 mr-2" />
                                      Add to Cart
                                    </>}
                                </Button>
                              </div>
                            </CardContent>
                          </div>
                        </Card>)}
                    </div>}
                  
                  {/* Pagination */}
                  {totalPages > 1 && <Pagination className="mt-8">
                      <PaginationContent>
                        {currentPage > 1 && <PaginationItem>
                            <PaginationPrevious href="#" onClick={e => {
                      e.preventDefault();
                      setCurrentPage(currentPage - 1);
                    }} />
                          </PaginationItem>}
                        
                        {Array.from({
                    length: totalPages
                  }, (_, i) => i + 1).map(page => <PaginationItem key={page}>
                            <PaginationLink href="#" onClick={e => {
                      e.preventDefault();
                      setCurrentPage(page);
                    }} isActive={page === currentPage}>
                              {page}
                            </PaginationLink>
                          </PaginationItem>)}
                        
                        {currentPage < totalPages && <PaginationItem>
                            <PaginationNext href="#" onClick={e => {
                      e.preventDefault();
                      setCurrentPage(currentPage + 1);
                    }} />
                          </PaginationItem>}
                      </PaginationContent>
                    </Pagination>}
                </>}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Products;