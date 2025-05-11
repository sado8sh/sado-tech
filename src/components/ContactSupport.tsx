
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { MessageSquare, Phone, Mail, MessageCircleQuestion, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactSupport = () => {
  const [activeTab, setActiveTab] = useState("email");
  const { toast } = useToast();
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Support request submitted",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-tech-dark mb-4">
              Still Need Help?
            </h2>
            <p className="text-tech-gray mb-8 max-w-2xl mx-auto">
              Our support team is here to assist you. Choose your preferred method of communication below.
            </p>
          </div>
          
          <Tabs defaultValue="email" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>Live Chat</span>
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Phone</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="email">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-tech-accent" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <input 
                                  type="text" 
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-accent" 
                                  placeholder="Your name" 
                                  required
                                  {...field} 
                                />
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
                                <input 
                                  type="email" 
                                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-accent" 
                                  placeholder="your.email@example.com" 
                                  required
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-accent" 
                                placeholder="What is your inquiry about?" 
                                required
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <textarea 
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tech-accent min-h-32" 
                                placeholder="Please describe your issue in detail..." 
                                required
                                rows={6}
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="bg-tech-accent hover:bg-tech-accent/90 w-full">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="chat">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-tech-accent" />
                    Live Chat Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <MessageCircleQuestion className="w-16 h-16 text-tech-accent mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-tech-dark mb-2">Chat with a Support Agent</h3>
                    <p className="text-tech-gray mb-6">Our support team is available Monday to Friday, 9 AM to 6 PM EST.</p>
                    <Button className="bg-tech-accent hover:bg-tech-accent/90">
                      Start Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="phone">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-tech-accent" />
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10">
                    <Phone className="w-16 h-16 text-tech-accent mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-tech-dark mb-2">Call Our Support Line</h3>
                    <p className="text-tech-gray mb-2">Available Monday to Friday, 9 AM to 6 PM EST</p>
                    <p className="text-2xl font-bold text-tech-dark mb-6">1-800-TECH-PULSE</p>
                    <div className="flex justify-center gap-4">
                      <Button className="bg-tech-accent hover:bg-tech-accent/90">
                        Request Callback
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-tech-dark flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-tech-accent" />
              Support Hours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-tech-dark mb-2">Email Support</h4>
                <p className="text-tech-gray">24/7 Response within 24 hours</p>
              </div>
              <div>
                <h4 className="font-medium text-tech-dark mb-2">Live Chat</h4>
                <p className="text-tech-gray">Monday-Friday: 9 AM - 6 PM EST</p>
              </div>
              <div>
                <h4 className="font-medium text-tech-dark mb-2">Phone Support</h4>
                <p className="text-tech-gray">Monday-Friday: 9 AM - 6 PM EST</p>
              </div>
              <div>
                <h4 className="font-medium text-tech-dark mb-2">Holiday Hours</h4>
                <p className="text-tech-gray">May vary. See holiday schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
