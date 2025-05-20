import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Calendar, FileText, Clock, Check, Download } from 'lucide-react';

// Produkt-Datenstruktur für bessere Wartbarkeit
interface ProductFeature {
  text: string;
  icon?: React.ReactNode;
}

interface Product {
  id: string;
  title: string;
  image?: string;
  icon?: React.ReactNode;
  price: {
    amount: number;
    currency: string;
    discounted?: boolean;
    originalAmount?: number;
    installmentOption?: string;
  };
  description: string;
  format: string;
  features: ProductFeature[];
  ctaText: string;
  ctaLink: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
  comingSoon?: boolean;
  popular?: boolean;
  tag?: string;
}

interface ProductsSectionProps {
  isDesktop: boolean;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ isDesktop }) => {
  // Beispielhafte Produktdaten
  const products: Product[] = [
    {
      id: 'journal',
      title: 'SELFLOVE – Journal',
      image: '/o_1iqqn5jphig91jntdk4b131h8cr.webp',
      price: {
        amount: 13.23,
        currency: '€',
        discounted: true,
        originalAmount: 19.95,
      },
      description: 'Entdecke mit diesem liebevoll gestalteten Selbstliebe-Journal einen sicheren Raum, um deine wahren Bedürfnisse kennenzulernen.',
      format: 'PDF zum Sofort-Download',
      features: [
        { text: '30 Tage Selbstliebe-Übungen', icon: <Calendar size={16} /> },
        { text: 'Persönliche Reflexionsfragen', icon: <FileText size={16} /> },
        { text: 'Praktische Dankbarkeitsrituale', icon: <Check size={16} /> },
        { text: 'Achtsamkeitsübungen für den Alltag', icon: <Clock size={16} /> },
      ],
      ctaText: 'Jetzt kaufen',
      ctaLink: 'https://payhip.com/b/CpoJr',
      ctaSecondary: 'Vorschau ansehen',
      ctaSecondaryLink: 'https://payhip.com/b/CpoJr',
      popular: true,
      tag: 'Bestseller'
    },
    {
      id: 'meditation',
      title: 'Meditationsbundle',
      icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 22v-8h4v8h5V8.93c0-.5-.23-.97-.63-1.29L12 2.589l-6.37 5.05c-.4.32-.63.78-.63 1.29V22h5z" />
      </svg>,
      price: {
        amount: 24.90,
        currency: '€',
      },
      description: 'Fünf professionell aufgenommene Meditationen zu den Themen Klarheit, Selbstliebe, Loslassen, Vertrauen und innere Ruhe.',
      format: 'Audio-Download (MP3)',
      features: [
        { text: '5 geführte Meditationen (je 15-20 Min.)', icon: <FileText size={16} /> },
        { text: 'Hochwertige Klangqualität', icon: <Check size={16} /> },
        { text: 'Für Anfänger und Fortgeschrittene', icon: <Check size={16} /> },
        { text: 'Sofortige Verfügbarkeit nach Kauf', icon: <Download size={16} /> },
      ],
      ctaText: 'Demnächst verfügbar',
      ctaLink: '#',
      comingSoon: true,
      tag: 'Neu'
    },
    {
      id: 'coaching',
      title: '1:1 Einzelcoaching',
      icon: <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>,
      price: {
        amount: 99,
        currency: '€',
        installmentOption: 'Auch als 3-Monats-Paket verfügbar'
      },
      description: 'Persönliche 1:1 Calls für direkte Klarheit zu deinem individuellen Thema mit konkreten nächsten Schritten für mehr Selbstbewusstsein.',
      format: '60 Minuten Online-Session',
      features: [
        { text: 'Individuelle Themenfokussierung', icon: <Check size={16} /> },
        { text: 'Konkrete nächste Schritte', icon: <Check size={16} /> },
        { text: 'Flexible Terminvereinbarung', icon: <Calendar size={16} /> },
        { text: 'Nachbereitung per E-Mail', icon: <FileText size={16} /> },
      ],
      ctaText: 'Termin vereinbaren',
      ctaLink: 'https://tally.so/r/m65xDk',
      ctaSecondary: 'Mehr erfahren',
      ctaSecondaryLink: '#mentoring',
    },
  ];

  // Animation-Varianten für Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      id="course" 
      data-aos="fade-up" 
      style={{ 
        background: '#fff',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Dekorative Elemente */}
      <div 
        className="section-decorative-element"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '5px',
          background: 'var(--gradient-terra)'
        }}
      />
      
      <div style={{ 
        position: 'absolute', 
        top: 40, 
        right: 40, 
        width: 300, 
        height: 300, 
        borderRadius: '50%', 
        background: 'var(--gradient-accent)', 
        filter: 'blur(80px)', 
        opacity: 0.5,
        zIndex: 0
      }} />
      
      <div style={{ maxWidth: isDesktop ? 1200 : 700, margin: '0 auto', padding: 24, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ 
            fontSize: isDesktop ? 42 : 32, 
            fontWeight: 700, 
            marginBottom: 16, 
            color: '#3B3737'
          }}>
            Produkte <span style={{ color: 'var(--terracotta)' }}>für deine Selbstentwicklung</span>
          </h2>
          
          <p style={{ 
            fontSize: isDesktop ? 18 : 16, 
            color: 'var(--text-color)', 
            maxWidth: 700, 
            margin: '0 auto', 
            lineHeight: 1.6 
          }}>
            Entdecke meine sorgfältig entwickelten Produkte, die dich auf deiner Reise zu mehr Selbstliebe und innerer Ruhe begleiten.
            Jedes Angebot wurde mit Herzblut erstellt, um dir praktische Werkzeuge für deinen Alltag zu geben.
          </p>
        </div>
        
        <motion.div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
            gap: isDesktop ? 32 : 40,
            margin: '40px auto'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              style={{ 
                background: 'white',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(156,116,98,0.08)',
                border: '1px solid rgba(156,116,98,0.1)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative'
              }}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 15px 40px rgba(156,116,98,0.15)',
                transition: { duration: 0.3 }
              }}
            >
              {/* Product Tag */}
              {product.tag && (
                <div style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  background: product.popular ? '#D17C6B' : '#5D7F9A',
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '6px 12px',
                  borderRadius: 20,
                  zIndex: 2,
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  textTransform: 'uppercase',
                  letterSpacing: 1
                }}>
                  {product.tag}
                </div>
              )}
              
              {/* Product Image/Icon */}
              <div style={{ 
                padding: '40px 20px 20px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                background: 'var(--gradient-light)',
                minHeight: 200
              }}>
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    style={{ 
                      maxWidth: 180, 
                      maxHeight: 180, 
                      objectFit: 'contain', 
                      borderRadius: 12,
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                    }}
                    loading="lazy"
                  />
                ) : (
                  <div style={{ 
                    width: 120, 
                    height: 120, 
                    background: 'linear-gradient(135deg, #D17C6B, #E6A27C)', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(156,116,98,0.2)'
                  }}>
                    {product.icon}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div style={{ padding: '30px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ 
                  fontSize: 22, 
                  fontWeight: 700, 
                  marginBottom: 8, 
                  color: '#3B3737',
                  lineHeight: 1.3
                }}>
                  {product.title}
                </h3>
                
                {/* Format Badge */}
                <div style={{ 
                  fontSize: 14, 
                  color: '#666', 
                  background: '#f5f5f5', 
                  display: 'inline-block',
                  padding: '4px 12px', 
                  borderRadius: 20,
                  marginBottom: 16
                }}>
                  {product.format}
                </div>
                
                {/* Price Section */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ 
                      fontSize: 28, 
                      fontWeight: 700, 
                      color: 'var(--terracotta)'
                    }}>
                      {product.price.amount}{product.price.currency}
                    </span>
                    
                    {product.price.discounted && product.price.originalAmount && (
                      <span style={{ 
                        fontSize: 16, 
                        textDecoration: 'line-through', 
                        color: '#999',
                        fontWeight: 400
                      }}>
                        {product.price.originalAmount}{product.price.currency}
                      </span>
                    )}
                  </div>
                  
                  {product.price.installmentOption && (
                    <div style={{ 
                      fontSize: 14, 
                      color: '#666', 
                      marginTop: 4 
                    }}>
                      {product.price.installmentOption}
                    </div>
                  )}
                </div>
                
                <p style={{ 
                  fontSize: 16, 
                  lineHeight: 1.6, 
                  marginBottom: 24,
                  flex: 1
                }}>
                  {product.description}
                </p>
                
                {/* Features */}
                <div style={{ marginBottom: 30 }}>
                  {product.features.map((feature, index) => (
                    <div 
                      key={index} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 10, 
                        marginBottom: 8 
                      }}
                    >
                      <div style={{ color: 'var(--terracotta)' }}>
                        {feature.icon || <Check size={16} />}
                      </div>
                      <span style={{ fontSize: 14 }}>{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div style={{ marginTop: 'auto' }}>
                  <a 
                    href={product.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'block',
                      width: '100%',
                      textAlign: 'center',
                      padding: '14px 20px',
                      background: product.comingSoon ? '#999' : 'var(--terracotta)',
                      color: 'white',
                      borderRadius: 12,
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontSize: 16,
                      boxShadow: product.comingSoon ? 'none' : '0 4px 12px rgba(156,116,98,0.2)',
                      transition: 'all 0.3s ease',
                      cursor: product.comingSoon ? 'default' : 'pointer',
                      marginBottom: product.ctaSecondary ? 10 : 0
                    }}
                    onClick={product.comingSoon ? (e) => e.preventDefault() : undefined}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                      {!product.comingSoon && <ShoppingBag size={18} />}
                      {product.ctaText}
                    </span>
                  </a>
                  
                  {product.ctaSecondary && !product.comingSoon && (
                    <a 
                      href={product.ctaSecondaryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        display: 'block',
                        width: '100%',
                        textAlign: 'center',
                        padding: '12px 20px',
                        background: 'transparent',
                        color: 'var(--terracotta)',
                        border: '1px solid var(--terracotta)',
                        borderRadius: 12,
                        fontWeight: 500,
                        textDecoration: 'none',
                        fontSize: 14,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {product.ctaSecondary}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Info */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: 60, 
          maxWidth: 700, 
          margin: '60px auto 0',
          padding: '24px',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: 16,
          boxShadow: '0 4px 16px rgba(156,116,98,0.05)'
        }}>
          <h3 style={{ 
            fontSize: 20, 
            fontWeight: 600, 
            marginBottom: 16, 
            color: '#3B3737' 
          }}>
            Maßgeschneiderte Unterstützung
          </h3>
          <p style={{ 
            fontSize: 16, 
            lineHeight: 1.6, 
            color: 'var(--text-color)' 
          }}>
            Brauchst du individuelle Unterstützung oder ein speziell auf dich zugeschnittenes Programm?
            Kontaktiere mich für eine kostenlose 15-minütige Beratung, um herauszufinden, welches Angebot am besten zu dir passt.
          </p>
          <a
            href="#contact"
            style={{ 
              display: 'inline-block',
              marginTop: 16,
              padding: '10px 24px',
              background: 'transparent',
              color: 'var(--terracotta)',
              border: '2px solid var(--terracotta)',
              borderRadius: 10,
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            Kostenloses Erstgespräch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;