
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Plus, Pencil, Trash } from 'lucide-react';

// Example address data
const initialAddresses = [
  {
    id: '1',
    type: 'home',
    isDefault: true,
    fullName: 'John Doe',
    street: '123 Main Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94103',
    country: 'United States',
    phone: '+1 (555) 123-4567'
  },
  {
    id: '2',
    type: 'work',
    isDefault: false,
    fullName: 'John Doe',
    street: '456 Market Street, Suite 300',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
    country: 'United States',
    phone: '+1 (555) 987-6543'
  }
];

const AddressList = () => {
  const [addresses, setAddresses] = useState(initialAddresses);
  
  // Function to format address for display
  const formatAddress = (address: typeof initialAddresses[0]) => {
    return (
      <>
        <p>{address.street}</p>
        <p>{address.city}, {address.state} {address.zipCode}</p>
        <p>{address.country}</p>
        <p className="mt-2">{address.phone}</p>
      </>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-tech-dark">My Addresses</h2>
        <Button className="bg-tech-accent hover:bg-tech-accent/90">
          <Plus className="w-4 h-4 mr-2" /> Add New Address
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <Card key={address.id} className="relative">
            {address.isDefault && (
              <span className="absolute top-2 right-2 text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">
                Default
              </span>
            )}
            
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                {address.fullName}
                <span className="ml-2 text-xs uppercase bg-gray-100 text-gray-600 py-1 px-2 rounded-full">
                  {address.type}
                </span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-sm text-gray-600">
              {formatAddress(address)}
            </CardContent>
            
            <CardFooter className="flex justify-between pt-2 border-t">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-tech-accent">
                <Pencil className="w-4 h-4 mr-2" /> Edit
              </Button>
              
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                <Trash className="w-4 h-4 mr-2" /> Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AddressList;
