
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const Preferences = () => {
  const savePreferences = () => {
    toast({
      title: 'Preferences saved',
      description: 'Your preferences have been updated successfully.',
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-tech-dark mb-6">Account Preferences</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-medium mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notifications" className="font-medium">Email Notifications</Label>
                <p className="text-sm text-gray-500">Receive emails about orders, account updates, and promotions</p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="push-notifications" className="font-medium">Push Notifications</Label>
                <p className="text-sm text-gray-500">Get notified about order status and special offers</p>
              </div>
              <Switch id="push-notifications" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="marketing-emails" className="font-medium">Marketing Emails</Label>
                <p className="text-sm text-gray-500">Receive promotions, deals, and newsletter</p>
              </div>
              <Switch id="marketing-emails" />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-xl font-medium mb-4">Privacy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="data-collection" className="font-medium">Data Collection</Label>
                <p className="text-sm text-gray-500">Allow us to collect usage data to improve your experience</p>
              </div>
              <Switch id="data-collection" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="personalized-ads" className="font-medium">Personalized Advertisements</Label>
                <p className="text-sm text-gray-500">Show ads based on your browsing history and preferences</p>
              </div>
              <Switch id="personalized-ads" />
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h3 className="text-xl font-medium mb-4">Display</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">Theme Preference</p>
              <RadioGroup defaultValue="system">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label htmlFor="light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label htmlFor="dark">Dark</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="system" />
                  <Label htmlFor="system">System Default</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div className="pt-4">
          <Button onClick={savePreferences} className="bg-tech-accent hover:bg-tech-accent/90">
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
