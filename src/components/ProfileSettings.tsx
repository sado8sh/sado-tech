
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
});

const ProfileSettings = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'Profile updated',
      description: 'Your profile information has been updated successfully.',
    });
    console.log(values);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-tech-dark mb-6">Profile Settings</h2>
      
      <div className="mb-8 flex items-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-5">
          <img
            src="https://randomuser.me/api/portraits/men/42.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Button variant="outline" size="sm" className="mb-2">
            Change Photo
          </Button>
          <p className="text-sm text-gray-500">JPG, GIF or PNG. 1MB max.</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <Button type="submit" className="bg-tech-accent hover:bg-tech-accent/90">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileSettings;
