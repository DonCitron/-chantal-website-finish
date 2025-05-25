import React from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, style }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      style={style}
      className="rounded-xl object-cover shadow-md transition-transform duration-300 ease-in-out"
      whileHover={{ scale: 1.03 }}
      loading="lazy"
    />
  );
};

export default ImageCard;