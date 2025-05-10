import React, { useState } from 'react';
import { motion } from 'framer-motion';

type ArtworkCategory = 'all' | 'paintings' | 'installations' | 'mixed-media';

interface Artwork {
  id: number;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  imageUrl: string;
  category: ArtworkCategory[];
}

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  
  const categories: { id: ArtworkCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'paintings', label: 'Paintings' },
    { id: 'installations', label: 'Installations' },
    { id: 'mixed-media', label: 'Mixed Media' },
  ];
  
  const artworks: Artwork[] = [
    {
      id: 1,
      title: 'Emergence I',
      year: '2023',
      medium: 'Oil on canvas',
      dimensions: '100 × 80 cm',
      imageUrl: 'https://images.pexels.com/photos/6443068/pexels-photo-6443068.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: ['paintings'],
    },
    {
      id: 2,
      title: 'Fragments of Memory',
      year: '2022',
      medium: 'Mixed media on panel',
      dimensions: '60 × 60 cm',
      imageUrl: 'https://images.pexels.com/photos/15239104/pexels-photo-15239104/free-photo-of-abstract-expressionist-painting-in-pink-and-green.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: ['mixed-media', 'paintings'],
    },
    {
      id: 3,
      title: 'Spatial Dialogue',
      year: '2021',
      medium: 'Wood, steel, fabric, light',
      dimensions: 'Variable dimensions',
      imageUrl: 'https://images.pexels.com/photos/4134754/pexels-photo-4134754.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: ['installations'],
    },
    {
      id: 4,
      title: 'Luminous Reflection',
      year: '2023',
      medium: 'Acrylic on canvas',
      dimensions: '120 × 100 cm',
      imageUrl: 'https://images.pexels.com/photos/6724841/pexels-photo-6724841.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: ['paintings'],
    },
    {
      id: 5,
      title: 'Ephemeral Boundaries',
      year: '2022',
      medium: 'Mixed media installation',
      dimensions: 'Site-specific',
      imageUrl: 'https://images.pexels.com/photos/3705935/pexels-photo-3705935.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: ['installations', 'mixed-media'],
    },
    {
      id: 6,
      title: 'Chromatic Field Study',
      year: '2021',
      medium: 'Oil and acrylic on canvas',
      dimensions: '90 × 90 cm',
      imageUrl: 'https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: ['paintings'],
    },
    {
      id: 7,
      title: 'Neural Pathways',
      year: '2022',
      medium: 'Paper, thread, acrylic on wood panel',
      dimensions: '70 × 50 cm',
      imageUrl: 'https://images.pexels.com/photos/6459778/pexels-photo-6459778.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: ['mixed-media'],
    },
    {
      id: 8,
      title: 'Resonance',
      year: '2023',
      medium: 'Sound, light, fabric installation',
      dimensions: 'Variable dimensions',
      imageUrl: 'https://images.pexels.com/photos/12814950/pexels-photo-12814950.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: ['installations'],
    },
    {
      id: 9,
      title: 'Liminal Space',
      year: '2021',
      medium: 'Oil on linen',
      dimensions: '110 × 95 cm',
      imageUrl: 'https://images.pexels.com/photos/16490636/pexels-photo-16490636/free-photo-of-brush-strokes-of-black-orange-and-white-paint.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: ['paintings'],
    },
  ];
  
  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(artwork => artwork.category.includes(selectedCategory));

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
      <section className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-serif font-medium mb-6 text-center"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-2xl mx-auto text-charcoal-700 dark:text-charcoal-300"
        >
          Explore a selection of Julia's works spanning various mediums and themes. 
          Each piece reflects her unique approach to color, form, and composition.
        </motion.p>
      </section>
      
      {/* Filter Categories */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex justify-center flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category.id
                  ? 'bg-accent-600 text-white'
                  : 'bg-cream-100 text-charcoal-600 hover:bg-cream-200 dark:bg-charcoal-800 dark:text-charcoal-300 dark:hover:bg-charcoal-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </motion.section>
      
      {/* Gallery Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredArtworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer bg-white dark:bg-charcoal-900 group"
            onClick={() => setSelectedArtwork(artwork)}
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-serif font-medium">{artwork.title}</h3>
              <p className="text-sm text-charcoal-600 dark:text-charcoal-400">
                {artwork.year} • {artwork.medium}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>
      
      {/* Artwork Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-charcoal-900 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-charcoal-800/80 rounded-full p-2 hover:bg-white dark:hover:bg-charcoal-700"
              onClick={() => setSelectedArtwork(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[50vh] md:h-[70vh] overflow-hidden bg-cream-100 dark:bg-charcoal-800">
                <img 
                  src={selectedArtwork.imageUrl} 
                  alt={selectedArtwork.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[70vh] flex flex-col">
                <h2 className="text-2xl font-serif font-medium mb-2">{selectedArtwork.title}</h2>
                <p className="text-charcoal-500 dark:text-charcoal-400 mb-4">{selectedArtwork.year}</p>
                
                <div className="space-y-4 mb-6 text-charcoal-700 dark:text-charcoal-300">
                  <p>
                    {selectedArtwork.medium}<br />
                    {selectedArtwork.dimensions}
                  </p>
                  <p>
                    This piece explores themes of memory, perception, and the fluid boundaries between reality and abstraction.
                    Through layered composition and careful attention to color relationships, the work invites viewers to engage
                    with their own emotional responses and create personal narratives.
                  </p>
                </div>
                
                <div className="mt-auto">
                  <h3 className="text-lg font-serif mb-2">Inquire about this artwork</h3>
                  <a 
                    href="/contact" 
                    className="btn btn-primary block text-center"
                  >
                    Contact Gallery
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryPage;