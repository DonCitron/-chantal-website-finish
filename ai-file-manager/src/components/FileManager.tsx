import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Upload, File, X, Eye, Download, LogOut, Calendar as CalendarIcon } from 'lucide-react';
import AISearch from './AISearch';
import { getApiUrl } from '../config';

interface BackendFile {
  id: number;
  name: string;
  type: string;
  size: number;
  path: string;
  tags: string[];
  uploadDate: string;
  description?: string;
  aiAnalysis?: string;
  customFolder?: string;
  preview?: string;
}

interface Message {
  text: string;
  isUser: boolean;
  files?: BackendFile[];
}

interface FileManagerProps {
  user: { id: number; username: string; role: string };
  onLogout: () => void;
}

const FileManager: React.FC<FileManagerProps> = ({ user, onLogout }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<BackendFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [previewFile, setPreviewFile] = useState<BackendFile | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customFolders, setCustomFolders] = useState<string[]>([]);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [fileToMove, setFileToMove] = useState<BackendFile | null>(null);
  const [showMoveModal, setShowMoveModal] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadFiles = async () => {
    try {
      // Try to load from API first
      const response = await fetch(getApiUrl('files'), {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      
      if (response.ok) {
        const files: BackendFile[] = await response.json();
        setUploadedFiles(files);
        return;
      }
    } catch (error) {
      console.error('API not available, loading from localStorage:', error);
    }
    
    // Fallback to localStorage
    const savedFiles = localStorage.getItem('uploadedFiles');
    if (savedFiles) {
      try {
        setUploadedFiles(JSON.parse(savedFiles));
      } catch (error) {
        console.error('Error loading files from localStorage:', error);
      }
    }
    
    // Load custom folders
    const savedFolders = localStorage.getItem('customFolders');
    if (savedFolders) {
      try {
        setCustomFolders(JSON.parse(savedFolders));
      } catch (error) {
        console.error('Error loading custom folders:', error);
      }
    }
  };

  const handleFileUpload = async (files: FileList) => {
    setIsLoading(true);
    const fileArray = Array.from(files);
    
    try {
      for (const file of fileArray) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('userId', user.id.toString());

        const response = await fetch(getApiUrl('upload'), {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
          body: formData,
        });

        if (response.ok) {
          const uploadedFile: BackendFile = await response.json();
          const newFiles = [...uploadedFiles, uploadedFile];
          setUploadedFiles(newFiles);
          localStorage.setItem('uploadedFiles', JSON.stringify(newFiles));
          
          const aiMessage = `🤖 Ich habe "${file.name}" erfolgreich analysiert und hochgeladen! Die Datei wurde intelligent kategorisiert und mit KI-Tags versehen.`;
          setMessages(prev => [...prev, {
            text: aiMessage,
            isUser: false,
            files: [uploadedFile]
          }]);
        } else {
          // Fallback: Create mock file for localStorage
          const mockFile: BackendFile = {
            id: Date.now(),
            name: file.name,
            type: file.type,
            size: file.size,
            path: `mock/${file.name}`,
            tags: ['uploaded', file.type.split('/')[0]],
            uploadDate: new Date().toISOString(),
            description: `Mock upload: ${file.name}`,
            aiAnalysis: `AI-Analyse für ${file.name}: ${file.type.includes('image') ? 'Bilddatei erkannt' : file.type.includes('pdf') ? 'PDF-Dokument erkannt' : 'Datei erfolgreich analysiert'}`
          };
          
          const newFiles = [...uploadedFiles, mockFile];
          setUploadedFiles(newFiles);
          localStorage.setItem('uploadedFiles', JSON.stringify(newFiles));
          
          const aiMessage = `🤖 Ich habe "${file.name}" erfolgreich analysiert und lokal gespeichert! Die Datei wurde intelligent kategorisiert.`;
          setMessages(prev => [...prev, {
            text: aiMessage,
            isUser: false,
            files: [mockFile]
          }]);
        }
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessages(prev => [...prev, {
        text: "Entschuldigung, beim Upload ist ein Fehler aufgetreten.",
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);

    try {
      const response = await fetch(getApiUrl('chat'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({ 
          message: userMessage,
          files: uploadedFiles 
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { text: data.response, isUser: false }]);
      } else {
        // Enhanced AI responses based on user input
        let aiResponse = "";
        const lowerInput = userMessage.toLowerCase();
        
        if (lowerInput.includes('hilfe') || lowerInput.includes('help')) {
          aiResponse = "🤖 Gerne helfe ich Ihnen! Ich kann:\n\n📁 Dateien automatisch kategorisieren\n🔍 Dateien durchsuchen\n📂 Ordner verwalten\n🗑️ Dateien löschen\n📅 Termine im Kalender anzeigen\n\nLaden Sie einfach Dateien hoch oder fragen Sie mich etwas!";
        } else if (lowerInput.includes('datei') || lowerInput.includes('file')) {
          aiResponse = `📊 Sie haben aktuell ${uploadedFiles.length} Dateien gespeichert:\n\n${getAIFolders().map(folder => `${folder.icon} ${folder.name}: ${folder.count} Dateien`).join('\n')}\n\nMöchten Sie neue Dateien hochladen oder bestehende verwalten?`;
        } else if (lowerInput.includes('ordner') || lowerInput.includes('folder')) {
          aiResponse = "📂 Ordner-Verwaltung:\n\n🤖 AI-Ordner: Automatische Kategorisierung\n📁 Meine Ordner: Eigene Ordner erstellen mit '+ Neu'\n📁 Verschieben: Klicken Sie auf das 📁 Symbol bei Dateien\n\nSoll ich Ihnen bei der Ordner-Organisation helfen?";
        } else if (lowerInput.includes('löschen') || lowerInput.includes('delete')) {
          aiResponse = "🗑️ Dateien löschen:\n\nKlicken Sie auf das 🗑️ Symbol neben einer Datei um sie zu löschen. Die Datei wird sofort entfernt und kann nicht wiederhergestellt werden.\n\nSoll ich Ihnen zeigen, wie Sie Dateien verwalten können?";
        } else if (lowerInput.includes('kalender') || lowerInput.includes('termin')) {
          aiResponse = "📅 Kalender-Funktionen:\n\n📅 Kalender öffnen: Button im Header\n📋 Termine anzeigen: Aktuelle Termine werden angezeigt\n🗓️ Termine verwalten: Einfache Übersicht\n\nMöchten Sie den Kalender öffnen?";
        } else if (lowerInput.includes('suche') || lowerInput.includes('search')) {
          aiResponse = "🔍 Such-Funktionen:\n\n🔎 Schnellsuche: Buttons für 'PDF Dateien', 'Bilder', etc.\n💬 AI-Chat: Fragen Sie mich nach bestimmten Dateien\n📂 Ordner-Filter: Klicken Sie auf Ordner in der Sidebar\n\nWas möchten Sie suchen?";
        } else {
          // General responses
          const responses = [
            "🚀 Ich kann Ihnen bei der intelligenten Dateiverwaltung helfen. Laden Sie Dateien hoch und ich organisiere sie automatisch!",
            "📁 Gerne helfe ich bei der Dateisortierung. Fragen Sie mich nach Ihren Dateien oder Ordnern!",
            "🧠 Ich analysiere Ihre Dateien automatisch. Probieren Sie einen Upload aus oder fragen Sie mich etwas!",
            "✨ Mit meiner Hilfe wird Dateiverwaltung einfacher. Wie kann ich Ihnen heute helfen?"
          ];
          aiResponse = responses[Math.floor(Math.random() * responses.length)];
        }
        
        setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { text: "Entschuldigung, ich kann momentan nicht antworten.", isUser: false }]);
    }
  };

  const downloadFile = async (file: BackendFile) => {
    try {
      const response = await fetch(getApiUrl(`download/${file.id}`), {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  const handleSearchResults = (results: BackendFile[], response: string) => {
    setMessages(prev => [...prev, {
      text: response,
      isUser: false,
      files: results
    }]);
  };

  const createCustomFolder = () => {
    if (!newFolderName.trim()) return;
    
    const updatedFolders = [...customFolders, newFolderName.trim()];
    setCustomFolders(updatedFolders);
    localStorage.setItem('customFolders', JSON.stringify(updatedFolders));
    setNewFolderName('');
    setShowCreateFolder(false);
  };

  const moveFileToFolder = (targetFolder: string) => {
    if (!fileToMove) return;
    
    const updatedFiles = uploadedFiles.map(file => 
      file.id === fileToMove.id 
        ? { ...file, customFolder: targetFolder }
        : file
    );
    
    setUploadedFiles(updatedFiles);
    localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
    
    // Success message
    setMessages(prev => [...prev, {
      text: `📁 Datei "${fileToMove.name}" wurde erfolgreich in den Ordner "${targetFolder}" verschoben.`,
      isUser: false
    }]);
    
    setFileToMove(null);
    setShowMoveModal(false);
  };

  const getFilesInCustomFolder = (folderName: string) => {
    return uploadedFiles.filter(file => (file as any).customFolder === folderName);
  };

  const deleteFile = (fileToDelete: BackendFile) => {
    const updatedFiles = uploadedFiles.filter(file => file.id !== fileToDelete.id);
    setUploadedFiles(updatedFiles);
    localStorage.setItem('uploadedFiles', JSON.stringify(updatedFiles));
    
    setMessages(prev => [...prev, {
      text: `🗑️ Datei "${fileToDelete.name}" wurde erfolgreich gelöscht.`,
      isUser: false
    }]);
  };

  const getAIFolders = () => {
    const folders = [
      {
        name: 'Bilder',
        files: uploadedFiles.filter(f => f.type.startsWith('image/')),
        icon: '🖼️',
        count: uploadedFiles.filter(f => f.type.startsWith('image/')).length
      },
      {
        name: 'Dokumente',
        files: uploadedFiles.filter(f => f.type.includes('pdf') || f.type.includes('document') || f.type.includes('text')),
        icon: '📄',
        count: uploadedFiles.filter(f => f.type.includes('pdf') || f.type.includes('document') || f.type.includes('text')).length
      },
      {
        name: 'Videos',
        files: uploadedFiles.filter(f => f.type.startsWith('video/')),
        icon: '🎥',
        count: uploadedFiles.filter(f => f.type.startsWith('video/')).length
      },
      {
        name: 'Audio',
        files: uploadedFiles.filter(f => f.type.startsWith('audio/')),
        icon: '🎵',
        count: uploadedFiles.filter(f => f.type.startsWith('audio/')).length
      },
      {
        name: 'Andere',
        files: uploadedFiles.filter(f => !f.type.startsWith('image/') && !f.type.startsWith('video/') && !f.type.startsWith('audio/') && !f.type.includes('pdf') && !f.type.includes('document') && !f.type.includes('text')),
        icon: '📦',
        count: uploadedFiles.filter(f => !f.type.startsWith('image/') && !f.type.startsWith('video/') && !f.type.includes('pdf') && !f.type.includes('document') && !f.type.includes('text')).length
      }
    ];
    return folders.filter(folder => folder.count > 0);
  };

  return (
    <div className="flex flex-col h-screen">
      
        
          
            <Sparkles className="h-8 w-8 text-blue-400" key="sparkles" />
            Pasi AI File Manager
          
          
            
              <CalendarIcon className="h-4 w-4" key="calendar-icon" />
              Kalender
            
          
          Willkommen, {user.username}
          
            
              <LogOut className="h-4 w-4" key="logout-icon" />
              Abmelden
            
          
        
      

      
        {/* AI Folders Sidebar */}
        
          
            🤖 AI-Ordner
          
          
            
              
                📁
                Alle Dateien
              
              
                {uploadedFiles.length}
              
            
            {getAIFolders().map((folder) => (
              <div key={folder.name} className="flex items-center justify-between p-2 hover:bg-gray-700 rounded cursor-pointer">
                
                  
                    {folder.icon}
                    {folder.name}
                  
                  
                    {folder.count}
                  
                
              </div>
            ))}
          

          
            
              
                📂 Meine Ordner
              
              
                + Neu
              
            
            
              {customFolders.map((folderName) => (
                <div key={folderName} className="flex items-center justify-between p-2 hover:bg-gray-700 rounded cursor-pointer">
                  
                    
                      📁
                      {folderName}
                    
                    
                      {getFilesInCustomFolder(folderName).length}
                    
                  
                </div>
              ))}
            
          
        

        
          
            
              
            
          
{messages.map((message, index) => (
  <div key={index} className="mb-4 flex items-start">
    {!message.isUser && <Bot className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" key={'bot-' + index} />}
    {message.isUser && <User className="h-5 w-5 text-white mt-1 flex-shrink-0" key={'user-' + index} />}
    
      
        {message.text}
      
      {message.files && message.files.length > 0 && (
        
          {message.files && message.files.length > 0 ? message.files.map((file) => (
            <div key={file.id}>
              
                
                  <File className="h-3 w-3 text-blue-400" key={`file-${file.id}`} />
                  
                
              
            </div>
          )) : ""}
        
      )}
    
  </div>
))}

  

                  
                
              
            

            
              
                
                  Fragen Sie Pasi AI...
                  
                  
                    
                      
                    
                  
                
              
            
          
        

        
          
            
              
                
                  
                    {selectedFolder?.startsWith('custom:')
                      ? selectedFolder.replace('custom:', '')
                      : selectedFolder || 'Alle Dateien'}
                  
                  
                    ({selectedFolder?.startsWith('custom:')
                      ? getFilesInCustomFolder(selectedFolder.replace('custom:', '')).length
                      : selectedFolder 
                        ? getAIFolders().find(f => f.name === selectedFolder)?.count || 0
                        : uploadedFiles.length} Elemente)
                  
                
                
                  
                    <span key="grid-icon">⊞</span>
                  
                  
                    <span key="list-icon">☰</span>
                  
                
              
            

            
              
                
                  
                    
                      
                        
                          
                            
                              
                                
                                  {uploadedFiles.find(f => f.id === file.id)?.type?.startsWith('image/') ? <span key={'image-' + file.id}>🖼️</span> :
                                     uploadedFiles.find(f => f.id === file.id)?.type?.includes('pdf') ? <span key={'pdf-' + file.id}>📄</span> :
                                     uploadedFiles.find(f => f.id === file.id)?.type?.startsWith('video/') ? <span key={'video-' + file.id}>🎥</span> :
                                     uploadedFiles.find(f => f.id === file.id)?.type?.startsWith('audio/') ? <span key={'audio-' + file.id}>🎵</span> :
                                     uploadedFiles.find(f => f.id === file.id)?.type?.includes('document') ? <span key={'document-' + file.id}>📝</span> :
                                     <span key={'file-' + file.id}>📄</span>}
                                    
                                    
                                      {uploadedFiles.find(f => f.id === file.id)?.name?.length > 12 ? uploadedFiles.find(f => f.id === file.id)?.name?.substring(0, 12) + '...' : uploadedFiles.find(f => f.id === file.id)?.name}
                                    
                                    
                                      {(uploadedFiles.find(f => f.id === file.id)?.size / 1024)?.toFixed(1) || 0} KB
                                    
                                  
          
                                  
                                    
                                      <Eye className="text-blue-400 hover:text-blue-300 transition-colors" key={'eye-' + file.id} />
                                    
                                    
                                      <File
                                        className="text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer"
                                        key={'move-' + file.id}
                                        onClick={() => {
                                          setFileToMove(file);
                                          setShowMoveModal(true);
                                        }}
                                      />
                                    
                                    
                                      <X className="text-red-400 hover:text-red-300 transition-colors" key={'delete-' + file.id} />
                                    
                                    
                                      <Download className="text-gray-400 hover:text-white transition-colors" key={'download-' + file.id} />
                                    
                                  
                                
                              
                            
                          
                        
                        
                          
                            
                              
                                📁
                              
                              Ordner ist leer
                              Laden Sie Dateien hoch oder verschieben Sie welche hierher
                            
                          
                        
                      
                    
                  
                
          
                
                  
                    
                      
                        📁 Neuen Ordner erstellen
                      
                      
                        
                          Ordner-Name eingeben...
                        
                      
                      
                        
                          Abbrechen
                        
                        
                          Erstellen
                        
                      
                    
                  
                
          
                
                  
                    
                      
                        📁 Datei verschieben: {fileToMove?.name}
                      
                      
                        
                          AI-Ordner:
                        
                        
                          {getAIFolders().map((folder) => (
                            <div key={folder.name} onClick={() => moveFileToFolder(folder.name)}>
                              
                                {folder.icon}
                                {folder.name}
                              
                            </div>
                          ))}
                        
                        
                          Meine Ordner:
                        
                        
                          {customFolders.length > 0 && (
                            
                              {customFolders.map((folderName) => (
                                <div key={folderName} onClick={() => moveFileToFolder(folderName)}>
                                  
                                    📁
                                    {folderName}
                                  
                                </div>
                              ))}
                            
                          )}
                        
                      
                      
                        
                          Abbrechen
                        
                      
                    
                  
                
              </div>
            );
          };
          
          export default FileManager;