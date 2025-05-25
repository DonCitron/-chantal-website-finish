import React, { useEffect, useState, CSSProperties } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ImageCard from '../components/ui/ImageCard'; // Import ImageCard component

const sectionStyle = {
  padding: '80px 0',
  background: 'var(--section-bg, #fff)',
};

const sectionAltStyle = {
  padding: '80px 0',
  background: 'var(--section-bg-alt, #f7f7f7)',
};

const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" fill="#1DB954" />
    <path d="M8 15c2.5-1 5.5-1 8 0" stroke="#fff" strokeWidth="1.5" />
    <path d="M9 12c2-0.7 4-0.7 6 0" stroke="#fff" strokeWidth="1.5" />
    <path d="M10 9.5c1.3-0.3 2.7-0.3 4 0" stroke="#fff" strokeWidth="1.2" />
  </svg>
);

const LinktreeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20" />
    <path d="M17 7l-5 5-5-5" />
    <path d="M17 17l-5-5-5 5" />
  </svg>
);

// Testimonial interface
interface Testimonial {
  quote: string;
  author: string;
  image?: string;
}

// Wiederverwendbare Styles für Produktbox und Button
const productBoxStyle = (isDesktop: boolean): CSSProperties => ({
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: 16,
  padding: isDesktop ? 24 : 16,
  boxShadow: '0 8px 24px rgba(156,116,98,0.1)',
  transition: 'transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1)',
  textAlign: 'center' as const,
  display: 'flex' as const,
  flexDirection: 'column' as const,
  alignItems: 'center' as const,
  maxWidth: isDesktop ? 400 : '100%',
  width: '100%',
  minWidth: 0,
  cursor: 'pointer'
});

const productButtonStyle = (isDesktop: boolean): CSSProperties => ({
  display: 'inline-block',
  background: '#D17C6B',
  color: '#fff',
  padding: isDesktop ? '10px 20px' : '10px 0',
  borderRadius: 8,
  textDecoration: 'none',
  fontWeight: 600,
  marginTop: 'auto',
  width: isDesktop ? 'auto' : '100%',
  outline: 'none',
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.1s',
});

const LandingPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      quote: "Das Mentoring hat mir geholfen, mich selbst wiederzufinden. Ich fühle mich gestärkt und verstanden.",
      author: "Sophia K."
    },
    {
      quote: "Ich hatte seit Jahren mit Selbstzweifeln zu kämpfen. Durch Chantals Mentoring habe ich gelernt, mich selbst wieder zu schätzen.",
      author: "Markus B."
    },
    {
      quote: "Ein Wendepunkt in meinem Leben. Chantal hat mir gezeigt, wie ich in schwierigen Zeiten das Positive sehen kann.",
      author: "Laura M."
    }
  ];

  // Smooth scroll helper
  const handleNavScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => { 
    AOS.init({ 
      once: true, 
      duration: 800, 
      offset: 80,
      easing: 'ease-in-out' 
    }); 
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 1024;

  // Darkmode-Status ermitteln
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'hidden', paddingTop: 0 }} role="main">
      {/* Social Icons oben links - nur Desktop */}
      <div
        className="desktop-social-icons"
        style={{ 
          position: 'fixed', 
          top: 120, 
          left: 24, 
          zIndex: 100, 
          display: isDesktop ? 'flex' : 'none', 
          flexDirection: 'column', 
          gap: 24,
          background: 'rgba(244, 239, 233, 0.6)',
          padding: '16px 12px',
          borderRadius: '30px',
          backdropFilter: 'blur(4px)'
        }}
      >
        <a 
          href="http://open.spotify.com/show/5aXhid2UTtgioftEV7ESPa" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Spotify" 
          style={{ 
            color: '#3B3737',
            transition: 'transform 0.2s ease',
            transform: 'scale(1.2)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.4)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        >
          <SpotifyIcon />
        </a>
        <a 
          href="https://www.instagram.com/chantiheulleise/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram" 
          style={{ 
            color: '#3B3737',
            transition: 'transform 0.2s ease',
            transform: 'scale(1.2)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.4)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        >
          <Instagram size={32} />
        </a>
        <a 
          href="https://linktr.ee/chantiheulleise" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Linktree" 
          style={{ 
            color: '#3B3737',
            transition: 'transform 0.2s ease',
            transform: 'scale(1.2)'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.4)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        >
          <LinktreeIcon style={{ width: 32, height: 32 }} />
        </a>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        data-aos="fade-up"
        className="hero-section" // Using the new CSS class
      >
        <div className="hero-image-container"> {/* Using the new CSS class */}
          <img
            src="/WhatsApp Image 2025-05-19 at 20.37.49.jpeg"
            alt="Abstraktes Gold-Weiß Bild mit künstlerischen Pinselstrichen"
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              zIndex: 1, 
              filter: 'brightness(1.05) saturate(1.05)',
              transition: 'transform 8s ease-in-out',
              animation: 'subtle-zoom 15s infinite alternate'
            }}
            loading="lazy"
          />
        </div>
        <div 
          className="hero-overlay"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'rgba(35,35,38,0.65)', 
            zIndex: 2 
          }} 
        />
        <div 
          style={{ 
            position: 'relative', 
            zIndex: 3, 
            width: '100%', 
            maxWidth: 900, 
            margin: '0 auto', 
            textAlign: 'center', 
            padding: '48px 16px' 
          }}
        >
          <h1 
            className="hero-heading"
            style={{ 
              fontSize: isDesktop ? 72 : 44, 
              fontWeight: 700, 
              marginBottom: 16, 
              letterSpacing: -1, 
              color: '#FFFFFF', 
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              animation: 'fade-in 1s ease-out'
            }}
          >
            Open Mind Circle
          </h1>
          <p 
            className="hero-subtitle"
            style={{ 
              fontSize: isDesktop ? 26 : 20, 
              fontWeight: 400, 
              marginBottom: 32, 
              color: '#FFFFFF', 
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              lineHeight: 1.5,
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}
          >
            Hier beginnt deine Reise zu mehr Leichtigkeit, Tiefe und Selbstvertrauen.
          </p>
          <div style={{ 
            display: 'flex', 
            flexDirection: isDesktop ? 'row' : 'column', 
            gap: 16, 
            alignItems: 'center', 
            justifyContent: 'center', 
            maxWidth: isDesktop ? '100%' : '320px', 
            margin: '0 auto' 
          }}
          >
            <a
              href="#mentoring"
              onClick={handleNavScroll('mentoring')}
              style={{ 
                background: '#D17C6B', 
                color: '#fff', 
                fontWeight: 600, 
                fontSize: isDesktop ? 20 : 18, 
                border: 'none', 
                borderRadius: 12, 
                padding: isDesktop ? '16px 32px' : '14px 0', 
                width: isDesktop ? 'auto' : '100%', 
                textDecoration: 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)', 
                letterSpacing: 0.2, 
                textShadow: '0 1px 4px rgba(44,44,44,0.10)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
            >
              Positive Mind Mentoring
            </a>
            <a
              href="#ueber-mich"
              onClick={handleNavScroll('ueber-mich')}
              style={{ 
                background: 'rgba(255,255,255,0.2)', 
                color: '#FFFFFF', 
                fontWeight: 600, 
                fontSize: isDesktop ? 20 : 18, 
                border: '2px solid #FFFFFF', 
                borderRadius: 12, 
                padding: isDesktop ? '14px 32px' : '12px 0', 
                width: isDesktop ? 'auto' : '100%', 
                textDecoration: 'none', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)', 
                letterSpacing: 0.2,
                textShadow: '0 1px 4px rgba(44,44,44,0.10)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
              }}
            >
              Über mich
            </a>
          </div>
        </div>
      </section>

      {/* Über mich Section */}
      <section 
        id="ueber-mich" 
        data-aos="fade-up" 
        style={{ 
          background: 'var(--gradient-light)',
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
          <h2 style={{ 
            fontSize: isDesktop ? 36 : 28, 
            fontWeight: 700, 
            marginBottom: 48, 
            color: '#3B3737',
            textAlign: 'center'
          }}>Gründerin & Begleiterin: <span style={{ color: 'var(--terracotta)' }}>Chantal Röth</span></h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/headerpicture.jpg"
                alt="Portrait von Chantal Röth, freundlicher Blick, rote Haare, weißer Pullover"
                className="rounded-3xl w-full max-w-md object-cover"
                style={{
                  aspectRatio: '1/1',
                }}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16, color: '#3B3737' }}>Ich bin Chantal – ehrlich, direkt und gleichzeitig ein sicherer Raum.</h2>
              <p style={{ fontSize: 18, color: '#3B3737', marginBottom: 16, lineHeight: 1.6 }}>
                Früher habe ich mich selbst klein gemacht, oft angepasst und gelächelt, obwohl ich innerlich zerrüttet war. Heute stehe ich da, wo ich andere begleiten möchte: in meiner Wahrheit.
              </p>
              <p style={{ fontSize: 18, color: '#3B3737', marginBottom: 16, lineHeight: 1.6 }}>
                Ich habe jahrelang als Pflegekraft gearbeitet – mitten im System, mitten im Schmerz anderer. Und irgendwann gemerkt: Ich habe mich selbst vergessen.
              </p>
              <p style={{ fontSize: 18, color: '#3B3737', marginBottom: 16, lineHeight: 1.6 }}>
                Heute begleite ich Menschen, die sich wieder spüren wollen. Die sich nicht länger anpassen wollen, sondern echt leben.
              </p>
              <p style={{ fontSize: 18, color: '#3B3737', marginBottom: 16, lineHeight: 1.6 }}>
                Was mich besonders macht? Ich spiele keine Rolle mehr. Ich zeige mich, wie ich bin – mit Herz, mit Klartext und mit dem festen Glauben, dass Veränderung möglich ist, wenn du sie willst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bildergalerie - neue Sektion */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: isDesktop ? 1200 : '100%', margin: '0 auto', padding: isDesktop ? '0 24px' : 0 }}>
          <div style={{ 
            display: 'flex', 
            gap: isDesktop ? 24 : 12, 
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 24
          }}>
            <ImageCard
              src="/DA94D674-CA3B-42BF-A9F9-9797B1AA5426.jpg"
              alt="Abstraktes Werk 1"
              style={{ width: isDesktop ? '340px' : '300px', height: isDesktop ? '300px' : '250px' }}
            />
            <ImageCard
              src="/IMG_0717.jpg"
              alt="Frau mit Schmetterlingen"
              style={{ width: isDesktop ? '340px' : '300px', height: isDesktop ? '300px' : '250px' }}
            />
            <ImageCard
              src="/IMG_5214.jpg"
              alt="Porträt Collage"
              style={{ width: isDesktop ? '340px' : '300px', height: isDesktop ? '300px' : '250px' }}
            />
          </div>
        </div>
      </section>


      {/* Positive Mind Mentoring Section */}
      <section 
        id="mentoring" 
        data-aos="fade-up" 
        style={{ 
          background: 'var(--gradient-accent)', 
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: isDesktop ? 1000 : 700, margin: '0 auto', padding: 24 }}>
          <h2 style={{ 
            fontSize: isDesktop ? 42 : 32, 
            fontWeight: 700, 
            marginBottom: 24, 
            color: '#3B3737',
            textAlign: 'center'
          }}>Positive Mind Mentoring – <span style={{ color: 'var(--terracotta)' }}>4 Wochen</span> für dein inneres Leuchten.</h2>
          
          <p style={{ 
            fontSize: isDesktop ? 20 : 18, 
            color: '#3B3737', 
            marginBottom: 40,
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 40px',
            fontWeight: 500
          }}>
            Dieses Mentoring ist für dich, wenn du weißt, dass da mehr in dir steckt – aber du gerade keinen Zugang findest.
          </p>
          
          <div style={{ 
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            gap: 40,
            alignItems: 'stretch',
            justifyContent: 'center',
            marginBottom: 48
          }}>
            <div style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 8px 24px rgba(156,116,98,0.1)',
              minHeight: '100%'
            }}>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16, color: '#D17C6B' }}>Was dich erwartet</h3>
              <ul style={{ 
                paddingLeft: 20, 
                fontSize: isDesktop ? 18 : 16, 
                color: '#3B3737',
                lineHeight: 1.7,
                height: '100%'
              }}>
                <li style={{ marginBottom: 12 }}>•⁠  ⁠Tägliche Impulse – ehrlich, motivierend, individuell (als Sprachnachricht oder Text)</li>
                <li style={{ marginBottom: 12 }}>•⁠  ⁠4 persönliche 1:1 Calls – mit Raum für alles, was dich bewegt</li>
                <li style={{ marginBottom: 12 }}>•⁠  ⁠Kleine Tanzsessions in den Calls – um dich zu lockern, zu spüren, dich lebendig zu fühlen</li>
                <li style={{ marginBottom: 12 }}>•⁠  ⁠Begleitende Meditationen – für mehr Klarheit, Ruhe und Verbindung zu dir</li>
                <li style={{ marginBottom: 12 }}>•⁠  ⁠Alltagstaugliche Körper- und Mindsetübungen</li>
                <li>•⁠  ⁠Eine persönliche gemeinsame Abschlussreflexion – ehrlich, wertschätzend, stärkend</li>
              </ul>
            </div>
            
            <div style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 8px 24px rgba(156,116,98,0.1)',
              minHeight: '100%'
            }}>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16, color: '#D17C6B' }}>Das wirst du erleben</h3>
              <ul style={{ 
                paddingLeft: 20, 
                fontSize: isDesktop ? 18 : 16, 
                color: '#3B3737',
                lineHeight: 1.7,
                height: '100%'
              }}>
                <li style={{ marginBottom: 12 }}>• Mehr Verbindung zu dir selbst und deinen wahren Bedürfnissen</li>
                <li style={{ marginBottom: 12 }}>• Ein gestärktes Selbstbewusstsein und Selbstwertgefühl</li>
                <li style={{ marginBottom: 12 }}>• Strategien, um auch in herausfordernden Situationen positiv zu bleiben</li>
                <li style={{ marginBottom: 12 }}>• Praktische Werkzeuge für mehr Achtsamkeit im Alltag</li>
                <li style={{ marginBottom: 12 }}>• Die Fähigkeit, Vergangenes loszulassen und nach vorne zu schauen</li>
                <li>• Eine neue Perspektive, die dir erlaubt, in allem das Gute zu sehen</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <a
              href="https://tally.so/r/m65xDk"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block', 
                background: '#D17C6B', 
                color: '#fff', 
                fontWeight: 700, 
                fontSize: isDesktop ? 22 : 20, 
                border: 'none', 
                borderRadius: 12, 
                padding: isDesktop ? '18px 48px' : '16px 32px', 
                textDecoration: 'none', 
                boxShadow: '0 8px 20px rgba(156,116,98,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(156,116,98,0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#D17C6B';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(156,116,98,0.2)';
              }}
            >
              Jetzt unverbindlich anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" data-aos="fade-up"
        style={{
          background: isDarkMode ? '#232326' : 'linear-gradient(135deg, #d98c7a 0%, #eeb18c 100%)',
          padding: isDesktop ? '80px 0' : '48px 0',
          minHeight: 400,
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: isDesktop ? 24 : '0 8px', textAlign: 'center' }}>
          <h2 style={{ fontSize: isDesktop ? 44 : 28, fontWeight: 700, marginBottom: isDesktop ? 48 : 28, color: isDarkMode ? '#F8F5F2' : '#fff', letterSpacing: '-1px' }}>
            Kundenfeedback
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            loop={true}
            style={{ paddingBottom: 40, maxWidth: 800, margin: '0 auto' }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div style={{
                  background: isDarkMode ? '#18181b' : '#fff',
                  color: isDarkMode ? '#F8F5F2' : '#232326',
                  padding: isDesktop ? '56px 56px 40px 56px' : '32px 12px 28px 12px',
                  borderRadius: 24,
                  boxShadow: isDarkMode ? '0 8px 40px rgba(0,0,0,0.18)' : '0 8px 40px rgba(156,116,98,0.18)',
                  minHeight: isDesktop ? 260 : 180,
                  maxWidth: 700,
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                  <p style={{ fontSize: isDesktop ? 22 : 17, fontStyle: 'italic', marginBottom: 28, color: isDarkMode ? '#F8F5F2' : '#232326', lineHeight: 1.6, textAlign: 'center', maxWidth: 600 }}>
                    {testimonial.quote}
                  </p>
                  <div style={{ width: '100%', textAlign: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#D17C6B', fontSize: isDesktop ? 20 : 16 }}>
                      – {testimonial.author}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Custom Swiper Styles */}
        <style>{`
          .swiper-button-next, .swiper-button-prev {
            color: #fff;
            top: 50%;
            width: 48px;
            height: 48px;
            margin-top: -24px;
            border-radius: 50%;
            background: rgba(255,255,255,0.18);
            box-shadow: 0 2px 8px rgba(156,116,98,0.10);
            transition: background 0.2s, color 0.2s;
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            background: #D17C6B;
            color: #fff;
          }
          .swiper-pagination-bullets {
            bottom: 0 !important;
          }
          .swiper-pagination-bullet {
            background: #fff;
            opacity: 0.7;
            width: 12px;
            height: 12px;
            margin: 0 4px !important;
            transition: background 0.2s, opacity 0.2s;
          }
          .swiper-pagination-bullet-active {
            background: #D17C6B;
            opacity: 1;
          }
        `}</style>
      </section>

      {/* Course Section (Weitere Produkte) */}
      <section 
        id="course" 
        data-aos="fade-up" 
        style={{ 
          background: '#fff',
          padding: isDesktop ? '80px 0' : '48px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="dark:bg-[#232326]"
      >
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
        
        <div style={{ maxWidth: isDesktop ? 1000 : '98%', margin: '0 auto', padding: isDesktop ? 24 : '0 8px' }}>
          <h2 style={{ 
            fontSize: isDesktop ? 36 : 24, 
            fontWeight: 700, 
            marginBottom: isDesktop ? 40 : 24, 
            color: '#3B3737', 
            textAlign: 'center' 
          }}
          className="dark:text-white"
          >Weitere <span style={{ color: 'var(--terracotta)' }}>Produkte</span></h2>
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            margin: isDesktop ? '40px auto' : '24px auto',
            flexDirection: isDesktop ? 'row' : 'column',
            alignItems: 'center',
            gap: isDesktop ? 0 : 16
          }}>
            {/* Nur SELFLOVE Journal */}
            <div 
              style={{ 
                background: isDarkMode ? 'rgba(35,35,38,0.95)' : 'rgba(255, 255, 255, 0.8)',
                borderRadius: 16,
                padding: isDesktop ? 24 : 16,
                boxShadow: '0 8px 24px rgba(156,116,98,0.1)',
                textAlign: 'center' as const,
                display: 'flex' as const,
                flexDirection: 'column' as const,
                alignItems: 'center' as const,
                maxWidth: isDesktop ? 400 : '100%',
                width: '100%',
                minWidth: 0,
                cursor: 'pointer'
              }}
              className="dark:bg-[#232326] dark:backdrop-blur-md group"
              tabIndex={0}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(156,116,98,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(156,116,98,0.1)';
              }}
              onFocus={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(156,116,98,0.13)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(156,116,98,0.1)';
              }}
            >
              <img 
                src="/o_1iqqn5jphig91jntdk4b131h8cr.webp" 
                alt="Cover des SELFLOVE Journals: Aquarellbild mit Herz und sanften Farben" 
                style={{ 
                  width: isDesktop ? 220 : '100%', 
                  maxWidth: 300,
                  borderRadius: 12, 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.10)', 
                  marginBottom: 20 
                }} 
                loading="lazy" 
              />
              <h3 style={{ fontSize: isDesktop ? 22 : 18, fontWeight: 700, marginBottom: 8, color: '#3B3737' }} className="dark:text-white">SELFLOVE – Journal</h3>
              <p style={{ fontSize: isDesktop ? 20 : 17, color: '#D17C6B', fontWeight: 600, marginBottom: 12 }} className="dark:text-[#F1B6A6]">13,23 €</p>
              <p style={{ fontSize: 16, color: '#888', marginBottom: 16 }} className="dark:text-gray-400">PDF zum Sofort-Download</p>
              <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 20, color: '#3B3737' }} className="dark:text-white">
                Entdecke mit diesem liebevoll gestalteten Selbstliebe-Journal einen sicheren Raum, um dich selbst besser kennenzulernen.
              </p>
              <a 
                href="https://payhip.com/b/CpoJr" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={productButtonStyle(isDesktop)}
                className="dark:bg-[#F1B6A6] dark:text-[#232326] focus:outline-none focus:ring-2 focus:ring-[#D17C6B] hover:bg-[#b86a5c] dark:hover:bg-[#e6a08a] hover:underline"
                role="button"
                aria-label="SELFLOVE Journal jetzt ansehen und kaufen (externer Link)"
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    window.open('https://payhip.com/b/CpoJr', '_blank');
                  }
                }}
                onMouseDown={e => {
                  e.currentTarget.style.transform = 'scale(0.97)';
                }}
                onMouseUp={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                onBlur={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Jetzt ansehen & kaufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" data-aos="fade-up">
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: 24,
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          gap: isDesktop ? 48 : 32,
          alignItems: 'flex-start',
          background: isDarkMode ? '#18181b' : 'rgba(255,255,255,0.85)',
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(156,116,98,0.10)'
        }}>
          {/* Linke Seite: Text & Bild */}
          <div style={{ flex: 1, minWidth: 320, background: isDarkMode ? '#232326' : 'rgba(255,255,255,0.85)', color: isDarkMode ? '#F8F5F2' : '#3B3737', borderRadius: 18, padding: isDesktop ? 40 : 24, marginRight: isDesktop ? 24 : 0 }}>
            <h2 style={{ fontSize: isDesktop ? 40 : 28, fontWeight: 700, marginBottom: 16, color: isDarkMode ? '#F8F5F2' : '#3B3737', letterSpacing: '-1px' }}>
              Kontakt<span style={{ color: '#D17C6B' }}>.</span>
            </h2>
            <p style={{ fontSize: 20, color: isDarkMode ? '#F8F5F2' : '#3B3737', marginBottom: 32, lineHeight: 1.6 }}>
              Du hast Fragen zum Open Mind Circle oder zum Kurs? Brauchst Unterstützung oder möchtest kooperieren? Fülle das Formular aus und ich melde mich schnellstmöglich bei dir.
            </p>
            <img
              src="/assets/designs/auge.png"
              alt="Auge gemalt, Träne, Kunst"
              style={{
                width: '100%',
                maxWidth: 420,
                borderRadius: 18,
                boxShadow: '0 4px 18px rgba(156,116,98,0.13)',
                marginBottom: 8
              }}
            />
          </div>
          {/* Rechte Seite: Formular */}
          <div style={{ flex: 1, minWidth: 320, background: isDarkMode ? '#232326' : '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(156,116,98,0.07)', padding: isDesktop ? 40 : 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <form action="https://formspree.io/f/mrgnewza" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: 18, fontWeight: 500, marginBottom: 8, color: isDarkMode ? '#F8F5F2' : '#555' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: 12,
                    fontSize: 16,
                    border: `1px solid ${isDarkMode ? '#D17C6B' : '#ccc'}`,
                    borderRadius: 8,
                    background: isDarkMode ? '#18181b' : '#fff',
                    color: isDarkMode ? '#F8F5F2' : '#232326',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = '#D17C6B';
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(209,124,107,0.3)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = isDarkMode ? '#D17C6B' : '#ccc';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: 18, fontWeight: 500, marginBottom: 8, color: isDarkMode ? '#F8F5F2' : '#555' }}>E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: 12,
                    fontSize: 16,
                    border: `1px solid ${isDarkMode ? '#D17C6B' : '#ccc'}`,
                    borderRadius: 8,
                    background: isDarkMode ? '#18181b' : '#fff',
                    color: isDarkMode ? '#F8F5F2' : '#232326',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = '#D17C6B';
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(209,124,107,0.3)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = isDarkMode ? '#D17C6B' : '#ccc';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: 18, fontWeight: 500, marginBottom: 8, color: isDarkMode ? '#F8F5F2' : '#555' }}>Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: 12,
                    fontSize: 16,
                    border: `1px solid ${isDarkMode ? '#D17C6B' : '#ccc'}`,
                    borderRadius: 8,
                    background: isDarkMode ? '#18181b' : '#fff',
                    color: isDarkMode ? '#F8F5F2' : '#232326',
                    resize: 'vertical',
                    transition: 'border-color 0.3s, box-shadow 0.3s'
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = '#D17C6B';
                    e.currentTarget.style.boxShadow = '0 0 8px rgba(209,124,107,0.3)';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = isDarkMode ? '#D17C6B' : '#ccc';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  background: '#D17C6B',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 18,
                  border: 'none',
                  borderRadius: 8,
                  padding: '14px 24px',
                  cursor: 'pointer',
                  marginTop: 8,
                  transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.backgroundColor = '#b86a5c';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(209,124,107,0.4)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.backgroundColor = '#D17C6B';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(156,116,98,0.2)';
                }}
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes subtle-zoom {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.03);
            }
          }

          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .hero-section {
            position: relative;
            height: 100vh; /* Adjust as needed */
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            overflow: hidden;
          }

          .hero-image-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hero-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* Adjust overlay color and opacity */
            z-index: 1;
          }

          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 900px;
            margin: 0 auto;
            padding: 48px 16px;
          }

          .hero-heading {
            font-size: 72px; /* Adjust as needed */
            font-weight: 700;
            margin-bottom: 16px;
            letter-spacing: -1px;
            color: #FFFFFF;
            text-shadow: 0 2px 8px rgba(0,0,0,0.3);
            animation: fade-in 1s ease-out;
          }

          .hero-subtitle {
            font-size: 26px; /* Adjust as needed */
            font-weight: 400;
            margin-bottom: 32px;
            color: #FFFFFF;
            text-shadow: 0 2px 8px rgba(0,0,0,0.3);
            line-height: 1.5;
            max-width: 700px;
            margin: 0 auto 40px;
          }

          .desktop-social-icons {
            position: fixed;
            top: 120px; /* Adjust as needed */
            left: 24px; /* Adjust as needed */
            z-index: 100;
            display: flex;
            flex-direction: column;
            gap: 24px;
            background: rgba(244, 239, 233, 0.6); /* Adjust background */
            padding: 16px 12px;
            border-radius: 30px;
            backdrop-filter: blur(4px);
          }

          .desktop-social-icons a {
            color: #3B3737; /* Adjust icon color */
            transition: transform 0.2s ease;
          }

          .desktop-social-icons a:hover {
            transform: scale(1.4);
          }

          @media (max-width: 1023px) {
            .hero-heading {
              font-size: 44px; /* Adjust for mobile */
            }
            .hero-subtitle {
              font-size: 20px; /* Adjust for mobile */
            }
            .desktop-social-icons {
              display: none; /* Hide on mobile */
            }
          }
        `
      }} />
    </div>
  );
};

export default LandingPage;