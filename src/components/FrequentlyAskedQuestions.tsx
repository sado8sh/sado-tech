
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'To create an account, click on the User icon in the top navigation bar and select "Sign Up". Follow the instructions to complete your registration with a valid email address and secure password.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support PayPal, Apple Pay, and Google Pay for convenient checkout options.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 business days delivery. International shipping times vary by destination, usually between 7-14 business days.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy on most items. Products must be in original condition with all packaging and accessories. Return shipping is free for defective items. Please visit our Returns page for detailed instructions.'
  },
  {
    question: 'How do I track my order?',
    answer: 'You can track your order by logging into your account and viewing your order history. You will also receive tracking information via email once your order has shipped.'
  },
  {
    question: 'Are there warranties on your products?',
    answer: 'Yes, most of our products come with a manufacturer\'s warranty. The warranty period varies by product and brand, typically ranging from 1-3 years. Extended warranties are available for purchase on select items.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Import duties and taxes may apply depending on your country\'s regulations.'
  },
  {
    question: 'How can I get technical support for my product?',
    answer: 'Technical support is available through our support team via email, live chat, or phone. For specific product issues, we may connect you directly with the manufacturer\'s technical support team.'
  }
];

const FrequentlyAskedQuestions = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-tech-dark text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-tech-dark hover:text-tech-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-tech-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
