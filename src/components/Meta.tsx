import { useEffect } from 'react';

interface MetaProps {
  title: string;
  description: string;
  ogImage?: string;
  canonicalUrl?: string;
  keywords?: string;
  author?: string;
  type?: 'website' | 'article';
}

/**
 * Meta - Eine Komponente für SEO-Optimierung, die dynamisch Meta-Tags setzt
 * für bessere Suchmaschinen-Indexierung und soziale Medien-Shares
 */
const Meta: React.FC<MetaProps> = ({
  title,
  description,
  ogImage = '/headerpicture.jpg',
  canonicalUrl,
  keywords = 'Mentoring, Coaching, Persönlichkeitsentwicklung, Selbstliebe, Selbstvertrauen',
  author = 'Chantal Röth',
  type = 'website'
}) => {
  useEffect(() => {
    // Setze Seitentitel
    document.title = title;
    
    // Setze oder aktualisiere Meta-Tags
    const metaTags = {
      'description': description,
      'keywords': keywords,
      'author': author,
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'og:type': type,
      'og:url': canonicalUrl || window.location.href,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage
    };
    
    // Aktualisiere bestehende Meta-Tags oder erstelle neue
    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;
      
      // Prüfe, ob der Meta-Tag bereits existiert
      const selector = name.startsWith('og:') 
        ? `meta[property="${name}"]` 
        : name.startsWith('twitter:')
          ? `meta[name="${name}"]`
          : `meta[name="${name}"]`;
      
      const metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (metaTag) {
        // Tag existiert bereits, aktualisiere den Inhalt
        if (name.startsWith('og:')) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        metaTag.setAttribute('content', content);
      } else {
        // Erstelle einen neuen Meta-Tag
        const newMeta = document.createElement('meta');
        if (name.startsWith('og:')) {
          newMeta.setAttribute('property', name);
        } else {
          newMeta.setAttribute('name', name);
        }
        newMeta.setAttribute('content', content);
        document.head.appendChild(newMeta);
      }
    });
    
    // Setze oder aktualisiere den kanonischen Link
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonicalUrl);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonicalLink);
      }
    }
    
    // Cleanup-Funktion
    return () => {
      // Optional: Entferne hinzugefügte Meta-Tags beim Unmount der Komponente
      // Wird meist nicht benötigt, da bei Routenwechsel die nächste Meta-Komponente
      // die Tags aktualisiert
    };
  }, [title, description, ogImage, canonicalUrl, keywords, author, type]);

  // Diese Komponente rendert nichts in das DOM
  return null;
};

export default Meta;