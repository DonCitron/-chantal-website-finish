const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000; // Oder ein anderer Port

// CORS für Cross-Origin-Anfragen vom Frontend
app.use(cors());

// Middleware zum Parsen von JSON-Anfragen
app.use(express.json());

// Multer-Konfiguration für Dateiuploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Temporäres Verzeichnis für Uploads
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    // Dateiname beibehalten
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Endpunkt für Dateiupload
app.post('/upload', upload.array('files'), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('Keine Dateien hochgeladen.');
  }

:start_line:28
-------
  console.log('Dateien erfolgreich hochgeladen:', req.files);

  // Simulierte AI-Verarbeitung und Speicherung
  req.files.forEach(async (file) => {
    console.log(`Verarbeite Datei: ${file.originalname}`);
    // Simulierte AI-Verarbeitung: Generiere Platzhalter-Tags
    const generatedTags = simulateAIProcessing(file);
    console.log(`Generierte Tags für ${file.originalname}:`, generatedTags);

    // Simulierte Datenbank-Speicherung
    await simulateDatabaseSave({
      name: file.originalname,
      type: file.mimetype,
      size: file.size,
      tempPath: file.path, // Temporärer Pfad
      tags: generatedTags,
      uploadDate: new Date(),
    });
    console.log(`Dateiinformationen für ${file.originalname} in Datenbank gespeichert.`);

    // Hier wird später die Logik für die dauerhafte Speicherung hinzugefügt
  });

  res.send('Dateien erfolgreich hochgeladen und zur Verarbeitung eingereiht.');
});

// Simulierte AI-Verarbeitungsfunktion
function simulateAIProcessing(file) {
  // In einer echten Anwendung würde hier die AI-Logik stehen
  // Basierend auf Dateityp oder Inhalt Tags generieren
  const tags = ['uploaded', file.mimetype.split('/')[0]]; // Beispiel: 'uploaded', 'image'
  if (file.originalname.includes('report')) {
    tags.push('report');
  }
  return tags;
}

// Simulierte Datenbank-Speicherfunktion
async function simulateDatabaseSave(fileInfo) {
  // In einer echten Anwendung würde hier die Datenbank-Logik stehen
  console.log('Speichere in Datenbank:', fileInfo);
  // Simulierte Verzögerung
  return new Promise(resolve => setTimeout(resolve, 500));
}


// Server starten
app.listen(port, () => {
  console.log(`Backend-Server läuft auf http://localhost:${port}`);
});