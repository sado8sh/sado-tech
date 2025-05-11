
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { CreditCard, Plus, Pencil, Trash } from 'lucide-react';

// Example payment method data
const paymentMethods = [
  {
    id: '1',
    type: 'credit',
    isDefault: true,
    cardBrand: 'Visa',
    lastFour: '4242',
    expiryMonth: '09',
    expiryYear: '27',
    cardholderName: 'John Doe'
  },
  {
    id: '2',
    type: 'credit',
    isDefault: false,
    cardBrand: 'Mastercard',
    lastFour: '5678',
    expiryMonth: '12',
    expiryYear: '25',
    cardholderName: 'John Doe'
  }
];

const PaymentMethods = () => {
  // Function to get card brand logo/icon
  const getCardIcon = (brand: string) => {
    // In a real app, you'd return different card logos
    // For this example, we'll just return the credit card icon
    return <CreditCard className="w-8 h-8 text-tech-accent" />;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-tech-dark">Payment Methods</h2>
        <Button className="bg-tech-accent hover:bg-tech-accent/90">
          <Plus className="w-4 h-4 mr-2" /> Add Payment Method
        </Button>
      </div>
      
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <Card key={method.id} className="relative overflow-hidden">
            {method.isDefault && (
              <span className="absolute top-2 right-2 text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">
                Default
              </span>
            )}
            
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <span className="mr-3">{getCardIcon(method.cardBrand)}</span>
                {method.cardBrand} •••• {method.lastFour}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="text-sm text-gray-600">
              <p>Expires {method.expiryMonth}/{method.expiryYear}</p>
              <p className="mt-1">{method.cardholderName}</p>
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
      
      <div className="mt-8">
        <h3 className="text-xl font-medium mb-4">Payment Security</h3>
        <div className="bg-gray-50 p-4 rounded-md flex items-start">
          <div className="mr-4 mt-1">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium">Your payment information is secure</h4>
            <p className="text-sm text-gray-600 mt-1">
              We use industry-leading encryption to protect your payment details. Your card information is never stored on our servers and is securely transmitted to our payment processor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
