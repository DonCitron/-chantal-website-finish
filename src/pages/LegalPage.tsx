import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const LegalPage: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-900 to-charcoal-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto relative">
        {/* Scroll to top button */}
        <button 
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-charcoal-700 hover:bg-charcoal-600 rounded-full shadow-lg transition-all duration-300 z-10"
          aria-label="Nach oben scrollen"
        >
          <ArrowUp size={24} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Rechtliche Hinweise</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
            <a 
              href="#impressum" 
              className="px-6 py-3 bg-charcoal-700 hover:bg-charcoal-600 rounded-lg text-center transition-colors duration-300"
            >
              Impressum
            </a>
            <a 
              href="#datenschutz" 
              className="px-6 py-3 bg-charcoal-700 hover:bg-charcoal-600 rounded-lg text-center transition-colors duration-300"
            >
              Datenschutz
            </a>
          </div>

          <div id="impressum" className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-charcoal-200 border-b border-charcoal-700 pb-2">Impressum</h2>
            <div className="bg-charcoal-800 p-6 md:p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal-200">Angaben gemäß § 5 TMG</h3>
                <div className="space-y-2">
                  <p>Chantal Röth</p>
                  <p>Einzelunternehmen</p>
                  <p>Im Sennteich 16</p>
                  <p>68199 Mannheim</p>
                  <p>Deutschland</p>
                </div>
              </div>
              
              <div>
                <p>E-Mail: <a href="mailto:chantalroeth2@web.de" className="text-blue-400 hover:underline">chantalroeth2@web.de</a></p>
                <p>Umsatzsteuer-ID: nicht umsatzsteuer-pflichtig</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mt-6 mb-4 text-charcoal-200">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
                <div className="space-y-2">
                  <p>Chantal Röth</p>
                  <p>Im Sennteich 16</p>
                  <p>68199 Mannheim</p>
                  <p>Deutschland</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-charcoal-700">
                <p className="font-medium mb-2">Plattform der EU-Kommission zur Online-Streitbeilegung:</p>
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </div>
            </div>
          </div>

          <div id="datenschutz" className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6 text-charcoal-200 border-b border-charcoal-700 pb-2">Datenschutzerklärung</h2>
            <div className="space-y-8">
              <div className="bg-charcoal-800 p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-charcoal-200">1. Datenschutz auf einen Blick</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-charcoal-300">Allgemeine Hinweise</h4>
                    <p className="text-charcoal-100">
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen
                      personenbezogenen Daten passiert, wenn du meine Website besuchst.
                      Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden
                      kannst.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-charcoal-300">Wie erfassen wir deine Daten?</h4>
                    <p className="text-charcoal-100">
                      Deine Daten werden zum einen dadurch erhoben, dass du sie mir mitteilst (z.B. über ein
                      Kontaktformular oder E-Mail).
                    </p>
                    <p className="text-charcoal-100 mt-2">
                      Andere Daten werden automatisch beim Besuch der Website durch IT-Systeme erfasst
                      (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-charcoal-300">Wofür nutzen wir deine Daten?</h4>
                    <p className="text-charcoal-100">
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                      gewährleisten. Andere Daten können zur Analyse deines Nutzerverhaltens verwendet
                      werden.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-800 p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-charcoal-200">2. Hosting und externe Dienste</h3>
                <h4 className="text-xl font-medium mb-2 text-charcoal-300">Hosting</h4>
                <p className="text-charcoal-100">
                  Diese Website wird bei einem externen Dienstleister gehostet (Netlify). 
                  Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                  werden auf den Servern des Hosters verarbeitet.
                </p>
              </div>

              <div className="bg-charcoal-800 p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-charcoal-200">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-charcoal-300">Datenschutz</h4>
                    <p className="text-charcoal-100">
                      Ich nehme den Schutz deiner persönlichen Daten sehr ernst und behandle deine
                      personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                      Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-charcoal-300">Widerruf deiner Einwilligung zur Datenverarbeitung</h4>
                    <p className="text-charcoal-100">
                      Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen Einwilligung
                      möglich. Du kannst eine bereits erteilte Einwilligung jederzeit widerrufen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-800 p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-charcoal-200">4. Datenerfassung auf dieser Website</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-charcoal-300">Cookies</h4>
                    <p className="text-charcoal-100">
                      Meine Website verwendet teilweise sogenannte Cookies. Diese richten auf deinem
                      Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, das
                      Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium mb-2 text-charcoal-300">Kontaktformular</h4>
                    <p className="text-charcoal-100">
                      Wenn du mir per Kontaktformular Anfragen zukommen lässt, werden deine Angaben aus
                      dem Formular zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                      gespeichert.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal-800 p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-charcoal-200">5. Plugins und Tools</h3>
                <h4 className="text-xl font-medium mb-2 text-charcoal-300">Google Fonts / Webfonts</h4>
                <p className="text-charcoal-100">
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts,
                  die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt dein Browser die
                  benötigten Web Fonts in deinen Browsercache.
                </p>
              </div>

              <div className="bg-charcoal-800 p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-charcoal-200">6. Deine Rechte</h3>
                <p className="text-charcoal-100">
                  Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten
                  personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der
                  Datenverarbeitung sowie ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser
                  Daten.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;
