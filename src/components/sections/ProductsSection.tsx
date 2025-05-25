import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, Check } from 'lucide-react';

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
  // We'll only use the coaching product
  const product: Product = {
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
  };

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
            Mein <span style={{ color: 'var(--terracotta)' }}>Coaching-Angebot</span>
          </h2>
          
          <p style={{ 
            fontSize: isDesktop ? 18 : 16, 
            color: 'var(--text-color)', 
            maxWidth: 700, 
            margin: '0 auto', 
            lineHeight: 1.6 
          }}>
            Entdecke, wie persönliches Coaching dir helfen kann, Klarheit zu gewinnen und konkrete 
            Schritte für deine persönliche Weiterentwicklung zu finden. In individuellen Sessions 
            gehen wir auf deine spezifischen Themen ein.
          </p>
        </div>
        
        <motion.div 
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            margin: '40px auto',
            maxWidth: '600px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Single Product Card */}
          <motion.div 
            style={{ 
              background: 'white',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(156,116,98,0.08)',
              border: '1px solid rgba(156,116,98,0.1)',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: 500,
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
            {/* Product Icon */}
            <div style={{ 
              width: '100px', 
              height: '100px', 
              margin: '40px auto 20px',
              background: '#D17C6B20',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D17C6B'
            }}>
              {product.icon}
            </div>
            
            {/* Product Title and Price */}
            <div style={{ textAlign: 'center', padding: '0 24px 24px' }}>
              <h3 style={{ 
                fontSize: 28, 
                fontWeight: 700, 
                marginBottom: 8, 
                color: '#3B3737'
              }}>
                {product.title}
              </h3>
              
              <div style={{ 
                fontSize: 24, 
                fontWeight: 600, 
                color: '#D17C6B',
                marginBottom: 4
              }}>
                ab {product.price.amount} {product.price.currency}
              </div>
              
              <div style={{ 
                fontSize: 14, 
                color: '#3B373795',
                marginBottom: 24
              }}>
                {product.format}
              </div>
              
              <p style={{ 
                fontSize: 16, 
                lineHeight: 1.6, 
                color: '#3B3737', 
                marginBottom: 24 
              }}>
                {product.description}
              </p>
            </div>
            
            {/* Product Features */}
            <div style={{ 
              padding: '0 32px 32px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ marginBottom: 32 }}>
                {product.features.map((feature, index) => (
                  <div 
                    key={index} 
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: 12
                    }}
                  >
                    <div style={{ 
                      width: 24, 
                      height: 24,
                      marginRight: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#D17C6B'
                    }}>
                      {feature.icon}
                    </div>
                    <div style={{ fontSize: 15, color: '#3B3737' }}>
                      {feature.text}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Product CTA */}
              <div style={{ marginTop: 'auto' }}>
                <a 
                  href={product.ctaLink}
                  style={{ 
                    display: 'block',
                    background: '#D17C6B',
                    color: 'white',
                    textAlign: 'center',
                    padding: '14px 0',
                    borderRadius: 8,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={e => e.currentTarget.style.background = '#C06A59'}
                  onMouseOut={e => e.currentTarget.style.background = '#D17C6B'}
                >
                  {product.ctaText}
                </a>
                
                {product.ctaSecondary && (
                  <a 
                    href={product.ctaSecondaryLink}
                    style={{ 
                      display: 'block',
                      textAlign: 'center',
                      padding: '12px 0',
                      marginTop: 12,
                      fontWeight: 500,
                      fontSize: 14,
                      color: '#3B3737',
                      textDecoration: 'none'
                    }}
                  >
                    {product.ctaSecondary}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;