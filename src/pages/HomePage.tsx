import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };
  
  const bookChapters = [
    {
      id: 1,
      title: 'Self-Discovery',
      description: 'Finding your authentic self in a world of distractions',
      imageUrl: 'https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 2,
      title: 'Healing Through Reflection',
      description: 'Techniques for processing emotions and past experiences',
      imageUrl: 'https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 3,
      title: 'Cultivating Self-Compassion',
      description: 'Learning to treat yourself with the kindness you deserve',
      imageUrl: 'https://images.pexels.com/photos/6203493/pexels-photo-6203493.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
            filter: 'brightness(0.7)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 to-charcoal-950/70"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Journey to Self-Love
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A transformative guide to self-reflection and personal growth
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/gallery" 
              className="btn bg-white text-charcoal-900 hover:bg-cream-100"
            >
              Explore the Book
            </Link>
            <Link 
              to="/about" 
              className="btn border border-white/70 hover:bg-white/10"
            >
              About the Author
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </motion.div>
      </section>
      
      {/* Key Chapters */}
      <section className="py-24 bg-cream-50 dark:bg-charcoal-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Key Chapters</h2>
            <p className="text-charcoal-600 dark:text-charcoal-400 max-w-xl mx-auto">
              Discover the transformative insights from the book that have helped thousands redefine their relationship with themselves.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookChapters.map((chapter, index) => (
              <motion.div 
                key={chapter.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to="/gallery" className="block">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-[3/4] bg-charcoal-100 dark:bg-charcoal-800 overflow-hidden">
                      <img 
                        src={chapter.imageUrl} 
                        alt={chapter.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 bg-white dark:bg-charcoal-900">
                      <h3 className="text-xl font-serif mb-2">{chapter.title}</h3>
                      <p className="text-charcoal-600 dark:text-charcoal-400">{chapter.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-accent-600 dark:text-accent-400 font-medium hover:underline"
            >
              Browse All Chapters <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* About the Author */}
      <section className="py-24 bg-cream-100 dark:bg-charcoal-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                About <span className="text-accent-600 dark:text-accent-400">Pascal</span>
              </h2>
              <div className="space-y-4 text-charcoal-700 dark:text-charcoal-300 mb-8">
                <p>
                  Pascal Hintermaier is a renowned mindfulness coach, speaker, and author dedicated to helping people discover their authentic selves through the practice of self-reflection and self-compassion.
                </p>
                <p>
                  Drawing from personal experiences and years of research in psychology and mindfulness practices, Pascal has developed a uniquely accessible approach to self-discovery that has resonated with readers worldwide. "Journey to Self-Love" emerged from his workshops and one-on-one sessions with clients seeking to heal their relationship with themselves.
                </p>
              </div>
              <Link 
                to="/about" 
                className="btn btn-primary inline-flex items-center"
              >
                About the Author <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-[4/5] bg-charcoal-100 dark:bg-charcoal-800 overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/4100657/pexels-photo-4100657.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Pascal Hintermaier, author" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Book Preview CTA */}
      <section className="py-24 bg-accent-600 dark:bg-accent-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Start Your Journey Today
            </h2>
            <p className="max-w-xl mx-auto mb-8">
              Download a free chapter of "Journey to Self-Love" and begin your path to self-discovery and inner peace.
            </p>
            <Link 
              to="/contact" 
              className="btn bg-white text-accent-700 hover:bg-cream-100"
            >
              Get Free Chapter
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Reader Testimonials */}
      <section className="py-24 bg-cream-50 dark:bg-charcoal-950">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Reader Testimonials</h2>
            <p className="text-charcoal-600 dark:text-charcoal-400 max-w-xl mx-auto">
              Discover how "Journey to Self-Love" has transformed the lives of readers around the world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Sarah J.",
                location: "New York",
                quote: "This book completely changed my perspective on self-worth. The practical exercises helped me develop a daily self-care routine that has improved every aspect of my life.",
                avatar: "https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                id: 2,
                name: "Michael T.",
                location: "London",
                quote: "As someone who struggled with negative self-talk for years, the techniques in this book have been transformative. I'm finally learning to be as kind to myself as I am to others.",
                avatar: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                id: 3,
                name: "Elena R.",
                location: "Berlin",
                quote: "Pascal's authentic approach to self-reflection resonated deeply with me. This isn't just another self-help book—it's a compassionate guide to genuine self-discovery.",
                avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white dark:bg-charcoal-900 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-charcoal-500 dark:text-charcoal-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-charcoal-700 dark:text-charcoal-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/about" 
              className="inline-flex items-center text-accent-600 dark:text-accent-400 font-medium hover:underline"
            >
              Read More Reviews <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;