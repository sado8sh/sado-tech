
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

// Example order data (in a real app, this would come from an API)
const orders = [
  {
    id: 'ORD-39847',
    date: '2025-04-15',
    status: 'delivered',
    total: 349.99,
    items: [
      { name: '4K Ultra HD Smart TV', quantity: 1, price: 299.99 },
      { name: 'HDMI Cable', quantity: 1, price: 12.99 },
      { name: 'Extended Warranty', quantity: 1, price: 37.99 }
    ]
  },
  {
    id: 'ORD-32156',
    date: '2025-03-28',
    status: 'delivered',
    total: 129.95,
    items: [
      { name: 'Wireless Headphones', quantity: 1, price: 129.95 }
    ]
  },
  {
    id: 'ORD-28941',
    date: '2025-03-10',
    status: 'processing',
    total: 458.97,
    items: [
      { name: 'Smartphone - 256GB', quantity: 1, price: 429.99 },
      { name: 'Screen Protector', quantity: 1, price: 14.99 },
      { name: 'Phone Case', quantity: 1, price: 13.99 }
    ]
  }
];

const OrderHistory = () => {
  // Function to get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'processing':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'cancelled':
        return 'bg-red-100 text-red-800 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-tech-dark mb-6">Order History</h2>
      
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 flex flex-col sm:flex-row justify-between">
                <div className="mb-2 sm:mb-0">
                  <div className="flex items-center">
                    <h3 className="font-medium text-tech-dark mr-2">{order.id}</h3>
                    <Badge 
                      variant="outline" 
                      className={`${getStatusColor(order.status)} border-none`}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">Ordered on {order.date}</p>
                </div>
                <div className="flex items-center">
                  <p className="font-medium text-tech-dark mr-4">${order.total.toFixed(2)}</p>
                  <Button variant="ghost" size="sm" className="text-tech-accent hover:text-tech-accent/90">
                    <ExternalLink className="w-4 h-4 mr-1" /> View Details
                  </Button>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-medium text-sm mb-2">Order Items:</h4>
                <ul className="space-y-1">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-sm flex justify-between">
                      <span>{item.quantity}x {item.name}</span>
                      <span className="text-gray-500">${item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
          <Button className="bg-tech-accent hover:bg-tech-accent/90">Start Shopping</Button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
