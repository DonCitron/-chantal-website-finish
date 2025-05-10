import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, User, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const exhibition = [
    {
      year: '2023',
      title: 'Transcending Boundaries',
      location: 'Gallery Modern, New York',
      description: 'Solo exhibition featuring latest works exploring abstract landscapes.',
    },
    {
      year: '2022',
      title: 'Color & Emotion',
      location: 'Contemporary Arts Center, Berlin',
      description: 'Group exhibition examining the relationship between color theory and emotional response.',
    },
    {
      year: '2021',
      title: 'New Perspectives',
      location: 'The White Space Gallery, London',
      description: 'Juried exhibition showcasing emerging artists working in mixed media.',
    },
    {
      year: '2020',
      title: 'Light & Shadow',
      location: 'Urban Arts Initiative, Paris',
      description: 'Installation exploring the interplay of light, form, and negative space.',
    },
  ];

  const education = [
    {
      year: '2014-2018',
      degree: 'Master of Fine Arts',
      institution: 'Royal Academy of Art',
      location: 'London',
    },
    {
      year: '2010-2014',
      degree: 'Bachelor of Arts in Studio Art',
      institution: 'University of Creative Arts',
      location: 'Berlin',
    },
  ];

  const awards = [
    {
      year: '2022',
      title: 'Young Artist Award',
      organization: 'International Arts Foundation',
    },
    {
      year: '2021',
      title: 'Excellence in Contemporary Art',
      organization: 'European Culture Council',
    },
    {
      year: '2019',
      title: 'Emerging Talent Grant',
      organization: 'National Arts Trust',
    },
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto px-4 py-12"
    >
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              About <span className="text-accent-600 dark:text-accent-400">Julia Ulrich</span>
            </h1>
            <div className="space-y-4 text-charcoal-700 dark:text-charcoal-300">
              <p>
                Born in 1990 in Vienna, Austria, Julia Ulrich is a contemporary artist whose work explores the boundaries between abstract and figurative art. Working primarily with oil paints, acrylics, and mixed media, she creates layered compositions that invite viewers to contemplate the interplay of color, texture, and emotion.
              </p>
              <p>
                Julia's artistic practice is deeply influenced by her extensive travels throughout Europe and Asia, as well as her background in art history and color theory. Her work often addresses themes of memory, perception, and the subconscious mind.
              </p>
              <p>
                Currently based in Berlin, Julia maintains an active studio practice while exhibiting internationally. Her work is held in private and public collections worldwide.
              </p>
            </div>
            <div className="mt-8">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-charcoal-100 dark:bg-charcoal-800 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7524996/pexels-photo-7524996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Julia Ulrich in her studio" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 p-4 md:p-6 bg-cream-50 dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-700 rounded-lg shadow-lg">
              <h3 className="text-lg md:text-xl font-serif italic">
                "Art is my way of processing the world — it's how I translate emotions and experiences into something tangible."
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-serif font-medium mb-12 text-center"
        >
          Exhibitions & <span className="text-accent-600 dark:text-accent-400">Achievements</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Exhibitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center mb-6">
              <Calendar size={24} className="text-accent-600 dark:text-accent-400 mr-3" />
              <h3 className="text-xl font-serif">Selected Exhibitions</h3>
            </div>
            <div className="space-y-6">
              {exhibition.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border-l-2 border-charcoal-200 dark:border-charcoal-700 pl-4"
                >
                  <span className="text-sm font-medium text-accent-600 dark:text-accent-400 block mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-serif mb-1">{item.title}</h4>
                  <p className="text-sm text-charcoal-600 dark:text-charcoal-400 mb-1">
                    {item.location}
                  </p>
                  <p className="text-sm text-charcoal-700 dark:text-charcoal-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center mb-6">
              <User size={24} className="text-accent-600 dark:text-accent-400 mr-3" />
              <h3 className="text-xl font-serif">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border-l-2 border-charcoal-200 dark:border-charcoal-700 pl-4"
                >
                  <span className="text-sm font-medium text-accent-600 dark:text-accent-400 block mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-serif mb-1">{item.degree}</h4>
                  <p className="text-sm text-charcoal-600 dark:text-charcoal-400 mb-1">
                    {item.institution}
                  </p>
                  <p className="text-sm text-charcoal-700 dark:text-charcoal-300 flex items-center">
                    <MapPin size={14} className="mr-1" /> {item.location}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center mb-6">
              <Award size={24} className="text-accent-600 dark:text-accent-400 mr-3" />
              <h3 className="text-xl font-serif">Awards</h3>
            </div>
            <div className="space-y-6">
              {awards.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border-l-2 border-charcoal-200 dark:border-charcoal-700 pl-4"
                >
                  <span className="text-sm font-medium text-accent-600 dark:text-accent-400 block mb-1">
                    {item.year}
                  </span>
                  <h4 className="text-lg font-serif mb-1">{item.title}</h4>
                  <p className="text-sm text-charcoal-700 dark:text-charcoal-300">
                    {item.organization}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-serif font-medium mb-6">Artist Statement</h2>
          <div className="space-y-4 text-charcoal-700 dark:text-charcoal-300">
            <p className="italic">
              "My work explores the fluid boundary between abstraction and reality, investigating how memories and emotions shape our perception of the world around us."
            </p>
            <p>
              Through layers of paint, texture, and form, I create spaces that invite viewers to engage with their own emotional landscapes. I am fascinated by the interplay between what we see and what we feel—how color can evoke memory, how texture can trigger sensory responses, and how composition can guide or disrupt our emotional journey through a piece.
            </p>
            <p>
              Drawing inspiration from both urban environments and natural landscapes, my work often investigates themes of impermanence, connection, and the delicate balance between chaos and harmony. Each painting is an exploration, a conversation between materials, intention, and intuition.
            </p>
          </div>
        </motion.div>
      </section>
      
      <section id="contact" className="py-16 bg-cream-100 dark:bg-charcoal-800 rounded-xl">
        <div className="max-w-xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-serif font-medium mb-4">Get in Touch</h2>
            <p className="text-charcoal-700 dark:text-charcoal-300">
              For commissions, exhibition inquiries, or to arrange a studio visit, please don't hesitate to reach out.
            </p>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md border border-charcoal-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md border border-charcoal-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-md border border-charcoal-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 rounded-md border border-charcoal-200 dark:border-charcoal-700 bg-white dark:bg-charcoal-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto btn btn-primary"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;