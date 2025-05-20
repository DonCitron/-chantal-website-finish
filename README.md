# Open Mind Circle Website

## Überblick
Dies ist die offizielle Website des "Open Mind Circle" von Chantal Röth, einer Plattform für Mentoring und persönliche Entwicklung. Die Website bietet Informationen zu Mentoring-Angeboten, Produkten und einen persönlichen Einblick in die Arbeit von Chantal.

## Technologien
- React 18 mit TypeScript
- Vite als Build-Tool
- React Router für die Navigation
- Framer Motion für Animationen
- Tailwind CSS für das Styling
- AOS (Animate On Scroll) für Scroll-Animationen
- Swiper für Carousel-Funktionalität

## Projektstruktur
- `src/` - Quellcode des Projekts
  - `components/` - Wiederverwendbare React-Komponenten
  - `pages/` - Haupt-Seitenkomponenten
  - `assets/` - Statische Assets wie Bilder und Fonts
  - `utils/` - Hilfsfunktionen und allgemeine Utilities
- `public/` - Öffentliche statische Assets
- `dist/` - Kompilierter Code (wird bei Build erzeugt)

## Design-Philosophie
Die Website verfolgt ein minimalistisches, aber warmes Design, das die Persönlichkeit und Philosophie von Chantal Röth widerspiegelt. Die Farbpalette besteht aus Terrakotta-Tönen und warmen Cremenuancen, die Vertrauen und Komfort vermitteln.

### Haupt-Farbpalette
- Terrakotta: `#D17C6B`
- Tiefer Terrakotta: `#B6685A`
- Creme: `#F4EFE9`
- Tiefer Creme: `#E6DFD6`
- Textfarbe: `#3B3737`

## Design-Varianten
Die Website unterstützt zwei Design-Varianten:
1. **Original**: Das Standarddesign
2. **Verbessert**: Eine alternative Farbpalette und Typografie

## Features

### Responsive Design
- Vollständig responsive für alle Geräte (Mobil, Tablet, Desktop)
- Optimiertes Layout für verschiedene Bildschirmgrößen

### Benutzerinteraktion
- Animierte Übergänge und Interaktionen
- Benutzerfreundliche Navigation
- Custom Cursor auf Desktop-Geräten

### SEO-Optimierung
- Strukturierte Daten für bessere Suchmaschinen-Indexierung
- Optimierte Meta-Tags
- Semantisches HTML

### Barrierefreiheit
- Keyboard-navigierbar
- Screen Reader-freundlich
- Angemessene Kontrastverhältnisse

## Installation und Entwicklung

### Voraussetzungen
- Node.js 18 oder höher
- NPM 7 oder höher

### Installation
```bash
# Repository klonen
git clone <repository-url>

# In das Projektverzeichnis wechseln
cd open-mind-circle

# Abhängigkeiten installieren
npm install
```

### Entwicklungsserver starten
```bash
npm run dev
```

### Für Produktion bauen
```bash
npm run build
```

### Vorschau der Produktionsversion
```bash
npm run preview
```

## MCP Servers Integration
Diese Website integriert Model Context Protocol (MCP) Server für erweiterte KI-Funktionalitäten in der Entwicklungsumgebung:

### Brave Search MCP Server
Ermöglicht KI-assistierte Websuche direkt aus der Entwicklungsumgebung heraus. Ideal für:
- Recherche zu aktuellen Best Practices
- Finden von Dokumentation und Tutorials
- Suche nach aktuellen Informationen für Content-Erstellung

### GitHub MCP Server
Bietet Integration mit GitHub-Repositories für:
- Verwaltung von Issues und PRs
- Code-Suche und -Analyse
- Dateibearbeitung direkt aus der KI-Umgebung
- Repository-übergreifende Recherche

### Sequential Thinking MCP Server
Verbessert die Fähigkeit der KI, komplexe Probleme in logische Schritte zu zerlegen:
- Verbesserte mathematische und logische Analyse
- Strukturierte Herangehensweise an Programmieraufgaben
- Detaillierte Planung für komplexe Implementierungen
- Gründlichere Entscheidungsanalyse

### Memory MCP Server
Ermöglicht der KI, Informationen über Sitzungen hinweg zu speichern und zu nutzen:
- Beibehaltung von Projekt-Kontext über mehrere Sitzungen
- Speichern von Benutzereinstellungen und Präferenzen
- Zugriff auf frühere Diskussionen und Entscheidungen
- Personalisierte und kontextbezogene Interaktionen

### Puppeteer MCP Server
Gibt der KI die Fähigkeit, einen Webbrowser zu steuern für:
- Automatisierte Web-Scraping-Aufgaben
- Extraktion von Daten aus Webseiten
- Interaktion mit Web-Interfaces
- Screenshot-Erstellung und Seitenanalyse
- JavaScript-Ausführung im Browser-Kontext

### Context7 MCP Server
Stellt der KI aktuelle Dokumentation für Bibliotheken und Frameworks zur Verfügung:
- Zugriff auf aktuelle API-Referenzen statt veralteter Trainingsdaten
- Aktuelle Best Practices und Syntax für moderne Bibliotheken
- Versionsspezifische Dokumentation von Frameworks
- Funktionierende Code-Beispiele direkt aus offiziellen Quellen
- Vermeidung von halluzinierten APIs durch Nutzung echter Dokumentation

### Konfiguration und Nutzung
Die Konfiguration befindet sich in der `mcp.json` Datei. Um die MCP Server vollständig zu nutzen:

1. Stelle sicher, dass die erforderlichen Pakete installiert sind:
```bash
npm install -D @modelcontextprotocol/server-brave-search @modelcontextprotocol/server-github @modelcontextprotocol/server-sequential-thinking @modelcontextprotocol/server-memory @modelcontextprotocol/server-puppeteer @upstash/context7-mcp
```

2. Für GitHub-Integration: Ersetze den Platzhalter-Token in der `mcp.json` mit deinem persönlichen GitHub Access Token.

3. Konfiguration prüfen:
```bash
node test-mcp.js
```

4. Server starten:
```bash
npm run mcp
```

### Dokumentation
Detaillierte Informationen findest du in folgenden Dokumenten:
- [GitHub Token Setup Guide](./github-token-setup.md) - Anleitung zur Erstellung eines GitHub Tokens
- [MCP Usage Guide](./MCP-USAGE-GUIDE.md) - Beispiel-Anfragen und Anwendungsfälle

## Lizenz
Alle Rechte vorbehalten. Diese Codebasis ist proprietär und darf ohne ausdrückliche Genehmigung nicht verwendet, vervielfältigt oder verteilt werden.

---

© 2025 Open Mind Circle | Entwickelt für Chantal Röth