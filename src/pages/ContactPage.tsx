import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto px-4 py-12"
    >
      <section className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-serif font-medium mb-6 text-center"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto text-charcoal-700 dark:text-charcoal-300"
        >
          For inquiries about artworks, commissions, exhibitions, or to schedule a studio visit,
          please get in touch using the form below.
        </motion.p>
      </section>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-charcoal-900 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-medium mb-6">Send a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-charcoal-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 focus:outline-none focus:ring-2 focus:ring-accent-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-charcoal-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 focus:outline-none focus:ring-2 focus:ring-accent-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-charcoal-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 focus:outline-none focus:ring-2 focus:ring-accent-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-md border border-charcoal-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-800 focus:outline-none focus:ring-2 focus:ring-accent-400"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full md:w-auto btn btn-primary flex items-center justify-center"
              >
                <Send size={18} className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </motion.div>
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-cream-100 dark:bg-charcoal-800 p-8 rounded-lg h-full">
            <h2 className="text-2xl font-serif font-medium mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin size={22} className="text-accent-600 dark:text-accent-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Studio Address</h3>
                  <p className="text-charcoal-700 dark:text-charcoal-300">
                    Kunststraße 42<br />
                    10115 Berlin<br />
                    Germany
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={22} className="text-accent-600 dark:text-accent-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email Address</h3>
                  <a 
                    href="mailto:contact@juliaulrich.com" 
                    className="text-charcoal-700 dark:text-charcoal-300 hover:text-accent-600 dark:hover:text-accent-400"
                  >
                    contact@juliaulrich.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={22} className="text-accent-600 dark:text-accent-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Phone Number</h3>
                  <a 
                    href="tel:+4930123456789" 
                    className="text-charcoal-700 dark:text-charcoal-300 hover:text-accent-600 dark:hover:text-accent-400"
                  >
                    +49 (30) 123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={22} className="text-accent-600 dark:text-accent-400 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Studio Hours</h3>
                  <p className="text-charcoal-700 dark:text-charcoal-300">
                    Monday - Friday: 10am - 6pm<br />
                    Saturday: By appointment only<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-medium mb-4">Follow Julia</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-full border border-charcoal-200 dark:border-charcoal-700 
                           hover:bg-accent-100 dark:hover:bg-charcoal-900 
                           hover:border-accent-400 dark:hover:border-accent-600
                           transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-2 rounded-full border border-charcoal-200 dark:border-charcoal-700 
                           hover:bg-accent-100 dark:hover:bg-charcoal-900 
                           hover:border-accent-400 dark:hover:border-accent-600
                           transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-full border border-charcoal-200 dark:border-charcoal-700 
                           hover:bg-accent-100 dark:hover:bg-charcoal-900 
                           hover:border-accent-400 dark:hover:border-accent-600
                           transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="bg-cream-100 dark:bg-charcoal-800 p-1 rounded-lg overflow-hidden">
          <div className="aspect-[21/9] bg-charcoal-200 dark:bg-charcoal-700 rounded-lg overflow-hidden">
            <iframe
              title="Studio Location"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.8355169890896!2d13.3871014!3d52.5250452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e1d863f92f%3A0x981365db0c5c8c7!2sHackescher%20Markt%2C%2010178%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1699612551039!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </motion.section>
      
      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-serif font-medium mb-10 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto grid gap-6">
          <div className="bg-white dark:bg-charcoal-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif mb-3">Do you accept commissions?</h3>
            <p className="text-charcoal-700 dark:text-charcoal-300">
              Yes, I accept a limited number of commissions each year. The process typically begins with a consultation to discuss your vision, space, and preferences. Please contact me with details about your project to start the conversation.
            </p>
          </div>
          
          <div className="bg-white dark:bg-charcoal-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif mb-3">Can I visit your studio?</h3>
            <p className="text-charcoal-700 dark:text-charcoal-300">
              Studio visits are available by appointment. These visits provide an opportunity to see works in progress, discuss my artistic process, and view pieces that may not be currently exhibited. Please contact me to arrange a time.
            </p>
          </div>
          
          <div className="bg-white dark:bg-charcoal-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif mb-3">Do you ship artwork internationally?</h3>
            <p className="text-charcoal-700 dark:text-charcoal-300">
              Yes, I work with professional art handlers to ensure safe shipping worldwide. Shipping costs vary depending on the size of the artwork and destination. All pieces are carefully packaged to ensure they arrive in perfect condition.
            </p>
          </div>
          
          <div className="bg-white dark:bg-charcoal-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-serif mb-3">Do you offer private viewings of your work?</h3>
            <p className="text-charcoal-700 dark:text-charcoal-300">
              Yes, private viewings can be arranged either at my studio or at your location (depending on logistics). This service is particularly helpful for collectors or designers who want to see how specific pieces might work in their intended space.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactPage;