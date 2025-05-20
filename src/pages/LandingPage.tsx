import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        style={{ 
          position: 'relative', 
          width: '100%', 
          minHeight: '90vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: 0, 
          margin: 0 
        }}
      >
        <div className="hero-image-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
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
            background: document.documentElement.classList.contains('dark') ? 'rgba(35,35,38,0.82)' : 'rgba(255,255,255,0.32)', 
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
              color: '#3B3737', 
              textShadow: '0 2px 8px rgba(244,239,233,0.18)',
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
              color: '#3B3737', 
              textShadow: '0 2px 8px rgba(244,239,233,0.18)',
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
          }}>
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
                boxShadow: '0 4px 12px rgba(156,116,98,0.2)', 
                letterSpacing: 0.2, 
                textShadow: '0 1px 4px rgba(44,44,44,0.10)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(156,116,98,0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(156,116,98,0.2)';
              }}
            >
              Positive Mind Mentoring
            </a>
            <a
              href="#ueber-mich"
              onClick={handleNavScroll('ueber-mich')}
              style={{ 
                background: 'rgba(255,255,255,0.85)', 
                color: '#D17C6B', 
                fontWeight: 600, 
                fontSize: isDesktop ? 20 : 18, 
                border: '2px solid #D17C6B', 
                borderRadius: 12, 
                padding: isDesktop ? '14px 32px' : '12px 0', 
                width: isDesktop ? 'auto' : '100%', 
                textDecoration: 'none', 
                boxShadow: '0 4px 12px rgba(156,116,98,0.1)', 
                letterSpacing: 0.2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(156,116,98,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(156,116,98,0.1)';
              }}
            >
              Über mich
            </a>
          </div>

          <div 
            className="scroll-indicator" 
            style={{ 
              position: 'absolute', 
              bottom: 40, 
              left: '50%', 
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              animation: 'bounce 2s infinite',
              cursor: 'pointer'
            }}
            onClick={handleNavScroll('ueber-mich')}
          >
            <p style={{ fontSize: 14, marginBottom: 8, color: '#3B3737' }}>Scroll</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B3737" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"></path>
              <path d="M18 13l-6 6-6-6"></path>
            </svg>
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
          
          <div style={{ 
            display: 'flex', 
            flexDirection: isDesktop ? 'row' : 'column', 
            alignItems: 'center', 
            gap: isDesktop ? 60 : 32 
          }}>
            <img
              src="/headerpicture.jpg"
              alt="Portrait von Chantal Röth, freundlicher Blick, rote Haare, weißer Pullover"
              style={{ 
                width: isDesktop ? 360 : 320, 
                height: isDesktop ? 440 : 400, 
                objectFit: 'cover', 
                borderRadius: 24, 
                boxShadow: '0 8px 24px rgba(156,116,98,0.2)',
                transform: isDesktop ? 'rotate(-2deg)' : 'none'
              }}
              loading="lazy"
            />
            <div>
              <p style={{ 
                fontSize: isDesktop ? 18 : 16, 
                lineHeight: isDesktop ? 1.7 : 1.5, 
                color: 'var(--text-color)',
                marginBottom: 16
              }}>
                Ich bin Chantal – ehrlich, direkt und gleichzeitig ein sicherer Raum.
              </p>
              <p style={{ 
                fontSize: isDesktop ? 18 : 16, 
                lineHeight: isDesktop ? 1.7 : 1.5, 
                color: 'var(--text-color)',
                marginBottom: 16
              }}>
                Früher habe ich mich selbst klein gemacht, oft angepasst und gelächelt, obwohl ich innerlich zerrüttet war. Heute stehe ich da, wo ich andere begleiten möchte: in meiner Wahrheit.
              </p>
              <p style={{ 
                fontSize: isDesktop ? 18 : 16, 
                lineHeight: isDesktop ? 1.7 : 1.5, 
                color: 'var(--text-color)',
                marginBottom: 16
              }}>
                Ich habe jahrelang als Pflegekraft gearbeitet – mitten im System, mitten im Schmerz anderer. Und irgendwann gemerkt: Ich habe mich selbst vergessen.
              </p>
              <p style={{ 
                fontSize: isDesktop ? 18 : 16, 
                lineHeight: isDesktop ? 1.7 : 1.5, 
                color: 'var(--text-color)',
                marginBottom: 16
              }}>
                Heute begleite ich Menschen, die sich wieder spüren wollen. Die sich nicht länger anpassen wollen, sondern echt leben.
              </p>
              <p style={{ 
                fontSize: isDesktop ? 18 : 16, 
                lineHeight: isDesktop ? 1.7 : 1.5, 
                color: 'var(--text-color)',
                marginBottom: 16,
                fontWeight: 500
              }}>
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
            <img 
              src="/DA94D674-CA3B-42BF-A9F9-9797B1AA5426.jpg" 
              alt="Abstraktes Werk 1" 
              style={{ 
                width: isDesktop ? 340 : '80%', 
                borderRadius: 18, 
                height: isDesktop ? 300 : 250, 
                objectFit: 'cover', 
                boxShadow: '0 4px 24px rgba(156,116,98,0.13)',
                transition: 'transform 0.3s ease'
              }} 
              loading="lazy"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <img 
              src="/IMG_0717.jpg" 
              alt="Frau mit Schmetterlingen" 
              style={{ 
                width: isDesktop ? 340 : '80%', 
                borderRadius: 18, 
                height: isDesktop ? 300 : 250, 
                objectFit: 'cover', 
                boxShadow: '0 4px 24px rgba(156,116,98,0.13)',
                transition: 'transform 0.3s ease' 
              }} 
              loading="lazy"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            <img 
              src="/IMG_5214.jpg" 
              alt="Porträt Collage" 
              style={{ 
                width: isDesktop ? 340 : '80%', 
                borderRadius: 18, 
                height: isDesktop ? 300 : 250, 
                objectFit: 'cover', 
                boxShadow: '0 4px 24px rgba(156,116,98,0.13)',
                transition: 'transform 0.3s ease' 
              }} 
              loading="lazy"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
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
            color: 'var(--text-color)', 
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
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginBottom: 48
          }}>
            <div style={{
              flex: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 8px 24px rgba(156,116,98,0.1)'
            }}>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16, color: '#D17C6B' }}>Was dich erwartet</h3>
              <ul style={{ 
                paddingLeft: 20, 
                fontSize: isDesktop ? 18 : 16, 
                color: 'var(--text-color)',
                lineHeight: 1.7,
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
              boxShadow: '0 8px 24px rgba(156,116,98,0.1)'
            }}>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16, color: '#D17C6B' }}>Das wirst du erleben</h3>
              <ul style={{ 
                paddingLeft: 20, 
                fontSize: isDesktop ? 18 : 16, 
                color: 'var(--text-color)',
                lineHeight: 1.7,
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
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(156,116,98,0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(156,116,98,0.2)';
              }}
            >
              Starte jetzt deine Reise
            </a>
          </div>
        </div>
      </section>

      {/* Course Section (Produkte) */}
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
        ></div>
        
        <div style={{ maxWidth: isDesktop ? 1000 : 700, margin: '0 auto', padding: 24 }}>
          <h2 style={{ 
            fontSize: isDesktop ? 36 : 28, 
            fontWeight: 700, 
            marginBottom: 40, 
            color: '#3B3737', 
            textAlign: 'center' 
          }}>Weitere <span style={{ color: 'var(--terracotta)' }}>Produkte</span></h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isDesktop ? '1fr' : '1fr',
            gap: 32,
            margin: '40px auto',
            maxWidth: '500px'
          }}>
            {/* Produkt 1 */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 8px 24px rgba(156,116,98,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(156,116,98,0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(156,116,98,0.1)';
            }}>
              <img 
                src="/o_1iqqn5jphig91jntdk4b131h8cr.webp" 
                alt="SELFLOVE - Journal Cover" 
                style={{ 
                  width: 220, 
                  borderRadius: 12, 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.10)', 
                  marginBottom: 20 
                }} 
                loading="lazy" 
              />
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>SELFLOVE – Journal</h3>
              <p style={{ fontSize: 20, color: '#D17C6B', fontWeight: 600, marginBottom: 12 }}>13,23 €</p>
              <p style={{ fontSize: 16, color: '#888', marginBottom: 16 }}>PDF zum Sofort-Download</p>
              <p style={{ fontSize: 16, lineHeight: 1.6, marginBottom: 20 }}>
                Entdecke mit diesem liebevoll gestalteten Selbstliebe-Journal einen sicheren Raum, um dich selbst besser kennenzulernen.
              </p>
              <a 
                href="https://payhip.com/b/CpoJr" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'inline-block',
                  background: '#D17C6B',
                  color: '#fff',
                  padding: '10px 20px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 600,
                  marginTop: 'auto'
                }}
              >
                Jetzt ansehen & kaufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        data-aos="fade-up" 
        style={{ 
          background: 'var(--gradient-rose)', 
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: isDesktop ? 1000 : 700, margin: '0 auto', padding: 24, textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: isDesktop ? 36 : 28, 
            fontWeight: 700, 
            marginBottom: 48, 
            color: '#fff',
            textAlign: 'center'
          }}>Kundenfeedback</h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={isDesktop}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            style={{ padding: '20px 10px 50px' }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div style={{ 
                  background: '#fff', 
                  borderRadius: 16, 
                  boxShadow: '0 8px 30px rgba(156,116,98,0.15)', 
                  padding: isDesktop ? 40 : 30, 
                  margin: '0 auto', 
                  maxWidth: isDesktop ? 700 : '100%',
                  minHeight: 220,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="#D17C6B" 
                    style={{ marginBottom: 16, opacity: 0.5 }}
                  >
                    <path d="M11.3,5.2C8.5,5.8,6.4,7.7,6.4,11.5v7.4h7.9v-7.4h-4c0-1.8,1.2-3.3,4-3.9L11.3,5.2z M21.3,5.2c-2.8,0.6-4.9,2.5-4.9,6.3v7.4h7.9v-7.4h-4c0-1.8,1.2-3.3,4-3.9L21.3,5.2z"/>
                  </svg>
                  <p style={{ 
                    fontSize: isDesktop ? 22 : 20, 
                    fontStyle: 'italic', 
                    marginBottom: 24,
                    lineHeight: 1.5,
                    color: '#333'
                  }}>
                    {testimonial.quote}
                  </p>
                  <div style={{ fontWeight: 600, color: '#D17C6B' }}>– {testimonial.author}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Social Media Section */}
      <section 
        data-aos="fade-up" 
        style={{ 
          background: '#fff',
          padding: '60px 0',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: isDesktop ? 1000 : 700, margin: '0 auto', padding: 24 }}>
          <h2 style={{ fontSize: isDesktop ? 36 : 28, fontWeight: 700, marginBottom: 32, color: '#3B3737' }}>Folge mir auf Social Media</h2>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: isDesktop ? 60 : 40, 
            alignItems: 'center', 
            margin: '40px 0'
          }}>
            <a 
              href="http://open.spotify.com/show/5aXhid2UTtgioftEV7ESPa" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Spotify" 
              style={{ 
                color: '#3B3737',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                padding: '16px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 4px 12px rgba(156,116,98,0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(156,116,98,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(156,116,98,0.1)';
              }}
            >
              <SpotifyIcon style={{ width: isDesktop ? 60 : 40, height: isDesktop ? 60 : 40 }} />
            </a>
            <a 
              href="https://www.instagram.com/chantiheulleise/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              style={{ 
                color: '#3B3737',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                padding: '16px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 4px 12px rgba(156,116,98,0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(156,116,98,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(156,116,98,0.1)';
              }}
            >
              <Instagram size={isDesktop ? 60 : 40} />
            </a>
            <a 
              href="https://linktr.ee/chantiheulleise" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Linktree" 
              style={{ 
                color: '#3B3737',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                padding: '16px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 4px 12px rgba(156,116,98,0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(156,116,98,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(156,116,98,0.1)';
              }}
            >
              <LinktreeIcon style={{ width: isDesktop ? 60 : 40, height: isDesktop ? 60 : 40 }} />
            </a>
          </div>
          
          <p style={{ fontSize: isDesktop ? 18 : 16, marginTop: 24, maxWidth: 600, margin: '24px auto' }}>
            Folge mir auf Social Media für tägliche Inspiration, kostenlose Inhalte und Updates zu meinen Angeboten.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        data-aos="fade-up" 
        style={{ 
          background: 'var(--gradient-light)',
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(217, 186, 127, 0.3)'
        }}
      >
        <div style={{ maxWidth: isDesktop ? 1000 : 700, margin: '0 auto', padding: 24 }}>
          <div style={{ 
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            gap: 48,
            alignItems: isDesktop ? 'center' : 'stretch'
          }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ 
                fontSize: isDesktop ? 36 : 28, 
                fontWeight: 700, 
                marginBottom: 16, 
                color: '#3B3737'
              }}>Kontakt<span style={{ color: 'var(--terracotta)' }}>.</span></h2>
              
              <p style={{ 
                fontSize: isDesktop ? 18 : 16, 
                color: 'var(--text-color)', 
                marginBottom: 24,
                lineHeight: isDesktop ? 1.6 : 1.5
              }}>
                Du hast Fragen zum Open Mind Circle oder zum Kurs? Brauchst Unterstützung oder möchtest kooperieren? Fülle das Formular aus und ich melde mich schnellstmöglich bei dir.
              </p>
              
              <img
                src="/IMG_6396.jpg"
                alt="Kontakt und Kommunikation"
                style={{ 
                  width: '100%', 
                  borderRadius: 16, 
                  marginBottom: 24, 
                  maxHeight: 300, 
                  objectFit: 'cover',
                  boxShadow: '0 8px 24px rgba(156,116,98,0.15)'
                }}
                loading="lazy"
              />
            </div>
            
            <div style={{ 
              flex: 1,
              background: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 16,
              padding: 32,
              boxShadow: '0 8px 24px rgba(156,116,98,0.1)'
            }}>
              <form role="form" aria-label="Kontaktformular">
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="name" style={{ fontSize: 16, fontWeight: 500, marginBottom: 6, display: 'block' }}>Name</label>
                  <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    style={{ 
                      width: '100%', 
                      padding: 12, 
                      fontSize: 16, 
                      border: '1px solid #ddd',
                      borderRadius: 8,
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                    }} 
                    aria-label="Name"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D17C6B';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 124, 107, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#ddd';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="email" style={{ fontSize: 16, fontWeight: 500, marginBottom: 6, display: 'block' }}>E-Mail</label>
                  <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    style={{ 
                      width: '100%', 
                      padding: 12, 
                      fontSize: 16, 
                      border: '1px solid #ddd',
                      borderRadius: 8,
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                    }} 
                    aria-label="E-Mail"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D17C6B';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 124, 107, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#ddd';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="message" style={{ fontSize: 16, fontWeight: 500, marginBottom: 6, display: 'block' }}>Nachricht</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    style={{ 
                      width: '100%', 
                      padding: 12, 
                      fontSize: 16, 
                      border: '1px solid #ddd',
                      borderRadius: 8,
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      resize: 'vertical'
                    }} 
                    aria-label="Nachricht"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#D17C6B';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(209, 124, 107, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#ddd';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={{ textAlign: 'center', marginTop: 32 }}>
                  <button 
                    type="submit" 
                    style={{ 
                      padding: '14px 32px', 
                      background: '#D17C6B', 
                      color: '#fff', 
                      border: 'none', 
                      borderRadius: 8,
                      fontSize: 16,
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      boxShadow: '0 4px 12px rgba(156,116,98,0.1)'
                    }} 
                    aria-label="Nachricht senden"
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 16px rgba(156,116,98,0.15)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(156,116,98,0.1)';
                    }}
                  >
                    Nachricht senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes subtle-zoom {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.05);
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
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0) translateX(-50%);
            }
            40% {
              transform: translateY(-10px) translateX(-50%);
            }
            60% {
              transform: translateY(-5px) translateX(-50%);
            }
          }
        `
      }} />
    </div>
  );
};

export default LandingPage;