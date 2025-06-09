import React from 'react';
import { motion } from 'framer-motion';

const LegalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-charcoal-900 to-charcoal-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Rechtliche Hinweise</h1>
          
          <div className="flex flex-col md:flex-row gap-8 mb-12">
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

          <div id="impressum" className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-charcoal-200">Impressum</h2>
            <div className="bg-charcoal-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h3>
              <p className="mb-4">
                Chantal Röth<br />
                Einzelunternehmen<br />
                Im Sennteich 16<br />
                68199 Mannheim<br />
                Deutschland
              </p>
              <p className="mb-4">
                E-Mail: <a href="mailto:chantalroeth2@web.de" className="text-blue-400 hover:underline">chantalroeth2@web.de</a><br />
                Umsatzsteuer-ID: nicht umsatzsteuer-pflichtig
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
              <p className="mb-4">
                Chantal Röth<br />
                Im Sennteich 16<br />
                68199 Mannheim<br />
                Deutschland
              </p>
              <p className="mt-6">
                Plattform der EU-Kommission zur Online-Streitbeilegung:<br />
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
            </div>
          </div>

          <div id="datenschutz" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-charcoal-200">Datenschutzerklärung</h2>
            <div className="space-y-8">
              <div className="bg-charcoal-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h3>
                <h4 className="text-xl font-medium mb-2">Allgemeine Hinweise</h4>
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen
                  personenbezogenen Daten passiert, wenn du meine Website besuchst.
                  Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
                </p>
                <h4 className="text-xl font-medium mb-2">Datenerfassung auf dieser Website</h4>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch die Websitebetreiberin. 
                  Ihre Kontaktdaten findest du im Impressum.
                </p>
              </div>

              <div className="bg-charcoal-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">2. Hosting und externe Dienste</h3>
                <h4 className="text-xl font-medium mb-2">Hosting</h4>
                <p>
                  Diese Website wird bei einem externen Dienstleister gehostet. 
                  Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                  werden auf den Servern des Hosters verarbeitet.
                </p>
              </div>

              <div className="bg-charcoal-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                <h4 className="text-xl font-medium mb-2">Datenschutz</h4>
                <p className="mb-4">
                  Ich nehme den Schutz deiner persönlichen Daten sehr ernst und behandle deine
                  personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                  Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <h4 className="text-xl font-medium mb-2">Widerruf deiner Einwilligung zur Datenverarbeitung</h4>
                <p>
                  Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen Einwilligung
                  möglich. Du kannst eine bereits erteilte Einwilligung jederzeit widerrufen.
                </p>
              </div>

              <div className="bg-charcoal-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h3>
                <h4 className="text-xl font-medium mb-2">Cookies</h4>
                <p className="mb-4">
                  Meine Website verwendet teilweise sogenannte Cookies. Diese richten auf deinem
                  Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, das
                  Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
                <h4 className="text-xl font-medium mb-2">Kontaktformular</h4>
                <p>
                  Wenn du mir per Kontaktformular Anfragen zukommen lässt, werden deine Angaben aus
                  dem Formular zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                  gespeichert.
                </p>
              </div>

              <div className="bg-charcoal-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">5. Plugins und Tools</h3>
                <h4 className="text-xl font-medium mb-2">Google Fonts / Webfonts</h4>
                <p>
                  Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts,
                  die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt dein Browser die
                  benötigten Web Fonts in deinen Browsercache.
                </p>
              </div>

              <div className="bg-charcoal-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">6. Deine Rechte</h3>
                <p>
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
